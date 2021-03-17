const s = require('@imin/speck');

/**
 * Assert that an Express Request has valid params & query.
 * If they don't, the user will be notified with appropriate error details
 *
 * @template {object} TParams
 * @template {object} TQuery
 * @param {string} routeName e.g. `getSellerTokensRoute'. Used for error logs.
 * @param {import('@imin/speck/lib/types').Speck<TParams>} paramsSpeck
 * @param {import('@imin/speck/lib/types').Speck<TQuery>} querySpeck
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {{ params: TParams, query: TQuery } | false} Either:
 *   * Validated and typed params & query
 *   * OR, if validation failed, just `false`. At this point, the API user has already been notified,
 *     so all you need to do is return.
 *     e.g.
 *     ```js
 *     const validationResult = validateReq(...);
 *     if (!validationResult) { return; }
 *     const { params, query } = validationResult;
 *     ```
 */
function validateReq(routeName, paramsSpeck, querySpeck, req, res) {
  const validatedParams = s.validate(paramsSpeck, req.params, { skipStrict: true });
  if (validatedParams instanceof s.SpeckValidationErrors) {
    // This means express has been incorrectly configured
    throw new ExpressParamsIncorrectlyConfigured(routeName, validatedParams.summary);
  }
  const validatedQuery = validateReqQuery(routeName, querySpeck, req, res);
  if (!validatedQuery) { return false; }
  return { params: validatedParams, query: validatedQuery };
}

/**
 * Assert that an Express Request has valid query.
 * If they don't, the user will be notified with appropriate error details
 *
 * @template {object} TQuery
 * @param {string} routeName e.g. `getSellerTokensRoute'. Used for error logs.
 * @param {import('@imin/speck/lib/types').Speck<TQuery>} querySpeck
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {TQuery | false} Either:
 *   * Validated and typed query
 *   * OR, if validation failed, just `false`. At this point, the API user has already been notified,
 *     so all you need to do is return.
 */
function validateReqQuery(routeName, querySpeck, req, res) {
  const validatedQuery = s.validate(querySpeck, req.query, { skipStrict: true });
  if (validatedQuery instanceof s.SpeckValidationErrors) {
    // This means the user put in the wrong query params
    res.status(400).json({ error: { type: 'InvalidQuery', details: validatedQuery.summary } });
    return false;
  }
  return validatedQuery;
}

// # Errors

class ExpressParamsIncorrectlyConfigured extends Error {
  /**
   * @param {string} routeName
   * @param {string[]} errorSummary
   */
  constructor(routeName, errorSummary) {
    super(`Express params are incorrectly configured for route: ${routeName}`);
    this.name = 'ExpressParamsIncorrectlyConfigured';
    this.routeName = routeName;
    this.errorSummary = errorSummary;
  }
}

module.exports = {
  validateReq,
  validateReqQuery,
};
