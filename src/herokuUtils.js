/**
 * Get Heroku release info from env vars.
 * The response will be empty if this is not running in Heroku.
 *
 * @returns {{ herokuReleaseVersion?: string, herokuSlugCommit?: string }}
 */
 function getHerokuReleaseInfo() {
  const result = {};
  if (process.env.HEROKU_RELEASE_VERSION) {
    result.herokuReleaseVersion = process.env.HEROKU_RELEASE_VERSION;
  }
  if (process.env.HEROKU_SLUG_COMMIT) {
    result.herokuSlugCommit = process.env.HEROKU_SLUG_COMMIT;
  }
  return result;
}

module.exports = {
  getHerokuReleaseInfo,
};
