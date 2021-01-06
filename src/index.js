const { logger } = require('./logger');
const { syncDbMigrations } = require('./syncDbMigrations');
const { postgres } = require('./postgres');

module.exports = {
  logger,
  syncDbMigrations,
  postgres,
};
