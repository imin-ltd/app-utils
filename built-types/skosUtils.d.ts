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
import { ConceptScheme } from "./types/skos";
