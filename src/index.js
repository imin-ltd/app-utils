const { logger } = require('./logger');
const { kongSecretMiddleware } = require('./kongSecretMiddleware');
const postgres = require('./postgres');
const { syncDbMigrations } = require('./syncDbMigrations');

module.exports = {
  logger,
  kongSecretMiddleware,
  postgres,
  syncDbMigrations,
};
