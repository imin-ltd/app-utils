export type PostgresConnectionDetails = import('./postgres').PostgresConnectionDetails;
/**
 * See: https://db-migrate.readthedocs.io/en/latest/API/programable/#:~:text=cmdoptions
 */
export type DbMigrateCmdOptions = {
    [k: string]: any;
    'migrations-dir': string;
};
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
 * @param {boolean} [options.doStartDummyExpressServer] Defaults to `true`
 * @param {DbMigrateCmdOptions} [options.dbMigrateCmdOptions]
 */
export function syncDbMigrations(options?: {
    postgresConnection?: import("./postgres").PostgresConnectionDetails | undefined;
    doStartDummyExpressServer?: boolean | undefined;
    dbMigrateCmdOptions?: DbMigrateCmdOptions | undefined;
} | undefined): Promise<void>;
/**
 * @param {PostgresConnectionDetails} [maybePostgresConnection]
 * @param {{ 'migrations-dir': string, [k: string]: any }} [maybeDbMigrateCmdOptions]
 */
export function getDbMigrateInstance(maybePostgresConnection?: import("./postgres").PostgresConnectionDetails | undefined, maybeDbMigrateCmdOptions?: {
    [k: string]: any;
    'migrations-dir': string;
} | undefined): Promise<any>;
