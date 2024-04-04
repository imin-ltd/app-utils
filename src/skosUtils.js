// @ts-expect-error skos.js doesn't have a types file
const skos = require('@openactive/skos');
const fs = require('fs');
const util = require('util');
const path = require('path');
const _ = require('lodash');

const { httpFetchJsonld } = require('./jsonLdUtils');

const readFile = util.promisify(fs.readFile);

/**
 * @typedef {import('./types/skos').ConceptScheme} ConceptScheme
 */

/**
 * @param {string} url
 * @returns {Promise<ConceptScheme>}
 */
async function getConceptSchemeFromUrl(url) {
  const conceptSchemeRaw = await httpFetchJsonld(url);
  return new skos.ConceptScheme(conceptSchemeRaw);
}

/**
 * @param {string} jsonLdFilePath
 * @returns {Promise<ConceptScheme>}
 */
async function getConceptSchemeFromFilePath(jsonLdFilePath) {
  const activityListCacheRaw = await readFile(jsonLdFilePath);
  const activityListCacheJson = JSON.parse(String(activityListCacheRaw));
  return new skos.ConceptScheme(activityListCacheJson);
}

module.exports = {
  getConceptSchemeFromUrl,
  getConceptSchemeFromFilePath,
};
