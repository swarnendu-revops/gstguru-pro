import type { Module } from "./types";

export const module1: Module = {
  "id": "module-1",
  "number": 1,
  "title": "GST Foundations & the Legal Framework",
  "summary": "Understand the dual tax system, the vocabulary of GST, and how to establish the law that applies to a transaction.",
  "chapters": [
    {
      "id": "1.1",
      "title": "How GST Works",
      "roadmap": "Follow a supply through the value chain and understand why GST taxes consumption.",
      "keyTerms": [
        {
          "term": "GST",
          "def": "An indirect tax on supplies of goods or services."
        },
        {
          "term": "Output tax",
          "def": "Tax charged on your outward taxable supplies."
        },
        {
          "term": "Input tax credit (ITC)",
          "def": "Eligible tax on inward supplies that can offset output tax."
        }
      ],
      "explanation": "GST follows the supply chain while credit prevents the same value being taxed repeatedly. A registered business charges output tax, assesses eligible ITC, and pays the balance. The customer ultimately bears the tax when no further credit is available.\n\nFor an ordinary intra-State supply, central GST and State GST (or UTGST) operate together. Inter-State supplies ordinarily attract integrated GST. The supplier's location and the legally determined **place of supply** decide the tax head; the customer's postal address alone is not enough.\n\nThe Constitution creates the legislative framework; Acts establish the charge; rules and notifications fill in procedures, rates and conditions. GST Council recommendations must be implemented through the relevant legal instrument before they change the tax payable. Always write down the transaction date, tax period, parties and supply facts before choosing the rule.",
      "legalBasis": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Credit chain",
          "body": "Assume a combined GST rate of 18%. A retailer buys goods for ₹1,00,000 plus ₹18,000 GST and sells them for ₹1,50,000 plus ₹27,000 GST. With all ITC conditions met, its net tax is ₹27,000 − ₹18,000 = **₹9,000**."
        },
        {
          "title": "Credit is conditional",
          "body": "If ₹3,000 of the ₹18,000 purchase tax is ineligible, usable credit is ₹15,000 and net tax becomes **₹12,000**. Payment of GST on a purchase does not itself establish entitlement to credit."
        }
      ],
      "nuances": [
        "Turnover is not the same thing as taxable value for one invoice.",
        "A recommendation or press release is not a rate notification.",
        "These exercise rates are assumptions, not a classification decision."
      ],
      "recap": [
        "Identify supply before computing tax.",
        "Determine the correct tax head.",
        "Assess ITC eligibility separately."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "What is the main function of ITC?",
          "options": [
            "Reduce tax cascading",
            "Replace registration",
            "Exempt every purchase",
            "Tax all profit"
          ],
          "correctIndex": 0,
          "explanation": "Credit prevents eligible input tax from being taxed again.",
          "id": "1.1-q1",
          "sectionRef": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5."
        },
        {
          "type": "tf",
          "question": "Every GST Council recommendation automatically changes the applicable tax rate.",
          "correctBool": false,
          "explanation": "An implementing legal instrument and its effective date must be checked.",
          "id": "1.1-q2",
          "sectionRef": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5."
        },
        {
          "type": "numeric",
          "question": "Output GST is ₹27,000 and eligible ITC ₹18,000. Ignoring head restrictions, what is the net liability in ₹?",
          "correctNumber": 9000,
          "tolerance": 0.01,
          "explanation": "₹27,000 − ₹18,000 = ₹9,000.",
          "id": "1.1-q3",
          "sectionRef": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5."
        },
        {
          "type": "mcq",
          "question": "An ordinary intra-State supply generally attracts which taxes?",
          "options": [
            "No GST",
            "CGST plus SGST/UTGST",
            "IGST plus CGST",
            "Only income tax"
          ],
          "correctIndex": 1,
          "explanation": "The dual intra-State levy combines central and State/UT tax.",
          "id": "1.1-q4",
          "sectionRef": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5."
        }
      ]
    },
    {
      "id": "1.2",
      "title": "Goods, Services & Business",
      "roadmap": "Build the definitions needed to analyse supplies without relying on accounting labels.",
      "keyTerms": [
        {
          "term": "Goods",
          "def": "Generally movable property; excludes money and securities, with statutory inclusions."
        },
        {
          "term": "Services",
          "def": "Generally anything other than goods, money and securities, with specified inclusions."
        },
        {
          "term": "Consideration",
          "def": "Payment or another qualifying act in return for a supply."
        }
      ],
      "explanation": "GST definitions deliberately reach beyond everyday language. Business includes many commercial activities even where an activity lacks a profit motive or is incidental to the main trade. A charitable or loss-making label therefore does not settle taxability.\n\nConsideration may come from the recipient or another person, and can be monetary or non-monetary. A deposit is generally not treated as payment for supply until applied as consideration. Exchange and barter can be supplies even when no cash changes hands.\n\nMoney itself is excluded from goods and services, but a separately charged service involving money can be taxable. Securities are also excluded, while brokerage is a separate service. For every receipt, distinguish principal money, security deposit and actual fee. A ledger headed \"other income\" does not answer whether there is a taxable supply.",
      "legalBasis": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Deposit versus fee",
          "body": "A supplier receives a refundable ₹20,000 security deposit and a separate service fee of ₹10,000. Assuming the fee attracts 18%, GST on the fee is **₹1,800**. The unapplied refundable deposit is not automatically consideration."
        },
        {
          "title": "Barter",
          "body": "Two businesses exchange advertising and design services valued, on the assumed facts, at ₹50,000 each. If both services attract an assumed 18%, each supply has **₹9,000** GST before any eligible credit. Cash-free does not mean tax-free."
        }
      ],
      "nuances": [
        "An incidental business disposal can be within GST.",
        "The government-subsidy exclusion from consideration is specific.",
        "The statutory definition controls, not the invoice heading."
      ],
      "recap": [
        "Consideration need not be cash.",
        "Deposits require an application test.",
        "Examine fees separately from money or securities."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "An unapplied refundable security deposit is generally:",
          "options": [
            "An export",
            "Automatically output tax",
            "Not consideration until applied",
            "Always salary"
          ],
          "correctIndex": 2,
          "explanation": "Section 2(31) distinguishes a deposit from payment until it is applied as consideration.",
          "id": "1.2-q1",
          "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
        },
        {
          "type": "tf",
          "question": "A barter transaction can be a supply under GST.",
          "correctBool": true,
          "explanation": "Non-monetary consideration is possible.",
          "id": "1.2-q2",
          "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
        },
        {
          "type": "numeric",
          "question": "Assume an 18% taxable service fee of ₹10,000, excluding GST. Compute GST in ₹.",
          "correctNumber": 1800,
          "tolerance": 0.01,
          "explanation": "₹10,000 × 18% = ₹1,800.",
          "id": "1.2-q3",
          "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
        },
        {
          "type": "mcq",
          "question": "Which item requires a separate services analysis?",
          "options": [
            "A security itself",
            "An untouched deposit",
            "Money principal alone",
            "Brokerage fee"
          ],
          "correctIndex": 3,
          "explanation": "Brokerage is a service even though securities themselves are excluded.",
          "id": "1.2-q4",
          "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
        }
      ]
    },
    {
      "id": "1.3",
      "title": "Taxable, Exempt & Zero-rated",
      "roadmap": "Distinguish three outcomes that have very different credit consequences.",
      "keyTerms": [
        {
          "term": "Exempt supply",
          "def": "Includes nil-rated, wholly exempt and non-taxable supplies under the statutory definition."
        },
        {
          "term": "Zero-rated supply",
          "def": "Exports and qualifying supplies for authorised SEZ operations."
        },
        {
          "term": "Non-taxable supply",
          "def": "A supply not leviable to tax under the CGST or IGST Acts."
        }
      ],
      "explanation": "First decide whether there is a supply. An activity outside supply is not simply a taxable supply with a zero rate. Next determine whether the levy applies and whether a valid exemption covers the facts.\n\nA nil-rated or exempt outward supply usually restricts attributable input credit. Zero-rating is different: eligible input credit can remain available, and prescribed refund routes may exist. Exporting and selling exempt goods domestically therefore need separate analyses even where both invoices have no output GST.\n\nHuman-consumption alcoholic liquor is outside the GST levy. The specified petroleum products have a commencement mechanism under the charging sections; do not treat all fuels as identically taxed. Exemptions often depend on supplier, recipient, use and other conditions rather than an everyday product name. Document those conditions before deciding tax treatment.",
      "legalBasis": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Different credit result",
          "body": "Assume ₹12,000 input GST relates exclusively to domestic exempt supplies, with no special exception. It is generally unavailable. The same amount attributable to qualifying zero-rated supplies may be eligible, subject to sections 16/17 and the applicable refund rules."
        },
        {
          "title": "SEZ boundary",
          "body": "An invoice to an SEZ customer for ₹1,00,000 is not enough by itself. Establish that the supply is for **authorised operations** and collect the prescribed evidence before applying the zero-rated route."
        }
      ],
      "nuances": [
        "Zero-rated does not mean every purchase credit is eligible.",
        "An SEZ postal address alone does not establish authorised operations.",
        "Exemption wording and effective dates matter."
      ],
      "recap": [
        "Separate outside-supply from exemption.",
        "Zero-rating preserves qualifying credit.",
        "Record exemption conditions."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which can qualify as zero-rated?",
          "options": [
            "Export meeting the legal conditions",
            "Every exempt supply",
            "Every sale without an invoice",
            "Every small domestic sale"
          ],
          "correctIndex": 0,
          "explanation": "Exports and authorised SEZ supplies fall within the statutory zero-rating framework.",
          "id": "1.3-q1",
          "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
        },
        {
          "type": "tf",
          "question": "Domestic exemption and zero-rating always have the same ITC consequence.",
          "correctBool": false,
          "explanation": "Zero-rated supplies may preserve qualifying ITC; domestic exemptions generally restrict it.",
          "id": "1.3-q2",
          "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
        },
        {
          "type": "numeric",
          "question": "₹12,000 input GST relates solely to exempt domestic supplies; no exception applies. Eligible ITC in ₹?",
          "correctNumber": 0,
          "tolerance": 0.01,
          "explanation": "Credit attributable exclusively to exempt supplies is restricted.",
          "id": "1.3-q3",
          "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
        },
        {
          "type": "mcq",
          "question": "An SEZ supply must be for what to qualify under the statutory definition?",
          "options": [
            "Any employee purchase",
            "Authorised operations",
            "Any cash purchase",
            "Only tourism"
          ],
          "correctIndex": 1,
          "explanation": "Section 16 specifies authorised operations.",
          "id": "1.3-q4",
          "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
        }
      ]
    },
    {
      "id": "1.4",
      "title": "Finding the Law & Tracking Amendments",
      "roadmap": "Develop a repeatable research workflow for a law that changes through many instruments.",
      "keyTerms": [
        {
          "term": "Notification",
          "def": "An instrument issued under a statutory power, often implementing rates or procedures."
        },
        {
          "term": "Circular",
          "def": "Administrative clarification; it cannot override the statute."
        },
        {
          "term": "Effective date",
          "def": "The date from which a provision or instrument applies."
        }
      ],
      "explanation": "Start with the transaction and tax period, then locate the Act provision. Read the rule and relevant notification together, including provisos, explanations, amendments and commencement clauses. Finally check clarifications and judicial decisions relevant to the same facts.\n\nA consolidated web page helps navigation but the underlying Gazette instrument establishes the amendment. Distinguish a Council recommendation, a Finance Act amendment, its commencement and a portal feature rollout. They can occur on different dates. For example, the revised mandatory ISD mechanism applies from 1 April 2025; old material describing the mechanism as optional cannot be carried into later periods without review.\n\nKeep a short research note: issue, facts, legal text, source link, effective date, conclusion and unresolved point. Where an advance ruling is used, identify who it binds rather than presenting it as nationwide precedent. This course supplies a conceptual framework, not an automatically updated filing calendar or commodity rate database.",
      "legalBasis": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001).\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Amendment chronology",
          "body": "A rule is published on 15 June with an effective date of 1 July. A 25 June transaction cannot be moved to the new rule merely because the publication exists. For a 5 July transaction, apply the new text subject to transitional provisions."
        },
        {
          "title": "Research file",
          "body": "For a disputed ₹50,000 ITC claim, retain the invoice, supply facts, section and rule text, relevant notification and conclusion. A screenshot of an undated search result is not a complete position paper."
        }
      ],
      "nuances": [
        "A portal advisory explains operation; it does not amend the Act.",
        "An advance ruling has a limited statutory binding reach.",
        "Check central and applicable State instruments."
      ],
      "recap": [
        "Anchor research to the transaction period.",
        "Separate publication from commencement.",
        "Preserve evidence behind the conclusion."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "What date normally governs an amendment with delayed commencement?",
          "options": [
            "The customer email",
            "The last invoice date in the year",
            "The effective date",
            "The first news story"
          ],
          "correctIndex": 2,
          "explanation": "Commencement establishes when the amendment operates.",
          "id": "1.4-q1",
          "sectionRef": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        },
        {
          "type": "tf",
          "question": "A circular can override the charging provision of the Act.",
          "correctBool": false,
          "explanation": "Administrative clarification cannot replace statutory law.",
          "id": "1.4-q2",
          "sectionRef": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        },
        {
          "type": "mcq",
          "question": "Which is the best research record?",
          "options": [
            "Only a forum answer",
            "Only a social post",
            "Undated screenshot",
            "Facts, law, source and effective date"
          ],
          "correctIndex": 3,
          "explanation": "A reproducible legal note records the basis of the conclusion.",
          "id": "1.4-q3",
          "sectionRef": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        },
        {
          "type": "mcq",
          "question": "An advance ruling ordinarily binds:",
          "options": [
            "The applicant and concerned/jurisdictional officer, within the Act",
            "Every court",
            "Only the auditor",
            "All taxpayers nationwide"
          ],
          "correctIndex": 0,
          "explanation": "Section 103 defines its limited binding scope.",
          "id": "1.4-q4",
          "sectionRef": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        }
      ]
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "A trader has ₹45,000 output GST and ₹32,000 input GST, of which ₹5,000 is blocked. Ignoring head restrictions, calculate net tax in ₹.",
      "correctNumber": 18000,
      "tolerance": 0.01,
      "explanation": "Eligible ITC is ₹27,000; ₹45,000 − ₹27,000 = ₹18,000.",
      "id": "m1-q1",
      "sectionRef": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5."
    },
    {
      "type": "mcq",
      "question": "A Council announcement mentions a proposed change. What must a practitioner establish before using it?",
      "options": [
        "Only the headline",
        "Notification, conditions and commencement",
        "Only the website colour",
        "The customer agrees"
      ],
      "correctIndex": 1,
      "explanation": "Find the implemented law applicable to the transaction date.",
      "id": "m1-q2",
      "sectionRef": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5."
    },
    {
      "type": "mcq",
      "question": "A not-for-profit entity sells taxable products commercially. What is the sound starting point?",
      "options": [
        "Treat all as securities",
        "No profit means no business",
        "Apply the GST business and supply definitions",
        "All receipts are donations"
      ],
      "correctIndex": 2,
      "explanation": "Business need not have a profit motive.",
      "id": "m1-q3",
      "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
    },
    {
      "type": "numeric",
      "question": "A deposit of ₹30,000 stays unapplied; taxable fees are ₹40,000 at assumed 18%. Calculate GST on the fees in ₹.",
      "correctNumber": 7200,
      "tolerance": 0.01,
      "explanation": "The fee gives ₹40,000 × 18% = ₹7,200.",
      "id": "m1-q4",
      "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
    },
    {
      "type": "mcq",
      "question": "A business serves domestic exempt clients and foreign clients. What must it do?",
      "options": [
        "Claim every purchase credit",
        "Use income-tax residency only",
        "Treat both as nil without ITC review",
        "Classify each supply and allocate eligible credit"
      ],
      "correctIndex": 3,
      "explanation": "Outward supply classification affects ITC and refund treatment.",
      "id": "m1-q5",
      "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
    },
    {
      "type": "tf",
      "question": "An export can still contain blocked input credits.",
      "correctBool": true,
      "explanation": "Zero-rating does not override every section 17(5) restriction.",
      "id": "m1-q6",
      "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
    },
    {
      "type": "mcq",
      "question": "A 2023 article says ISD is optional. You review common service invoices from May 2025. Best next step?",
      "options": [
        "Check the amended section 20 and commencement",
        "Ignore the invoices",
        "Classify them as goods",
        "Apply the old article"
      ],
      "correctIndex": 0,
      "explanation": "The amended mandatory ISD framework applies from 1 April 2025.",
      "id": "m1-q7",
      "sectionRef": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
    },
    {
      "type": "tf",
      "question": "A useful update log separates notified law from proposals.",
      "correctBool": true,
      "explanation": "Recommendations and enacted, commenced rules are different statuses.",
      "id": "m1-q8",
      "sectionRef": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
    }
  ]
};
