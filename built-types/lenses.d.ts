export type SearchIsBookingRequestFacilityUseSlotType = import('@imin/shared-data-types/src/search/SearchIsBookingRequestFacilityUseSlot').SearchIsBookingRequestFacilityUseSlotType;
export type BsBookableScheduledSessionType = import('@imin/shared-data-types/src/booking/BsBookableScheduledSession').BsBookableScheduledSessionType;
export type GetSlotByIdResponseType = import('@imin/shared-data-types/src/booking/GetSlotByIdResponse').GetSlotByIdResponseType;
export type TOpportunity = SearchIsBookingRequestFacilityUseSlotType | BsBookableScheduledSessionType | GetSlotByIdResponseType;
/**
 * // even though this is from the ScS, the FacilityUsePlace is exactly the same model
 */
export type PlaceType = import('@imin/shared-data-types/src/booking/BsBookableScheduledSession').LocationSummaryLocationType;
export type Organizer = import('@imin/shared-data-types/src/modellingSpec/common').OrganizerType;
export type OfferType = import('@imin/shared-data-types/src/modellingSpec/common').OfferType;
export type SearchIsBookingRequestFacilityUseType = import('@imin/shared-data-types/src/search/SearchIsBookingRequestFacilityUseSlot').SearchIsBookingRequestFacilityUseType;
export namespace Lenses {
    const seller: import('ramda').Lens<TOpportunity, Organizer>;
    const providerId: import('ramda').Lens<TOpportunity, string>;
    const name: import('ramda').Lens<TOpportunity, string>;
    const place: import('ramda').Lens<TOpportunity, PlaceType>;
    const facilityUse: import('ramda').Lens<TOpportunity, SearchIsBookingRequestFacilityUseType>;
    const offers: import('ramda').Lens<TOpportunity, OfferType[]>;
    const aggregateOffer: R.Lens<TOpportunity, any>;
    const remainingCapacity: import('ramda').Lens<TOpportunity, number>;
    const maxCapacity: import('ramda').Lens<TOpportunity, number>;
    namespace util {
        const throwErrorIfUsed: import('ramda').Lens<any, any>;
    }
}
import R = require("ramda");
