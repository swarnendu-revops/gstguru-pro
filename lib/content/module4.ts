import type { Module } from "./types";

export const module4: Module = {
  "id": "module-4",
  "number": 4,
  "title": "Place & Time of Supply",
  "summary": "Choose the correct tax head and reporting period for domestic, cross-border and rate-change transactions.",
  "chapters": [
    {
      "id": "4.1",
      "title": "Place of Supply: Goods",
      "roadmap": "Follow movement, delivery instructions and installation facts rather than invoice addresses alone.",
      "keyTerms": [
        {
          "term": "Place of supply",
          "def": "The legally assigned location of the supply."
        },
        {
          "term": "Bill-to/ship-to",
          "def": "One person instructs delivery to another, triggering a statutory deeming rule."
        },
        {
          "term": "Installation supply",
          "def": "Goods assembled or installed at a site, with a specific place-of-supply rule."
        }
      ],
      "explanation": "For goods involving movement, the ordinary rule takes the place where movement terminates for delivery to the recipient. A different rule applies when a third person directs delivery to someone else: section 10(1)(b) can deem the third person's principal place of business to be the place of supply for that leg.\n\nWhen goods do not move, use their location at delivery. Assembly or installation supplies generally follow the installation site. Imports and exports use section 11. Supplies to unregistered persons also have the specific section 10(1)(ca) rule; do not assume the B2B rule always applies to a consumer transaction.\n\nMap each contractual supply separately in a chain. The physical destination can differ from the deemed place of supply on an invoice. Retain purchase orders, recipient instructions, delivery evidence and address particulars to support the tax head.",
      "legalBasis": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Ordinary movement",
          "body": "A Karnataka supplier sells to a Maharashtra registered buyer and movement ends there. Place of supply is Maharashtra; assuming no exception, ₹1,00,000 at assumed 18% gives **₹18,000 IGST**."
        },
        {
          "title": "Third-person instruction",
          "body": "A Delhi business buys from a Maharashtra supplier and instructs shipment to Gujarat. For the supplier-to-Delhi-buyer leg, section 10(1)(b) can deem Delhi the place of supply. Analyse the Delhi business onward leg separately."
        }
      ],
      "nuances": [
        "Different legs may have different places of supply.",
        "Unregistered-recipient goods rules require address review.",
        "Installation location can override an ordinary movement analysis."
      ],
      "recap": [
        "Identify the supply leg.",
        "Select the specific goods rule.",
        "Preserve movement and instruction evidence."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "For ordinary goods movement, place of supply is where:",
          "options": [
            "The website is hosted",
            "Payment occurs",
            "Movement ends for delivery",
            "The bank is located"
          ],
          "correctIndex": 2,
          "explanation": "Section 10(1)(a) uses termination of movement for delivery.",
          "id": "4.1-q1",
          "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
        },
        {
          "type": "tf",
          "question": "In bill-to/ship-to cases the ship-to State always governs every invoice.",
          "correctBool": false,
          "explanation": "The third-person deeming rule can change the place on one leg.",
          "id": "4.1-q2",
          "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
        },
        {
          "type": "numeric",
          "question": "Assumed inter-State value ₹1,00,000 at 18%. IGST in ₹?",
          "correctNumber": 18000,
          "tolerance": 0.01,
          "explanation": "₹1,00,000 × 18% = ₹18,000.",
          "id": "4.1-q3",
          "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
        },
        {
          "type": "mcq",
          "question": "Goods installed at a site ordinarily follow:",
          "options": [
            "The lowest State rate",
            "The directors residence",
            "The bank address",
            "Installation-site rule"
          ],
          "correctIndex": 3,
          "explanation": "A specific installation rule applies.",
          "id": "4.1-q4",
          "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
        }
      ]
    },
    {
      "id": "4.2",
      "title": "Place of Supply: Domestic Services",
      "roadmap": "Start with the domestic default and then test the service-specific rules.",
      "keyTerms": [
        {
          "term": "Registered recipient",
          "def": "A person registered under GST, affecting the default place rule."
        },
        {
          "term": "Immovable-property service",
          "def": "A service with a specific property-location rule where applicable."
        },
        {
          "term": "Recipient location",
          "def": "The statutorily determined location, not always the payment address."
        }
      ],
      "explanation": "Section 12 applies where supplier and recipient are in India. For services without a specific rule, the place is ordinarily the registered recipient's location. For an unregistered recipient, the address-on-record rule applies, otherwise the supplier's location.\n\nSpecific categories can override the default: immovable-property services, restaurant services, performance-based services, event admission/organisation, transport, telecommunications and others. Read the category, recipient status and exceptions carefully. A company cannot automatically claim an inter-State service just because its head-office GSTIN is in another State.\n\nFor hotel accommodation, property location is significant. For event services, admission and organisation can have different rules. Identify what the contract actually supplies before selecting a section. Once place is established, compare it with supplier location under the inter-/intra-State provisions.",
      "legalBasis": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Default B2B service",
          "body": "A Karnataka consultant supplies an ordinary consultancy to a Maharashtra registered business, without a specific override. Place of supply is Maharashtra. At assumed 18% on ₹50,000, IGST is **₹9,000**."
        },
        {
          "title": "Hotel booking",
          "body": "A Maharashtra employee stays at a Karnataka hotel. The accommodation place of supply ordinarily follows the Karnataka property. A Maharashtra GSTIN on the bill does not alone make the hotel charge IGST."
        }
      ],
      "nuances": [
        "Admission is not the same as event organisation.",
        "A foreign property can trigger a special domestic-rule proviso.",
        "Incorrect place of supply can also affect recipient credit."
      ],
      "recap": [
        "Establish whether section 12 applies.",
        "Check specific rules before the default.",
        "Compare supplier location with the legal place."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "For ordinary domestic B2B consultancy without an override, the default place is:",
          "options": [
            "Registered recipient location",
            "Bank branch",
            "Contract signature place",
            "Supplier location"
          ],
          "correctIndex": 0,
          "explanation": "Section 12(2) uses the registered recipient location.",
          "id": "4.2-q1",
          "sectionRef": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8."
        },
        {
          "type": "tf",
          "question": "The recipient GSTIN State always overrides the hotel property location.",
          "correctBool": false,
          "explanation": "Accommodation requires the specific immovable-property rule.",
          "id": "4.2-q2",
          "sectionRef": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8."
        },
        {
          "type": "numeric",
          "question": "Assumed inter-State service value ₹50,000 at 18%. Tax in ₹?",
          "correctNumber": 9000,
          "tolerance": 0.01,
          "explanation": "₹50,000 × 18% = ₹9,000.",
          "id": "4.2-q3",
          "sectionRef": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8."
        },
        {
          "type": "mcq",
          "question": "Before applying the service default, check:",
          "options": [
            "Only tax payment",
            "A specific place-of-supply rule",
            "Only the invoice total",
            "Only profit margin"
          ],
          "correctIndex": 1,
          "explanation": "Specific section 12 categories can override the default.",
          "id": "4.2-q4",
          "sectionRef": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8."
        }
      ]
    },
    {
      "id": "4.3",
      "title": "Cross-border Services & the Tax Head",
      "roadmap": "Apply section 13 and determine why a foreign customer does not automatically create an export.",
      "keyTerms": [
        {
          "term": "Section 13",
          "def": "The place-of-supply framework where supplier or recipient is outside India."
        },
        {
          "term": "Intermediary",
          "def": "A person arranging or facilitating a supply between others, with a statutory own-account exclusion."
        },
        {
          "term": "Export of services",
          "def": "A supply meeting all conditions in IGST Act section 2(6)."
        }
      ],
      "explanation": "For cross-border services, section 13 ordinarily starts with recipient location, subject to specific rules and address availability. Performance-linked services, immovable property, events, intermediary services and certain other categories require separate treatment.\n\nAn intermediary arranges or facilitates another supply; a provider supplying the service on its own account is excluded from that definition. Read the contract and responsibility for the deliverable instead of classifying every overseas commission or outsourced service identically.\n\nExport status requires more than a foreign invoice: supplier in India, recipient outside India, place outside India, receipt in convertible foreign exchange or permitted Indian rupees, and satisfaction of the distinct-establishment condition. The Finance Act 2026 includes a change concerning section 13(8)(b); verify its notified commencement before relying on either version for a particular period. Do not assume an enacted amendment has already commenced.",
      "legalBasis": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Own-account service",
          "body": "Assume an Indian software supplier delivers its own service to a US recipient, the default place is abroad, payment conditions are satisfied and establishments are not disqualifying distinct establishments. A ₹2,00,000 invoice can qualify as zero-rated."
        },
        {
          "title": "Classification boundary",
          "body": "An Indian business merely arranges a supply between two others for ₹25,000 commission. First resolve the intermediary definition and the period-applicable section 13 rule; do not mark the receipt as an export solely because the payer is abroad."
        }
      ],
      "nuances": [
        "Foreign currency receipt alone does not establish export.",
        "Intermediary status needs contract-level facts.",
        "Track the 2026 amendment and its commencement explicitly."
      ],
      "recap": [
        "Use the cross-border service framework.",
        "Test all export conditions.",
        "Verify the applicable version of special rules."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which fact alone establishes export of services?",
          "options": [
            "A foreign client",
            "A foreign-currency receipt",
            "Neither alone",
            "An English invoice"
          ],
          "correctIndex": 2,
          "explanation": "Every statutory export condition must be satisfied.",
          "id": "4.3-q1",
          "sectionRef": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment."
        },
        {
          "type": "tf",
          "question": "A provider supplying its own service necessarily becomes an intermediary.",
          "correctBool": false,
          "explanation": "The definition has an own-account exclusion.",
          "id": "4.3-q2",
          "sectionRef": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment."
        },
        {
          "type": "mcq",
          "question": "Section 13 generally concerns:",
          "options": [
            "Only goods",
            "Only composition",
            "Both parties in India only",
            "Supplier or recipient outside India"
          ],
          "correctIndex": 3,
          "explanation": "It is the cross-border services place framework.",
          "id": "4.3-q3",
          "sectionRef": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment."
        },
        {
          "type": "mcq",
          "question": "An enacted 2026 change with uncertain commencement should be:",
          "options": [
            "Checked against its commencement notification",
            "Ignored forever",
            "Replaced by a blog",
            "Applied automatically"
          ],
          "correctIndex": 0,
          "explanation": "The applicable legal version depends on commencement.",
          "id": "4.3-q4",
          "sectionRef": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment."
        }
      ]
    },
    {
      "id": "4.4",
      "title": "Time of Supply & Rate Changes",
      "roadmap": "Determine the tax period before applying a rate or filing a return.",
      "keyTerms": [
        {
          "term": "Time of supply",
          "def": "The statutory point when tax liability arises."
        },
        {
          "term": "Advance",
          "def": "Payment before supply, with treatment differing by supply and notification."
        },
        {
          "term": "Rate-change rule",
          "def": "Section 14 coordinates supply, invoice and payment around a rate change."
        }
      ],
      "explanation": "Goods and services have different time rules under sections 12 and 13. Invoice timing, payment and the actual supply can matter differently. Relief from tax on advances for qualifying goods supplies is notification-based; do not transfer it automatically to service advances.\n\nRCM has separate time rules involving receipt/payment and statutory invoice-based fallback periods. Associated-enterprise cross-border services have an additional book-entry/payment rule. Build the chronology before choosing the relevant tax month.\n\nFor a rate change, section 14 specifically overrides ordinary time rules and tests whether supply occurred before or after the change, together with invoice and payment dates. For illustration, where supply occurs before a rate change and both invoice and payment occur afterward, the earlier post-change invoice/payment date is used. Avoid deciding only from the delivery date. Keep a dated rate-transition worksheet.",
      "legalBasis": "CGST Act sections 12, 13 and 14; relevant advance-relief notification. [Official rate-change FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf).\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Service advance",
          "body": "Assume a taxable service advance of ₹50,000 exclusive of GST and a period-applicable rate of 18%, with no special exception. Tax on the advance is **₹9,000** under the applicable service time rule."
        },
        {
          "title": "Transition chronology",
          "body": "Supply is on 20 September; rate changes on 22 September; invoice is 24 September and payment is 26 September. Under the stated section 14(a)(i) pattern, time of supply is **24 September**. Establish the rate notified for that date."
        }
      ],
      "nuances": [
        "Goods advance relief is not general relief for services.",
        "RCM fallback clocks differ for goods and services.",
        "Section 14 needs three dates, not one."
      ],
      "recap": [
        "Write the chronology.",
        "Choose the appropriate time rule.",
        "Apply the period-valid notification."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A rate-change analysis generally requires:",
          "options": [
            "Only supply date",
            "Supply, invoice and payment dates",
            "Only year-end date",
            "Only GSTIN"
          ],
          "correctIndex": 1,
          "explanation": "Section 14 compares all three relevant events.",
          "id": "4.4-q1",
          "sectionRef": "CGST Act sections 12, 13 and 14; relevant advance-relief notification. [Official rate-change FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        },
        {
          "type": "tf",
          "question": "Advance relief for qualifying goods automatically exempts service advances.",
          "correctBool": false,
          "explanation": "Goods notification relief cannot be assumed for services.",
          "id": "4.4-q2",
          "sectionRef": "CGST Act sections 12, 13 and 14; relevant advance-relief notification. [Official rate-change FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        },
        {
          "type": "numeric",
          "question": "Service advance ₹50,000 exclusive of GST at assumed 18%, no exception. GST in ₹?",
          "correctNumber": 9000,
          "tolerance": 0.01,
          "explanation": "₹50,000 × 18% = ₹9,000.",
          "id": "4.4-q3",
          "sectionRef": "CGST Act sections 12, 13 and 14; relevant advance-relief notification. [Official rate-change FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        },
        {
          "type": "mcq",
          "question": "Supply before change; invoice and payment after change. Under the stated pattern, use:",
          "options": [
            "Always annual return date",
            "Always later payment",
            "Earlier of invoice/payment",
            "Always supply date"
          ],
          "correctIndex": 2,
          "explanation": "Section 14(a)(i) takes the earlier invoice or payment date.",
          "id": "4.4-q4",
          "sectionRef": "CGST Act sections 12, 13 and 14; relevant advance-relief notification. [Official rate-change FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        }
      ]
    }
  ],
  "moduleQuiz": [
    {
      "type": "mcq",
      "question": "A buyer directs a supplier to deliver goods to a third party. What should be analysed?",
      "options": [
        "Only the payment date",
        "Only ITC balance",
        "Only the truck destination",
        "Section 10(1)(b) and each supply leg"
      ],
      "correctIndex": 3,
      "explanation": "Map deemed place of supply and separate onward supply.",
      "id": "m4-q1",
      "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
    },
    {
      "type": "tf",
      "question": "A consumer goods supply may require section 10(1)(ca) analysis.",
      "correctBool": true,
      "explanation": "The unregistered-person rule must be considered where applicable.",
      "id": "m4-q2",
      "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
    },
    {
      "type": "mcq",
      "question": "A hotel in Karnataka bills a Maharashtra GSTIN. Which fact primarily guides accommodation place of supply?",
      "options": [
        "The hotel property location",
        "The payer bank State",
        "The head office State alone",
        "The booking website"
      ],
      "correctIndex": 0,
      "explanation": "Apply section 12(3) to the accommodation.",
      "id": "m4-q3",
      "sectionRef": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8."
    },
    {
      "type": "tf",
      "question": "Event admission and event organisation necessarily have identical place rules.",
      "correctBool": false,
      "explanation": "They are addressed separately and can produce different results.",
      "id": "m4-q4",
      "sectionRef": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8."
    },
    {
      "type": "mcq",
      "question": "An Indian consultant receives foreign currency but place of supply is in India under an applicable special rule. Export status?",
      "options": [
        "Automatic export",
        "Not established; place-outside condition fails",
        "Always exempt",
        "Depends only on PAN"
      ],
      "correctIndex": 1,
      "explanation": "Export requires place of supply outside India among other conditions.",
      "id": "m4-q5",
      "sectionRef": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment."
    },
    {
      "type": "tf",
      "question": "A supplier can verify export treatment without checking payment and establishment conditions.",
      "correctBool": false,
      "explanation": "Those are statutory export tests.",
      "id": "m4-q6",
      "sectionRef": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment."
    },
    {
      "type": "mcq",
      "question": "Supply 20 September, rate change 22nd, invoice 24th, payment 26th. Under section 14(a)(i), time of supply?",
      "options": [
        "20th",
        "22nd",
        "24th",
        "26th"
      ],
      "correctIndex": 2,
      "explanation": "Both later events are after the change; the earlier is the invoice on the 24th.",
      "id": "m4-q7",
      "sectionRef": "CGST Act sections 12, 13 and 14; relevant advance-relief notification. [Official rate-change FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
    },
    {
      "type": "tf",
      "question": "RCM and forward-charge time-of-supply rules are interchangeable.",
      "correctBool": false,
      "explanation": "RCM has its own statutory timing rules.",
      "id": "m4-q8",
      "sectionRef": "CGST Act sections 12, 13 and 14; relevant advance-relief notification. [Official rate-change FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
    }
  ]
};
