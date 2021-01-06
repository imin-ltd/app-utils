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
 * @param {PostgresConnectionDetails} postgresConnectionOverride
 */
export function pool(postgresConnectionOverride: PostgresConnectionDetails): Promise<pg.Pool>;
import pg = require("pg");
