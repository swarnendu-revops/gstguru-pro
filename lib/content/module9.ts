import type { Module } from "./types";

export const module9: Module = {
  "id": "module-9",
  "number": 9,
  "title": "Exports, Imports & Refunds",
  "summary": "Establish zero-rating, document cross-border supplies, and compute only the refund category supported by the facts.",
  "chapters": [
    {
      "id": "9.1",
      "title": "Export of Services & SEZ Evidence",
      "roadmap": "Apply all export conditions and collect authorised-operation evidence for SEZ supplies.",
      "keyTerms": [
        {
          "term": "LUT",
          "def": "A Letter of Undertaking supporting qualifying zero-rated supplies without IGST payment."
        },
        {
          "term": "Authorised operations",
          "def": "SEZ operations relevant to the statutory zero-rated supply category."
        },
        {
          "term": "Permitted INR receipt",
          "def": "A service-export receipt in Indian rupees where permitted by the RBI."
        }
      ],
      "explanation": "Service exports must satisfy every section 2(6) condition. Establish supplier and recipient locations, place outside India, qualifying payment receipt and the distinct-establishment test. A foreign billing address or foreign currency does not independently prove an export.\n\nAn Indian head office supplying its own overseas branch raises the establishment condition; a separate foreign customer company needs its own facts rather than an automatic same-group exclusion. Some foreign-currency transactions can still have an Indian place of supply under a special rule.\n\nFor SEZ supplies, zero-rating is tied to authorised operations. Preserve prescribed endorsements and evidence of admission/receipt, and identify who can claim the relevant refund. Supplies to an SEZ for authorised operations are inter-State under the statutory framework, even if both locations are geographically in one State. Recipient status alone is insufficient.",
      "legalBasis": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Service export",
          "body": "Assume a ₹3,00,000 own-account consultancy satisfies every export condition and is supplied under a valid LUT. Output IGST is **₹0** on that route, while eligible ITC/refund is assessed under the prescribed rules."
        },
        {
          "title": "Same-State SEZ",
          "body": "A supplier and SEZ unit are both in Gujarat. For an authorised-operation supply, geographic co-location does not create an ordinary intra-State supply; the special inter-State and zero-rated rules must be applied."
        }
      ],
      "nuances": [
        "A zero-rated route does not waive blocked-credit rules.",
        "A foreign branch is not automatically a separate foreign customer.",
        "SEZ endorsement and authorised purpose must be documented."
      ],
      "recap": [
        "Test export conditions cumulatively.",
        "Choose a lawful zero-rated route.",
        "Collect SEZ purpose and receipt evidence."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Export-of-services conditions are:",
          "options": [
            "Alternative choices",
            "Cumulative requirements",
            "Only a bank test",
            "Only a postcode test"
          ],
          "correctIndex": 1,
          "explanation": "All statutory conditions must hold.",
          "id": "9.1-q1",
          "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
        },
        {
          "type": "tf",
          "question": "Every supply to an SEZ address is automatically zero-rated.",
          "correctBool": false,
          "explanation": "Authorised operations and other conditions matter.",
          "id": "9.1-q2",
          "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
        },
        {
          "type": "numeric",
          "question": "Qualifying ₹3,00,000 export under a valid no-IGST LUT route. Output IGST in ₹?",
          "correctNumber": 0,
          "tolerance": 0.01,
          "explanation": "The stated LUT route supplies without payment of IGST.",
          "id": "9.1-q3",
          "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
        },
        {
          "type": "mcq",
          "question": "Same-State supplier and SEZ authorised-operation supply is classified under:",
          "options": [
            "No supply ever",
            "Ordinary intra-State rule only",
            "Special inter-State framework",
            "Income tax only"
          ],
          "correctIndex": 2,
          "explanation": "Section 7(5) addresses supplies to/from SEZ units/developers.",
          "id": "9.1-q4",
          "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
        }
      ]
    },
    {
      "id": "9.2",
      "title": "Import of Goods & Import of Services",
      "roadmap": "Distinguish customs tax from service RCM and determine what is eligible credit.",
      "keyTerms": [
        {
          "term": "Bill of entry",
          "def": "The customs document relevant to goods import and associated import tax evidence."
        },
        {
          "term": "Import of services",
          "def": "Supplier outside India, recipient in India and place of supply in India."
        },
        {
          "term": "Basic customs duty",
          "def": "A customs levy generally outside the GST credit mechanism."
        }
      ],
      "explanation": "Imported goods are subject to the customs framework. Import IGST is calculated on the prescribed customs value base, not just the foreign seller invoice. Basic customs duty and applicable additions can enter the import IGST base, while credit is assessed separately from customs cost. A valid bill of entry and other eligibility conditions support import-IGST credit.\n\nFor services, the statutory import definition uses supplier, recipient and place-of-supply locations. Business imports can attract recipient RCM under the relevant notification. Cash payment and eligible ITC are separate steps. Personal imports and online-service categories have their own rules; don't carry one generic import result across all services.\n\nReconcile foreign vendor bills, exchange-rate rules, customs documents, RCM ledger and receipt evidence. The foreign vendor not charging Indian GST does not itself imply that no Indian tax is due.",
      "legalBasis": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Simplified goods import",
          "body": "Assume customs assessable value ₹1,00,000 and includible basic duty ₹10,000; no other additions. At assumed 18%, import IGST on ₹1,10,000 is **₹19,800**. BCD ₹10,000 is not ordinary GST ITC."
        },
        {
          "title": "Service import RCM",
          "body": "Assume a qualifying business service import worth ₹50,000 attracts recipient RCM at 18%. Pay **₹9,000** in cash, then separately establish eligible ITC. The foreign invoice contains no Indian GST charge."
        }
      ],
      "nuances": [
        "Surcharge and other customs additions are excluded only by the example assumptions.",
        "Import-service RCM is not all captured by ordinary GSTR-2B vendor matching.",
        "OIDAR and other special categories need dedicated analysis."
      ],
      "recap": [
        "Compute goods import IGST on the prescribed base.",
        "Separate customs duties from GST credit.",
        "Check service import RCM and place rules."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which is not ordinary GST input credit?",
          "options": [
            "Eligible domestic CGST",
            "Eligible domestic SGST",
            "Eligible import IGST",
            "Basic customs duty"
          ],
          "correctIndex": 3,
          "explanation": "BCD is a customs cost outside ordinary GST ITC.",
          "id": "9.2-q1",
          "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
        },
        {
          "type": "tf",
          "question": "A foreign service invoice without Indian GST means no Indian RCM can arise.",
          "correctBool": false,
          "explanation": "Recipient RCM can apply to qualifying imports.",
          "id": "9.2-q2",
          "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
        },
        {
          "type": "numeric",
          "question": "Assumed import IGST base ₹1,10,000 at 18%. IGST in ₹?",
          "correctNumber": 19800,
          "tolerance": 0.01,
          "explanation": "₹1,10,000 × 18% = ₹19,800.",
          "id": "9.2-q3",
          "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
        },
        {
          "type": "mcq",
          "question": "Goods-import tax evidence ordinarily includes:",
          "options": [
            "Bill of entry",
            "Only a salary slip",
            "Only a composition bill",
            "Only an annual-return screenshot"
          ],
          "correctIndex": 0,
          "explanation": "The prescribed customs document supports import IGST evidence.",
          "id": "9.2-q4",
          "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
        }
      ]
    },
    {
      "id": "9.3",
      "title": "LUT, Export Records & Refund Routes",
      "roadmap": "Choose a permitted route and keep the export evidence internally consistent.",
      "keyTerms": [
        {
          "term": "Zero-rated refund route",
          "def": "The applicable statutory/rule route for eligible export or SEZ refunds."
        },
        {
          "term": "Shipping bill",
          "def": "The customs document central to goods export evidence and specified refund processes."
        },
        {
          "term": "Realisation evidence",
          "def": "Proof of export proceeds receipt where required by the applicable framework."
        }
      ],
      "explanation": "The LUT/bond route supports qualifying zero-rated supplies without paying IGST, with eligible unutilised-credit refunds governed by section 54 and the rules. The IGST-paid refund route is restricted to the notified classes of persons or supplies under amended IGST section 16; it is not an unrestricted choice for every exporter.\n\nFile the applicable LUT, use the prescribed invoice endorsement, and observe Rule 96A conditions for export and proceeds realisation. Goods and services use different timelines and evidence. Keep invoice, shipping bill/service contract, return values, export evidence and bank documents aligned.\n\nFor goods export refunds, shipping/customs and return-data validation can affect processing. For services, contract and place-of-supply analysis remain essential. Export-duty goods and other restrictions can exclude a refund route. A zero-rated supply does not guarantee refund of the entire credit-ledger balance.",
      "legalBasis": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "LUT evidence pack",
          "body": "For a ₹2,00,000 goods export under LUT, retain the LUT, correctly endorsed invoice, shipping bill and proof of export. No output IGST is charged on the stated route; credit eligibility and refund computation remain separate."
        },
        {
          "title": "Route restriction",
          "body": "An exporter wants to pay ₹36,000 IGST on a ₹2,00,000 assumed 18% supply and claim it back. First establish eligibility for the notified IGST-paid route; a large ledger balance does not create that eligibility."
        }
      ],
      "nuances": [
        "LUT is not a substitute for proving export.",
        "IGST-paid refund availability depends on notified scope.",
        "Non-realisation or delayed export can have tax/refund consequences."
      ],
      "recap": [
        "Choose a legally available route.",
        "Align invoice, returns and export evidence.",
        "Monitor export and realisation conditions."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "The IGST-paid refund route is:",
          "options": [
            "Unconditionally open to every export",
            "Subject to the amended statutory and notified scope",
            "Only a domestic exempt refund",
            "Always a cash-ledger transfer"
          ],
          "correctIndex": 1,
          "explanation": "Amended section 16 contains route restrictions.",
          "id": "9.3-q1",
          "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
        },
        {
          "type": "tf",
          "question": "A valid LUT alone proves that a supply is an export.",
          "correctBool": false,
          "explanation": "The underlying export facts and evidence must also be established.",
          "id": "9.3-q2",
          "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
        },
        {
          "type": "numeric",
          "question": "Qualifying export value ₹2,00,000 under a valid no-IGST LUT route. Output IGST in ₹?",
          "correctNumber": 0,
          "tolerance": 0.01,
          "explanation": "The route supplies without payment of IGST.",
          "id": "9.3-q3",
          "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
        },
        {
          "type": "mcq",
          "question": "A useful export evidence set should reconcile:",
          "options": [
            "Only the bank balance",
            "Only the supplier PAN",
            "Invoice, returns and customs/service evidence",
            "Only the logo"
          ],
          "correctIndex": 2,
          "explanation": "Inconsistent records can affect refund processing and entitlement.",
          "id": "9.3-q4",
          "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
        }
      ]
    },
    {
      "id": "9.4",
      "title": "Refund Computation & Procedure",
      "roadmap": "Apply the correct formula, relevant date and documentary requirements.",
      "keyTerms": [
        {
          "term": "Net ITC",
          "def": "The credit component defined for a particular refund formula."
        },
        {
          "term": "Adjusted total turnover",
          "def": "The prescribed denominator in the relevant refund computation."
        },
        {
          "term": "Inverted duty structure",
          "def": "An eligible situation involving input-goods rates exceeding output rates, with exclusions."
        }
      ],
      "explanation": "Identify the refund category before calculating: excess cash balance, excess/wrong tax, zero-rated unutilised credit, inverted-rate accumulation or another statutory category. The eligible inputs, formula, limitation and supporting documents differ. The general two-year section 54 period uses a category-specific relevant date and has exceptions; it is not a universal invoice-date deadline.\n\nFor the Rule 89(4) LUT zero-rated formula, maximum refund broadly uses eligible zero-rated turnover divided by adjusted total turnover multiplied by the defined Net ITC. Apply the complete definitions, exclusions and limits for the case. Capital-goods credits are not simply inserted into that Net ITC figure.\n\nInverted-rate refunds have their own formula and input-goods focus; copying the export formula or all input-services credit is incorrect. Finance Act 2026 contains refund amendments requiring commencement checks. Submit the prescribed application/evidence, track deficiencies, reply to proposed rejection and reconcile sanctioned amounts with ledgers.",
      "legalBasis": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Simplified LUT formula",
          "body": "Assume qualifying zero-rated turnover ₹4,00,000, adjusted total turnover ₹10,00,000 and correctly defined Net ITC ₹50,000, with no other constraints. Maximum formula amount = 4/10 × ₹50,000 = **₹20,000**."
        },
        {
          "title": "Cash versus credit",
          "body": "A business has ₹15,000 excess cash-ledger deposit and ₹15,000 credit-ledger balance. These are not the same refund category: the credit balance requires a qualifying statutory unutilised-ITC ground and computation."
        }
      ],
      "nuances": [
        "Relevant date depends on the refund category.",
        "Capital-goods credit is not automatically included in the export Net ITC definition.",
        "Inverted-duty and export refund formulae differ."
      ],
      "recap": [
        "Select the refund category first.",
        "Use the complete applicable formula definitions.",
        "Track limitation and evidence."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Refund limitation should be measured using:",
          "options": [
            "Only application file name",
            "Only PAN date",
            "Always invoice date",
            "The applicable statutory relevant date and exceptions"
          ],
          "correctIndex": 3,
          "explanation": "Relevant date differs by refund category.",
          "id": "9.4-q1",
          "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
        },
        {
          "type": "tf",
          "question": "The same formula applies to every kind of GST refund.",
          "correctBool": false,
          "explanation": "Cash, export and inverted-rate categories have different rules.",
          "id": "9.4-q2",
          "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
        },
        {
          "type": "numeric",
          "question": "Qualifying zero-rated turnover ₹4 lakh, adjusted total ₹10 lakh, Net ITC ₹50,000. Simplified maximum refund in ₹?",
          "correctNumber": 20000,
          "tolerance": 0.01,
          "explanation": "4/10 × ₹50,000 = ₹20,000.",
          "id": "9.4-q3",
          "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
        },
        {
          "type": "mcq",
          "question": "Capital-goods credit is automatically part of Rule 89(4) Net ITC?",
          "options": [
            "No; use the rule’s defined eligible components",
            "Only if rounded",
            "Always 50%",
            "Yes all of it"
          ],
          "correctIndex": 0,
          "explanation": "The Net ITC definition must be used rather than all ledger credit.",
          "id": "9.4-q4",
          "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
        }
      ]
    }
  ],
  "moduleQuiz": [
    {
      "type": "mcq",
      "question": "A supplier serves its own foreign branch and receives foreign currency. What must be checked?",
      "options": [
        "Only the payment",
        "Distinct-establishment export condition and all other tests",
        "Only invoice font",
        "No conditions"
      ],
      "correctIndex": 1,
      "explanation": "The establishment condition can prevent export status.",
      "id": "m9-q1",
      "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
    },
    {
      "type": "tf",
      "question": "SEZ evidence should identify authorised operations and the prescribed receipt/endorsement.",
      "correctBool": true,
      "explanation": "It supports zero-rating and the applicable refund process.",
      "id": "m9-q2",
      "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
    },
    {
      "type": "numeric",
      "question": "Qualifying import-service RCM base ₹50,000 at assumed 18%. Cash tax in ₹?",
      "correctNumber": 9000,
      "tolerance": 0.01,
      "explanation": "₹50,000 × 18% = ₹9,000.",
      "id": "m9-q3",
      "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
    },
    {
      "type": "tf",
      "question": "Goods-import IGST should always be computed only on the foreign vendor invoice amount.",
      "correctBool": false,
      "explanation": "The prescribed customs tax base can include duties and additions.",
      "id": "m9-q4",
      "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
    },
    {
      "type": "numeric",
      "question": "Assume a supplier is legally eligible for the IGST-paid route and export value ₹2,00,000 attracts 18%. Tax in ₹?",
      "correctNumber": 36000,
      "tolerance": 0.01,
      "explanation": "₹2,00,000 × 18% = ₹36,000; route eligibility is an express assumption.",
      "id": "m9-q5",
      "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
    },
    {
      "type": "tf",
      "question": "All input-credit ledger balances are automatically refundable after any export.",
      "correctBool": false,
      "explanation": "Refund category, eligible credit and statutory restrictions determine the amount.",
      "id": "m9-q6",
      "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
    },
    {
      "type": "numeric",
      "question": "Qualifying zero-rated turnover ₹6 lakh, adjusted total ₹12 lakh, correctly defined Net ITC ₹80,000. Simplified formula amount in ₹?",
      "correctNumber": 40000,
      "tolerance": 0.01,
      "explanation": "6/12 × ₹80,000 = ₹40,000, before other constraints.",
      "id": "m9-q7",
      "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
    },
    {
      "type": "mcq",
      "question": "An inverted-rate refund is prepared by copying the LUT export formula. Best response?",
      "options": [
        "Use the cash balance only",
        "Accept automatically",
        "Recompute under the inverted-category rule and definitions",
        "Use gross sales only"
      ],
      "correctIndex": 2,
      "explanation": "Rule 89(5) has its own formula and eligibility limits.",
      "id": "m9-q8",
      "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
    }
  ]
};
