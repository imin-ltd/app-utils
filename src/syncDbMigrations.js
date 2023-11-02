// @ts-expect-error db-migrate has no types
// TODO: Create some typing for db-migrate
const DBMigrate = require('db-migrate');
const express = require('express');
const { logger } = require('./logger');
const { getPgConfig } = require('./postgres');
const { port } = require('./utils/port');

/**
 * @typedef {import('./postgres').PostgresConnectionDetails} PostgresConnectionDetails
 */

/**
 * @typedef {{
 *   'migrations-dir': string,
 *   [k: string]: any,
 * }} DbMigrateCmdOptions
 *   See: https://db-migrate.readthedocs.io/en/latest/API/programable/#:~:text=cmdoptions
 */

/**
 * @param {object} [options]
 * @param {PostgresConnectionDetails} [options.postgresConnection] If excluded, defaults to using, from environment vars:
 *   `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_DB`, `POSTGRES_APP_NAME`.
 * @param {boolean} [options.doStartDummyExpressServer] Defaults to `true`.
 * @param {boolean} [options.silentMigrations] Defaults to `false`. If `true`, migration logs will not be output.
 *   This is useful for environments in which a full migration from start to finish is regularly performed, like CI.
 *   Some projects have thousands and thousands of lines of migrations.
 * @param {DbMigrateCmdOptions} [options.dbMigrateCmdOptions]
 */
async function syncDbMigrations(options) {
  const doStartDummyExpressServer = options?.doStartDummyExpressServer ?? true;
  logger.info('syncDbMigrations() - syncing..');
  const dbMigrate = await getDbMigrateInstance(options?.postgresConnection, options?.dbMigrateCmdOptions);
  if (options?.silentMigrations ?? false) {
    dbMigrate.silence(true);
  }
  const dummyServer = doStartDummyExpressServer ? await startDummyExpressServer() : null;
  await dbMigrate.up();
  if (dummyServer != null) { await stopDummyExpressServer(dummyServer); }
  logger.info('syncDbMigrations() - synced');
}

/**
 * @param {PostgresConnectionDetails} [maybePostgresConnection] 
 * @param {{ 'migrations-dir': string, [k: string]: any }} [maybeDbMigrateCmdOptions]
 */
async function getDbMigrateInstance(maybePostgresConnection, maybeDbMigrateCmdOptions) {
  /** @type {any} */
  const dbMigrateOptions = {
    config: {
      defaultEnv: 'postgres',
      postgres: {
        driver: 'pg',
        // db-migrate has extraordinarily scant documentation about the exact nature of its configuration.
        // But (upon experimentation) it seems to just be the node-postgres Pool configuration.
        ...(await getPgConfig(maybePostgresConnection)),
      },
    },
  };
  if (maybeDbMigrateCmdOptions) {
    dbMigrateOptions.cmdOptions = maybeDbMigrateCmdOptions;
  }
  return DBMigrate.getInstance(true, dbMigrateOptions);
}

/**
 * Heroku requires a server to be started on the expected port within 30 secs. However, the migrations take longer than
 * this. So when the migrations are waited on, Heroku throws an error that the app hasn't started properly. In order to
 * overcome this, we start a dummy server on the port, wait for the migrations, then stop the dummy server.
 *
 * @returns {Promise<import('http').Server>}
 */
async function startDummyExpressServer() {
  return await new Promise((resolve, reject) => {
    const server = express().listen(port, (/** @type {unknown} */ error) => {
      if (error) {
        return reject(error);
      }
      logger.info('startDummyExpressServer() - started dummy server');
      return resolve(server);
    });
  });
}

/**
 * @param {import('http').Server} dummyServer
 * @returns {Promise<void>}
 */
async function stopDummyExpressServer(dummyServer) {
  await new Promise((resolve, reject) => {
    dummyServer.close((error) => {
      if (error) {
        return reject(error);
      }
      logger.info('stopDummyExpressServer() - stopped dummy server');
      return resolve(null);
    });
  });
}

module.exports = {
  syncDbMigrations,
  getDbMigrateInstance,
};
