import type { Module } from "./types";

export const module3: Module = {
  "id": "module-3",
  "number": 3,
  "title": "Registration & Composition",
  "summary": "Work out which sales count for registration and what the small-business composition option changes.",
  "chapters": [
    {
      "id": "3.1",
      "title": "Aggregate Turnover & Registration",
      "roadmap": "Add up the right sales amounts before deciding whether a business needs GST registration.",
      "keyTerms": [
        {
          "term": "Aggregate turnover",
          "def": "The sales total GST uses for certain eligibility tests, added across India for one PAN. It includes taxable sales, exempt sales and exports, with specified exclusions."
        },
        {
          "term": "PAN",
          "def": "Permanent Account Number: the tax identity used to connect the same business’s activities across locations."
        },
        {
          "term": "GSTIN",
          "def": "Goods and Services Tax Identification Number: the number given to a GST registration."
        },
        {
          "term": "Threshold",
          "def": "A limit that helps decide whether registration is required. The applicable limit depends on the State, supply type and legal conditions."
        }
      ],
      "explanation": "### 1. Add sales across the same PAN\nTurnover means sales or supply value, not profit or money left in the bank. For aggregate turnover, combine the relevant activities across India under the same PAN. Include exempt sales and exports as well as taxable sales.\n\n### 2. Remove amounts that do not belong\nGST charged on sales is excluded from this turnover total. Purchases on which you pay reverse-charge tax are also excluded: they are purchases, not your sales.\n\n### 3. Find the applicable registration rule\nDo not compare every business to one universal number. The State, goods/services mix and notification conditions matter. Some categories require registration irrespective of the ordinary turnover test; some have specific relief. Inter-State and online sales need their own category check.\n\n### 4. Understand the choice to register voluntarily\nVoluntary registration can bring credit eligibility, but it also brings invoicing, payment and filing duties. Record the reason for the decision rather than treating registration as just getting a number.",
      "legalBasis": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Two shops, one PAN",
          "body": "Assume taxable sales of ₹12 lakh, exempt sales of ₹6 lakh and exports of ₹4 lakh.\n\n1. Add them: 12 + 6 + 4 = **₹22 lakh**.\n2. Exclude GST itself.\n3. Compare ₹22 lakh with the limit and other registration rules that actually apply to this business.\n\n₹22 lakh is the computed total, not a universal registration threshold."
        },
        {
          "title": "Purchases are not sales",
          "body": "A business has ₹18 lakh outward supplies and ₹3 lakh purchases covered by reverse charge.\n\n1. Start with the sales/supplies: ₹18 lakh.\n2. Do not add the reverse-charge purchases.\n3. Aggregate turnover on these facts remains **₹18 lakh**."
        }
      ],
      "nuances": [
        "Turnover is not profit.",
        "Exempt sales and exports can count in the registration total.",
        "A low total does not override every compulsory-registration category."
      ],
      "recap": [
        "Combine relevant supplies under one PAN.",
        "Exclude GST amounts and inward reverse-charge purchases.",
        "Use the applicable limit and category rules."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "How is aggregate turnover normally added up?",
          "options": [
            "Per invoice",
            "Across India for the same PAN",
            "Only per warehouse",
            "Only on profits"
          ],
          "correctIndex": 1,
          "explanation": "The legal turnover definition is PAN-wide.",
          "id": "3.1-q1",
          "sectionRef": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications."
        },
        {
          "type": "tf",
          "question": "Exports are left out of aggregate turnover.",
          "correctBool": false,
          "explanation": "Exports are included, though qualifying exports may be zero-rated.",
          "id": "3.1-q2",
          "sectionRef": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications."
        },
        {
          "type": "numeric",
          "question": "One PAN has ₹12 lakh taxable sales, ₹6 lakh exempt sales and ₹4 lakh exports, excluding GST. What is aggregate turnover, in rupees?",
          "correctNumber": 2200000,
          "tolerance": 0.01,
          "explanation": "₹12 lakh + ₹6 lakh + ₹4 lakh = ₹22 lakh.",
          "id": "3.1-q3",
          "sectionRef": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications."
        },
        {
          "type": "mcq",
          "question": "Which amount is excluded when adding aggregate turnover?",
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
      ],
      "learningGoal": "Add up the right sales amounts before deciding whether a business needs GST registration.",
      "story": "Asha owns two shops under the same business PAN. One sells taxable goods; the other also sells exempt goods. Looking at one shop’s taxable sales alone can give the wrong answer about registration.",
      "selfCheck": {
        "question": "Why can Asha not check just one shop’s taxable sales?",
        "answer": "Aggregate turnover connects relevant supplies across India under the same PAN, including exempt sales and exports."
      }
    },
    {
      "id": "3.2",
      "title": "Registration Procedure & Distinct Persons",
      "roadmap": "Understand what a GST registration covers and what information an application needs.",
      "keyTerms": [
        {
          "term": "Principal place of business",
          "def": "The main business address declared for a GST registration."
        },
        {
          "term": "Additional place",
          "def": "Another declared business location covered by that registration, such as a warehouse."
        },
        {
          "term": "Authorised signatory",
          "def": "The person permitted to submit and sign GST documents for the business."
        },
        {
          "term": "Casual taxable person",
          "def": "Someone making occasional supplies in a State or territory where they have no fixed business place; special rules apply."
        }
      ],
      "explanation": "### 1. Map the places you supply from\nGST registration is normally State or Union-territory based. An office supplying from another State needs its own registration analysis. Within one State, locations can sometimes be covered as additional places under one registration; permitted separate registrations need a separate check.\n\n### 2. Gather identity and address evidence\nThe application needs the legal business name, PAN, business type, addresses and signatory details. Keep documents showing the right to use the premises. Use the current identity-verification process and respond to requests for clarification.\n\n### 3. Save the approval and use the correct number\nAfter approval, save the registration certificate (form REG-06) and acknowledgement. Match the GSTIN to the right location, invoice series and return records. Separate registrations may be treated as distinct persons for transfers between them.\n\n### 4. Check temporary or overseas business cases separately\nA casual taxable person or a non-resident taxable person has special validity and advance-tax requirements. Do not apply an ordinary permanent-shop checklist without checking those rules.",
      "legalBasis": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Offices in two States",
          "body": "A business has supplying offices in Karnataka and Maharashtra.\n\n1. Review the registration requirement for each State.\n2. If each has a registration, give each office the correct GSTIN and invoice records.\n3. Review transfers between them as possible distinct-person supplies."
        },
        {
          "title": "A same-State warehouse",
          "body": "Asha adds a warehouse in the same State under the existing GSTIN.\n\n1. Check that it can be declared as an additional place.\n2. Update the registration details and keep movement records.\n3. It is not automatically a separate GST person merely because it has another address."
        }
      ],
      "nuances": [
        "A second address is not automatically a second GSTIN.",
        "A supplying office in another State needs a State-specific review.",
        "Temporary and non-resident businesses have special requirements."
      ],
      "recap": [
        "Map locations before applying.",
        "Keep identity, premises and signatory documents.",
        "Use the correct registration for each supply."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "What is the GST form REG-06?",
          "options": [
            "The summary payment return",
            "An export-refund application",
            "A sales invoice",
            "Your GST registration certificate"
          ],
          "correctIndex": 3,
          "explanation": "REG-06 is the GST registration certificate. It records the approved registration details.",
          "id": "3.2-q1",
          "sectionRef": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate."
        },
        {
          "type": "tf",
          "question": "Every extra warehouse in the same State must have its own GSTIN.",
          "correctBool": false,
          "explanation": "It can be an additional place under an existing registration, subject to the facts.",
          "id": "3.2-q2",
          "sectionRef": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate."
        },
        {
          "type": "mcq",
          "question": "How are separate State GST registrations under one PAN ordinarily treated?",
          "options": [
            "Separate GST persons, despite common ownership",
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
          "question": "A business occasionally supplying where it has no fixed business place (a casual taxable person) needs to check what?",
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
      ],
      "learningGoal": "Understand what a GST registration covers and what information an application needs.",
      "story": "Asha opens another warehouse in the same State and later an office supplying customers in another State. The first may fit within an existing registration; the second needs a separate State-level registration review.",
      "selfCheck": {
        "question": "Does a second warehouse always need a separate registration?",
        "answer": "No. A same-State warehouse can be an additional place under the same registration, depending on the rules and arrangement."
      }
    },
    {
      "id": "3.3",
      "title": "Composition Levy",
      "roadmap": "Understand the trade-off behind the simpler composition system for eligible small businesses.",
      "keyTerms": [
        {
          "term": "Composition levy",
          "def": "An alternative GST payment system for eligible small businesses, with specific limits and restrictions."
        },
        {
          "term": "Bill of supply",
          "def": "The sales document used for composition or exempt supplies instead of an ordinary tax invoice."
        },
        {
          "term": "Tax collection restriction",
          "def": "A composition business cannot separately charge its customer GST."
        },
        {
          "term": "Input tax credit",
          "def": "Eligible purchase GST used to reduce normal sales GST. Composition taxpayers cannot take this ordinary credit."
        }
      ],
      "explanation": "### 1. Understand what changes\nUnder composition, the business pays the prescribed levy using cash. It cannot separately collect GST from customers and cannot take ordinary purchase-tax credit. Its customer also does not get ordinary credit from a composition purchase.\n\n### 2. Check eligibility before calculating\nTurnover under the same PAN, business type and supply conditions matter. The ordinary composition provision and the separate small-service-business framework have different rules. Inter-State outward supplies are restricted. Some intra-State goods sales through online operators are permitted subject to conditions; an old blanket ban is too broad.\n\n### 3. Compare the whole cost\nPurchase GST that cannot be credited may become a business cost. Business customers who expect credit may prefer ordinary tax invoices. Compare these effects with filing simplicity and the applicable levy.\n\n### 4. Keep checking as the business grows\nCrossing a limit or breaking a condition can change eligibility during the year. Composition is an ongoing conditional system, not a one-time promise attached to a low turnover.",
      "legalBasis": "CGST Act section 10; CGST Rules 3–7; applicable composition and e-commerce notifications.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "A simplified levy calculation",
          "body": "Assume a trader is eligible, its correct levy base is ₹10,00,000 and the exercise rate is 1%.\n\n1. Levy = ₹10,00,000 × 1% = **₹10,000**.\n2. Pay it using cash under the scheme.\n3. Do not add it as a separately collected GST charge on the customer’s bill.\n\nThe assumed rate/base do not prove actual eligibility."
        },
        {
          "title": "Purchase GST becomes a cost",
          "body": "A composition business pays ₹18,000 GST on purchases.\n\n1. It cannot use ordinary purchase-tax credit.\n2. The ₹18,000 generally remains a cost.\n3. Include that cost when comparing composition with normal GST."
        }
      ],
      "nuances": [
        "Low turnover alone does not establish eligibility.",
        "Composition is not ordinary GST at a lower rate.",
        "Check customer credit needs and growth plans before choosing."
      ],
      "recap": [
        "Composition has eligibility conditions.",
        "No separate customer GST collection or ordinary purchase credit.",
        "Compare total cost, not only the percentage rate."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which sales document does a composition business normally issue?",
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
          "question": "A composition business can claim ordinary purchase-tax credit on all business purchases.",
          "correctBool": false,
          "explanation": "Section 10 restricts purchase credit (ITC).",
          "id": "3.3-q2",
          "sectionRef": "CGST Act section 10; CGST Rules 3–7; applicable composition and e-commerce notifications."
        },
        {
          "type": "numeric",
          "question": "Assume an eligible business has the correct composition levy base of ₹10,00,000 at an exercise rate of 1%. What is the levy, in rupees?",
          "correctNumber": 10000,
          "tolerance": 0.01,
          "explanation": "₹10,00,000 × 1% = ₹10,000.",
          "id": "3.3-q3",
          "sectionRef": "CGST Act section 10; CGST Rules 3–7; applicable composition and e-commerce notifications."
        },
        {
          "type": "mcq",
          "question": "Which restriction is a key part of the composition system?",
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
      ],
      "learningGoal": "Understand the trade-off behind the simpler composition system for eligible small businesses.",
      "story": "Asha hears that composition can simplify GST. She wants to compare it with normal registration. The useful question is not just “Is the rate lower?” but also “What happens to my purchase credit and my customer’s bill?”",
      "selfCheck": {
        "question": "Why might composition be less attractive than it first looks?",
        "answer": "Losing purchase credit can increase cost, and business customers do not get ordinary credit on composition purchases."
      }
    },
    {
      "id": "3.4",
      "title": "Amendment, Cancellation & Revocation",
      "roadmap": "Know what to update, what closing a registration means, and when restoration is possible.",
      "keyTerms": [
        {
          "term": "Amendment",
          "def": "Updating permitted details in an existing registration, such as an address or signatory."
        },
        {
          "term": "Cancellation",
          "def": "Ending a GST registration. Earlier unpaid tax and filing duties can still remain."
        },
        {
          "term": "Revocation",
          "def": "Restoring a registration cancelled by an officer, through the permitted process and conditions."
        },
        {
          "term": "Final return",
          "def": "A closing GST return required in applicable cancellation cases."
        }
      ],
      "explanation": "### 1. Identify what changed\nAn address change can need an amendment. A change to the business’s PAN usually needs a fresh registration analysis rather than editing the old name. PAN means the underlying tax identity.\n\n### 2. Treat closure as a checklist\nCheck pending returns, unpaid amounts, goods still held and equipment on which credit was claimed. Cancellation does not erase the old obligations. Follow the notice/application process and applicable final-return requirements.\n\n### 3. Check the tax on closing stock\nThe cancellation rules can require comparing specified purchase-credit and output-tax amounts. Use the prescribed calculation; do not assume remaining stock has no GST consequence because trading has stopped.\n\n### 4. Restore only through the relevant process\nRevocation is for prescribed officer-initiated cancellations, not every voluntary closure. Check application timing, required returns and special credit-restoration conditions. Keep the dates and documents in order.",
      "legalBasis": "CGST Act sections 16(6), 28–30 and 45; CGST Rules 19–23 and 81.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Changing the legal business identity",
          "body": "A sole proprietor forms a company with a different PAN.\n\n1. Recognise that the tax identity has changed.\n2. Review fresh registration and the business-transfer rules.\n3. Do not simply replace the name on the proprietor’s old GSTIN."
        },
        {
          "title": "Closing-stock comparison",
          "body": "Assume the relevant cancellation calculation gives ₹24,000 credit-related amount and ₹30,000 output-tax amount, with a higher-of rule applying.\n\n1. Compare ₹24,000 and ₹30,000.\n2. The higher amount is **₹30,000**.\n3. Follow the required payment/reporting procedure."
        }
      ],
      "nuances": [
        "Cancellation does not wipe out earlier dues.",
        "A PAN change is usually more than an address-style amendment.",
        "Restoration requires the relevant cancellation type, deadlines and conditions."
      ],
      "recap": [
        "Match the process to the change.",
        "Check stock, returns and unpaid amounts on closure.",
        "Keep cancellation and restoration dates documented."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "The business changes to a different PAN. What is the appropriate starting point?",
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
          "question": "Cancelling registration automatically removes every old GST amount owed.",
          "correctBool": false,
          "explanation": "Past liabilities survive cancellation under the Act.",
          "id": "3.4-q2",
          "sectionRef": "CGST Act sections 16(6), 28–30 and 45; CGST Rules 19–23 and 81."
        },
        {
          "type": "numeric",
          "question": "Assume a cancellation calculation requires the higher of ₹24,000 and ₹30,000. What amount applies, in rupees?",
          "correctNumber": 30000,
          "tolerance": 0.01,
          "explanation": "On these assumptions, the higher amount is ₹30,000.",
          "id": "3.4-q3",
          "sectionRef": "CGST Act sections 16(6), 28–30 and 45; CGST Rules 19–23 and 81."
        },
        {
          "type": "mcq",
          "question": "Which situation does registration revocation normally address?",
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
      ],
      "learningGoal": "Know what to update, what closing a registration means, and when restoration is possible.",
      "story": "Asha changes her shop address. Later she considers closing the business. Updating an address, cancelling a registration and restoring an officer-cancelled registration are three different processes.",
      "selfCheck": {
        "question": "Can a closed GST registration still have old tax to pay?",
        "answer": "Yes. Cancellation ends registration but does not erase liabilities from earlier periods."
      }
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "One PAN has ₹8 lakh taxable sales in State A, ₹9 lakh in State B and ₹5 lakh exempt sales, excluding GST. What is aggregate turnover, in rupees?",
      "correctNumber": 2200000,
      "tolerance": 0.01,
      "explanation": "₹8 lakh + ₹9 lakh + ₹5 lakh = ₹22 lakh.",
      "id": "m3-q1",
      "sectionRef": "CGST Act sections 2(6), 22, 23, 24 and 25; applicable registration-exemption notifications."
    },
    {
      "type": "mcq",
      "question": "A service exporter below the normal turnover limit asks whether registration is compulsory. What is the sound response?",
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
      "question": "A business supplies from fixed offices in two States. What should its registration review cover?",
      "options": [
        "Use only the warehouse address",
        "Ignore PAN",
        "Consider only the head office",
        "Check registration for each supplying office and State"
      ],
      "correctIndex": 3,
      "explanation": "Analyse each supplying establishment and the applicable provisions.",
      "id": "m3-q3",
      "sectionRef": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate."
    },
    {
      "type": "tf",
      "question": "Adding a warehouse under the same State GSTIN automatically creates a distinct GST person.",
      "correctBool": false,
      "explanation": "Distinct-person treatment follows separate registrations, not each listed place.",
      "id": "m3-q4",
      "sectionRef": "CGST Act sections 24–27; CGST Rules 8–18. REG-01 application and REG-06 certificate."
    },
    {
      "type": "numeric",
      "question": "Assume composition levy ₹10,000 and purchase GST ₹18,000 with no credit. What is their combined tax cost, before other costs, in rupees?",
      "correctNumber": 28000,
      "tolerance": 0.01,
      "explanation": "₹10,000 + ₹18,000 = ₹28,000, before other costs.",
      "id": "m3-q5",
      "sectionRef": "CGST Act section 10; CGST Rules 3–7; applicable composition and e-commerce notifications."
    },
    {
      "type": "mcq",
      "question": "A trader wants composition while selling through an online operator. What should be checked?",
      "options": [
        "The current permitted cases, conditions and within-State restrictions",
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
      "question": "A business closes while holding goods on which credit was claimed. Which matters need review?",
      "options": [
        "Only shop keys",
        "Closing-stock tax, pending filings and any required final return",
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
      "question": "Changing to a different PAN is always handled by simply editing the old GSTIN.",
      "correctBool": false,
      "explanation": "Fresh registration and transfer provisions need review.",
      "id": "m3-q8",
      "sectionRef": "CGST Act sections 16(6), 28–30 and 45; CGST Rules 19–23 and 81."
    }
  ]
};
