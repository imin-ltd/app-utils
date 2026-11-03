const _ = require('lodash');
const s = require('@imin/speck');

/**
 * Platform fees are mandatory fees which imin adds on top of a Seller's base price, for some Broker × Data Source pairs.
 *
 * For a base price P (in pence):
 *
 * - F (platform fee) = round(P × feeRate)
 * - C (rebate to the Seller) = round(F × feeRebateRate)
 * - The Customer pays P + F
 * - imin keeps F − C (Stripe's `application_fee_amount`)
 *
 * Search (which displays prices) and Booking (which charges them) must agree to the penny. This is why both the config
 * format and the calculation live here, rather than being re-implemented in each app.
 */

/**
 * @typedef {object} PlatformFeeRates
 * @property {number} feeRate Proportion of the base price that is added as the platform fee, e.g. `0.08` for 8%
 * @property {number} feeRebateRate Proportion of the platform fee that is rebated to the Seller, e.g. `0.1` for 10%
 *
 * @typedef {object} BrokerPlatformFeesConfig
 * @property {Record<string, PlatformFeeRates>} perDataSource Keyed by Data Source identifier, e.g. `bookableea`
 *
 * @typedef {Record<string, BrokerPlatformFeesConfig>} PlatformFeesConfig Keyed by Broker identifier, e.g. `vivify`
 *
 * @typedef {object} PlatformFeeBreakdown
 * @property {number} basePricePence P. The Seller's base price
 * @property {number} platformFeePence F. Added on top of the base price
 * @property {number} platformFeeRebatePence C. The part of the platform fee that is rebated to the Seller
 * @property {number} applicationFeePence F − C. What imin keeps (Stripe's `application_fee_amount`)
 * @property {number} totalPricePence P + F. What the Customer pays
 */

const PlatformFeeRatesSpeck = s.type({
  feeRate: s.float,
  feeRebateRate: s.float,
});

const PlatformFeesConfigSpeck = s.record(
  s.string,
  s.type({
    perDataSource: s.record(s.string, PlatformFeeRatesSpeck),
  }),
);

/** @type {(keyof PlatformFeeRates)[]} */
const RATE_NAMES = ['feeRate', 'feeRebateRate'];

/**
 * Parse and validate the raw value of the `PLATFORM_FEES` env var, e.g.
 *
 * ```json
 * {"vivify":{"perDataSource":{"bookableea":{"feeRate":0.08,"feeRebateRate":0.1}}}}
 * ```
 *
 * Call this once at app start-up, so that a bad config stops the app from starting rather than causing errors (or
 * wrong prices) later on.
 *
 * @param {string | undefined} rawEnvValue
 * @returns {PlatformFeesConfig} An empty config (i.e. no fees) if `rawEnvValue` is unset or blank
 * @throws {InvalidPlatformFeesConfigError}
 */
function parsePlatformFeesConfig(rawEnvValue) {
  if (_.isNil(rawEnvValue) || rawEnvValue.trim() === '') {
    return {};
  }
  /** @type {unknown} */
  let parsedJson;
  try {
    parsedJson = JSON.parse(rawEnvValue);
  } catch (error) {
    throw new InvalidPlatformFeesConfigError([`not valid JSON (${/** @type {Error} */ (error).message})`]);
  }
  // skipStrict because speck's strict mode (stripping unknown keys) crashes on `s.record(..)`. Unknown keys are harmless
  // anyway, as getPlatformFeeRates() only reads the known ones
  const validated = s.validate(PlatformFeesConfigSpeck, parsedJson, { skipStrict: true });
  if (validated instanceof s.SpeckValidationErrors) {
    throw new InvalidPlatformFeesConfigError(validated.summary);
  }
  const rangeErrors = getRateRangeErrors(validated);
  if (rangeErrors.length > 0) {
    throw new InvalidPlatformFeesConfigError(rangeErrors);
  }
  return validated;
}

/**
 * Get the platform fee rates that apply to a Broker × Data Source pair.
 *
 * @param {PlatformFeesConfig} config As returned by `parsePlatformFeesConfig(..)`
 * @param {object} args
 * @param {string | undefined} args.brokerIdentifier e.g. `vivify`
 * @param {string | undefined} args.dataSourceId e.g. `bookableea`
 * @returns {PlatformFeeRates | undefined} `undefined` if no platform fee applies
 */
