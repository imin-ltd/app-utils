# app-utils

Core functionality for imin apps.

## Logger

app-utils defines a (winston) logger when it is used. This logger can be used in your app with:

```js
const { logger } = require('@imin/app-utils');
```

By default, its log level is set to `info` (i.e. `debug` messages will not be logged) but you can change this by:

* **Setting env var: `LOG_LEVEL`**: Available values: `debug`, `info`, `warn`, `error`.

## PostgreSQL

You can use `@imin/app-utils` to connect with a PostgreSQL database. In order to do this, it is advised to set up environment variables for PostgreSQL connection details (detailed below), though in some cases, connection details can be provided programmatically.

`@imin/app-utils` uses [node-postgres](https://node-postgres.com/) to connect to PostgreSQL.

**ENV VARS**:

* `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_DB`: (REQUIRED) PostgreSQL connection details.
* `POSTGRES_APP_NAME` (REQUIRED): Name of the app (e.g. `places`). This will be recorded in the connection, which is helpful for SQL debugging.
* `POSTGRES_IS_RDS` (Optional - RECOMMENDED if using RDS): Set this to `true` if the DB is hosted in RDS. If true, the RDS root SSL cert will be used to connect.
* `POSTGRES_NUM_CONNECTIONS` (Optional): Number of clients per pool - defaults to 10.

### Get PostgreSQL Pool

```js
const { postgres } = require('@imin/app-utils');

(async () => {
  // If POSTGRES_* environment variables are set, no config is needed here:
  const pgPool = await postgres.pool();
  // Otherwise:
  const pgPool = await postgres.pool({
    user: '..',
    password: '..',
    host: '..',
    database: '..',
    appName: '..',
    isRds: true,
  });
  // Then, use the pool:
  await pgPool.query("INSERT INTO my_emotions (mood, reason) VALUES ('happy', 'using @imin/app-utils')")
})();
```

Also, see: [node-postgres' Pooling guide](https://node-postgres.com/features/pooling).

### PostgreSQL Migrations (with db-migrate)

You can also set up migrations using [db-migrate](https://db-migrate.readthedocs.io/en/latest/) - via `@imin/app-utils`. Like so:

```js
const { syncDbMigrations } = require('@imin/app-utils');

(async () => {
  // Choose either of these approaches:
  // 1. No config. Uses default settings. Default settings include:
  //   * Finding postgres connection details in env vars (see below for the list)
  //   * Starting a dummy Express server (for Heroku apps: Allows migration to take longer than the Heroku app 30s boot timeout by launching a dummy express server which just returns 404 for all requests. The dummy express server is shut down once the migrations have been synced)
  await syncDbMigrations();
  // 2. Config. You can specify
  //   * Postgres connection details
  //   * Whether or not to start a dummy Express server. For example, you might set this to false if this app is not intended to run on Heroku
  await syncDbMigrations({
    postgresConnection: {
      user: '..',
      password: '..',
      host: '..',
      database: '..',
      appName: '..',
      isRds: true,
    },
    doStartDummyExpressServer: false,
  });
})();
```

#### How to: Create Migration

The above explains how you ensure that your app runs migrations when it starts. But how do you actually create migrations in your app:

1. `npm install --save-dev db-migrate`
2. Create a database migration:

  ```sh
  DATABASE_URL=postgresql://master:password@localhost:5432/db npx db-migrate create {{ migration-name }} --sql-file
  ```

  Note that the DATABASE_URL doesn't actually matter for this command.

#### Sync migrations CLI

@imin/app-utils provides 2 scripts for quickly testing migrations:

1. Up-migrate:

  ```sh
  npx db-migrate-up
  ```

2. Down-migrate:

  ```sh
  npx db-migrate-down
  ```

**NOTE: These scripts get PostgreSQL config from `.env` in your project**
