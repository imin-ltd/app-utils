require('dotenv').config();
const { getDbMigrateInstance } = require('../syncDbMigrations');

(async () => {
  const dbMigrate = await getDbMigrateInstance();
  await dbMigrate.down();
})();
