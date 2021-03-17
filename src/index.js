const { logger } = require('./logger');
const { kongSecretMiddleware } = require('./kongSecretMiddleware');
const postgres = require('./postgres');
const { syncDbMigrations } = require('./syncDbMigrations');
const { validateReq, validateReqQuery } = require('./expressUtils');

module.exports = {
  logger,
  kongSecretMiddleware,
  postgres,
  syncDbMigrations,
  expressUtils: {
    validateReq,
    validateReqQuery,
  },
};
