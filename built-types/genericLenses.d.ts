export type ScSLike<TEventSeriesFields, TSessionSeriesFields> = {
    type: 'ScheduledSession';
    superEvent: {
        superEvent: TEventSeriesFields;
    } & TSessionSeriesFields;
};
export type SlotNoIfuLike<TFacilityUseFields> = {
    type: 'Slot';
    facilityUse: {
        type: 'FacilityUse';
    } & TFacilityUseFields;
};
export type SlotIfuLike<TFacilityUseFields> = {
    type: 'Slot';
    facilityUse: {
        type: 'IndividualFacilityUse';
        facilityUse: {
            type: 'FacilityUse';
        } & TFacilityUseFields;
    };
};
export type SlotLike<TFacilityUseFields> = SlotNoIfuLike<TFacilityUseFields> | SlotIfuLike<TFacilityUseFields>;
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
export function createSlotLensForFacilityUseProperty<TSlot extends SlotLike<any>>(propertyPath: string[]): R.Lens<TSlot, any>;
/**
 * @template {ScSLike<any, any>} TScS
 * @template {SlotLike<any>} TSlot
 * @param {{
 *  scs?: import('ramda').Lens<TScS, any>,
 *  slot?: import('ramda').Lens<TSlot, any>
 * }} lensByOpportunityType
 */
export function opportunityTypeLens<TScS extends ScSLike<any, any>, TSlot extends SlotLike<any>>(lensByOpportunityType: {
    scs?: R.Lens<TScS, any> | undefined;
    slot?: R.Lens<TSlot, any> | undefined;
}): R.Lens<TScS | TSlot, any>;
export namespace genericLenses {
    export { createSellerLens };
    export { createNameLens };
    export { createLocationSummaryLens };
    export { createLocationLens };
}
import R = require("ramda");
/**
 * @template TSeller
 * @template {ScSLike<{ organizer?: TSeller }, any> | SlotLike<{ provider?: TSeller }>} TOpportunity
 * @returns {import('ramda').Lens<TOpportunity, TSeller>}
 */
declare function createSellerLens<TSeller, TOpportunity extends ScSLike<{
    organizer?: TSeller | undefined;
}, any> | SlotLike<{
    provider?: TSeller | undefined;
}>>(): R.Lens<TOpportunity, TSeller>;
/**
 * @template {string | null | undefined} TName
 * @template {ScSLike<{ name?: TName }, any> | SlotLike<{ name?: TName }>} TOpportunity
 * @returns {import('ramda').Lens<TOpportunity, TName>}
 */
declare function createNameLens<TName extends string | null | undefined, TOpportunity extends ScSLike<{
    name?: TName | undefined;
}, any> | SlotLike<{
    name?: TName | undefined;
}>>(): R.Lens<TOpportunity, TName>;
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
declare function createLocationSummaryLens<TPlace, TOpportunity extends ScSLike<{
    'imin:locationSummary'?: TPlace[] | undefined;
}, any> | SlotLike<{
    location?: TPlace | undefined;
}>>(): R.Lens<TOpportunity, TPlace>;
/**
 * Lens for the Opportunity's Place. For ScheduledSessions, this searches SessionSeries location.
 * Therefore, this is the function to use when dealing with Opportunities that have come from an
 * OpenActive Data Source.
 *
 * @template TPlace
 * @template {ScSLike<any, { location?: TPlace }> | SlotLike<{ location?: TPlace }>} TOpportunity
 * @returns {import('ramda').Lens<TOpportunity, TPlace>}
 */
declare function createLocationLens<TPlace, TOpportunity extends ScSLike<any, {
    location?: TPlace | undefined;
}> | SlotLike<{
    location?: TPlace | undefined;
}>>(): R.Lens<TOpportunity, TPlace>;
export {};
