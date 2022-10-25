export type SearchIsBookingRequestFacilityUseSlotType = import('@imin/shared-data-types/src/search/SearchIsBookingRequestFacilityUseSlot').SearchIsBookingRequestFacilityUseSlotType;
export type BsBookableScheduledSessionType = import('@imin/shared-data-types/src/booking/BsBookableScheduledSession').BsBookableScheduledSessionType;
export type GetSlotByIdResponseType = import('@imin/shared-data-types/src/booking/GetSlotByIdResponse').GetSlotByIdResponseType;
export type Opportunity = SearchIsBookingRequestFacilityUseSlotType | BsBookableScheduledSessionType | GetSlotByIdResponseType;
/**
 * // even though this is from the ScS, the FacilityUsePlace is exactly the same model
 */
export type PlaceType = import('@imin/shared-data-types/src/booking/BsBookableScheduledSession').LocationSummaryLocationType;
export type Organizer = import('@imin/shared-data-types/src/modellingSpec/common').OrganizerType;
export type OfferType = import('@imin/shared-data-types/src/modellingSpec/common').OfferType;
export type SearchIsBookingRequestFacilityUseType = import('@imin/shared-data-types/src/search/SearchIsBookingRequestFacilityUseSlot').SearchIsBookingRequestFacilityUseType;
export namespace Lenses {
    const seller: R.Lens<Opportunity, import("@imin/shared-data-types/src/modellingSpec/common").OrganizerType>;
    const providerId: import('ramda').Lens<Opportunity, string>;
    const name: import('ramda').Lens<Opportunity, string>;
    const place: import('ramda').Lens<Opportunity, PlaceType>;
    const facilityUse: import('ramda').Lens<Opportunity, SearchIsBookingRequestFacilityUseType>;
    const offers: import('ramda').Lens<Opportunity, OfferType[]>;
    const aggregateOffer: R.Lens<import("@imin/shared-data-types/src/search/SearchIsBookingRequestFacilityUseSlot").SearchIsBookingRequestFacilityUseSlotType | import("@imin/shared-data-types/src/booking/BsBookableScheduledSession").BsBookableScheduledSessionType | import("@imin/shared-data-types/src/booking/GetSlotByIdResponse").GetSlotByIdResponseType, any>;
    const remainingCapacity: import('ramda').Lens<Opportunity, number>;
    const maxCapacity: import('ramda').Lens<Opportunity, number>;
    namespace util {
        const throwErrorIfUsed: import('ramda').Lens<any, any>;
    }
}
import R = require("ramda");
