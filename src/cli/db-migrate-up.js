#!/usr/bin/env node
require('dotenv').config();
const { getDbMigrateInstance } = require('../syncDbMigrations');

(async () => {
  const dbMigrate = await getDbMigrateInstance();
  await dbMigrate.up();
})();
