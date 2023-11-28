const R = require('ramda');

/**
 * @typedef {import('@imin/shared-data-types/src/search/SearchIsBookingRequestFacilityUseSlot').SearchIsBookingRequestFacilityUseSlotType} SearchIsBookingRequestFacilityUseSlotType
 * @typedef {import('@imin/shared-data-types/src/booking/BsBookableScheduledSession').BsBookableScheduledSessionType} BsBookableScheduledSessionType
 * @typedef {import('@imin/shared-data-types/src/booking/GetSlotByIdResponse').GetSlotByIdResponseType} GetSlotByIdResponseType
 * @typedef {SearchIsBookingRequestFacilityUseSlotType|BsBookableScheduledSessionType | GetSlotByIdResponseType} TOpportunity
 *
 * @typedef {import('@imin/shared-data-types/src/booking/BsBookableScheduledSession').LocationSummaryLocationType} PlaceType // even though this is from the ScS, the FacilityUsePlace is exactly the same model
 * @typedef {import('@imin/shared-data-types/src/modellingSpec/common').OrganizerType} Organizer
 * @typedef {import('@imin/shared-data-types/src/modellingSpec/common').OfferType} OfferType
 * @typedef {import('@imin/shared-data-types/src/search/SearchIsBookingRequestFacilityUseSlot').SearchIsBookingRequestFacilityUseType} SearchIsBookingRequestFacilityUseType
 */

/**
 * @param {string[]} propertyPath
 * @returns {import('ramda').Lens<SearchIsBookingRequestFacilityUseSlotType, any>}
 */
function createSlotLensForFacilityUseProperty(propertyPath) {
  const slotGetter = (/** @type {SearchIsBookingRequestFacilityUseSlotType} */ slot) => {
    if (slot.facilityUse.type === 'FacilityUse') {
      return R.path(['facilityUse', ...propertyPath], slot);
    }
    return R.path(['facilityUse', 'facilityUse', ...propertyPath], slot);
  };
  const slotSetter = (/** @type {any} */ newValue, /** @type {SearchIsBookingRequestFacilityUseSlotType} */ slot) => {
    if (slot.facilityUse.type === 'FacilityUse') {
      return R.assocPath(['facilityUse', ...propertyPath], newValue, slot);
    }
    return R.assocPath(['facilityUse', 'facilityUse', ...propertyPath], newValue, slot);
  };
  return R.lens(slotGetter, slotSetter);
}

/**
 * @param {{
 *  scs?: import('ramda').Lens<BsBookableScheduledSessionType, any>,
 *  slot?: import('ramda').Lens<SearchIsBookingRequestFacilityUseSlotType, any>
 * }} lensByOpportunityType
 */
function opportunityTypeLens(lensByOpportunityType) {
  const opportunityTypeGetter = ( /** @type {TOpportunity} */ opportunity) => {
    if (opportunity.type === 'ScheduledSession') {
      return lensByOpportunityType.scs 
        ? R.view(lensByOpportunityType.scs, opportunity)
        : () => { throw new Error('lens not expected to be used'); };
    }
    return lensByOpportunityType.slot 
      ? R.view(lensByOpportunityType.slot, opportunity)
      : () => { throw new Error('lens not expected to be used'); };
  };

  const opportunityTypeSetter = (/** @type {any} */ newValue, /** @type {TOpportunity} */ opportunity) => {
    if (opportunity.type === 'ScheduledSession') {
      return lensByOpportunityType.scs 
        ? R.set(lensByOpportunityType.scs, newValue, opportunity)
        : () => { throw new Error('lens not expected to be used'); };
    }
    return lensByOpportunityType.slot 
      ? R.set(lensByOpportunityType.slot, newValue, opportunity)
      : () => { throw new Error('lens not expected to be used'); };
  };

  // @ts-ignore
  return R.lens(opportunityTypeGetter, opportunityTypeSetter);
}

const Lenses = {
  /** @type {import('ramda').Lens<TOpportunity, Organizer> } */
  seller: opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'superEvent', 'organizer']),
    slot: createSlotLensForFacilityUseProperty(['provider']),
  }),
  /** @type {import('ramda').Lens<TOpportunity, string> } */
  providerId: opportunityTypeLens({
    scs: R.lensProp('_provider'),
    slot: createSlotLensForFacilityUseProperty(['_providerId']),
  }),
  /** @type {import('ramda').Lens<TOpportunity, string> } */
  name: opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'superEvent', 'name']),
    slot: createSlotLensForFacilityUseProperty(['name']),
  }),
  /** @type {import('ramda').Lens<TOpportunity, PlaceType> } */
  place: opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'superEvent', 'imin:locationSummary', '0']),
    slot: createSlotLensForFacilityUseProperty(['location']),
  }),
  /** @type {import('ramda').Lens<TOpportunity, SearchIsBookingRequestFacilityUseType>} */
  facilityUse: opportunityTypeLens({
    slot: createSlotLensForFacilityUseProperty([]),
  }),

  /** @type {import('ramda').Lens<TOpportunity, OfferType[]> } */
  offers: opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'offers']),
    slot: R.lensProp('offers'),
  }),
  aggregateOffer: opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'superEvent', 'imin:aggregateOffer']),
    slot: R.lensProp('imin:aggregateOffer'),
  }),
  /** @type {import('ramda').Lens<TOpportunity, number> } */
  remainingCapacity: opportunityTypeLens({
    scs: R.lensPath(['remainingAttendeeCapacity']),
    slot: R.lensPath(['remainingUses']),
  }),
  /** @type {import('ramda').Lens<TOpportunity, number> } */
  maxCapacity: opportunityTypeLens({
    scs: R.lensPath(['maximumAttendeeCapacity']),
    slot: R.lensPath(['maximumUses']),
  }),
  /** @type {import('ramda').Lens<TOpportunity, Array<string>> } */
  iminTag: opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'superEvent', '_imin:tag']),
    // Interestingly slots do not have tags in the FaciityUse or the Slot
  }),

  util: {
    /**
     * Use this to specify a lens that should not actually be used
     *
     * @type {import('ramda').Lens<any, any>}
     */
    // @ts-ignore
    throwErrorIfUsed: R.lens(
      () => { throw new Error('lens not expected to be used'); },
      () => { throw new Error('lens not expected to be used'); }),
  },
};

module.exports = {
  Lenses,
};
