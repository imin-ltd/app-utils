const fs = require('fs').promises;
const pMemoize = require('p-memoize');
const path = require('path');
const pg = require('pg');

/**
 * @typedef {{
 *   user: string;
 *   password: string;
 *   host: string;
 *   database: string;
 *   appName: string;
 *   numConnections?: number | undefined | null;
 *   isRds?: boolean | undefined | null;
 * }} PostgresConnectionDetails
 */

/**
 * @param {PostgresConnectionDetails} postgresConnectionOverride
 */
async function pool(postgresConnectionOverride) {
  const pgConfig = await getPgConfig(postgresConnectionOverride);
  return new pg.Pool(pgConfig);
}

// TODO syncDbMigrations should use this if possible
/**
 * @param {PostgresConnectionDetails} postgresConnectionOverride 
 * @returns {Promise<import('pg').PoolConfig>}
 */
async function getPgConfig(postgresConnectionOverride) {
  /** @type {PostgresConnectionDetails} */
  const connectionDetails = postgresConnectionOverride ?? {
    user: getAndAssertEnvVar('POSTGRES_USER'),
    password: getAndAssertEnvVar('POSTGRES_PASSWORD'),
    host: getAndAssertEnvVar('POSTGRES_HOST'),
    database: getAndAssertEnvVar('POSTGRES_DB'),
    appName: getAndAssertEnvVar('POSTGRES_APP_NAME'),
    numConnections: process.env.POSTGRES_NUM_CONNECTIONS ? Number(process.env.POSTGRES_NUM_CONNECTIONS) : null,
    isRds: process.env.POSTGRES_IS_RDS === 'true',
  };
  const { user, password, host, database, appName, numConnections, isRds } = connectionDetails;
  /** @type {import('pg').PoolConfig} */
  const pgConfig = {
    user, password, host, database,
    max: numConnections ?? 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    application_name: appName,
  };
  if (isRds) {
    pgConfig.ssl = {
      ca: await getRdsCert(),
    };
  }
  return pgConfig;
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

const getRdsCert = pMemoize(async () => {
  const raw = await fs.readFile(path.join(__dirname, '..', 'config', 'rds-ca-2019-root.pem'));
  return raw.toString();
});

module.exports = {
  postgres: {
    pool,
  },
};
