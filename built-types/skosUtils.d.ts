export type ConceptScheme = import('./types/skos').ConceptScheme;
/**
 * @typedef {import('./types/skos').ConceptScheme} ConceptScheme
 */
/**
 * @param {string} url
 * @returns {Promise<ConceptScheme>}
 */
export function getConceptSchemeFromUrl(url: string): Promise<ConceptScheme>;
/**
 * @param {string} jsonLdFilePath
 * @returns {Promise<ConceptScheme>}
 */
export function getConceptSchemeFromFilePath(jsonLdFilePath: string): Promise<ConceptScheme>;
