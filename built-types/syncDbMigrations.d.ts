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
export function syncDbMigrations(options?: {
    postgresConnection?: {
        user: string;
        password: string;
        host: string;
        database: string;
    } | undefined;
    doStartDummyExpressServer?: boolean | undefined;
} | undefined): Promise<void>;
