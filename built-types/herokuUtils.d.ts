/**
 * Get Heroku release info from env vars.
 * The response will be empty if this is not running in Heroku.
 *
 * @returns {{ herokuReleaseVersion?: string, herokuSlugCommit?: string }}
 */
export function getHerokuReleaseInfo(): {
    herokuReleaseVersion?: string;
    herokuSlugCommit?: string;
};
