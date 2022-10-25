export type ScSLike<TEventSeriesFields> = {
    type: 'ScheduledSession';
    superEvent: {
        superEvent: TEventSeriesFields;
    };
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
 * @typedef {{
 *   type: 'ScheduledSession',
 *   superEvent: {
 *     superEvent: TEventSeriesFields
 *   }
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
 * @template {ScSLike<any>} TScS
 * @template {SlotLike<any>} TSlot
 * @param {{
 *  scs?: import('ramda').Lens<TScS, any>,
 *  slot?: import('ramda').Lens<TSlot, any>
 * }} lensByOpportunityType
 */
export function opportunityTypeLens<TScS extends ScSLike<any>, TSlot extends SlotLike<any>>(lensByOpportunityType: {
    scs?: R.Lens<TScS, any> | undefined;
    slot?: R.Lens<TSlot, any> | undefined;
}): R.Lens<TScS | TSlot, any>;
export namespace genericLenses {
    export { createSellerLens };
}
import R = require("ramda");
/**
 * How to use in JSDoc (the `*\` is an intentional mistake to allow this to fit into a JSDoc. Correct it
 * in order to use it):
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
 *
 * @template TSeller
 * @template {ScSLike<{ organizer: TSeller }> | SlotLike<{ provider: TSeller }>} TOpportunity
 * @returns {import('ramda').Lens<TOpportunity, TSeller>}
 */
declare function createSellerLens<TSeller, TOpportunity extends ScSLike<{
    organizer: TSeller;
}> | SlotNoIfuLike<{
    provider: TSeller;
}> | SlotIfuLike<{
    provider: TSeller;
}>>(): R.Lens<TOpportunity, TSeller>;
export {};
