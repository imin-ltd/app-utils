// @ts-expect-error db-migrate has no types
const DBMigrate = require('db-migrate');
const express = require('express');
const { logger } = require('./logger');
const { port } = require('./utils/port');

/**
 * @param {object} [options]
 * @param {{
 *   user: string;
 *   password: string;
 *   host: string;
 *   database: string;
 * }} [options.postgresConnection] If excluded, defaults to using, from environment vars:
 *   `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_DB`.
 * @param {boolean} [options.doStartDummyExpressServer] Defaults to `true`
 */
async function syncDbMigrations(options) {
  const postgresConnection = options?.postgresConnection ?? getPostgresConnectionFromEnvVars();
  const doStartDummyExpressServer = options?.doStartDummyExpressServer ?? true;
  logger.info('syncDbMigrations() - syncing..');
  const dbMigrate = DBMigrate.getInstance(true, {
    config: {
      defaultEnv: 'postgres',
      postgres: {
        driver: 'pg',
        ...postgresConnection,
      },
    },
  });
  const dummyServer = doStartDummyExpressServer ? await startDummyExpressServer() : null;
  await dbMigrate.up();
  if (dummyServer != null) { await stopDummyExpressServer(dummyServer); }
  logger.info('syncDbMigrations() - synced');
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

function getPostgresConnectionFromEnvVars() {
  return {
    user: getAndAssertEnvVar('POSTGRES_USER'),
    password: getAndAssertEnvVar('POSTGRES_PASSWORD'),
    host: getAndAssertEnvVar('POSTGRES_HOST'),
    database: getAndAssertEnvVar('POSTGRES_DB'),
  };
}

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