function getPlatformFeeRates(config, { brokerIdentifier, dataSourceId }) {
  if (!_.isString(brokerIdentifier) || !_.isString(dataSourceId)) {
    return undefined;
  }
  // Own-property checks, as the Broker identifier may have come from a client (e.g. a query param), and something like
  // `constructor` must not resolve to a property of Object.prototype
  if (!hasOwnProperty(config, brokerIdentifier)) {
    return undefined;
  }
  const { perDataSource } = config[brokerIdentifier];
  if (!hasOwnProperty(perDataSource, dataSourceId)) {
    return undefined;
  }
  const { feeRate, feeRebateRate } = perDataSource[dataSourceId];
  return { feeRate, feeRebateRate };
}

/**
 * Calculate the platform fee (and the related amounts) for a base price.
 *
 * Amounts are integer pence so that there is no floating point error, and so that the result is exactly what will be
 * charged. Fractions of a penny are rounded half up (`Math.round(..)`).
 *
 * @param {object} args
 * @param {number} args.basePricePence The Seller's base price. Must be a non-negative integer
 * @param {number} args.feeRate
 * @param {number} args.feeRebateRate
 * @returns {PlatformFeeBreakdown}
 */
function calculatePlatformFee({ basePricePence, feeRate, feeRebateRate }) {
  if (!Number.isInteger(basePricePence) || basePricePence < 0) {
    throw new RangeError(`basePricePence must be a non-negative integer, but was: ${basePricePence}`);
  }
  assertRateIsInRange('feeRate', feeRate);
  assertRateIsInRange('feeRebateRate', feeRebateRate);
  const platformFeePence = Math.round(basePricePence * feeRate);
  const platformFeeRebatePence = Math.round(platformFeePence * feeRebateRate);
  return {
    basePricePence,
    platformFeePence,
    platformFeeRebatePence,
    applicationFeePence: platformFeePence - platformFeeRebatePence,
    totalPricePence: basePricePence + platformFeePence,
  };
}

/**
 * Add the platform fee to a price in pounds (as used in Search and OpenActive data), returning the fee-inclusive price
 * in pounds.
 *
 * The price is converted to integer pence first, so that the result is exactly what Booking will charge. Converting
 * back with `/ 100` means that results like `10.8` don't pick up floating point noise.
 *
 * @param {number} priceInPounds e.g. `10`. Must be a non-negative number
 * @param {PlatformFeeRates} rates
 * @returns {number} e.g. `10.8` (for an 8% fee)
 */
function applyPlatformFeeToPrice(priceInPounds, { feeRate, feeRebateRate }) {
  if (!Number.isFinite(priceInPounds) || priceInPounds < 0) {
    throw new RangeError(`priceInPounds must be a non-negative number, but was: ${priceInPounds}`);
  }
  const { totalPricePence } = calculatePlatformFee({
    basePricePence: Math.round(priceInPounds * 100),
    feeRate,
    feeRebateRate,
  });
  return totalPricePence / 100;
}

// # Helpers

/**
 * The speck checks that the rates are numbers. This additionally checks that they are sensible proportions.
 *
 * @param {PlatformFeesConfig} config
 * @returns {string[]} One message for each rate that is out of range
 */
function getRateRangeErrors(config) {
  /** @type {string[]} */
  const errors = [];
  for (const [brokerIdentifier, { perDataSource }] of Object.entries(config)) {
    for (const [dataSourceId, rates] of Object.entries(perDataSource)) {
      for (const rateName of RATE_NAMES) {
        if (!isRateInRange(rates[rateName])) {
          errors.push(
            `${brokerIdentifier}.perDataSource.${dataSourceId}.${rateName} must be between 0 and 1 (inclusive), but was: ${rates[rateName]}`,
          );
        }
      }
    }
  }
  return errors;
}

/**
 * @param {string} rateName
 * @param {number} rate
 */
function assertRateIsInRange(rateName, rate) {
  if (!isRateInRange(rate)) {
    throw new RangeError(`${rateName} must be between 0 and 1 (inclusive), but was: ${rate}`);
  }
}

/**
 * @param {number} rate
 */
function isRateInRange(rate) {
  return Number.isFinite(rate) && rate >= 0 && rate <= 1;
}

/**
 * @param {object} object
 * @param {string} key
 */
function hasOwnProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

// # Errors

class InvalidPlatformFeesConfigError extends Error {
  /**
   * @param {string[]} problems
   */
  constructor(problems) {
    super(`Invalid PLATFORM_FEES config: ${problems.join('; ')}`);
    this.name = 'InvalidPlatformFeesConfigError';
    this.problems = problems;
  }
}

module.exports = {
  parsePlatformFeesConfig,
  getPlatformFeeRates,
  calculatePlatformFee,
  applyPlatformFeeToPrice,
  InvalidPlatformFeesConfigError,
};
