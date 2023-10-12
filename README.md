# app-utils

Core functionality for imin apps.

## Logger

app-utils defines a (winston) logger when it is used. This logger can be used in your app with:

```js
const { logger } = require('@imin/app-utils');

logger.error('something bad happened', { thingId: 'abc1', error });
```

By default, its log level is set to `info` (i.e. `debug` messages will not be logged) but you can change this by:

* **Setting env var: `LOG_LEVEL`**: Available values: `debug`, `info`, `warn`, `error`.

### Dev mode

In dev mode (`NODE_ENV=development`), the logger prints more readable logs like:

```
[ERROR] Something bad

Error: bad thing happened at
{stack trace}

processId: 123
```

rather than the JSON logs which are printed in production dev modes.

### Production mode

In production mode (where `NODE_ENV` is not set to `development`), the logs are outputted as JSON, so that they can be easily processed by log analytics software.

### Errors

In the object that you can pass to log calls, there's a special field: `error`. If there's a JS Error that you want to log, make sure to include it in the error field, e.g.:

```js
try {
  console.log(variableThatDoesntExist);
} catch (error) {
  logger.error('the bad thing happened', { error });
}
```

The logger will make sure to structure the Error object correctly, so that it's outputted with fields like `stack`, etc. This special handling is needed because JS Error fields are special and do not copy into other objects normally.

If the error is an **Axios error**, we have more special handling still! Axios errors are famously large and contain lots and lots of generally irrelevant information. So if you include an axios error in the `error` field, logger will only include key details about the HTTP request and response.

### JSON formatting

In [Production mode](#production-mode), logs are outputted as JSON. This uses a slightly modified form of JSON stringification which has the following augmentations:

* Circular JSON is supported (using [CircularJSON](https://github.com/WebReflection/circular-json)).
* BigInts are converted to strings (rather than erroring).
* Errors are converted to objects, so that `name`, `message` and `stack` are included in the output.

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

## Kong Secret Middleware

If using Kong as API Gateway, you'll want to ensure that any requests to your app are only ever directly coming through Kong. The current solution is an API key in header `X-Kong-Secret`. If this matches the expected value, the request is considered to have come from Kong.

In Kong, `X-Kong-Secret` can be set using the `request-transformer` plugin.

**ENV VARS**:

* `KONG_SECRET` (REQUIRED): Expected value for `X-Kong-Secret`. Use a large cryptographically secure random string e.g. `crypto.randomBytes(32).toString('hex')`.
* `KONG_IS_DISABLED` (Optional): If `true`, Kong secret auth will be disabled.

Using the Kong Secret Middleware:

```js
const express = require('express');
const { kongSecretMiddleware } = require('@imin/app-utils');

const app = express();
app.use(kongSecretMiddleware());
```

If a request does not have the correct Kong Secret, the app will respond with an HTTP 401 and body `{ "error": "Unauthorized" }`.

## Heroku Utils

### herokuUtils.getHerokuReleaseInfo(..)

**This only works for Heroku apps which have [Dyno Metadata](https://devcenter.heroku.com/articles/dyno-metadata) enabled**

Example usage:

```js
> const { herokuUtils: { getHerokuReleaseInfo } } = require('@imin/app-utils');
> getHerokuReleaseInfo();
{ herokuReleaseVersion: 'v925', herokuSlugCommit: 'bec18bdb698457c8a8e5dbf2828bdeeac4918166' }
```

# Contributing

Run `npm run build` before committing (TODO do this automatically).
