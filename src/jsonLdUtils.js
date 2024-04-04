const { default: axios } = require('axios');


/**
 * @param {string} url
 */
async function httpFetchJsonld(url) {
  const response = await axios.get(url, {
    headers: {
      Accept: 'application/ld+json',
    },
  });
  return response.data;
}

module.exports = {
  httpFetchJsonld,
};