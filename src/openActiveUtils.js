// TODO maybe move this to common as it's also used in validator?
const _ = require('lodash');

const atSignFieldsWithoutPrefix = ['type', 'id'];
const atSignFieldsWithPrefix = ['@type', '@id'];

/**
 * Recursively strips @ from the start of keys. For example Playwaze data has '@id' and '@type' which are
 * valid but not how we use those fields (we use 'id' and 'type' respectively)
 *
 * @param {unknown} data
 * @returns {unknown}
 */
function recursivelyRemoveAtSigns(data) {
  if (_.isNil(data)) {
    return null;
  }
  if (Array.isArray(data)) {
    return data.map(recursivelyRemoveAtSigns).filter((item) => !_.isNil(item));
  }
  if (!_.isObject(data)) {
    return data;
  }

  /** @type {Record<string, unknown>} */
  const replaced = {};
  for (const [key, value] of Object.entries(data)) {
    if (atSignFieldsWithPrefix.includes(key)) {
      const replacedKey = key.substring(1, key.length);
      replaced[replacedKey] = recursivelyRemoveAtSigns(value);
    } else {
      replaced[key] = recursivelyRemoveAtSigns(value);
    }
  }

  return replaced;
}

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
function recursivelySetAtSigns(data) {
  if (_.isNil(data)) {
    return null;
  }
  if (Array.isArray(data)) {
    if (data.length === 0) {
      // so that empty arrays are removed from the result
      return null;
    }
    return data.map(recursivelySetAtSigns).filter((item) => !_.isNil(item));
  }
  if (!_.isObject(data)) {
    return data;
  }
  // so that empty objects are removed from the result
  if (Object.keys(data).length === 0) {
    return null;
  }

  /** @type {Record<string, unknown>} */
  const replaced = {};
  for (const [key, value] of Object.entries(data)) {
    const transformedValue = recursivelySetAtSigns(value);
    if (_.isNil(transformedValue)) {
      continue;
    }
    if (atSignFieldsWithoutPrefix.includes(key)) {
      const replacedKey = `@${key}`;

      replaced[replacedKey] = recursivelySetAtSigns(value);
    } else {
      replaced[key] = recursivelySetAtSigns(value);
    }
  }

  return replaced;
}

module.exports = {
  recursivelyRemoveAtSigns,
  recursivelySetAtSigns,
};
