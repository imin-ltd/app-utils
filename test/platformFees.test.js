const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const {
  parsePlatformFeesConfig,
  getPlatformFeeRates,
  calculatePlatformFee,
  applyPlatformFeeToPrice,
  InvalidPlatformFeesConfigError,
} = require('../src/platformFees');

const VIVIFY_EA_CONFIG_JSON = '{"vivify":{"perDataSource":{"bookableea":{"feeRate":0.08,"feeRebateRate":0.1}}}}';

describe('parsePlatformFeesConfig()', () => {
  it('should parse a valid config', () => {
    assert.deepEqual(parsePlatformFeesConfig(VIVIFY_EA_CONFIG_JSON), {
      vivify: { perDataSource: { bookableea: { feeRate: 0.08, feeRebateRate: 0.1 } } },
    });
  });

  it('should return an empty config (no fees) if unset or blank', () => {
    assert.deepEqual(parsePlatformFeesConfig(undefined), {});
    assert.deepEqual(parsePlatformFeesConfig(''), {});
    assert.deepEqual(parsePlatformFeesConfig('  \n'), {});
  });

  it('should accept rates on the boundaries of the valid range', () => {
    const config = parsePlatformFeesConfig('{"b":{"perDataSource":{"d1":{"feeRate":0,"feeRebateRate":1},"d2":{"feeRate":1,"feeRebateRate":0}}}}');
    assert.deepEqual(config.b.perDataSource.d1, { feeRate: 0, feeRebateRate: 1 });
    assert.deepEqual(config.b.perDataSource.d2, { feeRate: 1, feeRebateRate: 0 });
  });

  for (const { name, raw, expectedMessage } of [
    { name: 'invalid JSON', raw: '{"vivify":', expectedMessage: /not valid JSON/ },
    { name: 'a top-level array', raw: '[]', expectedMessage: /Invalid PLATFORM_FEES config/ },
    { name: 'a top-level string', raw: '"vivify"', expectedMessage: /Invalid PLATFORM_FEES config/ },
    { name: 'a missing perDataSource', raw: '{"vivify":{}}', expectedMessage: /perDataSource/ },
    {
      name: 'a missing feeRebateRate',
      raw: '{"vivify":{"perDataSource":{"bookableea":{"feeRate":0.08}}}}',
      expectedMessage: /feeRebateRate/,
    },
    {
      name: 'a missing feeRate',
      raw: '{"vivify":{"perDataSource":{"bookableea":{"feeRebateRate":0.1}}}}',
      expectedMessage: /feeRate/,
    },
    {
      name: 'a non-numeric rate',
      raw: '{"vivify":{"perDataSource":{"bookableea":{"feeRate":"0.08","feeRebateRate":0.1}}}}',
      expectedMessage: /feeRate/,
    },
    {
      name: 'a feeRate above 1 (e.g. a percentage rather than a proportion)',
      raw: '{"vivify":{"perDataSource":{"bookableea":{"feeRate":8,"feeRebateRate":0.1}}}}',
      expectedMessage: /vivify\.perDataSource\.bookableea\.feeRate must be between 0 and 1 \(inclusive\), but was: 8/,
    },
    {
      name: 'a negative feeRebateRate',
      raw: '{"vivify":{"perDataSource":{"bookableea":{"feeRate":0.08,"feeRebateRate":-0.1}}}}',
      expectedMessage: /vivify\.perDataSource\.bookableea\.feeRebateRate must be between 0 and 1/,
    },
  ]) {
    it(`should throw a descriptive error for ${name}`, () => {
      assert.throws(
        () => parsePlatformFeesConfig(raw),
        (error) => {
          assert.ok(error instanceof InvalidPlatformFeesConfigError);
          assert.match(error.message, /^Invalid PLATFORM_FEES config: /);
          assert.match(error.message, expectedMessage);
          return true;
        },
      );
    });
  }
});

describe('getPlatformFeeRates()', () => {
  const config = parsePlatformFeesConfig(VIVIFY_EA_CONFIG_JSON);

  it('should return the rates for a configured Broker × Data Source pair', () => {
    assert.deepEqual(getPlatformFeeRates(config, { brokerIdentifier: 'vivify', dataSourceId: 'bookableea' }), {
      feeRate: 0.08,
      feeRebateRate: 0.1,
    });
  });

  it('should return undefined if the Broker or Data Source has no fee config', () => {
    assert.equal(getPlatformFeeRates(config, { brokerIdentifier: 'vivify', dataSourceId: 'gll' }), undefined);
    assert.equal(getPlatformFeeRates(config, { brokerIdentifier: 'checkout', dataSourceId: 'bookableea' }), undefined);
    assert.equal(getPlatformFeeRates({}, { brokerIdentifier: 'vivify', dataSourceId: 'bookableea' }), undefined);
  });

  it('should return undefined if the Broker or Data Source identifier is missing', () => {
    assert.equal(getPlatformFeeRates(config, { brokerIdentifier: undefined, dataSourceId: 'bookableea' }), undefined);
    assert.equal(getPlatformFeeRates(config, { brokerIdentifier: 'vivify', dataSourceId: undefined }), undefined);
  });

  it('should not match properties inherited from Object.prototype', () => {
    assert.equal(getPlatformFeeRates(config, { brokerIdentifier: 'constructor', dataSourceId: 'bookableea' }), undefined);
    assert.equal(getPlatformFeeRates(config, { brokerIdentifier: '__proto__', dataSourceId: 'bookableea' }), undefined);
    assert.equal(getPlatformFeeRates(config, { brokerIdentifier: 'vivify', dataSourceId: 'toString' }), undefined);
  });

  it('should not match a non-string identifier (e.g. a repeated query param, which becomes an array)', () => {
    assert.equal(getPlatformFeeRates(config, { brokerIdentifier: ['vivify'], dataSourceId: 'bookableea' }), undefined);
  });
});

