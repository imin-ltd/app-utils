export type SearchIsBookingRequestFacilityUseSlotType = ({
    type: "Slot";
    id: string;
    identifier: string;
    startDate: string;
    remainingUses: number;
    maximumUses: number;
    facilityUse: {
        name: string;
        type: "FacilityUse";
        id: string;
        identifier: string;
        location: {
            type: "Place";
            address: {
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            };
            geo: {
                type: "GeoCoordinates";
            } & {
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
            };
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            telephone?: string | null | undefined;
            'beta:formattedDescription'?: string | null | undefined;
        };
        _rpdeId: string;
        _providerId: string;
        provider: {
            type: "Organization";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            email?: string | null | undefined;
            logo?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            }) | null | undefined;
            sameAs?: string[] | null | undefined;
            isOpenBookingAllowed?: boolean | null | undefined;
        };
    } & {
        '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        '@context'?: string[] | null | undefined;
        offers?: (({
            type: "Offer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }) | ({
            type: "beta:IndicativeOffer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }))[] | null | undefined;
        activity?: ({
            type: "Concept";
        } & {
            id?: string | null | undefined;
            inScheme?: string | null | undefined;
            prefLabel?: string | null | undefined;
        })[] | null | undefined;
        'imin:aggregateOffer'?: ({
            type: "imin:AggregateOffer";
        } & {
            publicAdult?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            publicJunior?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            '_imin:entitlementOffersDict'?: Record<string, {
                price: number;
                offerId: string;
            }> | null | undefined;
        }) | null | undefined;
        image?: ({
            type: "ImageObject";
        } & {
            url?: string | null | undefined;
        })[] | null | undefined;
        category?: string[] | null | undefined;
        attendeeInstructions?: string | null | undefined;
    };
} & {
    offers?: ({
        type: "Offer";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        price?: number | null | undefined;
        priceCurrency?: "GBP" | null | undefined;
        ageRange?: ({
            type: "QuantitativeValue";
        } & {
            maxValue?: number | null | undefined;
            minValue?: number | null | undefined;
        }) | null | undefined;
        acceptedPaymentMethod?: string[] | null | undefined;
        latestCancellationBeforeStartDate?: string | null | undefined;
        validFromBeforeStartDate?: string | null | undefined;
        validThroughBeforeStartDate?: string | null | undefined;
        availableChannel?: string[] | null | undefined;
        prepayment?: string | null | undefined;
        advanceBooking?: string | null | undefined;
        allowCustomerCancellationFullRefund?: boolean | null | undefined;
        openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
        openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        'imin:membershipRequired'?: boolean | null | undefined;
    })[] | null | undefined;
    'imin:aggregateOffer'?: ({
        type: "imin:AggregateOffer";
    } & {
        publicAdult?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        publicJunior?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        '_imin:entitlementOffersDict'?: Record<string, {
            price: number;
            offerId: string;
        }> | null | undefined;
    }) | null | undefined;
    endDate?: string | null | undefined;
    duration?: string | null | undefined;
    'imin:checkoutUrlTemplate'?: string | null | undefined;
}) | ({
    type: "Slot";
    id: string;
    identifier: string;
    startDate: string;
    remainingUses: number;
    maximumUses: number;
    facilityUse: {
        type: "IndividualFacilityUse";
        facilityUse: {
            name: string;
            type: "FacilityUse";
            id: string;
            identifier: string;
            location: {
                type: "Place";
                address: {
                    type: "PostalAddress";
                } & {
                    addressCountry?: "GB" | null | undefined;
                    postalCode?: string | null | undefined;
                    addressRegion?: string | null | undefined;
                    addressLocality?: string | null | undefined;
                    streetAddress?: string | null | undefined;
                    'imin:fullAddress'?: string | null | undefined;
                };
                geo: {
                    type: "GeoCoordinates";
                } & {
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                };
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                url?: string | null | undefined;
                telephone?: string | null | undefined;
                'beta:formattedDescription'?: string | null | undefined;
            };
            _rpdeId: string;
            _providerId: string;
            provider: {
                type: "Organization";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                url?: string | null | undefined;
                address?: ({
                    type: "PostalAddress";
                } & {
                    addressCountry?: "GB" | null | undefined;
                    postalCode?: string | null | undefined;
                    addressRegion?: string | null | undefined;
                    addressLocality?: string | null | undefined;
                    streetAddress?: string | null | undefined;
                    'imin:fullAddress'?: string | null | undefined;
                }) | null | undefined;
                telephone?: string | null | undefined;
                email?: string | null | undefined;
                logo?: ({
                    type: "ImageObject";
                } & {
                    url?: string | null | undefined;
                }) | null | undefined;
                sameAs?: string[] | null | undefined;
                isOpenBookingAllowed?: boolean | null | undefined;
            };
        } & {
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            '@context'?: string[] | null | undefined;
            offers?: (({
                type: "Offer";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                ageRange?: ({
                    type: "QuantitativeValue";
                } & {
                    maxValue?: number | null | undefined;
                    minValue?: number | null | undefined;
                }) | null | undefined;
                acceptedPaymentMethod?: string[] | null | undefined;
                latestCancellationBeforeStartDate?: string | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                availableChannel?: string[] | null | undefined;
                prepayment?: string | null | undefined;
                advanceBooking?: string | null | undefined;
                allowCustomerCancellationFullRefund?: boolean | null | undefined;
                openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
                openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
            }) | ({
                type: "beta:IndicativeOffer";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                ageRange?: ({
                    type: "QuantitativeValue";
                } & {
                    maxValue?: number | null | undefined;
                    minValue?: number | null | undefined;
                }) | null | undefined;
                acceptedPaymentMethod?: string[] | null | undefined;
                latestCancellationBeforeStartDate?: string | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                availableChannel?: string[] | null | undefined;
                prepayment?: string | null | undefined;
                advanceBooking?: string | null | undefined;
                allowCustomerCancellationFullRefund?: boolean | null | undefined;
                openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
                openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
            }))[] | null | undefined;
            activity?: ({
                type: "Concept";
            } & {
                id?: string | null | undefined;
                inScheme?: string | null | undefined;
                prefLabel?: string | null | undefined;
            })[] | null | undefined;
            'imin:aggregateOffer'?: ({
                type: "imin:AggregateOffer";
            } & {
                publicAdult?: ({
                    type: "AggregateOffer";
                } & {
                    id?: string | null | undefined;
                    price?: number | null | undefined;
                    priceCurrency?: "GBP" | null | undefined;
                    validFromBeforeStartDate?: string | null | undefined;
                    validThroughBeforeStartDate?: string | null | undefined;
                    'imin:membershipRequired'?: boolean | null | undefined;
                    '_imin:isPotentiallyBookable'?: boolean | null | undefined;
                }) | null | undefined;
                publicJunior?: ({
                    type: "AggregateOffer";
                } & {
                    id?: string | null | undefined;
                    price?: number | null | undefined;
                    priceCurrency?: "GBP" | null | undefined;
                    validFromBeforeStartDate?: string | null | undefined;
                    validThroughBeforeStartDate?: string | null | undefined;
                    'imin:membershipRequired'?: boolean | null | undefined;
                    '_imin:isPotentiallyBookable'?: boolean | null | undefined;
                }) | null | undefined;
                '_imin:entitlementOffersDict'?: Record<string, {
                    price: number;
                    offerId: string;
                }> | null | undefined;
            }) | null | undefined;
            image?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            })[] | null | undefined;
            category?: string[] | null | undefined;
            attendeeInstructions?: string | null | undefined;
        };
    } & {
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | null | undefined;
        '@context'?: string[] | null | undefined;
        offers?: (({
            type: "Offer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }) | ({
            type: "beta:IndicativeOffer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }))[] | null | undefined;
        location?: ({
            type: "Place";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            geo?: ({
                type: "GeoCoordinates";
            } & {
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            'beta:formattedDescription'?: string | null | undefined;
        }) | null | undefined;
        activity?: ({
            type: "Concept";
        } & {
            id?: string | null | undefined;
            inScheme?: string | null | undefined;
            prefLabel?: string | null | undefined;
        })[] | null | undefined;
        'imin:aggregateOffer'?: ({
            type: "imin:AggregateOffer";
        } & {
            publicAdult?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            publicJunior?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            '_imin:entitlementOffersDict'?: Record<string, {
                price: number;
                offerId: string;
            }> | null | undefined;
        }) | null | undefined;
        image?: ({
            type: "ImageObject";
        } & {
            url?: string | null | undefined;
        })[] | null | undefined;
        category?: string[] | null | undefined;
        provider?: ({
            type: "Organization";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            email?: string | null | undefined;
            logo?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            }) | null | undefined;
            sameAs?: string[] | null | undefined;
            isOpenBookingAllowed?: boolean | null | undefined;
        }) | null | undefined;
        attendeeInstructions?: string | null | undefined;
    };
} & {
    offers?: ({
        type: "Offer";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        price?: number | null | undefined;
        priceCurrency?: "GBP" | null | undefined;
        ageRange?: ({
            type: "QuantitativeValue";
        } & {
            maxValue?: number | null | undefined;
            minValue?: number | null | undefined;
        }) | null | undefined;
        acceptedPaymentMethod?: string[] | null | undefined;
        latestCancellationBeforeStartDate?: string | null | undefined;
        validFromBeforeStartDate?: string | null | undefined;
        validThroughBeforeStartDate?: string | null | undefined;
        availableChannel?: string[] | null | undefined;
        prepayment?: string | null | undefined;
        advanceBooking?: string | null | undefined;
        allowCustomerCancellationFullRefund?: boolean | null | undefined;
        openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
        openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        'imin:membershipRequired'?: boolean | null | undefined;
    })[] | null | undefined;
    'imin:aggregateOffer'?: ({
        type: "imin:AggregateOffer";
    } & {
        publicAdult?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        publicJunior?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        '_imin:entitlementOffersDict'?: Record<string, {
            price: number;
            offerId: string;
        }> | null | undefined;
    }) | null | undefined;
    endDate?: string | null | undefined;
    duration?: string | null | undefined;
    'imin:checkoutUrlTemplate'?: string | null | undefined;
});
export type BsBookableScheduledSessionType = {
    type: "ScheduledSession";
    id: string;
    identifier: string;
    startDate: string;
    _rpdeId: string;
    superEvent: {
        type: "SessionSeries";
        id: string;
        identifier: string;
        offers: ({
            type: "Offer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        })[];
        location: {
            type: "Place";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            geo?: ({
                type: "GeoCoordinates";
            } & {
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            'beta:formattedDescription'?: string | null | undefined;
        };
        superEvent: {
            name: string;
            type: "EventSeries";
            id: string;
            identifier: string;
            organizer: ({
                type: "Person";
            } & {
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                url?: string | null | undefined;
                telephone?: string | null | undefined;
                givenName?: string | null | undefined;
                familyName?: string | null | undefined;
                email?: string | null | undefined;
                'imin:is13OrOver'?: boolean | null | undefined;
                hasAccount?: string | null | undefined;
            }) | ({
                type: "Organization";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                url?: string | null | undefined;
                address?: ({
                    type: "PostalAddress";
                } & {
                    addressCountry?: "GB" | null | undefined;
                    postalCode?: string | null | undefined;
                    addressRegion?: string | null | undefined;
                    addressLocality?: string | null | undefined;
                    streetAddress?: string | null | undefined;
                    'imin:fullAddress'?: string | null | undefined;
                }) | null | undefined;
                telephone?: string | null | undefined;
                email?: string | null | undefined;
                logo?: ({
                    type: "ImageObject";
                } & {
                    url?: string | null | undefined;
                }) | null | undefined;
                sameAs?: string[] | null | undefined;
                isOpenBookingAllowed?: boolean | null | undefined;
            });
            'imin:locationSummary': ({
                type: "Place";
                address: {
                    type: "PostalAddress";
                } & {
                    addressCountry?: "GB" | null | undefined;
                    postalCode?: string | null | undefined;
                    addressRegion?: string | null | undefined;
                    addressLocality?: string | null | undefined;
                    streetAddress?: string | null | undefined;
                    'imin:fullAddress'?: string | null | undefined;
                };
                geo: {
                    type: "GeoCoordinates";
                } & {
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                };
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                url?: string | null | undefined;
                telephone?: string | null | undefined;
                'beta:formattedDescription'?: string | null | undefined;
            })[];
        } & {
            description?: string | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            'beta:formattedDescription'?: string | null | undefined;
            '@context'?: string[] | null | undefined;
            activity?: ({
                type: "Concept";
            } & {
                id?: string | null | undefined;
                inScheme?: string | null | undefined;
                prefLabel?: string | null | undefined;
            })[] | null | undefined;
            genderRestriction?: string | null | undefined;
            isAccessibleForFree?: boolean | null | undefined;
            eventAttendanceMode?: string | null | undefined;
            'beta:isVirtuallyCoached'?: boolean | null | undefined;
            'beta:isInteractivityPreferred'?: boolean | null | undefined;
            'beta:participantSuppliedEquipment'?: string | null | undefined;
            'imin:aggregateOffer'?: ({
                type: "imin:AggregateOffer";
            } & {
                publicAdult?: ({
                    type: "AggregateOffer";
                } & {
                    id?: string | null | undefined;
                    price?: number | null | undefined;
                    priceCurrency?: "GBP" | null | undefined;
                    validFromBeforeStartDate?: string | null | undefined;
                    validThroughBeforeStartDate?: string | null | undefined;
                    'imin:membershipRequired'?: boolean | null | undefined;
                    '_imin:isPotentiallyBookable'?: boolean | null | undefined;
                }) | null | undefined;
                publicJunior?: ({
                    type: "AggregateOffer";
                } & {
                    id?: string | null | undefined;
                    price?: number | null | undefined;
                    priceCurrency?: "GBP" | null | undefined;
                    validFromBeforeStartDate?: string | null | undefined;
                    validThroughBeforeStartDate?: string | null | undefined;
                    'imin:membershipRequired'?: boolean | null | undefined;
                    '_imin:isPotentiallyBookable'?: boolean | null | undefined;
                }) | null | undefined;
                '_imin:entitlementOffersDict'?: Record<string, {
                    price: number;
                    offerId: string;
                }> | null | undefined;
            }) | null | undefined;
            'imin:dataSource'?: ({
                type: "WebAPI";
            } & {
                identifier?: string | null | undefined;
            }) | null | undefined;
        };
    } & {
        '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        url?: string | null | undefined;
        '@context'?: string[] | null | undefined;
        'beta:affiliatedLocation'?: ({
            type: "Place";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            geo?: ({
                type: "GeoCoordinates";
            } & {
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            'beta:formattedDescription'?: string | null | undefined;
        }) | null | undefined;
        'beta:virtualLocation'?: ({
            type: "VirtualLocation";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            url?: string | null | undefined;
        }) | null | undefined;
        leader?: ({
            type: "Person";
        } & {
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            telephone?: string | null | undefined;
            givenName?: string | null | undefined;
            familyName?: string | null | undefined;
            email?: string | null | undefined;
            'imin:is13OrOver'?: boolean | null | undefined;
            hasAccount?: string | null | undefined;
        }) | ({
            type: "Person";
        } & {
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            telephone?: string | null | undefined;
            givenName?: string | null | undefined;
            familyName?: string | null | undefined;
            email?: string | null | undefined;
            'imin:is13OrOver'?: boolean | null | undefined;
            hasAccount?: string | null | undefined;
        })[] | null | undefined;
        eventSchedule?: (({
            type: "Schedule";
            repeatFrequency: string;
            scheduleTimezone: string;
            scheduledEventType: string;
            startTime: string;
            endTime: string;
        } & {
            startDate?: string | null | undefined;
            endDate?: string | null | undefined;
            duration?: string | null | undefined;
            byDay?: ("https://schema.org/Monday" | "https://schema.org/Tuesday" | "https://schema.org/Wednesday" | "https://schema.org/Thursday" | "https://schema.org/Friday" | "https://schema.org/Saturday" | "https://schema.org/Sunday" | "schema:Monday" | "schema:Tuesday" | "schema:Wednesday" | "schema:Thursday" | "schema:Friday" | "schema:Saturday" | "schema:Sunday")[] | null | undefined;
            byMonth?: number[] | null | undefined;
            byMonthDay?: number[] | null | undefined;
            repeatCount?: number | null | undefined;
            exceptDate?: string[] | null | undefined;
            urlTemplate?: string | null | undefined;
            idTemplate?: string | null | undefined;
        }) | ({
            type: "PartialSchedule";
        } & {
            startTime?: string | null | undefined;
            endTime?: string | null | undefined;
            repeatFrequency?: string | null | undefined;
            byDay?: ("https://schema.org/Monday" | "https://schema.org/Tuesday" | "https://schema.org/Wednesday" | "https://schema.org/Thursday" | "https://schema.org/Friday" | "https://schema.org/Saturday" | "https://schema.org/Sunday" | "schema:Monday" | "schema:Tuesday" | "schema:Wednesday" | "schema:Thursday" | "schema:Friday" | "schema:Saturday" | "schema:Sunday")[] | null | undefined;
            byMonth?: number[] | null | undefined;
            byMonthDay?: number[] | null | undefined;
            duration?: string | null | undefined;
            endDate?: string | null | undefined;
            exceptDate?: string[] | null | undefined;
            repeatCount?: number | null | undefined;
            scheduleTimezone?: string | null | undefined;
            startDate?: string | null | undefined;
        }))[] | null | undefined;
    };
    _provider: string;
} & {
    '@context'?: string[] | null | undefined;
    offers?: ({
        type: "Offer";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        price?: number | null | undefined;
        priceCurrency?: "GBP" | null | undefined;
        ageRange?: ({
            type: "QuantitativeValue";
        } & {
            maxValue?: number | null | undefined;
            minValue?: number | null | undefined;
        }) | null | undefined;
        acceptedPaymentMethod?: string[] | null | undefined;
        latestCancellationBeforeStartDate?: string | null | undefined;
        validFromBeforeStartDate?: string | null | undefined;
        validThroughBeforeStartDate?: string | null | undefined;
        availableChannel?: string[] | null | undefined;
        prepayment?: string | null | undefined;
        advanceBooking?: string | null | undefined;
        allowCustomerCancellationFullRefund?: boolean | null | undefined;
        openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
        openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        'imin:membershipRequired'?: boolean | null | undefined;
    })[] | null | undefined;
    location?: ({
        type: "Place";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        url?: string | null | undefined;
        address?: ({
            type: "PostalAddress";
        } & {
            addressCountry?: "GB" | null | undefined;
            postalCode?: string | null | undefined;
            addressRegion?: string | null | undefined;
            addressLocality?: string | null | undefined;
            streetAddress?: string | null | undefined;
            'imin:fullAddress'?: string | null | undefined;
        }) | null | undefined;
        geo?: ({
            type: "GeoCoordinates";
        } & {
            latitude?: number | null | undefined;
            longitude?: number | null | undefined;
        }) | null | undefined;
        telephone?: string | null | undefined;
        'beta:formattedDescription'?: string | null | undefined;
    }) | null | undefined;
    'beta:affiliatedLocation'?: ({
        type: "Place";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        url?: string | null | undefined;
        address?: ({
            type: "PostalAddress";
        } & {
            addressCountry?: "GB" | null | undefined;
            postalCode?: string | null | undefined;
            addressRegion?: string | null | undefined;
            addressLocality?: string | null | undefined;
            streetAddress?: string | null | undefined;
            'imin:fullAddress'?: string | null | undefined;
        }) | null | undefined;
        geo?: ({
            type: "GeoCoordinates";
        } & {
            latitude?: number | null | undefined;
            longitude?: number | null | undefined;
        }) | null | undefined;
        telephone?: string | null | undefined;
        'beta:formattedDescription'?: string | null | undefined;
    }) | null | undefined;
    'beta:virtualLocation'?: ({
        type: "VirtualLocation";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }) | null | undefined;
    isAccessibleForFree?: boolean | null | undefined;
    eventAttendanceMode?: string | null | undefined;
    maximumAttendeeCapacity?: number | null | undefined;
    remainingAttendeeCapacity?: number | null | undefined;
    endDate?: string | null | undefined;
    eventStatus?: "https://schema.org/EventCancelled" | "https://schema.org/EventPostponed" | "https://schema.org/EventRescheduled" | "https://schema.org/EventScheduled" | "schema:EventCancelled" | "schema:EventPostponed" | "schema:EventRescheduled" | "schema:EventScheduled" | null | undefined;
    duration?: string | null | undefined;
    maximumVirtualAttendeeCapacity?: number | null | undefined;
};
export type GetSlotByIdResponseType = ({
    type: "Slot";
    id: string;
    identifier: string;
    startDate: string;
    remainingUses: number;
    maximumUses: number;
    facilityUse: {
        name: string;
        type: "FacilityUse";
        id: string;
        identifier: string;
        location: {
            type: "Place";
            address: {
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            };
            geo: {
                type: "GeoCoordinates";
            } & {
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
            };
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            telephone?: string | null | undefined;
            'beta:formattedDescription'?: string | null | undefined;
        };
        _rpdeId: string;
        _providerId: string;
        provider: {
            type: "Organization";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            email?: string | null | undefined;
            logo?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            }) | null | undefined;
            sameAs?: string[] | null | undefined;
            isOpenBookingAllowed?: boolean | null | undefined;
        };
    } & {
        '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        '@context'?: string[] | null | undefined;
        offers?: (({
            type: "Offer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }) | ({
            type: "beta:IndicativeOffer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }))[] | null | undefined;
        activity?: ({
            type: "Concept";
        } & {
            id?: string | null | undefined;
            inScheme?: string | null | undefined;
            prefLabel?: string | null | undefined;
        })[] | null | undefined;
        'imin:aggregateOffer'?: ({
            type: "imin:AggregateOffer";
        } & {
            publicAdult?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            publicJunior?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            '_imin:entitlementOffersDict'?: Record<string, {
                price: number;
                offerId: string;
            }> | null | undefined;
        }) | null | undefined;
        image?: ({
            type: "ImageObject";
        } & {
            url?: string | null | undefined;
        })[] | null | undefined;
        category?: string[] | null | undefined;
        attendeeInstructions?: string | null | undefined;
    };
} & {
    offers?: ({
        type: "Offer";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        price?: number | null | undefined;
        priceCurrency?: "GBP" | null | undefined;
        ageRange?: ({
            type: "QuantitativeValue";
        } & {
            maxValue?: number | null | undefined;
            minValue?: number | null | undefined;
        }) | null | undefined;
        acceptedPaymentMethod?: string[] | null | undefined;
        latestCancellationBeforeStartDate?: string | null | undefined;
        validFromBeforeStartDate?: string | null | undefined;
        validThroughBeforeStartDate?: string | null | undefined;
        availableChannel?: string[] | null | undefined;
        prepayment?: string | null | undefined;
        advanceBooking?: string | null | undefined;
        allowCustomerCancellationFullRefund?: boolean | null | undefined;
        openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
        openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        'imin:membershipRequired'?: boolean | null | undefined;
    })[] | null | undefined;
    'imin:aggregateOffer'?: ({
        type: "imin:AggregateOffer";
    } & {
        publicAdult?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        publicJunior?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        '_imin:entitlementOffersDict'?: Record<string, {
            price: number;
            offerId: string;
        }> | null | undefined;
    }) | null | undefined;
    endDate?: string | null | undefined;
    duration?: string | null | undefined;
    'imin:checkoutUrlTemplate'?: string | null | undefined;
} & {
    _stripeConnectedAccountId?: string | null | undefined;
    _gitCommit?: string | null | undefined;
}) | ({
    type: "Slot";
    id: string;
    identifier: string;
    startDate: string;
    remainingUses: number;
    maximumUses: number;
    facilityUse: {
        type: "IndividualFacilityUse";
        facilityUse: {
            name: string;
            type: "FacilityUse";
            id: string;
            identifier: string;
            location: {
                type: "Place";
                address: {
                    type: "PostalAddress";
                } & {
                    addressCountry?: "GB" | null | undefined;
                    postalCode?: string | null | undefined;
                    addressRegion?: string | null | undefined;
                    addressLocality?: string | null | undefined;
                    streetAddress?: string | null | undefined;
                    'imin:fullAddress'?: string | null | undefined;
                };
                geo: {
                    type: "GeoCoordinates";
                } & {
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                };
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                url?: string | null | undefined;
                telephone?: string | null | undefined;
                'beta:formattedDescription'?: string | null | undefined;
            };
            _rpdeId: string;
            _providerId: string;
            provider: {
                type: "Organization";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                url?: string | null | undefined;
                address?: ({
                    type: "PostalAddress";
                } & {
                    addressCountry?: "GB" | null | undefined;
                    postalCode?: string | null | undefined;
                    addressRegion?: string | null | undefined;
                    addressLocality?: string | null | undefined;
                    streetAddress?: string | null | undefined;
                    'imin:fullAddress'?: string | null | undefined;
                }) | null | undefined;
                telephone?: string | null | undefined;
                email?: string | null | undefined;
                logo?: ({
                    type: "ImageObject";
                } & {
                    url?: string | null | undefined;
                }) | null | undefined;
                sameAs?: string[] | null | undefined;
                isOpenBookingAllowed?: boolean | null | undefined;
            };
        } & {
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            '@context'?: string[] | null | undefined;
            offers?: (({
                type: "Offer";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                ageRange?: ({
                    type: "QuantitativeValue";
                } & {
                    maxValue?: number | null | undefined;
                    minValue?: number | null | undefined;
                }) | null | undefined;
                acceptedPaymentMethod?: string[] | null | undefined;
                latestCancellationBeforeStartDate?: string | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                availableChannel?: string[] | null | undefined;
                prepayment?: string | null | undefined;
                advanceBooking?: string | null | undefined;
                allowCustomerCancellationFullRefund?: boolean | null | undefined;
                openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
                openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
            }) | ({
                type: "beta:IndicativeOffer";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                ageRange?: ({
                    type: "QuantitativeValue";
                } & {
                    maxValue?: number | null | undefined;
                    minValue?: number | null | undefined;
                }) | null | undefined;
                acceptedPaymentMethod?: string[] | null | undefined;
                latestCancellationBeforeStartDate?: string | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                availableChannel?: string[] | null | undefined;
                prepayment?: string | null | undefined;
                advanceBooking?: string | null | undefined;
                allowCustomerCancellationFullRefund?: boolean | null | undefined;
                openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
                openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
            }))[] | null | undefined;
            activity?: ({
                type: "Concept";
            } & {
                id?: string | null | undefined;
                inScheme?: string | null | undefined;
                prefLabel?: string | null | undefined;
            })[] | null | undefined;
            'imin:aggregateOffer'?: ({
                type: "imin:AggregateOffer";
            } & {
                publicAdult?: ({
                    type: "AggregateOffer";
                } & {
                    id?: string | null | undefined;
                    price?: number | null | undefined;
                    priceCurrency?: "GBP" | null | undefined;
                    validFromBeforeStartDate?: string | null | undefined;
                    validThroughBeforeStartDate?: string | null | undefined;
                    'imin:membershipRequired'?: boolean | null | undefined;
                    '_imin:isPotentiallyBookable'?: boolean | null | undefined;
                }) | null | undefined;
                publicJunior?: ({
                    type: "AggregateOffer";
                } & {
                    id?: string | null | undefined;
                    price?: number | null | undefined;
                    priceCurrency?: "GBP" | null | undefined;
                    validFromBeforeStartDate?: string | null | undefined;
                    validThroughBeforeStartDate?: string | null | undefined;
                    'imin:membershipRequired'?: boolean | null | undefined;
                    '_imin:isPotentiallyBookable'?: boolean | null | undefined;
                }) | null | undefined;
                '_imin:entitlementOffersDict'?: Record<string, {
                    price: number;
                    offerId: string;
                }> | null | undefined;
            }) | null | undefined;
            image?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            })[] | null | undefined;
            category?: string[] | null | undefined;
            attendeeInstructions?: string | null | undefined;
        };
    } & {
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | null | undefined;
        '@context'?: string[] | null | undefined;
        offers?: (({
            type: "Offer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }) | ({
            type: "beta:IndicativeOffer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }))[] | null | undefined;
        location?: ({
            type: "Place";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            geo?: ({
                type: "GeoCoordinates";
            } & {
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            'beta:formattedDescription'?: string | null | undefined;
        }) | null | undefined;
        activity?: ({
            type: "Concept";
        } & {
            id?: string | null | undefined;
            inScheme?: string | null | undefined;
            prefLabel?: string | null | undefined;
        })[] | null | undefined;
        'imin:aggregateOffer'?: ({
            type: "imin:AggregateOffer";
        } & {
            publicAdult?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            publicJunior?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            '_imin:entitlementOffersDict'?: Record<string, {
                price: number;
                offerId: string;
            }> | null | undefined;
        }) | null | undefined;
        image?: ({
            type: "ImageObject";
        } & {
            url?: string | null | undefined;
        })[] | null | undefined;
        category?: string[] | null | undefined;
        provider?: ({
            type: "Organization";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            email?: string | null | undefined;
            logo?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            }) | null | undefined;
            sameAs?: string[] | null | undefined;
            isOpenBookingAllowed?: boolean | null | undefined;
        }) | null | undefined;
        attendeeInstructions?: string | null | undefined;
    };
} & {
    offers?: ({
        type: "Offer";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        price?: number | null | undefined;
        priceCurrency?: "GBP" | null | undefined;
        ageRange?: ({
            type: "QuantitativeValue";
        } & {
            maxValue?: number | null | undefined;
            minValue?: number | null | undefined;
        }) | null | undefined;
        acceptedPaymentMethod?: string[] | null | undefined;
        latestCancellationBeforeStartDate?: string | null | undefined;
        validFromBeforeStartDate?: string | null | undefined;
        validThroughBeforeStartDate?: string | null | undefined;
        availableChannel?: string[] | null | undefined;
        prepayment?: string | null | undefined;
        advanceBooking?: string | null | undefined;
        allowCustomerCancellationFullRefund?: boolean | null | undefined;
        openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
        openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        'imin:membershipRequired'?: boolean | null | undefined;
    })[] | null | undefined;
    'imin:aggregateOffer'?: ({
        type: "imin:AggregateOffer";
    } & {
        publicAdult?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        publicJunior?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        '_imin:entitlementOffersDict'?: Record<string, {
            price: number;
            offerId: string;
        }> | null | undefined;
    }) | null | undefined;
    endDate?: string | null | undefined;
    duration?: string | null | undefined;
    'imin:checkoutUrlTemplate'?: string | null | undefined;
} & {
    _stripeConnectedAccountId?: string | null | undefined;
    _gitCommit?: string | null | undefined;
});
export type Opportunity = ({
    type: "Slot";
    id: string;
    identifier: string;
    startDate: string;
    remainingUses: number;
    maximumUses: number;
    facilityUse: {
        name: string;
        type: "FacilityUse";
        id: string;
        identifier: string;
        location: {
            type: "Place";
            address: {
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            };
            geo: {
                type: "GeoCoordinates";
            } & {
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
            };
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            telephone?: string | null | undefined;
            'beta:formattedDescription'?: string | null | undefined;
        };
        _rpdeId: string;
        _providerId: string;
        provider: {
            type: "Organization";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            email?: string | null | undefined;
            logo?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            }) | null | undefined;
            sameAs?: string[] | null | undefined;
            isOpenBookingAllowed?: boolean | null | undefined;
        };
    } & {
        '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        '@context'?: string[] | null | undefined;
        offers?: (({
            type: "Offer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }) | ({
            type: "beta:IndicativeOffer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }))[] | null | undefined;
        activity?: ({
            type: "Concept";
        } & {
            id?: string | null | undefined;
            inScheme?: string | null | undefined;
            prefLabel?: string | null | undefined;
        })[] | null | undefined;
        'imin:aggregateOffer'?: ({
            type: "imin:AggregateOffer";
        } & {
            publicAdult?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            publicJunior?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            '_imin:entitlementOffersDict'?: Record<string, {
                price: number;
                offerId: string;
            }> | null | undefined;
        }) | null | undefined;
        image?: ({
            type: "ImageObject";
        } & {
            url?: string | null | undefined;
        })[] | null | undefined;
        category?: string[] | null | undefined;
        attendeeInstructions?: string | null | undefined;
    };
} & {
    offers?: ({
        type: "Offer";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        price?: number | null | undefined;
        priceCurrency?: "GBP" | null | undefined;
        ageRange?: ({
            type: "QuantitativeValue";
        } & {
            maxValue?: number | null | undefined;
            minValue?: number | null | undefined;
        }) | null | undefined;
        acceptedPaymentMethod?: string[] | null | undefined;
        latestCancellationBeforeStartDate?: string | null | undefined;
        validFromBeforeStartDate?: string | null | undefined;
        validThroughBeforeStartDate?: string | null | undefined;
        availableChannel?: string[] | null | undefined;
        prepayment?: string | null | undefined;
        advanceBooking?: string | null | undefined;
        allowCustomerCancellationFullRefund?: boolean | null | undefined;
        openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
        openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        'imin:membershipRequired'?: boolean | null | undefined;
    })[] | null | undefined;
    'imin:aggregateOffer'?: ({
        type: "imin:AggregateOffer";
    } & {
        publicAdult?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        publicJunior?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        '_imin:entitlementOffersDict'?: Record<string, {
            price: number;
            offerId: string;
        }> | null | undefined;
    }) | null | undefined;
    endDate?: string | null | undefined;
    duration?: string | null | undefined;
    'imin:checkoutUrlTemplate'?: string | null | undefined;
}) | ({
    type: "Slot";
    id: string;
    identifier: string;
    startDate: string;
    remainingUses: number;
    maximumUses: number;
    facilityUse: {
        type: "IndividualFacilityUse";
        facilityUse: {
            name: string;
            type: "FacilityUse";
            id: string;
            identifier: string;
            location: {
                type: "Place";
                address: {
                    type: "PostalAddress";
                } & {
                    addressCountry?: "GB" | null | undefined;
                    postalCode?: string | null | undefined;
                    addressRegion?: string | null | undefined;
                    addressLocality?: string | null | undefined;
                    streetAddress?: string | null | undefined;
                    'imin:fullAddress'?: string | null | undefined;
                };
                geo: {
                    type: "GeoCoordinates";
                } & {
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                };
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                url?: string | null | undefined;
                telephone?: string | null | undefined;
                'beta:formattedDescription'?: string | null | undefined;
            };
            _rpdeId: string;
            _providerId: string;
            provider: {
                type: "Organization";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                url?: string | null | undefined;
                address?: ({
                    type: "PostalAddress";
                } & {
                    addressCountry?: "GB" | null | undefined;
                    postalCode?: string | null | undefined;
                    addressRegion?: string | null | undefined;
                    addressLocality?: string | null | undefined;
                    streetAddress?: string | null | undefined;
                    'imin:fullAddress'?: string | null | undefined;
                }) | null | undefined;
                telephone?: string | null | undefined;
                email?: string | null | undefined;
                logo?: ({
                    type: "ImageObject";
                } & {
                    url?: string | null | undefined;
                }) | null | undefined;
                sameAs?: string[] | null | undefined;
                isOpenBookingAllowed?: boolean | null | undefined;
            };
        } & {
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            '@context'?: string[] | null | undefined;
            offers?: (({
                type: "Offer";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                ageRange?: ({
                    type: "QuantitativeValue";
                } & {
                    maxValue?: number | null | undefined;
                    minValue?: number | null | undefined;
                }) | null | undefined;
                acceptedPaymentMethod?: string[] | null | undefined;
                latestCancellationBeforeStartDate?: string | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                availableChannel?: string[] | null | undefined;
                prepayment?: string | null | undefined;
                advanceBooking?: string | null | undefined;
                allowCustomerCancellationFullRefund?: boolean | null | undefined;
                openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
                openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
            }) | ({
                type: "beta:IndicativeOffer";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                ageRange?: ({
                    type: "QuantitativeValue";
                } & {
                    maxValue?: number | null | undefined;
                    minValue?: number | null | undefined;
                }) | null | undefined;
                acceptedPaymentMethod?: string[] | null | undefined;
                latestCancellationBeforeStartDate?: string | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                availableChannel?: string[] | null | undefined;
                prepayment?: string | null | undefined;
                advanceBooking?: string | null | undefined;
                allowCustomerCancellationFullRefund?: boolean | null | undefined;
                openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
                openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
            }))[] | null | undefined;
            activity?: ({
                type: "Concept";
            } & {
                id?: string | null | undefined;
                inScheme?: string | null | undefined;
                prefLabel?: string | null | undefined;
            })[] | null | undefined;
            'imin:aggregateOffer'?: ({
                type: "imin:AggregateOffer";
            } & {
                publicAdult?: ({
                    type: "AggregateOffer";
                } & {
                    id?: string | null | undefined;
                    price?: number | null | undefined;
                    priceCurrency?: "GBP" | null | undefined;
                    validFromBeforeStartDate?: string | null | undefined;
                    validThroughBeforeStartDate?: string | null | undefined;
                    'imin:membershipRequired'?: boolean | null | undefined;
                    '_imin:isPotentiallyBookable'?: boolean | null | undefined;
                }) | null | undefined;
                publicJunior?: ({
                    type: "AggregateOffer";
                } & {
                    id?: string | null | undefined;
                    price?: number | null | undefined;
                    priceCurrency?: "GBP" | null | undefined;
                    validFromBeforeStartDate?: string | null | undefined;
                    validThroughBeforeStartDate?: string | null | undefined;
                    'imin:membershipRequired'?: boolean | null | undefined;
                    '_imin:isPotentiallyBookable'?: boolean | null | undefined;
                }) | null | undefined;
                '_imin:entitlementOffersDict'?: Record<string, {
                    price: number;
                    offerId: string;
                }> | null | undefined;
            }) | null | undefined;
            image?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            })[] | null | undefined;
            category?: string[] | null | undefined;
            attendeeInstructions?: string | null | undefined;
        };
    } & {
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | null | undefined;
        '@context'?: string[] | null | undefined;
        offers?: (({
            type: "Offer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }) | ({
            type: "beta:IndicativeOffer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }))[] | null | undefined;
        location?: ({
            type: "Place";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            geo?: ({
                type: "GeoCoordinates";
            } & {
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            'beta:formattedDescription'?: string | null | undefined;
        }) | null | undefined;
        activity?: ({
            type: "Concept";
        } & {
            id?: string | null | undefined;
            inScheme?: string | null | undefined;
            prefLabel?: string | null | undefined;
        })[] | null | undefined;
        'imin:aggregateOffer'?: ({
            type: "imin:AggregateOffer";
        } & {
            publicAdult?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            publicJunior?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            '_imin:entitlementOffersDict'?: Record<string, {
                price: number;
                offerId: string;
            }> | null | undefined;
        }) | null | undefined;
        image?: ({
            type: "ImageObject";
        } & {
            url?: string | null | undefined;
        })[] | null | undefined;
        category?: string[] | null | undefined;
        provider?: ({
            type: "Organization";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            email?: string | null | undefined;
            logo?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            }) | null | undefined;
            sameAs?: string[] | null | undefined;
            isOpenBookingAllowed?: boolean | null | undefined;
        }) | null | undefined;
        attendeeInstructions?: string | null | undefined;
    };
} & {
    offers?: ({
        type: "Offer";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        price?: number | null | undefined;
        priceCurrency?: "GBP" | null | undefined;
        ageRange?: ({
            type: "QuantitativeValue";
        } & {
            maxValue?: number | null | undefined;
            minValue?: number | null | undefined;
        }) | null | undefined;
        acceptedPaymentMethod?: string[] | null | undefined;
        latestCancellationBeforeStartDate?: string | null | undefined;
        validFromBeforeStartDate?: string | null | undefined;
        validThroughBeforeStartDate?: string | null | undefined;
        availableChannel?: string[] | null | undefined;
        prepayment?: string | null | undefined;
        advanceBooking?: string | null | undefined;
        allowCustomerCancellationFullRefund?: boolean | null | undefined;
        openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
        openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        'imin:membershipRequired'?: boolean | null | undefined;
    })[] | null | undefined;
    'imin:aggregateOffer'?: ({
        type: "imin:AggregateOffer";
    } & {
        publicAdult?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        publicJunior?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        '_imin:entitlementOffersDict'?: Record<string, {
            price: number;
            offerId: string;
        }> | null | undefined;
    }) | null | undefined;
    endDate?: string | null | undefined;
    duration?: string | null | undefined;
    'imin:checkoutUrlTemplate'?: string | null | undefined;
}) | import("@imin/shared-data-types/src/booking/BsBookableScheduledSession").BsBookableScheduledSessionType | ({
    type: "Slot";
    id: string;
    identifier: string;
    startDate: string;
    remainingUses: number;
    maximumUses: number;
    facilityUse: {
        name: string;
        type: "FacilityUse";
        id: string;
        identifier: string;
        location: {
            type: "Place";
            address: {
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            };
            geo: {
                type: "GeoCoordinates";
            } & {
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
            };
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            telephone?: string | null | undefined;
            'beta:formattedDescription'?: string | null | undefined;
        };
        _rpdeId: string;
        _providerId: string;
        provider: {
            type: "Organization";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            email?: string | null | undefined;
            logo?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            }) | null | undefined;
            sameAs?: string[] | null | undefined;
            isOpenBookingAllowed?: boolean | null | undefined;
        };
    } & {
        '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        '@context'?: string[] | null | undefined;
        offers?: (({
            type: "Offer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }) | ({
            type: "beta:IndicativeOffer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }))[] | null | undefined;
        activity?: ({
            type: "Concept";
        } & {
            id?: string | null | undefined;
            inScheme?: string | null | undefined;
            prefLabel?: string | null | undefined;
        })[] | null | undefined;
        'imin:aggregateOffer'?: ({
            type: "imin:AggregateOffer";
        } & {
            publicAdult?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            publicJunior?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            '_imin:entitlementOffersDict'?: Record<string, {
                price: number;
                offerId: string;
            }> | null | undefined;
        }) | null | undefined;
        image?: ({
            type: "ImageObject";
        } & {
            url?: string | null | undefined;
        })[] | null | undefined;
        category?: string[] | null | undefined;
        attendeeInstructions?: string | null | undefined;
    };
} & {
    offers?: ({
        type: "Offer";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        price?: number | null | undefined;
        priceCurrency?: "GBP" | null | undefined;
        ageRange?: ({
            type: "QuantitativeValue";
        } & {
            maxValue?: number | null | undefined;
            minValue?: number | null | undefined;
        }) | null | undefined;
        acceptedPaymentMethod?: string[] | null | undefined;
        latestCancellationBeforeStartDate?: string | null | undefined;
        validFromBeforeStartDate?: string | null | undefined;
        validThroughBeforeStartDate?: string | null | undefined;
        availableChannel?: string[] | null | undefined;
        prepayment?: string | null | undefined;
        advanceBooking?: string | null | undefined;
        allowCustomerCancellationFullRefund?: boolean | null | undefined;
        openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
        openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        'imin:membershipRequired'?: boolean | null | undefined;
    })[] | null | undefined;
    'imin:aggregateOffer'?: ({
        type: "imin:AggregateOffer";
    } & {
        publicAdult?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        publicJunior?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        '_imin:entitlementOffersDict'?: Record<string, {
            price: number;
            offerId: string;
        }> | null | undefined;
    }) | null | undefined;
    endDate?: string | null | undefined;
    duration?: string | null | undefined;
    'imin:checkoutUrlTemplate'?: string | null | undefined;
} & {
    _stripeConnectedAccountId?: string | null | undefined;
    _gitCommit?: string | null | undefined;
}) | ({
    type: "Slot";
    id: string;
    identifier: string;
    startDate: string;
    remainingUses: number;
    maximumUses: number;
    facilityUse: {
        type: "IndividualFacilityUse";
        facilityUse: {
            name: string;
            type: "FacilityUse";
            id: string;
            identifier: string;
            location: {
                type: "Place";
                address: {
                    type: "PostalAddress";
                } & {
                    addressCountry?: "GB" | null | undefined;
                    postalCode?: string | null | undefined;
                    addressRegion?: string | null | undefined;
                    addressLocality?: string | null | undefined;
                    streetAddress?: string | null | undefined;
                    'imin:fullAddress'?: string | null | undefined;
                };
                geo: {
                    type: "GeoCoordinates";
                } & {
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                };
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                url?: string | null | undefined;
                telephone?: string | null | undefined;
                'beta:formattedDescription'?: string | null | undefined;
            };
            _rpdeId: string;
            _providerId: string;
            provider: {
                type: "Organization";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                url?: string | null | undefined;
                address?: ({
                    type: "PostalAddress";
                } & {
                    addressCountry?: "GB" | null | undefined;
                    postalCode?: string | null | undefined;
                    addressRegion?: string | null | undefined;
                    addressLocality?: string | null | undefined;
                    streetAddress?: string | null | undefined;
                    'imin:fullAddress'?: string | null | undefined;
                }) | null | undefined;
                telephone?: string | null | undefined;
                email?: string | null | undefined;
                logo?: ({
                    type: "ImageObject";
                } & {
                    url?: string | null | undefined;
                }) | null | undefined;
                sameAs?: string[] | null | undefined;
                isOpenBookingAllowed?: boolean | null | undefined;
            };
        } & {
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            '@context'?: string[] | null | undefined;
            offers?: (({
                type: "Offer";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                ageRange?: ({
                    type: "QuantitativeValue";
                } & {
                    maxValue?: number | null | undefined;
                    minValue?: number | null | undefined;
                }) | null | undefined;
                acceptedPaymentMethod?: string[] | null | undefined;
                latestCancellationBeforeStartDate?: string | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                availableChannel?: string[] | null | undefined;
                prepayment?: string | null | undefined;
                advanceBooking?: string | null | undefined;
                allowCustomerCancellationFullRefund?: boolean | null | undefined;
                openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
                openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
            }) | ({
                type: "beta:IndicativeOffer";
            } & {
                description?: string | null | undefined;
                name?: string | null | undefined;
                id?: string | null | undefined;
                identifier?: string | number | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                ageRange?: ({
                    type: "QuantitativeValue";
                } & {
                    maxValue?: number | null | undefined;
                    minValue?: number | null | undefined;
                }) | null | undefined;
                acceptedPaymentMethod?: string[] | null | undefined;
                latestCancellationBeforeStartDate?: string | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                availableChannel?: string[] | null | undefined;
                prepayment?: string | null | undefined;
                advanceBooking?: string | null | undefined;
                allowCustomerCancellationFullRefund?: boolean | null | undefined;
                openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
                openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
            }))[] | null | undefined;
            activity?: ({
                type: "Concept";
            } & {
                id?: string | null | undefined;
                inScheme?: string | null | undefined;
                prefLabel?: string | null | undefined;
            })[] | null | undefined;
            'imin:aggregateOffer'?: ({
                type: "imin:AggregateOffer";
            } & {
                publicAdult?: ({
                    type: "AggregateOffer";
                } & {
                    id?: string | null | undefined;
                    price?: number | null | undefined;
                    priceCurrency?: "GBP" | null | undefined;
                    validFromBeforeStartDate?: string | null | undefined;
                    validThroughBeforeStartDate?: string | null | undefined;
                    'imin:membershipRequired'?: boolean | null | undefined;
                    '_imin:isPotentiallyBookable'?: boolean | null | undefined;
                }) | null | undefined;
                publicJunior?: ({
                    type: "AggregateOffer";
                } & {
                    id?: string | null | undefined;
                    price?: number | null | undefined;
                    priceCurrency?: "GBP" | null | undefined;
                    validFromBeforeStartDate?: string | null | undefined;
                    validThroughBeforeStartDate?: string | null | undefined;
                    'imin:membershipRequired'?: boolean | null | undefined;
                    '_imin:isPotentiallyBookable'?: boolean | null | undefined;
                }) | null | undefined;
                '_imin:entitlementOffersDict'?: Record<string, {
                    price: number;
                    offerId: string;
                }> | null | undefined;
            }) | null | undefined;
            image?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            })[] | null | undefined;
            category?: string[] | null | undefined;
            attendeeInstructions?: string | null | undefined;
        };
    } & {
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | null | undefined;
        '@context'?: string[] | null | undefined;
        offers?: (({
            type: "Offer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }) | ({
            type: "beta:IndicativeOffer";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            ageRange?: ({
                type: "QuantitativeValue";
            } & {
                maxValue?: number | null | undefined;
                minValue?: number | null | undefined;
            }) | null | undefined;
            acceptedPaymentMethod?: string[] | null | undefined;
            latestCancellationBeforeStartDate?: string | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            availableChannel?: string[] | null | undefined;
            prepayment?: string | null | undefined;
            advanceBooking?: string | null | undefined;
            allowCustomerCancellationFullRefund?: boolean | null | undefined;
            openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
            openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
        }))[] | null | undefined;
        location?: ({
            type: "Place";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            geo?: ({
                type: "GeoCoordinates";
            } & {
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            'beta:formattedDescription'?: string | null | undefined;
        }) | null | undefined;
        activity?: ({
            type: "Concept";
        } & {
            id?: string | null | undefined;
            inScheme?: string | null | undefined;
            prefLabel?: string | null | undefined;
        })[] | null | undefined;
        'imin:aggregateOffer'?: ({
            type: "imin:AggregateOffer";
        } & {
            publicAdult?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            publicJunior?: ({
                type: "AggregateOffer";
            } & {
                id?: string | null | undefined;
                price?: number | null | undefined;
                priceCurrency?: "GBP" | null | undefined;
                validFromBeforeStartDate?: string | null | undefined;
                validThroughBeforeStartDate?: string | null | undefined;
                'imin:membershipRequired'?: boolean | null | undefined;
                '_imin:isPotentiallyBookable'?: boolean | null | undefined;
            }) | null | undefined;
            '_imin:entitlementOffersDict'?: Record<string, {
                price: number;
                offerId: string;
            }> | null | undefined;
        }) | null | undefined;
        image?: ({
            type: "ImageObject";
        } & {
            url?: string | null | undefined;
        })[] | null | undefined;
        category?: string[] | null | undefined;
        provider?: ({
            type: "Organization";
        } & {
            description?: string | null | undefined;
            name?: string | null | undefined;
            id?: string | null | undefined;
            identifier?: string | number | null | undefined;
            url?: string | null | undefined;
            address?: ({
                type: "PostalAddress";
            } & {
                addressCountry?: "GB" | null | undefined;
                postalCode?: string | null | undefined;
                addressRegion?: string | null | undefined;
                addressLocality?: string | null | undefined;
                streetAddress?: string | null | undefined;
                'imin:fullAddress'?: string | null | undefined;
            }) | null | undefined;
            telephone?: string | null | undefined;
            email?: string | null | undefined;
            logo?: ({
                type: "ImageObject";
            } & {
                url?: string | null | undefined;
            }) | null | undefined;
            sameAs?: string[] | null | undefined;
            isOpenBookingAllowed?: boolean | null | undefined;
        }) | null | undefined;
        attendeeInstructions?: string | null | undefined;
    };
} & {
    offers?: ({
        type: "Offer";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        price?: number | null | undefined;
        priceCurrency?: "GBP" | null | undefined;
        ageRange?: ({
            type: "QuantitativeValue";
        } & {
            maxValue?: number | null | undefined;
            minValue?: number | null | undefined;
        }) | null | undefined;
        acceptedPaymentMethod?: string[] | null | undefined;
        latestCancellationBeforeStartDate?: string | null | undefined;
        validFromBeforeStartDate?: string | null | undefined;
        validThroughBeforeStartDate?: string | null | undefined;
        availableChannel?: string[] | null | undefined;
        prepayment?: string | null | undefined;
        advanceBooking?: string | null | undefined;
        allowCustomerCancellationFullRefund?: boolean | null | undefined;
        openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
        openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        'imin:membershipRequired'?: boolean | null | undefined;
    })[] | null | undefined;
    'imin:aggregateOffer'?: ({
        type: "imin:AggregateOffer";
    } & {
        publicAdult?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        publicJunior?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        '_imin:entitlementOffersDict'?: Record<string, {
            price: number;
            offerId: string;
        }> | null | undefined;
    }) | null | undefined;
    endDate?: string | null | undefined;
    duration?: string | null | undefined;
    'imin:checkoutUrlTemplate'?: string | null | undefined;
} & {
    _stripeConnectedAccountId?: string | null | undefined;
    _gitCommit?: string | null | undefined;
});
/**
 * // even though this is from the ScS, the FacilityUsePlace is exactly the same model
 */
export type PlaceType = {
    type: "Place";
    address: {
        type: "PostalAddress";
    } & {
        addressCountry?: "GB" | null | undefined;
        postalCode?: string | null | undefined;
        addressRegion?: string | null | undefined;
        addressLocality?: string | null | undefined;
        streetAddress?: string | null | undefined;
        'imin:fullAddress'?: string | null | undefined;
    };
    geo: {
        type: "GeoCoordinates";
    } & {
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    };
} & {
    description?: string | null | undefined;
    name?: string | null | undefined;
    id?: string | null | undefined;
    identifier?: string | number | null | undefined;
    url?: string | null | undefined;
    telephone?: string | null | undefined;
    'beta:formattedDescription'?: string | null | undefined;
};
export type Organizer = ({
    type: "Person";
} & {
    name?: string | null | undefined;
    id?: string | null | undefined;
    identifier?: string | number | null | undefined;
    url?: string | null | undefined;
    telephone?: string | null | undefined;
    givenName?: string | null | undefined;
    familyName?: string | null | undefined;
    email?: string | null | undefined;
    'imin:is13OrOver'?: boolean | null | undefined;
    hasAccount?: string | null | undefined;
}) | ({
    type: "Organization";
} & {
    description?: string | null | undefined;
    name?: string | null | undefined;
    id?: string | null | undefined;
    identifier?: string | number | null | undefined;
    url?: string | null | undefined;
    address?: ({
        type: "PostalAddress";
    } & {
        addressCountry?: "GB" | null | undefined;
        postalCode?: string | null | undefined;
        addressRegion?: string | null | undefined;
        addressLocality?: string | null | undefined;
        streetAddress?: string | null | undefined;
        'imin:fullAddress'?: string | null | undefined;
    }) | null | undefined;
    telephone?: string | null | undefined;
    email?: string | null | undefined;
    logo?: ({
        type: "ImageObject";
    } & {
        url?: string | null | undefined;
    }) | null | undefined;
    sameAs?: string[] | null | undefined;
    isOpenBookingAllowed?: boolean | null | undefined;
});
export type OfferType = {
    type: "Offer";
} & {
    description?: string | null | undefined;
    name?: string | null | undefined;
    id?: string | null | undefined;
    identifier?: string | number | null | undefined;
    price?: number | null | undefined;
    priceCurrency?: "GBP" | null | undefined;
    ageRange?: ({
        type: "QuantitativeValue";
    } & {
        maxValue?: number | null | undefined;
        minValue?: number | null | undefined;
    }) | null | undefined;
    acceptedPaymentMethod?: string[] | null | undefined;
    latestCancellationBeforeStartDate?: string | null | undefined;
    validFromBeforeStartDate?: string | null | undefined;
    validThroughBeforeStartDate?: string | null | undefined;
    availableChannel?: string[] | null | undefined;
    prepayment?: string | null | undefined;
    advanceBooking?: string | null | undefined;
    allowCustomerCancellationFullRefund?: boolean | null | undefined;
    openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
    openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
    openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
    'imin:membershipRequired'?: boolean | null | undefined;
};
export type SearchIsBookingRequestFacilityUseType = {
    name: string;
    type: "FacilityUse";
    id: string;
    identifier: string;
    location: {
        type: "Place";
        address: {
            type: "PostalAddress";
        } & {
            addressCountry?: "GB" | null | undefined;
            postalCode?: string | null | undefined;
            addressRegion?: string | null | undefined;
            addressLocality?: string | null | undefined;
            streetAddress?: string | null | undefined;
            'imin:fullAddress'?: string | null | undefined;
        };
        geo: {
            type: "GeoCoordinates";
        } & {
            latitude?: number | null | undefined;
            longitude?: number | null | undefined;
        };
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        url?: string | null | undefined;
        telephone?: string | null | undefined;
        'beta:formattedDescription'?: string | null | undefined;
    };
    _rpdeId: string;
    _providerId: string;
    provider: {
        type: "Organization";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        url?: string | null | undefined;
        address?: ({
            type: "PostalAddress";
        } & {
            addressCountry?: "GB" | null | undefined;
            postalCode?: string | null | undefined;
            addressRegion?: string | null | undefined;
            addressLocality?: string | null | undefined;
            streetAddress?: string | null | undefined;
            'imin:fullAddress'?: string | null | undefined;
        }) | null | undefined;
        telephone?: string | null | undefined;
        email?: string | null | undefined;
        logo?: ({
            type: "ImageObject";
        } & {
            url?: string | null | undefined;
        }) | null | undefined;
        sameAs?: string[] | null | undefined;
        isOpenBookingAllowed?: boolean | null | undefined;
    };
} & {
    '_imin:isPotentiallyBookable'?: boolean | null | undefined;
    '@context'?: string[] | null | undefined;
    offers?: (({
        type: "Offer";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        price?: number | null | undefined;
        priceCurrency?: "GBP" | null | undefined;
        ageRange?: ({
            type: "QuantitativeValue";
        } & {
            maxValue?: number | null | undefined;
            minValue?: number | null | undefined;
        }) | null | undefined;
        acceptedPaymentMethod?: string[] | null | undefined;
        latestCancellationBeforeStartDate?: string | null | undefined;
        validFromBeforeStartDate?: string | null | undefined;
        validThroughBeforeStartDate?: string | null | undefined;
        availableChannel?: string[] | null | undefined;
        prepayment?: string | null | undefined;
        advanceBooking?: string | null | undefined;
        allowCustomerCancellationFullRefund?: boolean | null | undefined;
        openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
        openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        'imin:membershipRequired'?: boolean | null | undefined;
    }) | ({
        type: "beta:IndicativeOffer";
    } & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        identifier?: string | number | null | undefined;
        price?: number | null | undefined;
        priceCurrency?: "GBP" | null | undefined;
        ageRange?: ({
            type: "QuantitativeValue";
        } & {
            maxValue?: number | null | undefined;
            minValue?: number | null | undefined;
        }) | null | undefined;
        acceptedPaymentMethod?: string[] | null | undefined;
        latestCancellationBeforeStartDate?: string | null | undefined;
        validFromBeforeStartDate?: string | null | undefined;
        validThroughBeforeStartDate?: string | null | undefined;
        availableChannel?: string[] | null | undefined;
        prepayment?: string | null | undefined;
        advanceBooking?: string | null | undefined;
        allowCustomerCancellationFullRefund?: boolean | null | undefined;
        openBookingFlowRequirement?: "https://openactive.io/OpenBookingIntakeForm" | "https://openactive.io/OpenBookingAttendeeDetails" | "https://openactive.io/OpenBookingApproval" | "https://openactive.io/OpenBookingNegotiation" | "https://openactive.io/OpenBookingMessageExchange" | "oa:OpenBookingIntakeForm" | "oa:OpenBookingAttendeeDetails" | "oa:OpenBookingApproval" | "oa:OpenBookingNegotiation" | "oa:OpenBookingMessageExchange" | null | undefined;
        openBookingInAdvance?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        openBookingPrepayment?: "https://openactive.io/Required" | "https://openactive.io/Optional" | "https://openactive.io/Unavailable" | "oa:Required" | "oa:Optional" | "oa:Unavailable" | null | undefined;
        'imin:membershipRequired'?: boolean | null | undefined;
    }))[] | null | undefined;
    activity?: ({
        type: "Concept";
    } & {
        id?: string | null | undefined;
        inScheme?: string | null | undefined;
        prefLabel?: string | null | undefined;
    })[] | null | undefined;
    'imin:aggregateOffer'?: ({
        type: "imin:AggregateOffer";
    } & {
        publicAdult?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        publicJunior?: ({
            type: "AggregateOffer";
        } & {
            id?: string | null | undefined;
            price?: number | null | undefined;
            priceCurrency?: "GBP" | null | undefined;
            validFromBeforeStartDate?: string | null | undefined;
            validThroughBeforeStartDate?: string | null | undefined;
            'imin:membershipRequired'?: boolean | null | undefined;
            '_imin:isPotentiallyBookable'?: boolean | null | undefined;
        }) | null | undefined;
        '_imin:entitlementOffersDict'?: Record<string, {
            price: number;
            offerId: string;
        }> | null | undefined;
    }) | null | undefined;
    image?: ({
        type: "ImageObject";
    } & {
        url?: string | null | undefined;
    })[] | null | undefined;
    category?: string[] | null | undefined;
    attendeeInstructions?: string | null | undefined;
};
export namespace Lenses {
    const seller: R.Lens<import("./genericLenses").ScSLike<{
        organizer: any;
    }> | import("./genericLenses").SlotNoIfuLike<{
        provider: any;
    }> | import("./genericLenses").SlotIfuLike<{
        provider: any;
    }>, any>;
    const providerId: import('ramda').Lens<Opportunity, string>;
    const name: import('ramda').Lens<Opportunity, string>;
    const place: import('ramda').Lens<Opportunity, PlaceType>;
    const facilityUse: import('ramda').Lens<Opportunity, SearchIsBookingRequestFacilityUseType>;
    const offers: import('ramda').Lens<Opportunity, OfferType[]>;
    const aggregateOffer: R.Lens<any, any>;
    const remainingCapacity: import('ramda').Lens<Opportunity, number>;
    const maxCapacity: import('ramda').Lens<Opportunity, number>;
    namespace util {
        const throwErrorIfUsed: import('ramda').Lens<any, any>;
    }
}
import R = require("ramda");
