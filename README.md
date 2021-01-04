# app-utils

Core functionality for imin apps.

## Logger

app-utils defines a (winston) logger when it is used. This logger can be used in your app with:

```js
const { logger } = require('@imin/app-utils');
```

By default, its log level is set to `info` (i.e. `debug` messages will not be logged) but you can change this by:

* **Setting env var: `LOG_LEVEL`**: Available values: `debug`, `info`, `warn`, `error`.

## PostgreSQL Migrations (with db-migrate)

If your app has a PostgreSQL database, you can set up migrations using db-migrate - via `@imin/app-utils`. Like so:

```js
const { syncDbMigrations } = require('@imin/app-utils');

(async () => {
  // Choose either of these approaches:
  // 1. No config. Uses default settings. Default settings include:
  //   * Finding postgres connection details in either DATABASE_URL (for a Heroku database) env var or POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DB env vars.
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
    },
    doStartDummyExpressServer: false,
  });
})();
```
