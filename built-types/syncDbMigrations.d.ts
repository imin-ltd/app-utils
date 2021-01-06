export type PostgresConnectionDetails = {
    user: string;
    password: string;
    host: string;
    database: string;
    appName: string;
    numConnections?: number | null | undefined;
    isRds?: boolean | null | undefined;
};
/**
 * @typedef {import('./postgres').PostgresConnectionDetails} PostgresConnectionDetails
 */
/**
 * @param {object} [options]
 * @param {PostgresConnectionDetails} [options.postgresConnection] If excluded, defaults to using, from environment vars:
 *   `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_DB`, `POSTGRES_APP_NAME`.
 * @param {boolean} [options.doStartDummyExpressServer] Defaults to `true`
 */
export function syncDbMigrations(options?: {
    postgresConnection?: import("./postgres").PostgresConnectionDetails | undefined;
    doStartDummyExpressServer?: boolean | undefined;
} | undefined): Promise<void>;
/**
 * @param {PostgresConnectionDetails} [maybePostgresConnection]
 */
export function getDbMigrateInstance(maybePostgresConnection?: import("./postgres").PostgresConnectionDetails | undefined): Promise<any>;
