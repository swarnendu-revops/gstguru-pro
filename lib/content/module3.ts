import type { Module } from "./types";

export const module3: Module = {
  "id": "module-3",
  "number": 3,
  "title": "Registration & Composition",
  "summary": "Work out liability to register, PAN-based turnover, multi-State registrations, and the consequences of choosing composition.",
  "chapters": [
    {
      "id": "3.1",
      "title": "Aggregate Turnover & Registration",
      "roadmap": "Use the correct turnover base and check compulsory-registration exceptions.",
      "keyTerms": [
        {
          "term": "Aggregate turnover",
          "def": "PAN-wide turnover including taxable, exempt, export and inter-State supplies, with statutory exclusions."
        },
        {
          "term": "GSTIN",
          "def": "The registration number associated with a particular GST registration."
        },
        {
          "term": "Threshold",
          "def": "A registration limit dependent on State, supply mix and notification conditions."
        }
      ],
      "explanation": "Registration is not decided from one store's taxable sales alone. Aggregate turnover is computed across India for the same PAN. It includes exempt supplies and exports, while excluding GST amounts and inward supplies on which tax is payable by the recipient under RCM.\n\nCheck section 22, applicable threshold notifications, the State and the actual supply mix. Higher relief for exclusive suppliers of goods is conditional; it is not a universal limit for everyone. Section 23 and notified exemptions must be considered alongside section 24 compulsory categories. Inter-State services and certain e-commerce supplies have specific conditional reliefs, so \"every inter-State sale needs registration\" is too broad.\n\nPrepare a turnover bridge from the accounts and a written registration matrix by State and activity. Even below a threshold, voluntary registration brings the usual duties and potential credit entitlement, subject to the law.",
      "legalBasis": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "PAN-wide computation",
          "body": "One PAN has ₹12 lakh taxable sales, ₹6 lakh exempt sales and ₹4 lakh exports across locations. Aggregate turnover is **₹22 lakh**, excluding GST. Compare that amount with the correctly identified applicable threshold."
        },
        {
          "title": "RCM exclusion",
          "body": "Outward supplies are ₹18 lakh and inward RCM purchases are ₹3 lakh. Assuming no other turnover, aggregate turnover remains **₹18 lakh**; the inward RCM amount is excluded from this base."
        }
      ],
      "nuances": [
        "Goods-only threshold relief has conditions and State exclusions.",
        "Export receipts are not excluded from aggregate turnover.",
        "Compulsory categories can have notified exemptions."
      ],
      "recap": [
        "Compute PAN-wide turnover.",
        "Use the applicable State and supply conditions.",
        "Read threshold and compulsory rules together."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Aggregate turnover is generally computed:",
          "options": [
            "Per invoice",
            "Across India for the same PAN",
            "Only per warehouse",
            "Only on profits"
          ],
          "correctIndex": 1,
          "explanation": "The statutory turnover definition is PAN-wide.",
          "id": "3.1-q1",
          "sectionRef": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications."
        },
        {
          "type": "tf",
          "question": "Exports are excluded from aggregate turnover.",
          "correctBool": false,
          "explanation": "Exports are included, though qualifying exports may be zero-rated.",
          "id": "3.1-q2",
          "sectionRef": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications."
        },
        {
          "type": "numeric",
          "question": "Taxable sales ₹12 lakh, exempt sales ₹6 lakh and exports ₹4 lakh. Aggregate turnover in ₹?",
          "correctNumber": 2200000,
          "tolerance": 0.01,
          "explanation": "₹12 lakh + ₹6 lakh + ₹4 lakh = ₹22 lakh.",
          "id": "3.1-q3",
          "sectionRef": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications."
        },
        {
          "type": "mcq",
          "question": "Which is excluded from the aggregate turnover calculation?",
          "options": [
            "Exports",
            "Exempt sales",
            "GST charged",
            "Inter-State sales"
          ],
          "correctIndex": 2,
          "explanation": "GST and specified inward RCM supplies are excluded.",
          "id": "3.1-q4",
          "sectionRef": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications."
        }
      ]
    },
    {
      "id": "3.2",
      "title": "Registration Procedure & Distinct Persons",
      "roadmap": "Turn a liability conclusion into the right registrations and documentary record.",
      "keyTerms": [
        {
          "term": "Principal place of business",
          "def": "The main business location stated in the registration."
        },
        {
          "term": "Additional place",
          "def": "Another declared business location under the registration."
        },
        {
          "term": "Casual taxable person",
          "def": "A person making occasional supplies where no fixed place of business exists."
        }
      ],
      "explanation": "Ordinarily registration is State/UT based. A business supplying from fixed establishments in more than one State must analyse each establishment's registration requirement. Within a State, additional places can belong to the same registration, while separate registrations may be permitted subject to the rules.\n\nThe application needs accurate legal name, PAN, business constitution, addresses, authorised signatory and evidence supporting occupation of premises. Follow the currently applicable authentication or verification process, respond to clarification requests, and preserve the acknowledgement and certificate.\n\nA casual taxable person and a non-resident taxable person have special registration, validity and advance-tax requirements; ordinary threshold logic cannot simply be copied into those cases. Once registered, map GSTINs to invoice series, locations and reporting systems. An additional warehouse in the same State is not automatically a separate taxable person.",
      "legalBasis": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Two States",
          "body": "A company has supplying offices in Karnataka and Maharashtra. Analyse registration in both States. If both obtain registrations, transactions between the GSTINs can involve distinct persons despite one PAN."
        },
        {
          "title": "Same-State warehouse",
          "body": "A registered trader opens a second warehouse in the same State. If maintained as an additional place under the same GSTIN, it is not automatically a distinct registration. Update particulars and maintain movement records."
        }
      ],
      "nuances": [
        "Different GSTINs require separate return controls.",
        "Registration authenticity does not prove every vendor invoice is genuine.",
        "Special-category applicants may need advance deposits."
      ],
      "recap": [
        "Identify where supplies are made from.",
        "Support the application with accurate documents.",
        "Map every GSTIN to operational records."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A registration certificate is ordinarily issued in:",
          "options": [
            "GSTR-3B",
            "DRC-07",
            "RFD-01",
            "REG-06"
          ],
          "correctIndex": 3,
          "explanation": "REG-06 is the registration certificate.",
          "id": "3.2-q1",
          "sectionRef": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate."
        },
        {
          "type": "tf",
          "question": "Every additional warehouse within the same State requires its own GSTIN.",
          "correctBool": false,
          "explanation": "It can be an additional place under an existing registration, subject to the facts.",
          "id": "3.2-q2",
          "sectionRef": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate."
        },
        {
          "type": "mcq",
          "question": "Separate State GSTINs with one PAN are ordinarily:",
          "options": [
            "Distinct persons",
            "The same GSTIN",
            "Outside supply",
            "Always unregistered"
          ],
          "correctIndex": 0,
          "explanation": "Section 25 provides distinct-person treatment.",
          "id": "3.2-q3",
          "sectionRef": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate."
        },
        {
          "type": "mcq",
          "question": "A casual taxable person must consider:",
          "options": [
            "Only profit",
            "Special registration and advance-tax rules",
            "Only annual filing",
            "No compliance"
          ],
          "correctIndex": 1,
          "explanation": "Sections 24 and 27 provide a special framework.",
          "id": "3.2-q4",
          "sectionRef": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate."
        }
      ]
    },
    {
      "id": "3.3",
      "title": "Composition Levy",
      "roadmap": "Compare administrative simplicity with lost credit and restrictions.",
      "keyTerms": [
        {
          "term": "Composition levy",
          "def": "A conditional alternative tax mechanism for eligible small taxpayers."
        },
        {
          "term": "Bill of supply",
          "def": "The document used instead of a tax invoice for exempt or composition supplies."
        },
        {
          "term": "Tax collection restriction",
          "def": "A composition taxpayer cannot separately collect GST from the customer."
        }
      ],
      "explanation": "Composition changes both economics and compliance. A section 10 taxpayer cannot avail ITC or separately collect tax. Customers do not obtain ordinary input credit on composition purchases. The business issues a bill of supply and pays the prescribed levy using cash.\n\nEligibility depends on PAN-linked turnover, the relevant limit, nature of supply, business exclusions and other conditions. Section 10(1) and the separate section 10(2A) framework are not interchangeable. Service allowances and inter-State outward-supply restrictions require reading the precise provision. Conditional intra-State goods supplies through e-commerce operators have been enabled; older material saying all e-commerce is prohibited is too broad.\n\nModel gross margin, lost inward credit, customer credit expectations and growth before opting in. Test eligibility throughout the year and manage the consequences of crossing a limit or breaching a condition. Never assume that a low turnover alone qualifies an otherwise excluded business.",
      "legalBasis": "CGST Act section 10; CGST Rules 3–7; applicable composition and e-commerce notifications.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Illustrative levy",
          "body": "Assume an eligible trader has ₹10,00,000 of the applicable levy base and an assumed combined composition rate of 1%. Cash levy is **₹10,000**. This assumed rate does not establish eligibility or the actual prescribed base."
        },
        {
          "title": "Credit cost",
          "body": "A composition business pays ₹18,000 GST on inward purchases. It cannot take ordinary ITC, so this is generally a cost. The absence of separate tax collection does not make the cost disappear."
        }
      ],
      "nuances": [
        "Inter-State outward supplies and exemptions need exact eligibility review.",
        "All registrations on one PAN must be considered together.",
        "Customers cannot treat a bill of supply as an ITC tax invoice."
      ],
      "recap": [
        "Composition is conditional.",
        "No ordinary ITC or separate tax collection.",
        "Compare commercial costs before opting."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A composition taxpayer normally issues:",
          "options": [
            "Shipping bill only",
            "No document",
            "Bill of supply",
            "An ITC-bearing tax invoice"
          ],
          "correctIndex": 2,
          "explanation": "Composition supplies are documented by a bill of supply.",
          "id": "3.3-q1",
          "sectionRef": "CGST Act section 10; CGST Rules 3–7; applicable composition and e-commerce notifications."
        },
        {
          "type": "tf",
          "question": "A composition taxpayer can claim normal ITC on all business purchases.",
          "correctBool": false,
          "explanation": "Section 10 restricts ITC.",
          "id": "3.3-q2",
          "sectionRef": "CGST Act section 10; CGST Rules 3–7; applicable composition and e-commerce notifications."
        },
        {
          "type": "numeric",
          "question": "Assume a 1% combined levy on an applicable ₹10,00,000 base. Tax in ₹?",
          "correctNumber": 10000,
          "tolerance": 0.01,
          "explanation": "₹10,00,000 × 1% = ₹10,000.",
          "id": "3.3-q3",
          "sectionRef": "CGST Act section 10; CGST Rules 3–7; applicable composition and e-commerce notifications."
        },
        {
          "type": "mcq",
          "question": "Which is a key composition consequence?",
          "options": [
            "Unlimited inter-State supplies",
            "Automatic refund of input GST",
            "Separately collect all GST",
            "No separate tax collection"
          ],
          "correctIndex": 3,
          "explanation": "A composition taxpayer cannot collect tax separately from customers.",
          "id": "3.3-q4",
          "sectionRef": "CGST Act section 10; CGST Rules 3–7; applicable composition and e-commerce notifications."
        }
      ]
    },
    {
      "id": "3.4",
      "title": "Amendment, Cancellation & Revocation",
      "roadmap": "Keep registration status aligned with business facts and manage exit obligations.",
      "keyTerms": [
        {
          "term": "Cancellation",
          "def": "Termination of GST registration through the prescribed procedure."
        },
        {
          "term": "Revocation",
          "def": "Restoration of an officer-cancelled registration when legal conditions are met."
        },
        {
          "term": "Final return",
          "def": "A prescribed closing return for applicable cancelled registrations."
        }
      ],
      "explanation": "A change in business address, signatory or other particulars may need an amendment. A change in PAN usually cannot be handled as a simple amendment because registration is PAN-linked. Business closure, transfer or statutory defaults can lead to cancellation, but cancellation does not erase earlier liabilities.\n\nReview stock and capital-goods consequences under section 29(5), outstanding returns and applicable final-return obligations. Respond to show-cause notices rather than assuming that an application alone closes the registration. Suspension and cancellation can affect the ability to issue valid taxable invoices.\n\nRevocation applies to prescribed officer-initiated cancellations, not every voluntary closure. Its application deadlines, extension provisions and return-filing requirements must be checked in the current rules. Special ITC relief on restored registrations under section 16(6) also has specific timing conditions. Maintain a cancellation chronology and a written closure checklist.",
      "legalBasis": "CGST Act sections 16(6), 28–30 and 45; CGST Rules 19–23 and 81.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "PAN change",
          "body": "A proprietor incorporates a company with a different PAN. Analyse fresh registration and the legal business transfer; do not merely overwrite the old registration name."
        },
        {
          "title": "Closing stock liability",
          "body": "Assume the legally determined stock/capital-goods credit reversal amount is ₹24,000 and the relevant output-tax amount for section 29(5) comparison is ₹30,000. Under the higher-of test on these facts, payable amount is **₹30,000**."
        }
      ],
      "nuances": [
        "Cancellation can be retrospective and must be examined for its consequences.",
        "Earlier tax, interest and filing duties can survive cancellation.",
        "Use current revocation deadlines rather than an old fixed-day checklist."
      ],
      "recap": [
        "Amend particulars promptly.",
        "Cancellation does not erase liabilities.",
        "Differentiate revocation from fresh registration."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A change of PAN generally calls for:",
          "options": [
            "Fresh registration analysis",
            "No action",
            "Changing the bank name",
            "Only an address amendment"
          ],
          "correctIndex": 0,
          "explanation": "GST registration is linked to PAN.",
          "id": "3.4-q1",
          "sectionRef": "CGST Act sections 16(6), 28–30 and 45; CGST Rules 19–23 and 81."
        },
        {
          "type": "tf",
          "question": "Cancellation automatically waives all prior GST liability.",
          "correctBool": false,
          "explanation": "Past liabilities survive cancellation under the Act.",
          "id": "3.4-q2",
          "sectionRef": "CGST Act sections 16(6), 28–30 and 45; CGST Rules 19–23 and 81."
        },
        {
          "type": "numeric",
          "question": "Applicable section 29(5) comparison amounts are ₹24,000 and ₹30,000. Higher amount in ₹?",
          "correctNumber": 30000,
          "tolerance": 0.01,
          "explanation": "On these assumptions, the higher amount is ₹30,000.",
          "id": "3.4-q3",
          "sectionRef": "CGST Act sections 16(6), 28–30 and 45; CGST Rules 19–23 and 81."
        },
        {
          "type": "mcq",
          "question": "Revocation ordinarily concerns:",
          "options": [
            "Annual return only",
            "Officer-cancelled registration",
            "Every voluntary closure automatically",
            "Invoice cancellation"
          ],
          "correctIndex": 1,
          "explanation": "Section 30 governs revocation of officer cancellation.",
          "id": "3.4-q4",
          "sectionRef": "CGST Act sections 16(6), 28–30 and 45; CGST Rules 19–23 and 81."
        }
      ]
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "One PAN has taxable sales ₹8 lakh in State A, ₹9 lakh in State B and exempt sales ₹5 lakh. Aggregate turnover in ₹?",
      "correctNumber": 2200000,
      "tolerance": 0.01,
      "explanation": "₹8 lakh + ₹9 lakh + ₹5 lakh = ₹22 lakh.",
      "id": "m3-q1",
      "sectionRef": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications."
    },
    {
      "type": "mcq",
      "question": "A service exporter below the normal threshold asks whether registration is mandatory. Best response?",
      "options": [
        "Use net profit",
        "Always yes without exception",
        "Review section 24 and the applicable services exemption",
        "Exports never count"
      ],
      "correctIndex": 2,
      "explanation": "Notified relief must be checked alongside compulsory-registration provisions.",
      "id": "m3-q2",
      "sectionRef": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications."
    },
    {
      "type": "mcq",
      "question": "A business supplies from fixed establishments in two States. Its registration plan should:",
      "options": [
        "Use only the warehouse address",
        "Ignore PAN",
        "Consider only the head office",
        "Assess both establishments and State-wise requirements"
      ],
      "correctIndex": 3,
      "explanation": "Analyse each supplying establishment and the applicable provisions.",
      "id": "m3-q3",
      "sectionRef": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate."
    },
    {
      "type": "tf",
      "question": "Adding a same-State warehouse under the same GSTIN automatically creates a distinct person.",
      "correctBool": false,
      "explanation": "Distinct-person treatment follows separate registrations, not each listed place.",
      "id": "m3-q4",
      "sectionRef": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate."
    },
    {
      "type": "numeric",
      "question": "Assume composition levy ₹10,000 plus inward GST of ₹18,000 with no ITC. Combined levy and uncredited input-tax cost in ₹?",
      "correctNumber": 28000,
      "tolerance": 0.01,
      "explanation": "₹10,000 + ₹18,000 = ₹28,000, before other costs.",
      "id": "m3-q5",
      "sectionRef": "CGST Act section 10; CGST Rules 3–7; applicable composition and e-commerce notifications."
    },
    {
      "type": "mcq",
      "question": "A trader wants composition while selling goods through an operator. What should be checked?",
      "options": [
        "Current conditional permissions and intra-State restrictions",
        "Ignore section 10",
        "Only website revenue",
        "Assume all e-commerce is prohibited"
      ],
      "correctIndex": 0,
      "explanation": "The earlier blanket prohibition has changed; conditional rules apply.",
      "id": "m3-q6",
      "sectionRef": "CGST Act section 10; CGST Rules 3–7; applicable composition and e-commerce notifications."
    },
    {
      "type": "mcq",
      "question": "A trader closes business while holding stock with past ITC. Which issue needs review?",
      "options": [
        "Only shop keys",
        "Section 29(5), outstanding filings and final return",
        "Only new stationery",
        "No GST consequences"
      ],
      "correctIndex": 1,
      "explanation": "Closing inventory and filing duties must be addressed.",
      "id": "m3-q7",
      "sectionRef": "CGST Act sections 16(6), 28–30 and 45; CGST Rules 19–23 and 81."
    },
    {
      "type": "tf",
      "question": "A PAN-changing restructuring is always dealt with by amending the old GSTIN.",
      "correctBool": false,
      "explanation": "Fresh registration and transfer provisions need review.",
      "id": "m3-q8",
      "sectionRef": "CGST Act sections 16(6), 28–30 and 45; CGST Rules 19–23 and 81."
    }
  ]
};
