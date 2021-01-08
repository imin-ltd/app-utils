export type PostgresConnectionDetails = {
    user: string;
    password: string;
    host: string;
    database: string;
    appName: string;
    numConnections?: number | undefined | null;
    isRds?: boolean | undefined | null;
};
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
 * @param {PostgresConnectionDetails | null | undefined} [postgresConnectionOverride]
 */
export function pool(postgresConnectionOverride?: PostgresConnectionDetails | null | undefined): Promise<pg.Pool>;
/**
 * @param {PostgresConnectionDetails | null | undefined} [postgresConnectionOverride]
 * @returns {Promise<import('pg').PoolConfig>}
 */
export function getPgConfig(postgresConnectionOverride?: PostgresConnectionDetails | null | undefined): Promise<import('pg').PoolConfig>;
import pg = require("pg");
