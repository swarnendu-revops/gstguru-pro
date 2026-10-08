import type { Module } from "./types";

export const module4: Module = {
  "id": "module-4",
  "number": 4,
  "title": "Place & Time of Supply",
  "summary": "Use practical location and date examples to choose the tax type and reporting period.",
  "chapters": [
    {
      "id": "4.1",
      "title": "Place of Supply: Goods",
      "roadmap": "Find where a goods supply is treated as happening, then choose the tax type.",
      "keyTerms": [
        {
          "term": "Place of supply",
          "def": "The location the law assigns to a particular supply. Comparing it with the supplier’s location helps choose IGST or CGST plus SGST."
        },
        {
          "term": "Bill-to/ship-to",
          "def": "An arrangement where one person buys the goods and instructs delivery to someone else."
        },
        {
          "term": "Installation supply",
          "def": "Goods supplied for assembly or installation at a site; that site generally matters for the location rule."
        }
      ],
      "explanation": "### 1. Start with ordinary goods delivery\nWhen goods move for delivery to the recipient, the usual place of supply is where that movement ends. Compare that place with the supplier’s location. Different States ordinarily mean IGST; the same State ordinarily means CGST plus SGST, subject to exceptions.\n\n### 2. Separate the buyer from the delivery address\nIf a third person orders goods and directs delivery elsewhere, the special bill-to/ship-to rule can assign the buyer’s main business location to that supply. Then examine the buyer’s own onward supply separately.\n\n### 3. Check other goods situations\nIf goods do not move, their location when delivered matters. Installation usually follows the installation site. Imports and exports have special rules. Consumer purchases from unregistered recipients also have a specific address rule, so do not copy a registered-business rule into every retail case.\n\n### 4. Draw each sale as its own arrow\nWrite seller → buyer for each contract, alongside the physical movement. Keep the purchase order and delivery instruction. This prevents mixing two sales into one location decision.",
      "legalBasis": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Karnataka seller, Maharashtra delivery",
          "body": "Assume an ordinary sale to a registered Maharashtra buyer, ending delivery there, worth ₹1,00,000 at 18%.\n\n1. Place of supply: Maharashtra.\n2. Supplier location: Karnataka.\n3. Different States: **₹18,000 IGST** on these facts."
        },
        {
          "title": "A Delhi buyer directs a Gujarat delivery",
          "body": "A Maharashtra supplier sells to a Delhi business, which instructs delivery to Gujarat.\n\n1. Identify the supplier-to-Delhi-buyer contract.\n2. The special rule can assign Delhi as the place of supply for that leg.\n3. Analyse the Delhi business’s onward sale separately.\n\nThe truck’s destination is not the answer for both contracts."
        }
      ],
      "nuances": [
        "Place of supply is a legal location, not always the delivery address.",
        "Bill-to/ship-to arrangements can contain separate supplies.",
        "Registered-business and consumer rules can differ."
      ],
      "recap": [
        "Find the applicable goods-location rule.",
        "Compare place of supply with supplier location.",
        "Keep each contractual sale separate."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "For an ordinary goods sale involving movement, the usual place of supply is where what happens?",
          "options": [
            "The website is hosted",
            "Payment occurs",
            "The goods finish their movement for delivery",
            "The bank is located"
          ],
          "correctIndex": 2,
          "explanation": "Section 10(1)(a) uses termination of movement for delivery.",
          "id": "4.1-q1",
          "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
        },
        {
          "type": "tf",
          "question": "When a buyer directs delivery to someone else, the shipping State always determines the place of supply for every contract in the chain.",
          "correctBool": false,
          "explanation": "The third-person deeming rule can change the place on one leg.",
          "id": "4.1-q2",
          "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
        },
        {
          "type": "numeric",
          "question": "Assume an ordinary inter-State goods supply is ₹1,00,000 before GST at 18%. What is the IGST, in rupees?",
          "correctNumber": 18000,
          "tolerance": 0.01,
          "explanation": "₹1,00,000 × 18% = ₹18,000.",
          "id": "4.1-q3",
          "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
        },
        {
          "type": "mcq",
          "question": "For goods supplied for installation at a site, which location rule ordinarily matters?",
          "options": [
            "The lowest State rate",
            "The directors residence",
            "The bank address",
            "The rule using the installation site"
          ],
          "correctIndex": 3,
          "explanation": "A specific installation rule applies.",
          "id": "4.1-q4",
          "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
        }
      ],
      "learningGoal": "Find where a goods supply is treated as happening, then choose the tax type.",
      "story": "Asha in Karnataka sells goods delivered to Maharashtra. On another order, a Delhi buyer asks a Maharashtra seller to send goods directly to Gujarat. The shipping address alone does not answer every GST location question.",
      "selfCheck": {
        "question": "Why can goods delivered to Gujarat have Delhi as the place of supply on one leg?",
        "answer": "A Delhi buyer may direct that delivery, triggering the special bill-to/ship-to rule for the seller’s supply to that buyer."
      }
    },
    {
      "id": "4.2",
      "title": "Place of Supply: Domestic Services",
      "roadmap": "Use the right location rule for an Indian service, including exceptions such as hotel stays.",
      "keyTerms": [
        {
          "term": "Registered recipient",
          "def": "The customer receiving the service who has a GST registration."
        },
        {
          "term": "Recipient location",
          "def": "The customer’s location determined under the legal rules; it is not automatically the address of any office you choose."
        },
        {
          "term": "Immovable-property service",
          "def": "A service connected with fixed property, such as accommodation in a hotel or work on a building."
        }
      ],
      "explanation": "### 1. Check that this is a domestic-service case\nHere the supplier and recipient are in India. For an ordinary service without a special rule, the registered customer’s location is usually the place of supply.\n\n### 2. Check an unregistered customer’s address\nUnder the default rule, use the unregistered customer’s address on record where available; otherwise the supplier’s location. Keep the supporting customer information.\n\n### 3. Ask whether a special category overrides the default\nProperty, restaurants, events, transport and other specified services have special rules. A hotel stay usually follows the property location. Event admission and organising an event can have different rules, even though both involve the same event.\n\n### 4. Choose the tax after choosing the location\nCompare the legally determined place of supply with supplier location. A company giving its head-office GSTIN does not automatically convert every service it buys elsewhere into an inter-State service.",
      "legalBasis": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "An ordinary design or consultancy service",
          "body": "Assume a Karnataka consultant serves a registered Maharashtra business, no special rule applies, and the fee is ₹50,000 at 18%.\n\n1. Default place of supply: Maharashtra.\n2. Compare with Karnataka supplier location.\n3. GST = **₹9,000 IGST**."
        },
        {
          "title": "A hotel stay in Karnataka",
          "body": "A Maharashtra employee stays at a Karnataka hotel.\n\n1. Identify the service as accommodation connected with property.\n2. The place of supply ordinarily follows the Karnataka hotel.\n3. A Maharashtra GSTIN on the bill does not, by itself, require IGST."
        }
      ],
      "nuances": [
        "Find the service category before choosing the default rule.",
        "A head-office GSTIN does not override a special place-of-supply rule.",
        "Different services associated with one event can have different treatment."
      ],
      "recap": [
        "Default business-service rules use customer location.",
        "Special services may use property or performance location.",
        "Choose the tax type after checking the rule."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "For ordinary consulting between Indian businesses, with a registered customer and no special rule, which location is normally used?",
          "options": [
            "The registered customer’s legally determined location",
            "Bank branch",
            "Contract signature place",
            "Supplier location"
          ],
          "correctIndex": 0,
          "explanation": "Section 12(2) uses the registered customer/receiving business location.",
          "id": "4.2-q1",
          "sectionRef": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8."
        },
        {
          "type": "tf",
          "question": "A hotel customer's GSTIN State always overrides the location of the hotel property.",
          "correctBool": false,
          "explanation": "Accommodation requires the specific immovable-property rule.",
          "id": "4.2-q2",
          "sectionRef": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8."
        },
        {
          "type": "numeric",
          "question": "Assume a taxable inter-State service is ₹50,000 before GST at 18%. What is the GST, in rupees?",
          "correctNumber": 9000,
          "tolerance": 0.01,
          "explanation": "₹50,000 × 18% = ₹9,000.",
          "id": "4.2-q3",
          "sectionRef": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8."
        },
        {
          "type": "mcq",
          "question": "Before using the default service-location rule, what should you check?",
          "options": [
            "Only tax payment",
            "Whether this service has a special location rule",
            "Only the invoice total",
            "Only profit margin"
          ],
          "correctIndex": 1,
          "explanation": "Specific section 12 categories can override the default.",
          "id": "4.2-q4",
          "sectionRef": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8."
        }
      ],
      "learningGoal": "Use the right location rule for an Indian service, including exceptions such as hotel stays.",
      "story": "Dev in Karnataka designs a logo for a registered Maharashtra customer. Later that customer books a Karnataka hotel. Both are services, but the hotel follows a property-based rule rather than the ordinary business-service rule.",
      "selfCheck": {
        "question": "Why is a Maharashtra company’s Karnataka hotel bill not automatically inter-State?",
        "answer": "Hotel accommodation generally follows the property location, rather than simply the customer’s head-office registration."
      }
    },
    {
      "id": "4.3",
      "title": "Cross-border Services & the Tax Head",
      "roadmap": "Understand why a foreign customer or foreign payment does not automatically make a service an export.",
      "keyTerms": [
        {
          "term": "Section 13",
          "def": "The numbered part of the IGST Act dealing with service location where the supplier or recipient is outside India."
        },
        {
          "term": "Intermediary",
          "def": "Someone arranging or helping a supply between other parties, rather than supplying that underlying service on their own account."
        },
        {
          "term": "Export of services",
          "def": "A service meeting all the legal export conditions, including location, payment and establishment tests."
        }
      ],
      "explanation": "### 1. Find what you actually promised to do\nDelivering your own software service differs from arranging a sale between two other businesses. Read who is responsible for the deliverable. A commission label or outsourcing arrangement does not alone settle the classification.\n\n### 2. Apply the cross-border location rule\nThe default generally starts with customer location, but specified services have special rules. Work tied to property, events or performance needs its own check. Intermediary treatment also needs the version of the rule for the relevant period.\n\n### 3. Test every export condition\nFor a service export, establish an Indian supplier, an overseas recipient, a place of supply outside India, qualifying foreign-currency or RBI-permitted rupee payment, and the required establishment distinction. The RBI is India’s central bank. Supplying your own overseas branch can fail that last condition.\n\n### 4. Check amendment timing\nThe Finance Act 2026 includes an intermediary-rule change. Check when the relevant provision starts before applying it. A passed amendment and an effective amendment are not always the same.",
      "legalBasis": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Delivering your own software service",
          "body": "Assume Dev’s ₹2,00,000 service meets every export condition.\n\n1. He supplies the software service on his own account.\n2. The applicable place of supply is outside India.\n3. Payment and establishment conditions are satisfied.\n4. The service can qualify for zero-rated treatment; choose the permitted export route separately."
        },
        {
          "title": "Only arranging someone else’s supply",
          "body": "A business receives ₹25,000 commission for arranging a supply between two other parties.\n\n1. Check whether it is an intermediary.\n2. Find the location rule effective for the transaction period.\n3. Test the export conditions using that result.\n\nAn overseas payer does not skip these steps."
        }
      ],
      "nuances": [
        "Foreign currency alone does not prove an export.",
        "Own-account service and arranging another party’s supply are different.",
        "Check the start date of the 2026 intermediary amendment."
      ],
      "recap": [
        "Read the contract and deliverable.",
        "Establish the legally assigned service location.",
        "Test all export conditions together."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which fact, by itself, proves that a service is an export?",
          "options": [
            "A foreign client",
            "A foreign-currency receipt",
            "Neither alone",
            "An English invoice"
          ],
          "correctIndex": 2,
          "explanation": "Every legal export condition must be satisfied.",
          "id": "4.3-q1",
          "sectionRef": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment."
        },
        {
          "type": "tf",
          "question": "Someone delivering their own service is automatically an intermediary arranging another person's supply.",
          "correctBool": false,
          "explanation": "The definition has an own-account exclusion.",
          "id": "4.3-q2",
          "sectionRef": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment."
        },
        {
          "type": "mcq",
          "question": "Section 13 provides service-location rules for which broad situation?",
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
          "question": "A 2026 amendment has been passed but its start date is uncertain. What should you do?",
          "options": [
            "Checked against the official start-date document",
            "Ignored forever",
            "Replaced by a blog",
            "Applied automatically"
          ],
          "correctIndex": 0,
          "explanation": "The applicable legal version depends on start date.",
          "id": "4.3-q4",
          "sectionRef": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment."
        }
      ],
      "learningGoal": "Understand why a foreign customer or foreign payment does not automatically make a service an export.",
      "story": "Dev creates software for a US customer. His friend only introduces an overseas buyer to another seller and earns commission. They both receive overseas money, but their contracts may fall under different GST location rules.",
      "selfCheck": {
        "question": "Is an overseas commission payment automatically a service export?",
        "answer": "No. First classify the work and apply the period’s place-of-supply rule, then check all export conditions."
      }
    },
    {
      "id": "4.4",
      "title": "Time of Supply & Rate Changes",
      "roadmap": "Build a date timeline to find when GST is due and handle a rate change.",
      "keyTerms": [
        {
          "term": "Time of supply",
          "def": "The date GST rules use to decide when tax becomes due for a supply."
        },
        {
          "term": "Advance",
          "def": "Payment received before the goods or service are fully supplied."
        },
        {
          "term": "Rate-change rule",
          "def": "Special timing rules for transactions crossing a GST rate-change date."
        }
      ],
      "explanation": "### 1. Write down three dates\nRecord the supply date, invoice date and payment date. Goods and services have different timing rules. Some continuing arrangements need additional checks. An invoice is the formal sales bill.\n\n### 2. Check advances separately\nQualifying goods supplies can have notification-based relief for advances. Do not automatically apply that relief to service advances. A taxable service advance can bring tax forward before work is finished.\n\n### 3. Check reverse-charge timing separately\nWhen the buyer pays GST under reverse charge, payment, receipt and statutory invoice-based fallback dates can matter differently. Certain services involving connected overseas businesses also have a special book-entry/payment rule. Build the facts before choosing the month.\n\n### 4. Use the special rule for a rate transition\nSection 14 compares supply, invoice and payment dates around a rate change. It can override ordinary timing. Do not choose the rate using delivery date alone; find the rule for that particular date pattern.",
      "legalBasis": "CGST Act sections 12, 13 and 14; relevant advance-relief notification. [Official rate-change FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf).\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Advance for a taxable service",
          "body": "Assume Dev receives ₹50,000 before tax for a taxable service at 18%, and the applicable timing rule taxes this advance.\n\n1. Advance value: ₹50,000.\n2. GST = ₹50,000 × 18% = **₹9,000**.\n3. Report it in the period required by that rule, not automatically when work finishes."
        },
        {
          "title": "A sale crossing a rate-change date",
          "body": "Supply: 20 September. Rate change: 22 September. Invoice: 24 September. Payment: 26 September.\n\n1. Supply is before the change; both invoice and payment are after it.\n2. Under the stated special rule, choose the earlier invoice/payment date: **24 September**.\n3. Check the rate effective for that date and the conditions.\n\nOther date patterns can have different results."
        }
      ],
      "nuances": [
        "Service advances and goods advances can differ.",
        "Reverse-charge timing is a separate check.",
        "Do not decide a rate-transition case from delivery alone."
      ],
      "recap": [
        "Record supply, bill and payment dates.",
        "Choose the goods/service/reverse-charge timing rule.",
        "Use the special transition rule when rates change."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which dates do you generally need to check a transaction crossing a GST rate change?",
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
          "question": "Relief for advances on qualifying goods automatically removes GST on every service advance too.",
          "correctBool": false,
          "explanation": "Goods notification relief cannot be assumed for services.",
          "id": "4.4-q2",
          "sectionRef": "CGST Act sections 12, 13 and 14; relevant advance-relief notification. [Official rate-change FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        },
        {
          "type": "numeric",
          "question": "Assume a taxable service advance is ₹50,000 before GST, taxable now at 18%, with no exception. What is GST on the advance, in rupees?",
          "correctNumber": 9000,
          "tolerance": 0.01,
          "explanation": "₹50,000 × 18% = ₹9,000.",
          "id": "4.4-q3",
          "sectionRef": "CGST Act sections 12, 13 and 14; relevant advance-relief notification. [Official rate-change FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        },
        {
          "type": "mcq",
          "question": "Supply occurs before a rate change; invoice and payment are both afterward. Under the stated special timing pattern, which date is used?",
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
      ],
      "learningGoal": "Build a date timeline to find when GST is due and handle a rate change.",
      "story": "Dev receives an advance before completing a service. Another customer receives goods before a rate change but is billed afterward. GST needs a timeline, not just a guess based on delivery day.",
      "selfCheck": {
        "question": "Why is a timeline useful before calculating GST?",
        "answer": "The relevant date decides the reporting period and can also affect which rate applies during a rate change."
      }
    }
  ],
  "moduleQuiz": [
    {
      "type": "mcq",
      "question": "A buyer instructs a supplier to deliver goods to someone else. What should you analyse?",
      "options": [
        "Only the payment date",
        "Only ITC balance",
        "Only the truck destination",
        "The bill-to/ship-to rule and each separate seller-to-buyer supply"
      ],
      "correctIndex": 3,
      "explanation": "Map deemed place of supply and separate onward supply.",
      "id": "m4-q1",
      "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
    },
    {
      "type": "tf",
      "question": "A sale of goods to an unregistered consumer can have a specific location rule under section 10(1)(ca).",
      "correctBool": true,
      "explanation": "The unregistered-person rule must be considered where applicable.",
      "id": "m4-q2",
      "sectionRef": "IGST Act sections 10 and 11; section 10(1)(ca) for specified unregistered-person supplies."
    },
    {
      "type": "mcq",
      "question": "A Karnataka hotel bills a customer with a Maharashtra GSTIN. Which fact primarily determines the accommodation's place of supply?",
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
      "question": "Entry to an event and organising that event must always use identical service-location rules.",
      "correctBool": false,
      "explanation": "They are addressed separately and can produce different results.",
      "id": "m4-q4",
      "sectionRef": "IGST Act section 12, especially sections 12(2), 12(3), 12(6) and 12(7); sections 7 and 8."
    },
    {
      "type": "mcq",
      "question": "An Indian consultant receives foreign currency, but the applicable special rule puts the service's place of supply in India. Does that establish an export?",
      "options": [
        "Automatic export",
        "No; the required place-outside-India condition is not met",
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
      "question": "You can verify service-export status without checking the payment or establishment conditions.",
      "correctBool": false,
      "explanation": "Those are legal export tests.",
      "id": "m4-q6",
      "sectionRef": "IGST Act sections 2(6), 2(13), 7, 8 and 13; check commencement of the Finance Act 2026 section 13 amendment."
    },
    {
      "type": "mcq",
      "question": "Supply is 20 September, rate changes on the 22nd, invoice is the 24th and payment the 26th. Under the taught supply-before/invoice-and-payment-after pattern, what is the time of supply?",
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
      "question": "Buyer reverse-charge timing rules and ordinary seller-charge timing rules can always be used interchangeably.",
      "correctBool": false,
      "explanation": "RCM has its own legal timing rules.",
      "id": "m4-q8",
      "sectionRef": "CGST Act sections 12, 13 and 14; relevant advance-relief notification. [Official rate-change FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
    }
  ]
};
