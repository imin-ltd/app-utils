const winston = require('winston');
const CircularJSON = require('circular-json');
const _ = require('lodash');

/**
 * @param {number} maxLength
 * @param {string} string
 */
function truncateString(maxLength, string) {
  if (string.length > maxLength) {
    return `${string.slice(0, maxLength - 1)}…`;
  }
  return string;
}

/**
 * @param {any} error
 */
function axiosErrorConfigToLoggableObject(error) {
  const returnError = {
    method: error.config.method,
    url: error.config.url,
    /** @type {{ [k: string]: unknown }} */
    axiosConfig: {},
  };
  if (_.isString(error.config.data)) {
    // this can be ridiculously long so truncate it
    returnError.axiosConfig.data = truncateString(64, error.config.data);
  }
  return returnError;
}

/**
 * @param {any} error
 */
function errorToLoggableObject(error) {
  const returnError = { ...error };
  if (error instanceof Error) {
    // JS errors lose these attributes when converted to objects (lord knows why)
    returnError.name = error.name;
    returnError.message = error.message;
    returnError.stack = error.stack;
  }
  if (_.isObject(error.request) && _.isObject(error.config)) {
    // assuming that this is an axios request error (see: https://github.com/axios/axios#handling-errors)
    // we delete the request and config because these objects are absolutely massive and contain loads of internal
    // state that doesn't need to be logged. We generally just want the URL and method
    delete returnError.request;
    delete returnError.config;
    returnError.isAxiosRequestError = true;
    returnError.axiosConfig = axiosErrorConfigToLoggableObject(error);
  }
  if (_.isObject(error.response) && _.isObject(error.config)) {
    // assuming that this is an axios response error (see: https://github.com/axios/axios#handling-errors)
    // we delete the response and config because these objects are absolutely massive and contain loads of internal
    // state that doesn't need to be logged. We generally just want the URL and method
    delete returnError.response;
    delete returnError.config;
    returnError.isAxiosResponseError = true;
    returnError.axiosConfig = axiosErrorConfigToLoggableObject(error);
    returnError.axiosResponse = {
      status: error.response.status,
      data: error.response.data,
    };
  }
  return returnError;
}

const logger = winston.createLogger({
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5,
  },
  format: winston.format.printf((info) => {
    const { error, ...rest } = info;
    if (error !== undefined) {
      const loggableError = errorToLoggableObject(error);
      return CircularJSON.stringify({ ...rest, error: loggableError });
    }
    return CircularJSON.stringify({ ...rest });
  }),
  transports: [
    new winston.transports.Console({
      level: process.env.LOG_LEVEL || 'info',
      stderrLevels: ['error'],
    }),
  ],
});

module.exports = {
  logger,
};
