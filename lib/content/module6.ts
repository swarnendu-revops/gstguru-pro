import type { Module } from "./types";

export const module6: Module = {
  "id": "module-6",
  "number": 6,
  "title": "Input Tax Credit & ISD",
  "summary": "Assess credit entitlement, identify blocked items, calculate reversals, and distribute common-service credits correctly.",
  "chapters": [
    {
      "id": "6.1",
      "title": "ITC Eligibility & Evidence",
      "roadmap": "Treat a portal statement as evidence to reconcile, not permission to claim everything shown.",
      "keyTerms": [
        {
          "term": "Eligible ITC",
          "def": "Input tax satisfying business-use, documentary and other statutory conditions."
        },
        {
          "term": "GSTR-2B",
          "def": "An auto-drafted input-credit statement; it is not a return you file."
        },
        {
          "term": "Receipt condition",
          "def": "Goods or services must be received, subject to statutory deeming provisions."
        }
      ],
      "explanation": "Section 16 requires a registered recipient, business purpose and satisfaction of its conditions. Check a prescribed document, supplier reporting/communication where applicable, receipt, tax payment to government, return filing and the absence of a communicated restriction. Ineligible use under section 17 can defeat credit even where the invoice appears in GSTR-2B.\n\nThe ordinary section 16(4) cut-off is 30 November following the relevant financial year or furnishing the annual return, whichever is earlier. Special subsections 16(5)/(6) provide targeted relief; they are not a general waiver for every late credit. Debit notes and RCM documentation need their applicable treatment rather than a copied ordinary-invoice checklist.\n\nMaintain an invoice-level reconciliation: books, GSTR-2B, receipt evidence, eligibility, claim period and reversals. A supplier filing a return is important, but the recipient still has to establish their own entitlement. Tax capitalisation/depreciation choices must avoid a double claim on the tax component.",
      "legalBasis": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001).\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Eligibility bridge",
          "body": "Books show ₹50,000 input GST; ₹8,000 is personal-use credit and ₹4,000 lacks required current claim evidence. Assuming the remaining conditions hold, claimable credit now is **₹38,000**."
        },
        {
          "title": "Statement is not approval",
          "body": "A ₹5,000 invoice appears in GSTR-2B but relates wholly to personal consumption. Its appearance does not remove the section 17 restriction: eligible credit remains **₹0**."
        }
      ],
      "nuances": [
        "GSTR-2B is not a blanket eligibility certificate.",
        "An earlier annual return can shorten the normal cut-off.",
        "Special late-credit relief must be matched to its period and conditions."
      ],
      "recap": [
        "Document each statutory condition.",
        "Reconcile statements to books and receipts.",
        "Check blocked use and the time limit."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "GSTR-2B is:",
          "options": [
            "A shipping bill",
            "A filed payment return",
            "An auto-drafted ITC statement",
            "A statutory approval of every credit"
          ],
          "correctIndex": 2,
          "explanation": "It supports reconciliation; eligibility still needs assessment.",
          "id": "6.1-q1",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
        },
        {
          "type": "tf",
          "question": "Every invoice shown in GSTR-2B is legally creditable.",
          "correctBool": false,
          "explanation": "Section 16/17 conditions still apply.",
          "id": "6.1-q2",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
        },
        {
          "type": "numeric",
          "question": "Input GST ₹50,000 less personal ₹8,000 and currently unsupported ₹4,000. Eligible-now amount in ₹?",
          "correctNumber": 38000,
          "tolerance": 0.01,
          "explanation": "₹50,000 − ₹8,000 − ₹4,000 = ₹38,000.",
          "id": "6.1-q3",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
        },
        {
          "type": "mcq",
          "question": "The ordinary section 16(4) cut-off also considers:",
          "options": [
            "Only the bank date",
            "Only vendor profit",
            "Customer age",
            "Annual return furnished earlier"
          ],
          "correctIndex": 3,
          "explanation": "The earlier annual-return date can govern.",
          "id": "6.1-q4",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
        }
      ]
    },
    {
      "id": "6.2",
      "title": "Blocked Credits & Exceptions",
      "roadmap": "Identify statutory restrictions before claiming seemingly legitimate business expenses.",
      "keyTerms": [
        {
          "term": "Blocked credit",
          "def": "Input tax specifically restricted by section 17(5), subject to its exceptions."
        },
        {
          "term": "Personal consumption",
          "def": "Non-business consumption carrying its own credit restriction."
        },
        {
          "term": "Plant and machinery",
          "def": "A defined category with exclusions, relevant to construction credit."
        }
      ],
      "explanation": "A genuine business expense is not automatically eligible ITC. Section 17(5) blocks specified credits, including certain passenger vehicles, food/benefits, club membership, construction, composition-tax purchases, personal consumption, gifts/free samples and lost or written-off goods, among others.\n\nApply exceptions precisely. For example, passenger-vehicle credit has enumerated use exceptions; goods vehicles are not covered by that particular passenger-capacity restriction, but must meet ordinary eligibility conditions. Mandatory employee benefits under law and specified onward supplies can change results for particular clauses.\n\nFor own-account construction, use the amended **plant and machinery** wording and its definition. The 2025 amendment addresses earlier \"plant or machinery\" wording and judicial interpretation; do not teach the pre-amendment phrase as the unqualified current position. Retain asset use, capitalisation and exception evidence. A supplier charging GST does not answer whether the recipient is entitled to it.",
      "legalBasis": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001).\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Passenger car",
          "body": "A consulting firm buys an ordinary five-seat passenger car for director use, not for an enumerated exception. On these facts, ₹90,000 input GST is blocked even though the expense has a business purpose."
        },
        {
          "title": "Gifts",
          "body": "A business pays ₹10,000 input GST on goods then disposed of as free gifts, without an applicable alternative treatment. On the stated facts the attributable credit is **₹0**; section 17(5)(h) must be addressed."
        }
      ],
      "nuances": [
        "Check the exact exception rather than saying all vehicle credit is blocked.",
        "Mandatory-under-law benefits need evidence of the legal obligation.",
        "Capitalised construction and ordinary revenue repairs can differ."
      ],
      "recap": [
        "Business purpose is necessary but not sufficient.",
        "Read each restriction with its exceptions.",
        "Use amended construction wording."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Business use of an ordinary director passenger car automatically allows ITC?",
          "options": [
            "No; section 17(5) and exceptions apply",
            "Only if paid in cash",
            "Only if imported",
            "Yes always"
          ],
          "correctIndex": 0,
          "explanation": "Business use does not override a specific block.",
          "id": "6.2-q1",
          "sectionRef": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001)."
        },
        {
          "type": "tf",
          "question": "The passenger-vehicle block means every goods vehicle is also automatically blocked.",
          "correctBool": false,
          "explanation": "The specific restriction concerns the described passenger vehicles; other conditions still apply.",
          "id": "6.2-q2",
          "sectionRef": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001)."
        },
        {
          "type": "numeric",
          "question": "₹10,000 input GST relates wholly to free gifts with no exception. Eligible ITC in ₹?",
          "correctNumber": 0,
          "tolerance": 0.01,
          "explanation": "The stated section 17(5)(h) block applies.",
          "id": "6.2-q3",
          "sectionRef": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001)."
        },
        {
          "type": "mcq",
          "question": "Current construction-credit wording requires attention to:",
          "options": [
            "Only supplier turnover",
            "Plant and machinery and the amended explanations",
            "Any real estate label",
            "Only depreciation rate"
          ],
          "correctIndex": 1,
          "explanation": "The 2025 statutory amendment changes the wording and interpretation framework.",
          "id": "6.2-q4",
          "sectionRef": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001)."
        }
      ]
    },
    {
      "id": "6.3",
      "title": "Reversals: Common Use & Unpaid Suppliers",
      "roadmap": "Separate permanent blocks from reversals that may later be reclaimed.",
      "keyTerms": [
        {
          "term": "Common credit",
          "def": "Eligible input credit attributable to both taxable and exempt activities."
        },
        {
          "term": "Rule 42/43",
          "def": "Rules apportioning credit on inputs/input services and capital goods respectively."
        },
        {
          "term": "180-day condition",
          "def": "A payment-related reversal requirement for relevant supplier invoices, with exceptions."
        }
      ],
      "explanation": "First separate exclusively eligible, exclusively exempt/non-business and blocked items. Only then allocate qualifying common credit under the relevant rule. Rule 42 deals with inputs/input services and Rule 43 with capital goods. The prescribed formula, non-business allocation and annual adjustments matter; a simple turnover ratio is only a teaching illustration when all other components are excluded by the facts.\n\nFor relevant forward-charge invoices, failure to pay the supplier the value plus tax within 180 days can require proportionate reversal/payment and applicable interest. The rule has exceptions, including RCM supplies, and specified deemed-payment cases. Re-availment can follow payment subject to the statutory framework.\n\nKeep a reversal register with reason, invoice, tax head, amount, interest analysis and re-claim condition. A permanent block and a temporary unpaid-invoice reversal should not be mixed because their future treatment differs.",
      "legalBasis": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Simplified common allocation",
          "body": "Assume ₹40,000 common input credit, taxable turnover ₹6 lakh, exempt turnover ₹2 lakh, no non-business use, and no other adjustments. Exempt ratio = 2/8 = 25%; illustrative reversal = **₹10,000** and remaining credit ₹30,000."
        },
        {
          "title": "Partial non-payment",
          "body": "For a covered invoice carrying ₹18,000 tax, assume 50% of the value-plus-tax remains unpaid beyond the permitted period. Illustrative proportionate reversal is **₹9,000**, with interest analysed separately."
        }
      ],
      "nuances": [
        "Full Rule 42 computation includes more than one turnover ratio.",
        "Capital goods use Rule 43, not a copied input-services formula.",
        "Reclaim requires the relevant payment/eligibility conditions."
      ],
      "recap": [
        "Classify credit before apportioning.",
        "Track 180-day payment ageing.",
        "Record reversal and reclaim reasons separately."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Capital-goods common-credit allocation ordinarily uses:",
          "options": [
            "Rule 8",
            "Rule 138 only",
            "Rule 43",
            "Rule 35"
          ],
          "correctIndex": 2,
          "explanation": "Rule 43 provides the capital-goods mechanism.",
          "id": "6.3-q1",
          "sectionRef": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43."
        },
        {
          "type": "tf",
          "question": "Every reversal is permanently lost and can never be reclaimed.",
          "correctBool": false,
          "explanation": "Some payment-related reversals can be re-availed after conditions are met.",
          "id": "6.3-q2",
          "sectionRef": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43."
        },
        {
          "type": "numeric",
          "question": "Common credit ₹40,000; exempt ratio 25%; no other adjustment. Illustrative reversal in ₹?",
          "correctNumber": 10000,
          "tolerance": 0.01,
          "explanation": "₹40,000 × 25% = ₹10,000.",
          "id": "6.3-q3",
          "sectionRef": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43."
        },
        {
          "type": "mcq",
          "question": "Before apportioning common credit, first:",
          "options": [
            "Ignore business use",
            "Use only output tax",
            "Claim everything",
            "Separate exclusive and blocked credits"
          ],
          "correctIndex": 3,
          "explanation": "Classification precedes the prescribed common-credit allocation.",
          "id": "6.3-q4",
          "sectionRef": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43."
        }
      ]
    },
    {
      "id": "6.4",
      "title": "ISD, Cross Charges & Credit Utilisation",
      "roadmap": "Distribute third-party service credit and use tax-head balances in the correct sequence.",
      "keyTerms": [
        {
          "term": "ISD",
          "def": "An office distributing qualifying input-service credit to distinct registrations."
        },
        {
          "term": "Cross charge",
          "def": "A supply between distinct persons, different from distributing third-party input credit."
        },
        {
          "term": "Utilisation order",
          "def": "Statutory restrictions on using one credit head against particular output heads."
        }
      ],
      "explanation": "From 1 April 2025 the amended ISD framework requires covered offices receiving input-service invoices for/on behalf of distinct persons to register as ISD and distribute credit under the prescribed rules. It is not limited to casually optional arrangements. RCM service credits within the amended statutory scope require the prescribed mechanism. Credit attributable exclusively to one recipient goes to that recipient; common credit follows the rule's allocation basis.\n\nSeparately, internally supplied services between distinct persons need a supply and valuation analysis. Do not use \"cross charge\" to bypass the amended ISD requirements for covered third-party services.\n\nFor ordinary output liability, IGST credit is exhausted first as prescribed. Its remainder can offset CGST/SGST in the permitted order/proportions under Rule 88A. CGST credit cannot directly pay SGST, and SGST cannot directly pay CGST. RCM, interest and penalties require cash. Prepare a head-wise utilisation working rather than subtracting all credit from all liability.",
      "legalBasis": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001).\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Common service allocation",
          "body": "Assume distributable eligible credit ₹30,000 and relevant recipient turnover weights 60:40 under Rule 39. Allocate **₹18,000** and **₹12,000**, after checking attribution and tax-head conversion."
        },
        {
          "title": "Head restriction",
          "body": "Output CGST ₹10,000 and SGST ₹10,000; credit consists only of CGST ₹20,000. Use ₹10,000 CGST credit against CGST. SGST still needs **₹10,000 cash**; leftover CGST cannot directly offset it."
        }
      ],
      "nuances": [
        "ISD distributes credit; it does not itself create a goods supply.",
        "Allocation must follow attribution before common turnover ratios.",
        "Large aggregate credit can coexist with cash liability."
      ],
      "recap": [
        "Use the mandatory ISD framework for covered service invoices.",
        "Analyse own-service supplies separately.",
        "Compute utilisation tax head by tax head."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Under the amended framework for covered common services, ISD is:",
          "options": [
            "Required subject to the statutory scope",
            "Only for goods",
            "A substitute for a vendor invoice",
            "Always optional as in old material"
          ],
          "correctIndex": 0,
          "explanation": "The revised section 20 applies from 1 April 2025.",
          "id": "6.4-q1",
          "sectionRef": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        },
        {
          "type": "tf",
          "question": "CGST credit can directly discharge SGST liability.",
          "correctBool": false,
          "explanation": "Direct CGST-to-SGST utilisation is prohibited.",
          "id": "6.4-q2",
          "sectionRef": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        },
        {
          "type": "numeric",
          "question": "₹30,000 distributable credit with qualifying 60% attribution share. Share in ₹?",
          "correctNumber": 18000,
          "tolerance": 0.01,
          "explanation": "₹30,000 × 60% = ₹18,000.",
          "id": "6.4-q3",
          "sectionRef": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        },
        {
          "type": "numeric",
          "question": "CGST output ₹10,000 and SGST output ₹10,000, only CGST credit ₹20,000. Cash required in ₹?",
          "correctNumber": 10000,
          "tolerance": 0.01,
          "explanation": "SGST cannot be offset directly by CGST credit.",
          "id": "6.4-q4",
          "sectionRef": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        }
      ]
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "₹20,000 input GST includes ₹3,000 personal credit and ₹2,000 otherwise blocked credit. All other conditions hold. Eligible ITC in ₹?",
      "correctNumber": 15000,
      "tolerance": 0.01,
      "explanation": "₹20,000 − ₹3,000 − ₹2,000 = ₹15,000.",
      "id": "m6-q1",
      "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
    },
    {
      "type": "tf",
      "question": "Sections 16(5)/(6) automatically waive every late-credit claim.",
      "correctBool": false,
      "explanation": "They provide specific relief for specified periods or restoration conditions.",
      "id": "m6-q2",
      "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
    },
    {
      "type": "numeric",
      "question": "Total otherwise eligible GST ₹45,000 includes ₹12,000 blocked club membership. Allowed ITC in ₹?",
      "correctNumber": 33000,
      "tolerance": 0.01,
      "explanation": "₹45,000 − ₹12,000 = ₹33,000.",
      "id": "m6-q3",
      "sectionRef": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001)."
    },
    {
      "type": "mcq",
      "question": "An employer claims food-service credit because a law obliges the benefit. What should be documented?",
      "options": [
        "Nothing",
        "The statutory obligation and clause conditions",
        "Only the canteen logo",
        "Only verbal approval"
      ],
      "correctIndex": 1,
      "explanation": "The exception must be established with legal and factual evidence.",
      "id": "m6-q4",
      "sectionRef": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001)."
    },
    {
      "type": "numeric",
      "question": "Covered invoice tax ₹18,000 with 50% relevant unpaid balance after 180 days. Illustrative proportionate reversal in ₹?",
      "correctNumber": 9000,
      "tolerance": 0.01,
      "explanation": "₹18,000 × 50% = ₹9,000.",
      "id": "m6-q5",
      "sectionRef": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43."
    },
    {
      "type": "tf",
      "question": "The 180-day payment rule applies identically to RCM invoices.",
      "correctBool": false,
      "explanation": "The statutory proviso has an RCM exception.",
      "id": "m6-q6",
      "sectionRef": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43."
    },
    {
      "type": "numeric",
      "question": "Common eligible ISD credit ₹30,000; prescribed second-recipient share is 40%. Credit share in ₹?",
      "correctNumber": 12000,
      "tolerance": 0.01,
      "explanation": "₹30,000 × 40% = ₹12,000.",
      "id": "m6-q7",
      "sectionRef": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
    },
    {
      "type": "mcq",
      "question": "Head office receives a third-party input-service invoice on behalf of branches after April 2025. First mechanism to examine?",
      "options": [
        "Employee payroll",
        "Ignore branch attribution",
        "Amended ISD requirements",
        "Composition bill"
      ],
      "correctIndex": 2,
      "explanation": "The updated ISD scope must be assessed before relying on an older optional approach.",
      "id": "m6-q8",
      "sectionRef": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
    }
  ]
};