describe('calculatePlatformFee()', () => {
  for (const { name, args, expected } of [
    {
      name: '£10.00 at 8% / 10%',
      args: { basePricePence: 1000, feeRate: 0.08, feeRebateRate: 0.1 },
      expected: {
        basePricePence: 1000,
        platformFeePence: 80,
        platformFeeRebatePence: 8,
        applicationFeePence: 72,
        totalPricePence: 1080,
      },
    },
    {
      // 715 × 0.07 = 50.05, which rounds down
      name: '£7.15 at 7% / 10%',
      args: { basePricePence: 715, feeRate: 0.07, feeRebateRate: 0.1 },
      expected: {
        basePricePence: 715,
        platformFeePence: 50,
        platformFeeRebatePence: 5,
        applicationFeePence: 45,
        totalPricePence: 765,
      },
    },
    {
      name: 'a free (£0.00) price',
      args: { basePricePence: 0, feeRate: 0.08, feeRebateRate: 0.1 },
      expected: {
        basePricePence: 0,
        platformFeePence: 0,
        platformFeeRebatePence: 0,
        applicationFeePence: 0,
        totalPricePence: 0,
      },
    },
    {
      // 25 × 0.1 = 2.5 exactly, which rounds half up to 3
      name: 'a platform fee exactly on a .5 rounding boundary',
      args: { basePricePence: 25, feeRate: 0.1, feeRebateRate: 0.1 },
      expected: {
        basePricePence: 25,
        platformFeePence: 3,
        platformFeeRebatePence: 0,
        applicationFeePence: 3,
        totalPricePence: 28,
      },
    },
    {
      // F = 1250 × 0.02 = 25. C = 25 × 0.1 = 2.5 exactly, which rounds half up to 3
      name: 'a rebate exactly on a .5 rounding boundary',
      args: { basePricePence: 1250, feeRate: 0.02, feeRebateRate: 0.1 },
      expected: {
        basePricePence: 1250,
        platformFeePence: 25,
        platformFeeRebatePence: 3,
        applicationFeePence: 22,
        totalPricePence: 1275,
      },
    },
    {
      name: 'a zero fee rate',
      args: { basePricePence: 1000, feeRate: 0, feeRebateRate: 0.1 },
      expected: {
        basePricePence: 1000,
        platformFeePence: 0,
        platformFeeRebatePence: 0,
        applicationFeePence: 0,
        totalPricePence: 1000,
      },
    },
    {
      name: 'a full rebate',
      args: { basePricePence: 1000, feeRate: 0.08, feeRebateRate: 1 },
      expected: {
        basePricePence: 1000,
        platformFeePence: 80,
        platformFeeRebatePence: 80,
        applicationFeePence: 0,
        totalPricePence: 1080,
      },
    },
  ]) {
    it(`should calculate ${name}`, () => {
      assert.deepEqual(calculatePlatformFee(args), expected);
    });
  }

  for (const basePricePence of [10.5, -1, Number.NaN, Number.POSITIVE_INFINITY]) {
    it(`should reject a basePricePence of ${basePricePence}`, () => {
      assert.throws(() => calculatePlatformFee({ basePricePence, feeRate: 0.08, feeRebateRate: 0.1 }), RangeError);
    });
  }

  it('should reject out-of-range rates', () => {
    assert.throws(() => calculatePlatformFee({ basePricePence: 1000, feeRate: 1.5, feeRebateRate: 0.1 }), /feeRate/);
    assert.throws(() => calculatePlatformFee({ basePricePence: 1000, feeRate: 0.08, feeRebateRate: -1 }), /feeRebateRate/);
  });
});

describe('applyPlatformFeeToPrice()', () => {
  const rates = { feeRate: 0.08, feeRebateRate: 0.1 };

  for (const { priceInPounds, expected } of [
    { priceInPounds: 10, expected: 10.8 },
    { priceInPounds: 0, expected: 0 },
    // 5260 + round(420.8) = 5681
    { priceInPounds: 52.6, expected: 56.81 },
    // 1.15 × 100 is 114.99999999999999 in floating point, which must still be treated as 115p
    { priceInPounds: 1.15, expected: 1.24 },
  ]) {
    it(`should turn £${priceInPounds} into £${expected}`, () => {
      assert.equal(applyPlatformFeeToPrice(priceInPounds, rates), expected);
    });
  }

  it('should give the same result as calculatePlatformFee() for the 7% test vector', () => {
    assert.equal(applyPlatformFeeToPrice(7.15, { feeRate: 0.07, feeRebateRate: 0.1 }), 7.65);
  });

  for (const priceInPounds of [-1, Number.NaN]) {
    it(`should reject a price of ${priceInPounds}`, () => {
      assert.throws(() => applyPlatformFeeToPrice(priceInPounds, rates), RangeError);
    });
  }
});
