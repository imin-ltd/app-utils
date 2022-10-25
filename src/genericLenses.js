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
 * @template {ScSLike<any>} TScS
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

// /**
//  * @template TSeller
//  * @param {ScSLike2<{ organizer: TSeller }> | SlotLike2<{ provider: TSeller }>} opportunityTemplate
//  * @returns {import('ramda').Lens<ScSLike2<{ organizer: TSeller }> | SlotLike2<{ provider: TSeller }>, TSeller>}
//  */
// function createSellerLens(opportunityTemplate) {
//   return opportunityTypeLens({
//     scs: R.lensPath(['superEvent', 'superEvent', 'organizer']),
//     slot: createSlotLensForFacilityUseProperty(['provider']),
//   });
// }

// /**
//  * @template TSeller
//  * @param {import('@imin/speck/lib/types').Speck<ScSLike2<{ organizer: TSeller }> | SlotLike2<{ provider: TSeller }>, any>} opportunitySpeck
//  * @returns {import('ramda').Lens<ScSLike2<{ organizer: TSeller }> | SlotLike2<{ provider: TSeller }>, TSeller>}
//  */
// function createSellerLens2(opportunitySpeck) {
//   return opportunityTypeLens({
//     scs: R.lensPath(['superEvent', 'superEvent', 'organizer']),
//     slot: createSlotLensForFacilityUseProperty(['provider']),
//   });
// }

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
function createSellerLens() {
  // > Type 'Lens<SlotLike<any> | ScSLike<any>, any>' is not assignable to type 'Lens<TOpportunity, TSeller>'
  return /** @type {any} */(opportunityTypeLens({
    scs: R.lensPath(['superEvent', 'superEvent', 'organizer']),
    slot: createSlotLensForFacilityUseProperty(['provider']),
  }));
}

const genericLenses = {
  createSellerLens,
};

module.exports = {
  createSlotLensForFacilityUseProperty,
  opportunityTypeLens,
  genericLenses,
};

// /**
//  * - 1:
//  *   - Cons:
//  *     - If no speck is forthcoming, we have to arbitrarily create an object or do something like type{Type}(type {any}(null))
//  * - 2:
//  *   - Pros:
//  *     - When we have a speck, this is the most convenient
//  *   - Cons:
//  *     - If no speck forthcoming, this cannot be used
//  * - 3:
//  *   - Pros:
//  *     - In a sense, simple. Doesn't involve pretending to use entities
//  *     - In .ts files, this would be the actual solution, which means that this works best when able to use .ts files
//  *   - Cons:
//  *     - This is the most fiddly
//  */

// const MinimalSlotNoIfu = s.type({
//   type: s.literal('Slot'),
//   facilityUse: s.type({
//     type: s.literal('FacilityUse'),
//     provider: Organizer,
//   }),
// });

// const MinimalSlotIfu = s.type({
//   type: s.literal('Slot'),
//   facilityUse: s.type({
//     type: s.literal('IndividualFacilityUse'),
//     facilityUse: s.type({
//       type: s.literal('FacilityUse'),
//       provider: Organizer,
//     }),
//   }),
// });

// const Opp = s.unionObjects([BsBookableScheduledSession, s.unionObjects([MinimalSlotNoIfu, MinimalSlotIfu])]);

// /**
//  * @typedef {import('@imin/speck/lib/types').TypeOf<typeof Opp>} OppType
//  */

// const S = createSellerLens(s.gen(s.unionObjects([BsBookableScheduledSession, s.unionObjects([MinimalSlotNoIfu, MinimalSlotIfu])])))

// const aS = R.view(S, s.gen(BsBookableScheduledSession));
// const aS_1 = R.view(S, s.gen(MinimalSlotNoIfu));
// const aS_2 = R.view(S, s.gen(MinimalSlotIfu));
// const aS_3 = R.view(S, s.gen(MinimalSlotIfu));
// const aS_4 = R.view(S, s.gen(s.unionObjects([BsBookableScheduledSession, s.unionObjects([MinimalSlotNoIfu, MinimalSlotIfu])])));

// const x = null;
// const Sa = createSellerLens(/** @type {OppType} */(/** @type {any} */(null)));
// const aSa = R.view(Sa, s.gen(BsBookableScheduledSession));
// const aSa_1 = R.view(Sa, s.gen(MinimalSlotNoIfu));
// const aSa_2 = R.view(Sa, s.gen(MinimalSlotIfu));
// const aSa_3 = R.view(Sa, s.gen(MinimalSlotIfu));
// const aSa_4 = R.view(Sa, s.gen(Opp));

// const S2 = createSellerLens2(Opp);
// const aS2 = R.view(S2, s.gen(BsBookableScheduledSession));
// const aS2_1 = R.view(S2, s.gen(MinimalSlotNoIfu));
// const aS2_2 = R.view(S2, s.gen(MinimalSlotIfu));
// const aS2_3 = R.view(S2, s.gen(MinimalSlotIfu));
// const aS2_4 = R.view(S2, s.gen(Opp));

// /** @type {typeof createSellerLens3<import('@imin/shared-data-types/src/modellingSpec/common').OrganizerType, OppType>} */
// const createSellerLens3Opp = createSellerLens3;
// const S3 = createSellerLens3Opp();
// const aS3 = R.view(S3, s.gen(BsBookableScheduledSession));
// const aS3_1 = R.view(S3, s.gen(MinimalSlotNoIfu));
// const aS3_2 = R.view(S3, s.gen(MinimalSlotIfu));
// const aS3_3 = R.view(S3, s.gen(MinimalSlotIfu));
// const aS3_4 = R.view(S3, s.gen(Opp));
