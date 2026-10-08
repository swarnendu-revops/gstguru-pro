import type { Module } from "./types";

export const module6: Module = {
  "id": "module-6",
  "number": 6,
  "title": "Input Tax Credit & ISD",
  "summary": "Learn which purchase tax you can use, what must be given back, and how separate tax balances work.",
  "chapters": [
    {
      "id": "6.1",
      "title": "ITC Eligibility & Evidence",
      "roadmap": "Use a simple checklist before claiming purchase-tax credit.",
      "keyTerms": [
        {
          "term": "Eligible ITC",
          "def": "Purchase GST that passes the legal conditions and may be used as credit against normal sales GST."
        },
        {
          "term": "GSTR-2B",
          "def": "A portal statement of specified purchase/import tax information. It is a checking tool, not approval of every credit claim."
        },
        {
          "term": "Receipt condition",
          "def": "The requirement to establish receipt of goods or services, including permitted legal cases where receipt is treated as taking place."
        },
        {
          "term": "Financial year",
          "def": "The Indian accounting year from 1 April to 31 March."
        }
      ],
      "explanation": "### 1. Start with the purchase purpose\nThe recipient must be registered and the purchase must be for business, with credit not otherwise blocked. A personal purchase does not become eligible just because a supplier issued a GST bill.\n\n### 2. Gather the evidence\nCheck the prescribed document, receipt, supplier reporting/communication where required, tax payment to government, your return filing and any communicated restriction. Compare bills with GSTR-2B. A matching portal line is only one part of the checklist.\n\n### 3. Check when the credit can be claimed\nThe ordinary cut-off is 30 November following the relevant financial year or filing the annual return, whichever is earlier. Specific old-period or restored-registration relief is limited. Debit notes and reverse-charge documents can need their own treatment.\n\n### 4. Avoid claiming the same benefit twice\nFor equipment, check how the tax component is recorded for depreciation, the spreading of an asset’s cost over time. The rules do not allow both the prohibited tax-component depreciation benefit and ITC on that same component. Keep an invoice-by-invoice eligibility record.",
      "legalBasis": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001).\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "From recorded tax to claimable credit",
          "body": "Assume purchase GST totals ₹50,000. ₹8,000 is for personal use; ₹4,000 lacks the required current claim evidence.\n\n1. Remove personal-use tax: ₹50,000 − ₹8,000 = ₹42,000.\n2. Set aside the unsupported current claim: ₹42,000 − ₹4,000 = **₹38,000**.\n3. Claim ₹38,000 only if all remaining conditions hold."
        },
        {
          "title": "Visible on the portal, still personal",
          "body": "A ₹5,000 purchase-tax amount appears in GSTR-2B, but the purchase is wholly personal.\n\n1. The portal confirms a record exists.\n2. The business-use/credit restrictions still apply.\n3. Eligible credit on these facts is **₹0**."
        }
      ],
      "nuances": [
        "GSTR-2B appearance is not a complete approval.",
        "Check the claim period as well as the bill.",
        "A genuine GST invoice does not make personal spending eligible."
      ],
      "recap": [
        "Check purpose, documents and receipt.",
        "Check reporting, restrictions and dates.",
        "Claim only the amount that passes the full checklist."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "What is GSTR-2B?",
          "options": [
            "A shipping bill",
            "A filed payment return",
            "A portal statement used to review purchase/import tax information",
            "A statutory approval of every credit"
          ],
          "correctIndex": 2,
          "explanation": "It supports reconciliation; eligibility still needs assessment.",
          "id": "6.1-q1",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
        },
        {
          "type": "tf",
          "question": "Every purchase bill appearing in GSTR-2B automatically qualifies for credit.",
          "correctBool": false,
          "explanation": "Section 16/17 conditions still apply.",
          "id": "6.1-q2",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
        },
        {
          "type": "numeric",
          "question": "Purchase GST is ₹50,000, including ₹8,000 personal-use tax and ₹4,000 without required current claim evidence. Assume all remaining conditions hold. What can be claimed now, in rupees?",
          "correctNumber": 38000,
          "tolerance": 0.01,
          "explanation": "₹50,000 − ₹8,000 − ₹4,000 = ₹38,000.",
          "id": "6.1-q3",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
        },
        {
          "type": "mcq",
          "question": "Besides the ordinary 30 November deadline, what earlier event can close the ordinary purchase-credit claim window?",
          "options": [
            "Only the bank date",
            "Only vendor profit",
            "Customer age",
            "Filing the relevant annual return earlier"
          ],
          "correctIndex": 3,
          "explanation": "The earlier annual-return date can govern.",
          "id": "6.1-q4",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
        }
      ],
      "learningGoal": "Use a simple checklist before claiming purchase-tax credit.",
      "story": "Asha’s purchase register shows GST on every supplier bill. Some purchases are personal, and one business bill is missing the required evidence. The total GST in the register is not automatically the amount she can claim.",
      "selfCheck": {
        "question": "What does a GSTR-2B match prove?",
        "answer": "It supports the reporting check. It does not by itself prove business use, receipt or every other credit condition."
      }
    },
    {
      "id": "6.2",
      "title": "Blocked Credits & Exceptions",
      "roadmap": "Understand why some purchase GST is blocked even when a business pays it.",
      "keyTerms": [
        {
          "term": "Blocked credit",
          "def": "Purchase tax that the law specifically prevents you from claiming, unless a stated exception applies."
        },
        {
          "term": "Personal consumption",
          "def": "Goods or services used personally rather than for the business."
        },
        {
          "term": "Plant and machinery",
          "def": "A legally defined category of business apparatus/equipment with specific exclusions. It is not simply every asset a business owns."
        }
      ],
      "explanation": "### 1. Separate business purpose from credit permission\nA cost can be a real business expense but still fall within a blocked category. The credit rules specifically restrict items such as certain passenger vehicles, food/benefits, membership, construction, gifts and lost or written-off goods.\n\n### 2. Check the precise exception\nPassenger-vehicle exceptions depend on specified uses. A goods vehicle is not covered by that particular passenger-seat restriction, but still needs the ordinary eligibility checks. Some legally mandatory employee benefits and specified onward supplies can change a particular result.\n\n### 3. Review construction and equipment carefully\nThe amended rules use “plant and machinery” and its legal definition. Buildings and equipment cannot all be put into one convenient category. Do not rely on old material using a different phrase without checking the amended law and period.\n\n### 4. Keep the reason for each blocked amount\nRecord what was bought, how it is used, which restriction applies and why an exception does or does not apply. Seeing GST on the supplier’s invoice tells you what was charged, not what you may claim.",
      "legalBasis": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001).\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "An ordinary consulting-firm car",
          "body": "Assume a five-seat car is used by a director, no specified exception applies, and purchase GST is ₹90,000.\n\n1. Check the passenger-vehicle restriction.\n2. On these stated facts, the **₹90,000 is blocked**.\n3. Business use alone does not remove that restriction."
        },
        {
          "title": "Giving goods away as gifts",
          "body": "Assume a business paid ₹10,000 purchase GST on goods given away as free gifts, with no applicable alternative treatment.\n\n1. Check the specific gift-credit restriction.\n2. Attributable eligible credit is **₹0** on these facts.\n3. Record why the restriction applies."
        }
      ],
      "nuances": [
        "Business purpose is necessary in many cases but not sufficient by itself.",
        "Exceptions must match the real use and legal category.",
        "Construction rules and amended equipment wording need careful review."
      ],
      "recap": [
        "Find the blocked category.",
        "Check any precise exception.",
        "Keep evidence supporting the credit decision."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Does business use of an ordinary director's passenger car automatically allow purchase-tax credit?",
          "options": [
            "No; check the blocked-credit rule and its specific exceptions",
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
          "question": "The passenger-car restriction automatically blocks every goods vehicle too.",
          "correctBool": false,
          "explanation": "The specific restriction concerns the described passenger vehicles; other conditions still apply.",
          "id": "6.2-q2",
          "sectionRef": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001)."
        },
        {
          "type": "numeric",
          "question": "₹10,000 purchase GST relates entirely to free gifts, with no exception or alternative treatment. What credit is allowed, in rupees?",
          "correctNumber": 0,
          "tolerance": 0.01,
          "explanation": "The stated section 17(5)(h) block applies.",
          "id": "6.2-q3",
          "sectionRef": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001)."
        },
        {
          "type": "mcq",
          "question": "Which amended legal wording needs particular attention when reviewing construction credit?",
          "options": [
            "Only supplier turnover",
            "The amended “plant and machinery” wording and its legal definition",
            "Any real estate label",
            "Only depreciation rate"
          ],
          "correctIndex": 1,
          "explanation": "The 2025 legal amendment changes the wording and interpretation framework.",
          "id": "6.2-q4",
          "sectionRef": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001)."
        }
      ],
      "learningGoal": "Understand why some purchase GST is blocked even when a business pays it.",
      "story": "Dev buys a five-seat car for his consulting business. The dealer charges GST. Using the car for business does not automatically mean Dev can claim that purchase GST as credit.",
      "selfCheck": {
        "question": "Does a business invoice for a car guarantee purchase credit?",
        "answer": "No. The vehicle restriction and any permitted use exception must be checked as well as the ordinary conditions."
      }
    },
    {
      "id": "6.3",
      "title": "Reversals: Common Use & Unpaid Suppliers",
      "roadmap": "Understand taking back credit for shared use or unpaid bills, and when a later reclaim may be possible.",
      "keyTerms": [
        {
          "term": "Common credit",
          "def": "Purchase credit linked to more than one kind of use, such as taxable and exempt business activity."
        },
        {
          "term": "Reversal",
          "def": "Removing or paying back credit previously claimed, under the relevant rule."
        },
        {
          "term": "Rule 42/43",
          "def": "Rules allocating shared credit: Rule 42 covers inputs/services; Rule 43 covers capital goods, such as longer-use equipment."
        },
        {
          "term": "180-day condition",
          "def": "For covered purchases, not paying the supplier’s value plus tax within 180 days can require a proportionate credit reversal/payment and an interest check."
        }
      ],
      "explanation": "### 1. Sort purchases before sharing them\nSeparate credit exclusively for taxable use, exempt/non-business use and blocked items. Only then allocate the genuinely shared amount. This avoids spreading a blocked amount as if part of it were eligible.\n\n### 2. Apply the correct common-use rule\nDifferent rules apply to ordinary inputs/services and capital goods. A sales ratio can illustrate one part of the calculation, but the full rules include other components and adjustments. Do not copy a simplified example into every real claim.\n\n### 3. Check old unpaid bills\nFor covered forward-charge bills, review whether the full value plus GST was paid within 180 days. Partial non-payment can cause a proportionate reversal. Reverse-charge and specified other cases have exceptions. Calculate any required interest separately.\n\n### 4. Distinguish temporary from permanent losses\nSome credit can be reclaimed after the supplier is paid and the conditions are met. A permanently blocked purchase is different. Keep a record showing the amount reversed, why, and what must happen before any reclaim.",
      "legalBasis": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Sharing credit between taxable and exempt sales",
          "body": "Assume ₹40,000 common credit, ₹6 lakh taxable sales and ₹2 lakh exempt sales, with no other adjustment or non-business use.\n\n1. Total sales = ₹8 lakh.\n2. Exempt share = 2 ÷ 8 = 25%.\n3. Illustrative reversal = ₹40,000 × 25% = **₹10,000**.\n4. Remaining credit = ₹30,000.\n\nThis simplified ratio is not the complete rule for every case."
        },
        {
          "title": "Half an old bill remains unpaid",
          "body": "Assume a covered bill has ₹18,000 GST and 50% of its value-plus-tax remains unpaid past the permitted period.\n\n1. Unpaid proportion = 50%.\n2. Illustrative reversal = ₹18,000 × 50% = **₹9,000**.\n3. Check interest separately and record the conditions for reclaim after payment."
        }
      ],
      "nuances": [
        "Allocate only qualifying common credit, not every purchase amount.",
        "The 180-day rule has specified exceptions.",
        "A temporary unpaid-bill reversal differs from a permanent credit block."
      ],
      "recap": [
        "Sort exclusive, blocked and shared uses first.",
        "Apply the proper allocation or non-payment rule.",
        "Track reversals and any future reclaim condition."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which rule ordinarily allocates shared credit on capital goods, such as longer-use equipment?",
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
          "question": "Every credit reversal is permanent and can never be reclaimed.",
          "correctBool": false,
          "explanation": "Some payment-related reversals can be re-availed after conditions are met.",
          "id": "6.3-q2",
          "sectionRef": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43."
        },
        {
          "type": "numeric",
          "question": "Assume ₹40,000 qualifying shared credit, 25% exempt-use ratio and no other adjustment. What is the illustrative reversal, in rupees?",
          "correctNumber": 10000,
          "tolerance": 0.01,
          "explanation": "₹40,000 × 25% = ₹10,000.",
          "id": "6.3-q3",
          "sectionRef": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43."
        },
        {
          "type": "mcq",
          "question": "What should you do before dividing shared credit between uses?",
          "options": [
            "Ignore business use",
            "Use only output tax",
            "Claim everything",
            "Separate single-use and blocked items before allocating shared credit"
          ],
          "correctIndex": 3,
          "explanation": "Classification precedes the required common-credit allocation.",
          "id": "6.3-q4",
          "sectionRef": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43."
        }
      ],
      "learningGoal": "Understand taking back credit for shared use or unpaid bills, and when a later reclaim may be possible.",
      "story": "Asha uses one service for both taxable and exempt sales. She also has an old supplier bill she has not fully paid. Some previously claimed credit may need to be given back for different reasons.",
      "selfCheck": {
        "question": "Why keep separate records for blocked credit and unpaid-bill reversals?",
        "answer": "Payment may permit reclaim of certain reversed credit. It does not automatically make a permanently blocked purchase eligible."
      }
    },
    {
      "id": "6.4",
      "title": "ISD, Cross Charges & Credit Utilisation",
      "roadmap": "Understand sharing service credit across registrations and why different GST balances cannot all be mixed.",
      "keyTerms": [
        {
          "term": "ISD",
          "def": "Input Service Distributor: a GST-registered office that passes permitted GST credit on services to the business’s other registrations. For example, a head office may share the credit on a common software bill with its branches."
        },
        {
          "term": "Cross charge",
          "def": "A charge for a service supplied between separate GST registrations of the same business. It differs from distributing third-party service credit."
        },
        {
          "term": "Utilisation order",
          "def": "The sequence and tax-account restrictions for using available credit."
        },
        {
          "term": "Tax head",
          "def": "A separate tax category/account, such as CGST, SGST or IGST."
        }
      ],
      "explanation": "### 1. Identify whose service invoice it is\nSuppose an outside supplier sends the head office a bill for software used by two branches. From 1 April 2025, covered offices receiving these service bills for other GST registrations must use the ISD system to share the permitted purchase-tax credit. The law calls separate registrations “distinct persons”. Covered services where the buyer pays GST under reverse charge also follow specific ISD steps.\n\n### 2. Allocate credit to the right users\nIf only one branch uses the service, its permitted credit goes to that branch. If several branches use it, share the common credit using the rule’s required method. First check that the credit is allowed, which branches used the service, and whether it belongs in CGST, SGST or IGST.\n\n### 3. Keep internally supplied services separate\nWhen one registration itself supplies a service to another, examine supply and value. Calling everything a cross charge does not bypass ISD requirements for covered outside-service invoices.\n\n### 4. Use credit in the permitted accounts\nIGST credit is used first as prescribed. Its remainder can pay CGST/SGST in the permitted way. CGST credit cannot directly pay SGST, or vice versa. Reverse-charge tax, interest and penalties need cash. Prepare separate balances rather than subtracting one grand credit total from one grand tax total.",
      "legalBasis": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001).\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Two branches share a service",
          "body": "Assume credit allowed to be shared ₹30,000 and the rule requires the branches to share it in the ratio 60:40.\n\n1. First share = ₹30,000 × 60% = **₹18,000**.\n2. Second share = ₹30,000 × 40% = **₹12,000**.\n3. Check that each share goes to the correct branch and GST account under the rule."
        },
        {
          "title": "Plenty of CGST credit, but SGST is still due",
          "body": "Tax due: ₹10,000 CGST and ₹10,000 SGST. Available credit: only ₹20,000 CGST.\n\n1. Use ₹10,000 CGST credit against CGST.\n2. Do not use the other ₹10,000 CGST directly against SGST.\n3. SGST still needs **₹10,000 cash** on these facts."
        }
      ],
      "nuances": [
        "ISD and an internal service charge are different mechanisms.",
        "A combined credit total can hide a tax-account shortfall.",
        "Available credit cannot pay reverse-charge tax, interest or penalties."
      ],
      "recap": [
        "Use ISD for covered service-credit distribution.",
        "Allocate to the proper recipient registrations.",
        "Pay each tax category using permitted credit and cash."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Under the amended rules, how should covered shared-service credit distribution through ISD be treated?",
          "options": [
            "Required for cases covered by the amended rules",
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
          "question": "CGST purchase credit can directly pay SGST owed.",
          "correctBool": false,
          "explanation": "Direct CGST-to-SGST use is prohibited.",
          "id": "6.4-q2",
          "sectionRef": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        },
        {
          "type": "numeric",
          "question": "Assume eligible distributable credit ₹30,000 and the prescribed recipient share is 60%. What is that share, in rupees?",
          "correctNumber": 18000,
          "tolerance": 0.01,
          "explanation": "₹30,000 × 60% = ₹18,000.",
          "id": "6.4-q3",
          "sectionRef": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        },
        {
          "type": "numeric",
          "question": "GST owed is ₹10,000 CGST plus ₹10,000 SGST. Available credit is only ₹20,000 CGST. With no other balances, how much cash is needed, in rupees?",
          "correctNumber": 10000,
          "tolerance": 0.01,
          "explanation": "SGST cannot be offset directly by CGST credit.",
          "id": "6.4-q4",
          "sectionRef": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        }
      ],
      "learningGoal": "Understand sharing service credit across registrations and why different GST balances cannot all be mixed.",
      "story": "Asha’s head office buys a service used by two State registrations. Each registration needs the correct share of eligible credit. Later, one branch has CGST credit but an SGST bill to pay: those balances are not interchangeable.",
      "selfCheck": {
        "question": "Why can ₹20,000 CGST credit fail to settle ₹20,000 combined tax?",
        "answer": "Because CGST credit cannot directly pay SGST. The separate tax-account restrictions still apply."
      }
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "Purchase GST is ₹20,000, including ₹3,000 personal-use and ₹2,000 otherwise blocked tax. Other conditions hold. What credit is allowed, in rupees?",
      "correctNumber": 15000,
      "tolerance": 0.01,
      "explanation": "₹20,000 − ₹3,000 − ₹2,000 = ₹15,000.",
      "id": "m6-q1",
      "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
    },
    {
      "type": "tf",
      "question": "The special relief in sections 16(5)/(6) removes the deadline for every late-credit claim.",
      "correctBool": false,
      "explanation": "They provide specific relief for specified periods or restoration conditions.",
      "id": "m6-q2",
      "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 37. [Current section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001)."
    },
    {
      "type": "numeric",
      "question": "Purchase GST of ₹45,000 includes ₹12,000 blocked club-membership tax. The rest is eligible. What credit is allowed, in rupees?",
      "correctNumber": 33000,
      "tolerance": 0.01,
      "explanation": "₹45,000 − ₹12,000 = ₹33,000.",
      "id": "m6-q3",
      "sectionRef": "CGST Act section 17(5) and its explanations. [Amended section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001)."
    },
    {
      "type": "mcq",
      "question": "An employer relies on an exception for food benefits required by law. What evidence should it keep?",
      "options": [
        "Nothing",
        "The legal duty to provide the benefit and the exception’s conditions",
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
      "question": "Assume a covered bill has ₹18,000 GST and 50% of its relevant value-plus-tax remains unpaid after 180 days. What is the illustrative reversal, in rupees?",
      "correctNumber": 9000,
      "tolerance": 0.01,
      "explanation": "₹18,000 × 50% = ₹9,000.",
      "id": "m6-q5",
      "sectionRef": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43."
    },
    {
      "type": "tf",
      "question": "The 180-day supplier-payment rule applies in exactly the same way to reverse-charge invoices.",
      "correctBool": false,
      "explanation": "The legal proviso has an RCM exception.",
      "id": "m6-q6",
      "sectionRef": "CGST Act sections 16(2) and 17(1)/(2); CGST Rules 37, 42 and 43."
    },
    {
      "type": "numeric",
      "question": "Assume eligible shared-service credit is ₹30,000 and the prescribed second recipient share is 40%. What is that share, in rupees?",
      "correctNumber": 12000,
      "tolerance": 0.01,
      "explanation": "₹30,000 × 40% = ₹12,000.",
      "id": "m6-q7",
      "sectionRef": "CGST Act sections 20, 49, 49A and 49B; Rules 39 and 88A. [Amended ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
    },
    {
      "type": "mcq",
      "question": "After April 2025, a head office receives an outside service invoice on behalf of branches. Which credit-distribution mechanism should it examine first?",
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
