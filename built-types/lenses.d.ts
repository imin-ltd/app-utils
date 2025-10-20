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
    let seller: import('ramda').Lens<TOpportunity, Organizer>;
    let providerId: import('ramda').Lens<TOpportunity, string>;
    let name: import('ramda').Lens<TOpportunity, string>;
    let place: import('ramda').Lens<TOpportunity, PlaceType>;
    let facilityUse: import('ramda').Lens<TOpportunity, SearchIsBookingRequestFacilityUseType>;
    let offers: import('ramda').Lens<TOpportunity, OfferType[]>;
    let aggregateOffer: R.Lens<TOpportunity, any>;
    let remainingCapacity: import('ramda').Lens<TOpportunity, number>;
    let maxCapacity: import('ramda').Lens<TOpportunity, number>;
    let iminTag: import('ramda').Lens<TOpportunity, Array<string>>;
    namespace util {
        let throwErrorIfUsed: import('ramda').Lens<any, any>;
    }
}
import R = require("ramda");
