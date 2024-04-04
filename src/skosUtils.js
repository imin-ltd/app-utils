// @ts-expect-error skos.js doesn't have a types file
const skos = require('@openactive/skos');
const fs = require('fs');
const util = require('util');
const path = require('path');
const _ = require('lodash');

const { httpFetchJsonld } = require('./jsonLdUtils');

const readFile = util.promisify(fs.readFile);

/**
 * @param {string} url
 * @returns {Promise<import('./types/skos').ConceptScheme>}
 */
async function getConceptSchemeFromUrl(url) {
  const conceptSchemeRaw = await httpFetchJsonld(url);
  return new skos.ConceptScheme(conceptSchemeRaw);
}

/**
 * @param {string} jsonLdFilePath
 * @returns {Promise<import('./types/skos').ConceptScheme>}
 */
async function getConceptSchemeFromFilePath(jsonLdFilePath) {
  const activityListCacheRaw = await readFile(jsonLdFilePath);
  const activityListCacheJson = JSON.parse(String(activityListCacheRaw));
  return new skos.ConceptScheme(activityListCacheJson);
}

async function a() {
  const f = await getConceptSchemeFromUrl('https://www.openactive.io/activity-list/activity-list.jsonld');
  const e = f.getAllConcepts();
}

module.exports = {
  getConceptSchemeFromUrl,
  getConceptSchemeFromFilePath,
};
