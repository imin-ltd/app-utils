/**
 * Recursively strips @ from the start of keys. For example Playwaze data has '@id' and '@type' which are
 * valid but not how we use those fields (we use 'id' and 'type' respectively)
 *
 * @param {unknown} data
 * @returns {unknown}
 */
export function recursivelyRemoveAtSigns(data: unknown): unknown;
/**
 * Inverse of `recursivelyRemoveAtSigns()`. It changes an object's `id` and `type` fields to `@id` and `@type`.
 *
 * This also removes any empty fields. This is an optimisation as:
 * - We want stripped empty fields in the same places we want to do this i.e. priming for OA Validator, which
 *   doesn't allow empty values.
 * - Preparing data for validator by doing something like stripEmptyValues(recursivelySetAtSigns(data)) would mean
 *   doubling the amount of time spent in object traversal.
 * This is a mixing of concerns but is considered acceptable as stripping empty values from a JSON-LD object is
 * functionally equivalent to doing nothing and inputs are expected to be JSON-LD due to existence of `@id`, `@type`.
 *
 * This can be useful in transforming from imin internal style to OA-compliant data.
 *
 * @param {unknown} data
 * @returns {unknown}
 */
export function recursivelySetAtSigns(data: unknown): unknown;
