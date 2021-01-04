export type PostgresConnection = {
    user: string;
    password: string;
    host: string;
    database: string;
};
/**
 * @typedef {{
 *   user: string;
 *   password: string;
 *   host: string;
 *   database: string;
 * }} PostgresConnection
 */
/**
 * @param {object} [options]
 * @param {PostgresConnection} [options.postgresConnection] If excluded, defaults to using, from environment vars:
 *   `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_DB`.
 *   Alternatively, if `DATABASE_URL` is set, as will be the case for Heroku PostgreSQL,
 *   this is used.
 * @param {boolean} [options.doStartDummyExpressServer] Defaults to `true`
 */
export function syncDbMigrations(options?: {
    postgresConnection?: PostgresConnection | undefined;
    doStartDummyExpressServer?: boolean | undefined;
} | undefined): Promise<void>;
