export type PlatformFeeRates = {
    /**
     * Proportion of the base price that is added as the platform fee, e.g. `0.08` for 8%
     */
    feeRate: number;
    /**
     * Proportion of the platform fee that is rebated to the Seller, e.g. `0.1` for 10%
     */
    feeRebateRate: number;
};
export type BrokerPlatformFeesConfig = {
    /**
     * Keyed by Data Source identifier, e.g. `bookableea`
     */
    perDataSource: Record<string, PlatformFeeRates>;
};
/**
 * Keyed by Broker identifier, e.g. `vivify`
 */
export type PlatformFeesConfig = Record<string, BrokerPlatformFeesConfig>;
export type PlatformFeeBreakdown = {
    /**
     * P. The Seller's base price
     */
    basePricePence: number;
    /**
     * F. Added on top of the base price
     */
    platformFeePence: number;
    /**
     * C. The part of the platform fee that is rebated to the Seller
     */
    platformFeeRebatePence: number;
    /**
     * F − C. What imin keeps (Stripe's `application_fee_amount`)
     */
    applicationFeePence: number;
    /**
     * P + F. What the Customer pays
     */
    totalPricePence: number;
};
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
export function parsePlatformFeesConfig(rawEnvValue: string | undefined): PlatformFeesConfig;
/**
 * Get the platform fee rates that apply to a Broker × Data Source pair.
 *
 * @param {PlatformFeesConfig} config As returned by `parsePlatformFeesConfig(..)`
 * @param {object} args
 * @param {string | undefined} args.brokerIdentifier e.g. `vivify`
 * @param {string | undefined} args.dataSourceId e.g. `bookableea`
 * @returns {PlatformFeeRates | undefined} `undefined` if no platform fee applies
 */
export function getPlatformFeeRates(config: PlatformFeesConfig, { brokerIdentifier, dataSourceId }: {
    brokerIdentifier: string | undefined;
    dataSourceId: string | undefined;
}): PlatformFeeRates | undefined;
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
export function calculatePlatformFee({ basePricePence, feeRate, feeRebateRate }: {
    basePricePence: number;
    feeRate: number;
    feeRebateRate: number;
}): PlatformFeeBreakdown;
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
export function applyPlatformFeeToPrice(priceInPounds: number, { feeRate, feeRebateRate }: PlatformFeeRates): number;
export class InvalidPlatformFeesConfigError extends Error {
    /**
     * @param {string[]} problems
     */
    constructor(problems: string[]);
    problems: string[];
}
