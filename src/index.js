const { logger } = require('./logger');
const { syncDbMigrations } = require('./syncDbMigrations');

module.exports = {
  logger,
  syncDbMigrations,
};
