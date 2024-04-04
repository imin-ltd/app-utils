// We should give this to OpenActive when finished.

export class Concept {
  constructor();
  id: string;
  prefLabel: string;
  type?: string;
  activity?: string[];
  getNarrower: () => Concept[];
  getNarrowerTransitive: () => Concept[];
  getBroader: () => Concept[];
  getBroaderTransitive: () => Concept[];
  getRelated: () => Concept[];
  equals: (concept: Concept) => Boolean;
  toString: () => string;
  getJSON: () => Object;
  static compare: (a: Concept, b: Concept) => Number;
}
export class ConceptScheme {
  constructor(
    scheme: Object | Array<Object>,
    id?: string,
    filter?: Object | Array<Object>
  );
  getConceptByID: (id: string) => Concept | null;
  getConceptByLabel: (label: string) => Concept | null;
  getAllConcepts: () => Concept[];
  getAllConceptsByID: () => Concept[];
  getAllConceptsByLabel: () => Concept[];
  getTopConcepts: () => Concept[];
  getJSON: () => Object;
  toString: () => string;
  generateSubset: (filter: Object | Array<Object>) => ConceptScheme;
}
