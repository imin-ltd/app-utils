/**
 * @param {string} url
 * @returns {Promise<import('./types/skos').ConceptScheme>}
 */
export function getConceptSchemeFromUrl(url: string): Promise<import('./types/skos').ConceptScheme>;
/**
 * @param {string} jsonLdFilePath
 * @returns {Promise<import('./types/skos').ConceptScheme>}
 */
export function getConceptSchemeFromFilePath(jsonLdFilePath: string): Promise<import('./types/skos').ConceptScheme>;
