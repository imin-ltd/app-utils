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
import pg = require("pg");
