/**
 * Lenses which are used to interact with data from an Opportunity regardless of the Opportunity's
 * type (i.e. Slot vs ScheduledSession).
 *
 * `genericLenses` is intended to allow use of lenses without being too overly specific about what
 * fields are required in an opportunity.
 *
 * The purpose of having this (as opposed to only having `lenses.js`) is to allow for not having to
 * be as prescriptive about field requirements for opportunity data. This means that we spend less
 * time fiddling with validation errors that are irrelevant to a given task (e.g. we wouldn't want
 * geolocator to fail because an Opportunity's `openingHoursSpecification` is incorrect).
 * This allows us to more easily satisfy the Robustness Principle:
 *
 * > "be conservative in what you send, be liberal in what you accept"
 */
const R = require('ramda');

/**
 * @template TEventSeriesFields
 * @template TSessionSeriesFields
 * @typedef {{
 *   type: 'ScheduledSession',
 *   superEvent: {
 *     superEvent: TEventSeriesFields
 *   } & TSessionSeriesFields,
 * }} ScSLike
 */

/**
 * @template TFacilityUseFields
 * @typedef {{
 *   type: 'Slot',
 *   facilityUse: {
 *     type: 'FacilityUse',
 *   } & TFacilityUseFields,
 * }} SlotNoIfuLike
 */

/**
 * @template TFacilityUseFields
 * @typedef {{
 *   type: 'Slot',
 *   facilityUse: {
 *     type: 'IndividualFacilityUse',
 *     facilityUse: {
 *       type: 'FacilityUse',
 *     } & TFacilityUseFields,
 *   }
 * }} SlotIfuLike
 */

/**
 * @template TFacilityUseFields
 * @typedef {SlotNoIfuLike<TFacilityUseFields> | SlotIfuLike<TFacilityUseFields>} SlotLike
 */

/**
 * @template {SlotLike<any>} TSlot
 * @param {string[]} propertyPath
 * @returns {import('ramda').Lens<TSlot, any>}
 */
function createSlotLensForFacilityUseProperty(propertyPath) {
  const slotGetter = (/** @type {TSlot} */ slot) => {
    if (slot.facilityUse.type === 'FacilityUse') {
      return R.path(['facilityUse', ...propertyPath], slot);
    }
    return R.path(['facilityUse', 'facilityUse', ...propertyPath], slot);
  };
  const slotSetter = (/** @type {any} */ newValue, /** @type {TSlot} */ slot) => {
    if (slot.facilityUse.type === 'FacilityUse') {
      return R.assocPath(['facilityUse', ...propertyPath], newValue, slot);
    }
    return R.assocPath(['facilityUse', 'facilityUse', ...propertyPath], newValue, slot);
  };
  return R.lens(slotGetter, slotSetter);
}

/**
 * @template {ScSLike<any, any>} TScS
 * @template {SlotLike<any>} TSlot
 * @param {{
 *  scs?: import('ramda').Lens<TScS, any>,
 *  slot?: import('ramda').Lens<TSlot, any>
 * }} lensByOpportunityType
 */
function opportunityTypeLens(lensByOpportunityType) {
  const opportunityTypeGetter = ( /** @type {TScS | TSlot} */ opportunity) => {
    if (opportunity.type === 'ScheduledSession') {
      if (!lensByOpportunityType.scs) {
        throw new Error('lens not expected to be used for a ScheduledSession');
      }
      return R.view(lensByOpportunityType.scs, opportunity);
    }
    if (!lensByOpportunityType.slot) {
      throw new Error('lens not expected to be used for a Slot');
    }
    return R.view(lensByOpportunityType.slot, opportunity);
  };

  const opportunityTypeSetter = (/** @type {any} */ newValue, /** @type {TScS | TSlot} */ opportunity) => {
    if (opportunity.type === 'ScheduledSession') {
      if (!lensByOpportunityType.scs) {
        throw new Error('lens not expected to be used for a ScheduledSession');
      }
      return R.set(lensByOpportunityType.scs, newValue, opportunity);
    }
    if (!lensByOpportunityType.slot) {
      throw new Error('lens not expected to be used for a Slot');
    }
    return R.set(lensByOpportunityType.slot, newValue, opportunity);
  };

  return R.lens(opportunityTypeGetter, opportunityTypeSetter);
}

