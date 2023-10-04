const { logger } = require('./logger');
const { kongSecretMiddleware } = require('./kongSecretMiddleware');
const postgres = require('./postgres');
const { syncDbMigrations } = require('./syncDbMigrations');
const { validateReq, validateReqQuery } = require('./expressUtils');
const { getHerokuReleaseInfo } = require('./herokuUtils');
const { Lenses } = require('./lenses');
const {recursivelyRemoveAtSigns, recursivelySetAtSigns } = require('./openActiveUtils')

module.exports = {
  logger,
  kongSecretMiddleware,
  postgres,
  syncDbMigrations,
  expressUtils: {
    validateReq,
    validateReqQuery,
  },
  herokuUtils: {
    getHerokuReleaseInfo,
  },
  Lenses,
  openActiveUtils: {
    recursivelyRemoveAtSigns,
    recursivelySetAtSigns,
  },
};
