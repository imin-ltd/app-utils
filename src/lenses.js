/**
 * An implementation of `genericLenses.js` which is tailored to the
 * SearchIsBookingRequestFacilityUseSlotType, BsBookableScheduledSessionType &
 * GetSlotByIdResponseType types for Opportunities which are used in a few different places.
 */
const R = require('ramda');
const {
  createSlotLensForFacilityUseProperty,
  opportunityTypeLens: genericOpportunityTypeLens,
  genericLenses: {
    createSellerLens,
    createNameLens,
    createLocationSummaryLens
  },
} = require('./genericLenses');

/**
 * @typedef {import('@imin/shared-data-types/src/search/SearchIsBookingRequestFacilityUseSlot').SearchIsBookingRequestFacilityUseSlotType} SearchIsBookingRequestFacilityUseSlotType
 * @typedef {import('@imin/shared-data-types/src/booking/BsBookableScheduledSession').BsBookableScheduledSessionType} BsBookableScheduledSessionType
 * @typedef {import('@imin/shared-data-types/src/booking/GetSlotByIdResponse').GetSlotByIdResponseType} GetSlotByIdResponseType
 * @typedef {SearchIsBookingRequestFacilityUseSlotType | BsBookableScheduledSessionType | GetSlotByIdResponseType} Opportunity
 *
 * @typedef {import('@imin/shared-data-types/src/booking/BsBookableScheduledSession').LocationSummaryLocationType} PlaceType // even though this is from the ScS, the FacilityUsePlace is exactly the same model
 * @typedef {import('@imin/shared-data-types/src/modellingSpec/common').OrganizerType} Organizer
 * @typedef {import('@imin/shared-data-types/src/modellingSpec/common').OfferType} OfferType
 * @typedef {import('@imin/shared-data-types/src/search/SearchIsBookingRequestFacilityUseSlot').SearchIsBookingRequestFacilityUseType} SearchIsBookingRequestFacilityUseType
 */

/** @type {typeof genericOpportunityTypeLens<BsBookableScheduledSessionType, SearchIsBookingRequestFacilityUseSlotType | GetSlotByIdResponseType>} */
const opportunityTypeLens = genericOpportunityTypeLens;

const Lenses = {
  seller: /** @type {typeof createSellerLens<Organizer, Opportunity>} */(createSellerLens)(),
  /** @type {import('ramda').Lens<Opportunity, string> } */
  providerId: opportunityTypeLens({
    scs: R.lensProp('_provider'),
    slot: createSlotLensForFacilityUseProperty(['_providerId']),
  }),
  name: /** @type {typeof createNameLens<string, Opportunity>} */(createNameLens)(),
  place: /** @type {typeof createLocationSummaryLens<PlaceType, Opportunity>} */(createLocationSummaryLens)(),
  /** @type {import('ramda').Lens<Opportunity, SearchIsBookingRequestFacilityUseType>} */
  facilityUse: opportunityTypeLens({
    slot: createSlotLensForFacilityUseProperty([]),
  }),

  /** @type {import('ramda').Lens<Opportunity, OfferType[]> } */
  offers: opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'offers']),
    slot: R.lensProp('offers'),
  }),
  aggregateOffer: opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'superEvent', 'imin:aggregateOffer']),
    slot: R.lensProp('imin:aggregateOffer'),
  }),
  /** @type {import('ramda').Lens<Opportunity, number> } */
  remainingCapacity: opportunityTypeLens({
    scs: R.lensPath(['remainingAttendeeCapacity']),
    slot: R.lensPath(['remainingUses']),
  }),
  /** @type {import('ramda').Lens<Opportunity, number> } */
  maxCapacity: opportunityTypeLens({
    scs: R.lensPath(['maximumAttendeeCapacity']),
    slot: R.lensPath(['maximumUses']),
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