/**
 * @template TSeller
 * @template {ScSLike<{ organizer?: TSeller }, any> | SlotLike<{ provider?: TSeller }>} TOpportunity
 * @returns {import('ramda').Lens<TOpportunity, TSeller>}
 */
function createSellerLens() {
  // > Type 'Lens<SlotLike<any> | ScSLike<any>, any>' is not assignable to type 'Lens<TOpportunity, TSeller>'
  return /** @type {any} */(opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'superEvent', 'organizer']),
    slot: createSlotLensForFacilityUseProperty(['provider']),
  }));
}

/**
 * @template {string | null | undefined} TName
 * @template {ScSLike<{ name?: TName }, any> | SlotLike<{ name?: TName }>} TOpportunity
 * @returns {import('ramda').Lens<TOpportunity, TName>}
 */
function createNameLens() {
  return /** @type {any} */(opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'superEvent', 'name']),
    slot: createSlotLensForFacilityUseProperty(['name']),
  }));
}

/* It would be nice to have a generic createPlaceLens() that searches either EventSeries
imin:locationSummary or SessionSeries location (for sessions). I believe this is relatively easy
(but fiddly for existing use cases).

The only reason we haven't done that here is that there is not yet a use case where a fully formed Place
could be either in [EventSeries].imin:locationSummary or [SessionSeries].location */

/**
 * Lens for the Opportunity's Place. For ScheduledSessions, this searches imin:locationSummary.
 * Therefore, this is the function to use when dealing with Opportunities that have come from imin
 * Search.
 *
 * Pre-condition:
 * - The EventSeries, if it has a location summary, only has one item which has
 *   the same location as the ScheduledSession's SessionSeries.
 *   I believe this is how the Search ScS by-id endpoint works.
 *
 * @template TPlace
 * @template {ScSLike<{ 'imin:locationSummary'?: TPlace[] }, any> | SlotLike<{ location?: TPlace }>} TOpportunity
 * @returns {import('ramda').Lens<TOpportunity, TPlace>}
 */
function createLocationSummaryLens() {
  /* TODO a more sophisticated operation might be to get the imin:locationSummary item with the ID
  that matches superEvent.location.id. This would then allow for an imin:locationSummary with
  multiple items and thus allow us to remove our pre-condition */
  return /** @type {any} */(opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'superEvent', 'imin:locationSummary', '0']),
    slot: createSlotLensForFacilityUseProperty(['location']),
  }));
}

/**
 * Lens for the Opportunity's Place. For ScheduledSessions, this searches SessionSeries location.
 * Therefore, this is the function to use when dealing with Opportunities that have come from an
 * OpenActive Data Source.
 *
 * @template TPlace
 * @template {ScSLike<any, { location?: TPlace }> | SlotLike<{ location?: TPlace }>} TOpportunity
 * @returns {import('ramda').Lens<TOpportunity, TPlace>}
 */
function createLocationLens() {
  /* TODO a more sophisticated operation might be to get the imin:locationSummary item with the ID
  that matches superEvent.location.id. This would then allow for an imin:locationSummary with
  multiple items and thus allow us to remove our pre-condition */
  return /** @type {any} */(opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'location']),
    slot: createSlotLensForFacilityUseProperty(['location']),
  }));
}

/**
 * How to use in JSDoc (the `*\` is an intentional mistake to allow this to fit into a JSDoc. Correct it
 * in order to use it), on, as an example, `createSellerLens`:
 *
 * ```js
 * const sellerLens = /** @type {typeof createSellerLens<OrganizerType, OppType>} *\(createSellerLens)();
 * ```
 *
 * (thanks to https://github.com/microsoft/TypeScript/issues/27387#issuecomment-1223795056 for this style
 * of using generics in JSDoc)
 *
 * In .ts, of course, you could just use:
 *
 * ```ts
 * const sellerLens = createSellerLens<OrganizerType, OppType>();
 * ```
 */
const genericLenses = {
  createSellerLens,
  createNameLens,
  createLocationSummaryLens,
  createLocationLens,
};

module.exports = {
  createSlotLensForFacilityUseProperty,
  opportunityTypeLens,
  genericLenses,
};
