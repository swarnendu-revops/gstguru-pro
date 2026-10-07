import type { Module } from "./types";

export const module8: Module = {
  "id": "module-8",
  "number": 8,
  "title": "Returns, Reconciliation & E-commerce",
  "summary": "Turn transaction records into consistent returns and resolve differences before they become notices.",
  "chapters": [
    {
      "id": "8.1",
      "title": "GSTR-1, GSTR-1A & GSTR-3B",
      "roadmap": "Separate outward-supply reporting from summary tax payment and use permitted corrections.",
      "keyTerms": [
        {
          "term": "GSTR-1",
          "def": "The statement reporting outward-supply details."
        },
        {
          "term": "GSTR-1A",
          "def": "An optional same-period amendment facility before that period’s GSTR-3B."
        },
        {
          "term": "GSTR-3B",
          "def": "The summary return reporting liabilities, credit and payment."
        }
      ],
      "explanation": "GSTR-1 reports outward-supply details; GSTR-3B reports summary liability, ITC and payment. Their figures should reconcile, but one is not a substitute for the other. Match books, invoice/IRN data, credit/debit notes and outward reporting before finalising the summary return.\n\nGSTR-1A permits specified same-period corrections after GSTR-1 filing or its due date, whichever is later, and before filing that period's GSTR-3B. The portal describes it as optional and usable once per period. Its changes feed the supplier's GSTR-3B, while recipient credit for those records appears in the subsequent period's GSTR-2B under the stated portal process.\n\nA filed GSTR-3B is not freely revisable like a draft spreadsheet. Correct errors through the permitted subsequent-reporting/payment procedures within their legal limits. Nil business activity does not automatically remove a registered person's filing duty. Use the actual period's filing calendar and notified extensions.",
      "legalBasis": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm).\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Missing invoice",
          "body": "GSTR-1 omitted ₹20,000 net taxable sales at assumed 18%. The missing tax is **₹3,600**. Before GSTR-3B, examine the available GSTR-1A process and reconcile the corrected summary."
        },
        {
          "title": "Unreconciled difference",
          "body": "Books and outward statement show ₹45,000 GST, but draft GSTR-3B shows ₹42,000 without a lawful adjustment. Investigate the **₹3,000** difference before filing; do not treat lower auto-population as permission to underpay."
        }
      ],
      "nuances": [
        "GSTR-1A timing differs from an unrestricted revised return.",
        "Recipient GSTR-2B timing may differ from supplier correction timing.",
        "Filing a nil return still requires a correct nil position."
      ],
      "recap": [
        "Reconcile details to summary liability.",
        "Use permitted corrections before finalisation.",
        "Check legal rectification cut-offs."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which form ordinarily reports outward-supply details?",
          "options": [
            "GSTR-2B",
            "REG-06",
            "RFD-01",
            "GSTR-1"
          ],
          "correctIndex": 3,
          "explanation": "GSTR-1 is the outward-supply statement.",
          "id": "8.1-q1",
          "sectionRef": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm)."
        },
        {
          "type": "tf",
          "question": "A filed GSTR-3B can be freely revised whenever the taxpayer wants.",
          "correctBool": false,
          "explanation": "Errors require the permitted correction/payment framework.",
          "id": "8.1-q2",
          "sectionRef": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm)."
        },
        {
          "type": "numeric",
          "question": "Omitted sales ₹20,000 at assumed 18%. Missing output tax in ₹?",
          "correctNumber": 3600,
          "tolerance": 0.01,
          "explanation": "₹20,000 × 18% = ₹3,600.",
          "id": "8.1-q3",
          "sectionRef": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm)."
        },
        {
          "type": "mcq",
          "question": "GSTR-1A for a period must ordinarily be used before:",
          "options": [
            "That period’s GSTR-3B filing",
            "Any future annual return only",
            "Registration cancellation only",
            "Import bill payment only"
          ],
          "correctIndex": 0,
          "explanation": "The optional facility operates before that GSTR-3B is filed.",
          "id": "8.1-q4",
          "sectionRef": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm)."
        }
      ]
    },
    {
      "id": "8.2",
      "title": "IMS, GSTR-2B & Purchase Reconciliation",
      "roadmap": "Review invoice actions while preserving legal credit tests.",
      "keyTerms": [
        {
          "term": "IMS",
          "def": "The Invoice Management System used to act on eligible supplier records."
        },
        {
          "term": "Reconciliation",
          "def": "Matching statements to purchase books and receipt/eligibility evidence."
        },
        {
          "term": "Timing difference",
          "def": "A record reported in a different period, not necessarily a fictitious invoice."
        }
      ],
      "explanation": "A sound purchase review uses invoice identifiers, supplier GSTIN, value, tax head and the relevant statement period. Classify differences into missing records, duplicates, wrong GSTIN/place, amendments, credit notes and timing. Do not simply claim the total in a portal summary.\n\nIMS lets recipients take available actions such as accepting, rejecting or keeping specified records pending. The available actions, special handling for credit notes and recomputation rules evolve with portal advisories. Check the official current guidance. Action taken in IMS affects statement generation; it does not override sections 16/17 or establish that goods were received.\n\nGSTR-2B includes specified supplier and import-goods data. Import-service RCM credit requires its separate cash-payment and eligibility workflow, rather than assuming it will all appear in the statement. Maintain an exception log assigning each missing or incorrect record an owner, reason and resolution date.",
      "legalBasis": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/).\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Matched but blocked",
          "body": "₹40,000 purchase GST matches the statement; ₹6,000 relates to blocked expenses. Assuming all remaining conditions hold, claimable credit is **₹34,000**, not ₹40,000."
        },
        {
          "title": "Timing gap",
          "body": "Books contain a ₹9,000-credit invoice not yet properly communicated in the applicable statement. Log the mismatch and resolve supplier reporting/period eligibility. Do not silently force it into a matched total."
        }
      ],
      "nuances": [
        "Accepting a record in IMS is not a legal entitlement ruling.",
        "Do not reject genuine records merely to hide a reconciliation difference.",
        "Import-service RCM is a separate reconciliation stream."
      ],
      "recap": [
        "Match invoice-level data.",
        "Track IMS action and statement effects.",
        "Apply statutory eligibility after matching."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "IMS acceptance by itself proves:",
          "options": [
            "Every legal ITC condition",
            "Only a portal action, with eligibility still assessed",
            "Payment of all tax",
            "An export refund"
          ],
          "correctIndex": 1,
          "explanation": "Portal action does not replace statutory conditions.",
          "id": "8.2-q1",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
        },
        {
          "type": "tf",
          "question": "Import-service RCM credit necessarily appears in GSTR-2B in the same way as domestic vendor credit.",
          "correctBool": false,
          "explanation": "It requires a separate reporting and eligibility workflow.",
          "id": "8.2-q2",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
        },
        {
          "type": "numeric",
          "question": "Matched GST ₹40,000 less blocked ₹6,000; other conditions hold. Eligible amount in ₹?",
          "correctNumber": 34000,
          "tolerance": 0.01,
          "explanation": "₹40,000 − ₹6,000 = ₹34,000.",
          "id": "8.2-q3",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
        },
        {
          "type": "mcq",
          "question": "A missing invoice should first be:",
          "options": [
            "Treated as salary",
            "Added without evidence",
            "Logged and investigated for reporting/period eligibility",
            "Deleted from books"
          ],
          "correctIndex": 2,
          "explanation": "Determine the reason rather than forcing a match.",
          "id": "8.2-q4",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
        }
      ]
    },
    {
      "id": "8.3",
      "title": "QRMP, Annual Returns & Year-end Review",
      "roadmap": "Distinguish filing frequency, payment frequency and the annual reconciliation process.",
      "keyTerms": [
        {
          "term": "QRMP",
          "def": "The quarterly return/monthly payment scheme for eligible taxpayers."
        },
        {
          "term": "IFF",
          "def": "The optional invoice furnishing facility for permitted quarterly filers."
        },
        {
          "term": "GSTR-9C",
          "def": "A prescribed reconciliation statement where applicable, under the current self-certification framework."
        }
      ],
      "explanation": "QRMP reduces return frequency for eligible taxpayers but does not automatically mean tax is payable only once a quarter. Review eligibility, the selected option, monthly payment method and applicable due dates. IFF can communicate permitted B2B records in the first two months without duplicating them in the quarterly statement.\n\nAnnual compliance brings outward reporting, summary returns, books, notes and ITC together. GSTR-9 and GSTR-9C applicability depends on the relevant year's turnover limits, exclusions and exemption notifications. Don't copy last year's annual-return exemption as a permanent rule. The reconciliation statement is not the former mandatory CA-certified GST audit format.\n\nPrepare a year-end bridge: sales and tax by category/head, unreported differences, eligible credit, reversals/reclaims, exports/refunds, RCM and outstanding notices. Annual reporting does not by itself reopen expired rectification or ITC windows. Set internal review dates before those statutory cut-offs.",
      "legalBasis": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Payment versus filing",
          "body": "A QRMP taxpayer has a quarter with monthly net liability of ₹10,000, ₹12,000 and ₹8,000 under an assumed permitted calculation. Total is **₹30,000**, but payment timing follows the monthly/quarterly scheme rather than an assumed annual deadline."
        },
        {
          "title": "Annual bridge",
          "body": "Annual books show ₹5,00,000 output GST and reported returns show ₹4,95,000, without a justified adjustment. Investigate **₹5,000** before finalising the annual reconciliation and separately determine correction/payment options."
        }
      ],
      "nuances": [
        "QRMP is not automatic payment deferral for every month.",
        "IFF records must not be duplicated.",
        "Annual forms do not override credit or correction deadlines."
      ],
      "recap": [
        "Separate filing from payment frequency.",
        "Check year-specific annual applicability.",
        "Reconcile before statutory cut-offs."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "QRMP stands for:",
          "options": [
            "Quarterly refund, monthly penalty",
            "Quick registration, monthly profit",
            "Quarterly review, mandatory PAN",
            "Quarterly return, monthly payment"
          ],
          "correctIndex": 3,
          "explanation": "The scheme separates quarterly returns from monthly payments.",
          "id": "8.3-q1",
          "sectionRef": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications."
        },
        {
          "type": "tf",
          "question": "Annual return filing automatically extends expired ITC time limits.",
          "correctBool": false,
          "explanation": "Credit time limits must be independently satisfied.",
          "id": "8.3-q2",
          "sectionRef": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications."
        },
        {
          "type": "numeric",
          "question": "Monthly assumed liabilities ₹10,000, ₹12,000 and ₹8,000. Quarter total in ₹?",
          "correctNumber": 30000,
          "tolerance": 0.01,
          "explanation": "The three amounts total ₹30,000.",
          "id": "8.3-q3",
          "sectionRef": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications."
        },
        {
          "type": "mcq",
          "question": "Annual-return exemption applicability should be checked:",
          "options": [
            "For the particular year and notification",
            "Once forever",
            "Only from a 2017 article",
            "Only from profit"
          ],
          "correctIndex": 0,
          "explanation": "Annual exemptions and thresholds can be year-specific.",
          "id": "8.3-q4",
          "sectionRef": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications."
        }
      ]
    },
    {
      "id": "8.4",
      "title": "TDS, TCS & Platform Transactions",
      "roadmap": "Separate collection mechanisms from the supplier’s underlying tax liability.",
      "keyTerms": [
        {
          "term": "GST TDS",
          "def": "Tax deduction by specified recipients under section 51."
        },
        {
          "term": "GST TCS",
          "def": "Collection by applicable e-commerce operators under section 52."
        },
        {
          "term": "Net taxable supplies",
          "def": "A statutory base used for the applicable operator collection mechanism."
        }
      ],
      "explanation": "GST TDS applies to specified recipients and qualifying contracts, with a contract-value test and location-related conditions. It is different from income-tax TDS. The deducted amount flows through the prescribed return and recipient cash-ledger process; it does not replace assessment of the supplier's output GST.\n\nTCS by an e-commerce operator is computed on the legally defined net value at the notified rate. Account for relevant returns and statutory exclusions. It is not a second output levy replacing the supplier's GST. Supplies covered by section 9(5), operator services and supplier sales require separate streams.\n\nRegistration relief for qualifying small sellers using an operator is conditional, including applicable intra-State and enrolment requirements; it is not a general permission to ignore registration. Reconcile platform gross sales, returns, fees, net bank settlements, TCS and outward tax. The bank payout alone is not turnover.",
      "legalBasis": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Assumed TCS",
          "body": "Assume the relevant net taxable supply base is ₹1,00,000 and the combined exercise TCS rate is 0.5%. Collection is **₹500**. Underlying output tax is computed separately at its own applicable rate."
        },
        {
          "title": "Settlement bridge",
          "body": "Platform sales are ₹1,18,000 including ₹18,000 GST. Fees/TCS/other valid deductions total ₹8,000, giving a ₹1,10,000 payout. Net bank payout is not automatically the ₹1,00,000 taxable sales base."
        }
      ],
      "nuances": [
        "GST and income-tax TDS are separate systems.",
        "Use the notified period-valid TCS rate and base.",
        "Platform commissions and section 9(5) transactions need distinct treatment."
      ],
      "recap": [
        "Classify deduction, collection and output liability separately.",
        "Reconcile gross sales to settlements.",
        "Check conditional seller registration relief."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A platform net payout is automatically the taxable sales value?",
          "options": [
            "Yes always",
            "No; gross sales, tax and deductions must be reconciled",
            "Only for exporters",
            "Only when rounded"
          ],
          "correctIndex": 1,
          "explanation": "Settlement deductions can make payout differ from turnover/value.",
          "id": "8.4-q1",
          "sectionRef": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications."
        },
        {
          "type": "tf",
          "question": "GST TCS replaces all output tax liability of the seller.",
          "correctBool": false,
          "explanation": "It is a collection mechanism with separate underlying tax obligations.",
          "id": "8.4-q2",
          "sectionRef": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications."
        },
        {
          "type": "numeric",
          "question": "Assumed TCS base ₹1,00,000 at combined 0.5%. Collection in ₹?",
          "correctNumber": 500,
          "tolerance": 0.01,
          "explanation": "₹1,00,000 × 0.5% = ₹500.",
          "id": "8.4-q3",
          "sectionRef": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications."
        },
        {
          "type": "mcq",
          "question": "GST TDS is governed primarily by:",
          "options": [
            "Section 143",
            "Only Rule 35",
            "Section 51",
            "Income-tax salary slabs"
          ],
          "correctIndex": 2,
          "explanation": "Section 51 establishes GST TDS.",
          "id": "8.4-q4",
          "sectionRef": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications."
        }
      ]
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "Expected output GST ₹45,000 and unexplained draft ₹42,000. Difference in ₹?",
      "correctNumber": 3000,
      "tolerance": 0.01,
      "explanation": "₹45,000 − ₹42,000 = ₹3,000 to investigate.",
      "id": "m8-q1",
      "sectionRef": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm)."
    },
    {
      "type": "mcq",
      "question": "A supplier adds an invoice through GSTR-1A. Recipient credit timing should be checked against:",
      "options": [
        "Only the supplier bank date",
        "Only the PDF creation date",
        "Automatic same-day credit",
        "The official subsequent-period GSTR-2B process"
      ],
      "correctIndex": 3,
      "explanation": "The portal describes the recipient credit appearing in the subsequent GSTR-2B period.",
      "id": "m8-q2",
      "sectionRef": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm)."
    },
    {
      "type": "numeric",
      "question": "Reconciled input GST ₹28,000 includes ₹3,000 personal and ₹4,000 blocked credits. Otherwise eligible amount in ₹?",
      "correctNumber": 21000,
      "tolerance": 0.01,
      "explanation": "₹28,000 − ₹3,000 − ₹4,000 = ₹21,000.",
      "id": "m8-q3",
      "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
    },
    {
      "type": "tf",
      "question": "An unmatched purchase invoice can be a timing issue rather than automatically a fake invoice.",
      "correctBool": true,
      "explanation": "Investigate the facts and the correct reporting period.",
      "id": "m8-q4",
      "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
    },
    {
      "type": "numeric",
      "question": "Books output GST ₹5,00,000, returns ₹4,95,000, no explained adjustment. Gap in ₹?",
      "correctNumber": 5000,
      "tolerance": 0.01,
      "explanation": "₹5,00,000 − ₹4,95,000 = ₹5,000.",
      "id": "m8-q5",
      "sectionRef": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications."
    },
    {
      "type": "tf",
      "question": "GSTR-9C should automatically be described as the old CA-certified GST audit.",
      "correctBool": false,
      "explanation": "The current reconciliation-statement framework uses self-certification where applicable.",
      "id": "m8-q6",
      "sectionRef": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications."
    },
    {
      "type": "numeric",
      "question": "Gross settlement ₹1,18,000 less valid aggregate deductions ₹8,000. Net payout in ₹?",
      "correctNumber": 110000,
      "tolerance": 0.01,
      "explanation": "₹1,18,000 − ₹8,000 = ₹1,10,000.",
      "id": "m8-q7",
      "sectionRef": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications."
    },
    {
      "type": "mcq",
      "question": "Small seller registration relief through an operator should be treated as:",
      "options": [
        "Subject to the notified restrictions and enrolment conditions",
        "An export certificate",
        "A composition rate",
        "Unconditional for all sellers"
      ],
      "correctIndex": 0,
      "explanation": "The relief has specific conditions and cannot be generalised.",
      "id": "m8-q8",
      "sectionRef": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications."
    }
  ]
};
