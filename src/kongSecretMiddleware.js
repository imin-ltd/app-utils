const s = require('@imin/speck');
const { memoize } = require('lodash');

const Env = s.intersection([
  s.type({
    KONG_SECRET: s.string,
  }),
  s.partial({
    KONG_IS_DISABLED: s.string,
  }),
]);

const getEnv = memoize(() => {
  return s.assert(Env, process.env);
});

function kongSecretMiddleware() {
  const env = getEnv();
  const isKongEnabled = env.KONG_IS_DISABLED !== 'true';

  /** @type {import('express').RequestHandler} */
  const theKongSecretMiddleware = (req, res, next) => {
    if (isKongEnabled && req.get('X-Kong-Secret') !== env.KONG_SECRET) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    next();
    return;
  };
  return theKongSecretMiddleware;
}

module.exports = {
  kongSecretMiddleware,
};
