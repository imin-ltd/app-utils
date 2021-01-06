// @ts-expect-error db-migrate has no types
const DBMigrate = require('db-migrate');
const express = require('express');
const fs = require('fs').promises;
const pMemoize = require('p-memoize');
const path = require('path');
const { logger } = require('./logger');
const { port } = require('./utils/port');

/**
 * @typedef {{
 *   user: string;
 *   password: string;
 *   host: string;
 *   database: string;
 * }} PostgresConnection
 */

// TODO TODO TODO turn off DATABASE_URL

/**
 * @param {object} [options]
 * @param {PostgresConnection} [options.postgresConnection] If excluded, defaults to using, from environment vars:
 *   `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_DB`.
 *   Alternatively, if `DATABASE_URL` is set, as will be the case for Heroku PostgreSQL,
 *   this is used.
 * @param {boolean} [options.doStartDummyExpressServer] Defaults to `true`
 */
async function syncDbMigrations(options) {
  const doStartDummyExpressServer = options?.doStartDummyExpressServer ?? true;
  logger.info('syncDbMigrations() - syncing..');
  const dbMigrate = await getDbMigrateInstance(options?.postgresConnection);
  const dummyServer = doStartDummyExpressServer ? await startDummyExpressServer() : null;
  if (dummyServer != null) { await stopDummyExpressServer(dummyServer); }
  await dbMigrate.up();
  logger.info('syncDbMigrations() - synced');
}

/**
 * @param {PostgresConnection} [maybePostgresConnection] 
 */
async function getDbMigrateInstance(maybePostgresConnection) {
  if (!maybePostgresConnection && process.env.DATABASE_URL) {
    // // See: https://db-migrate.readthedocs.io/en/latest/Getting%20Started/configuration/#database_url
    // // > Alternatively, you can specify a DATABASE_URL environment variable that will be used in place of the configuration file settings. This is helpful for use with Heroku.
    // https://github.com/db-migrate/node-db-migrate/issues/592#issuecomment-638794440
    // return DBMigrate.getInstance(true);
    return DBMigrate.getInstance(true, {
      config: {
        defaultEnv: 'postgres',
        postgres: {
          driver: 'pg',
          url: {
            ENV: 'DATABASE_URL',
          },
          ssl: {
            // This is unfortunately required for Heroku as they use self-signed certificates.
            // See the above github comment.
            rejectUnauthorized: false,
          },
        },
      },
    });
  }
  const postgresConnection = maybePostgresConnection ?? getPostgresConnectionFromEnvVars();
  return DBMigrate.getInstance(true, {
    config: {
      defaultEnv: 'postgres',
      postgres: {
        driver: 'pg',
        ...postgresConnection,
        ssl: {
          ca: await getRdsCert(),
        },
      },
    },
  });
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

/**
 * @returns {PostgresConnection}
 */
function getPostgresConnectionFromEnvVars() {
  return {
    user: getAndAssertEnvVar('POSTGRES_USER'),
    password: getAndAssertEnvVar('POSTGRES_PASSWORD'),
    host: getAndAssertEnvVar('POSTGRES_HOST'),
    database: getAndAssertEnvVar('POSTGRES_DB'),
  };
}

const getRdsCert = pMemoize(async () => {
  const raw = await fs.readFile(path.join(__dirname, '..', 'config', 'rds-ca-2015-root.pem'));
  return raw.toString();
});
// async function getRdsCert() {
//   return await fs.readFile(path.join(__dirname, '..', 'config', 'rds-ca-2015-root.pem'));
// }


/**
 * @param {string} envVarName
 */
function getAndAssertEnvVar(envVarName) {
  const value = process.env[envVarName];
  if (value == null || value === '') {
    throw new Error(`Required env var "${envVarName}" is missing`);
  }
  return value;
}

module.exports = {
  syncDbMigrations,
};
