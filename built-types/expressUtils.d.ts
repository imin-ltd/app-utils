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
export function validateReq<TParams extends object, TQuery extends object>(routeName: string, paramsSpeck: import("@imin/speck/lib/types").Speck<TParams, TParams>, querySpeck: import("@imin/speck/lib/types").Speck<TQuery, TQuery>, req: import('express').Request, res: import('express').Response): false | {
    params: TParams;
    query: TQuery;
};
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
export function validateReqQuery<TQuery extends object>(routeName: string, querySpeck: import("@imin/speck/lib/types").Speck<TQuery, TQuery>, req: import('express').Request, res: import('express').Response): false | TQuery;
