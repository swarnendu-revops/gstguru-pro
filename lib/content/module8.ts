import type { Module } from "./types";

export const module8: Module = {
  "id": "module-8",
  "number": 8,
  "title": "Returns, Reconciliation & E-commerce",
  "summary": "Follow sales reporting and purchase checks, then reconcile the result with payments and platform records.",
  "chapters": [
    {
      "id": "8.1",
      "title": "GSTR-1, GSTR-1A & GSTR-3B",
      "roadmap": "Understand the jobs of the sales statement, same-period correction and summary tax return.",
      "keyTerms": [
        {
          "term": "GSTR-1",
          "def": "The statement reporting sales/outward-supply details, including relevant invoices and notes."
        },
        {
          "term": "GSTR-1A",
          "def": "An optional facility for permitted same-period additions/corrections after GSTR-1 and before that period’s GSTR-3B."
        },
        {
          "term": "GSTR-3B",
          "def": "The summary return reporting tax, eligible credit and payment."
        },
        {
          "term": "Reconciliation",
          "def": "Comparing records, explaining differences and correcting genuine errors."
        }
      ],
      "explanation": "### 1. Begin with the sales records\nList supplies by invoice, note, value and tax type. Include the correct categories for consumer sales, business sales, exports and exemptions. GSTR-1 communicates these outward-supply details.\n\n### 2. Review available same-period corrections\nIf GSTR-1 has an omission or mistake, check whether GSTR-1A can correct it before the same period’s GSTR-3B. It is an optional correction facility, not unrestricted revision of any historical return. Recipient purchase-statement timing must also be checked.\n\n### 3. Make the summary agree for a reason\nGSTR-3B brings tax, purchase credit, reversals and payment together. Auto-filled data helps, but responsibility still rests with the business. An already filed GSTR-3B cannot be freely revised; errors need the permitted correction/payment process. Review reverse-charge tax separately and use the permitted credit/cash payment rules.\n\n### 4. File only after investigating differences\nCompare the books, sales statements and summary. Separate valid timing differences from missing records. Use the actual period’s due dates and extensions; do not treat all businesses as having the same filing calendar.",
      "legalBasis": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm).\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "An omitted sale",
          "body": "Assume GSTR-1 missed ₹20,000 sales before tax at 18%.\n\n1. Missing GST = ₹20,000 × 18% = **₹3,600**.\n2. Before GSTR-3B, check the available GSTR-1A correction process.\n3. Reconcile the updated statement with the summary return."
        },
        {
          "title": "A lower draft is not permission to pay less",
          "body": "Books and sales statement show ₹45,000 GST, but draft GSTR-3B shows ₹42,000 without an explained adjustment.\n\n1. Difference = ₹45,000 − ₹42,000 = **₹3,000**.\n2. Investigate it before filing.\n3. Correct genuine errors; preserve evidence for valid differences."
        }
      ],
      "nuances": [
        "Auto-filled figures still need review.",
        "GSTR-1A is not a general reopening of every old return.",
        "Correction and recipient-credit timing are related but separate checks."
      ],
      "recap": [
        "GSTR-1 tells the sales story.",
        "GSTR-1A allows specified same-period corrections.",
        "GSTR-3B summarises tax, credit and payment."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which statement normally reports sales/outward-supply details?",
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
          "question": "A business can freely revise an already filed GSTR-3B whenever it wants.",
          "correctBool": false,
          "explanation": "Errors require the permitted correction/payment framework.",
          "id": "8.1-q2",
          "sectionRef": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm)."
        },
        {
          "type": "numeric",
          "question": "Sales of ₹20,000 before GST were omitted. Assume 18%. What sales GST is missing, in rupees?",
          "correctNumber": 3600,
          "tolerance": 0.01,
          "explanation": "₹20,000 × 18% = ₹3,600.",
          "id": "8.1-q3",
          "sectionRef": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm)."
        },
        {
          "type": "mcq",
          "question": "The optional GSTR-1A correction for a period is normally used before which step?",
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
      ],
      "learningGoal": "Understand the jobs of the sales statement, same-period correction and summary tax return.",
      "story": "Asha’s sales register says one thing, her uploaded invoice list another and her draft tax return a third. These records should be explainable together before she files and pays.",
      "selfCheck": {
        "question": "Why should GSTR-3B be checked against the sales records?",
        "answer": "A draft or auto-filled amount can omit or misstate tax. Differences need an explanation before filing."
      }
    },
    {
      "id": "8.2",
      "title": "IMS, GSTR-2B & Purchase Reconciliation",
      "roadmap": "Compare purchase bills with portal records without assuming a match means credit is allowed.",
      "keyTerms": [
        {
          "term": "IMS",
          "def": "Invoice Management System: the portal facility for permitted actions on supplier records, such as accepting, rejecting or keeping specified items pending."
        },
        {
          "term": "GSTR-2B",
          "def": "The statement of specified purchase and import-goods tax information used during credit review."
        },
        {
          "term": "Reconciliation",
          "def": "Matching records and explaining each difference rather than just comparing grand totals."
        },
        {
          "term": "Timing difference",
          "def": "A record appearing in different periods for a documented reason, rather than necessarily being a permanent error."
        }
      ],
      "explanation": "### 1. Match the individual records\nCompare invoice number/date, supplier registration number, value, tax type and statement period. Look for missing bills, duplicates, incorrect recipient details, amendments and credit notes. A matching total can hide offsetting mistakes.\n\n### 2. Use the available IMS actions carefully\nChoose the permitted action for the actual record. Portal options, credit-note handling and recomputation rules can change, so check official guidance. An acceptance affects statement processing; it does not rewrite the credit law.\n\n### 3. Run the eligibility checks afterward\nConfirm business use, receipt, documents, restrictions and the claim period. A record can match perfectly and still be blocked. Import-service reverse-charge credit needs its separate cash-payment and eligibility process; not every credit comes through the same statement route.\n\n### 4. Keep an unresolved-items list\nFor each gap, record the amount, reason, responsible person and next action. Ask the supplier to resolve missing reporting where needed. Do not force an unexplained bill into the matched total just to make the spreadsheet balance.",
      "legalBasis": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/).\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Matched purchase tax with a blocked part",
          "body": "Assume ₹40,000 purchase GST matches the statement but ₹6,000 relates to blocked expenses.\n\n1. Matched total = ₹40,000.\n2. Remove the blocked amount: ₹40,000 − ₹6,000 = **₹34,000**.\n3. Claim only if the remaining conditions hold."
        },
        {
          "title": "A missing portal record",
          "body": "Asha holds a bill with ₹9,000 potential credit that has not been properly communicated for the applicable period.\n\n1. Record the missing invoice and check the claim conditions.\n2. Resolve supplier reporting and the correct period.\n3. Do not silently treat it as matched/eligible just because the bill is in the books."
        }
      ],
      "nuances": [
        "Matching a portal line is not the complete credit test.",
        "Accepting in IMS does not prove receipt or business eligibility.",
        "A timing gap should have evidence and a follow-up action."
      ],
      "recap": [
        "Match invoice-level facts.",
        "Choose valid portal actions.",
        "Apply credit rules and track unresolved differences."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "What does accepting a record in IMS establish by itself?",
          "options": [
            "Every legal ITC condition",
            "A portal action; the legal credit conditions still need checking",
            "Payment of all tax",
            "An export refund"
          ],
          "correctIndex": 1,
          "explanation": "Portal action does not replace legal conditions.",
          "id": "8.2-q1",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
        },
        {
          "type": "tf",
          "question": "Overseas-service reverse-charge credit must appear in GSTR-2B exactly like ordinary domestic supplier credit.",
          "correctBool": false,
          "explanation": "It requires a separate reporting and eligibility workflow.",
          "id": "8.2-q2",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
        },
        {
          "type": "numeric",
          "question": "Matched purchase GST is ₹40,000, including ₹6,000 blocked credit. All other conditions hold. What credit is allowed, in rupees?",
          "correctNumber": 34000,
          "tolerance": 0.01,
          "explanation": "₹40,000 − ₹6,000 = ₹34,000.",
          "id": "8.2-q3",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
        },
        {
          "type": "mcq",
          "question": "What should you first do with a purchase bill missing from the required portal information?",
          "options": [
            "Treated as salary",
            "Added without evidence",
            "Listed for follow-up and checked for missing reporting and claim timing",
            "Deleted from books"
          ],
          "correctIndex": 2,
          "explanation": "Determine the reason rather than forcing a match.",
          "id": "8.2-q4",
          "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
        }
      ],
      "learningGoal": "Compare purchase bills with portal records without assuming a match means credit is allowed.",
      "story": "Asha has a supplier invoice in her files, but it is missing from the portal statement. Another portal entry matches perfectly but relates to a blocked expense. These are different problems with different next steps.",
      "selfCheck": {
        "question": "Can ₹40,000 matched tax still produce only ₹34,000 eligible credit?",
        "answer": "Yes. A matched record can still include ₹6,000 blocked tax, which must be excluded."
      }
    },
    {
      "id": "8.3",
      "title": "QRMP, Annual Returns & Year-end Review",
      "roadmap": "Understand quarterly filing with monthly payments and the purpose of a year-end check.",
      "keyTerms": [
        {
          "term": "QRMP",
          "def": "Quarterly Return Monthly Payment: an option for eligible businesses to file specified returns quarterly while following monthly tax-payment requirements."
        },
        {
          "term": "IFF",
          "def": "Invoice Furnishing Facility: an optional facility for eligible quarterly filers to communicate permitted business-customer invoices in the first two months."
        },
        {
          "term": "GSTR-9",
          "def": "The annual return, where applicable, summarising the financial year’s GST information."
        },
        {
          "term": "GSTR-9C",
          "def": "The reconciliation statement, where applicable, comparing annual GST reporting with the relevant financial records."
        }
      ],
      "explanation": "### 1. Separate filing frequency from payment timing\nQRMP eligibility, selection, monthly payment method and deadlines must all be checked. Filing quarterly does not automatically defer every tax payment to quarter-end. IFF can communicate permitted invoices early without duplicating them later.\n\n### 2. Check that year’s annual obligations\nAnnual-return and reconciliation-statement requirements depend on the year’s turnover limits, exclusions and exemptions. Do not assume an exemption from last year applies forever. The reconciliation statement is not the old mandatory CA-certified GST audit format.\n\n### 3. Compare the year as a whole\nBring together sales, tax, credit claims, reversals, reclaims, exports, reverse charge and payments. A small monthly mismatch can grow into an unexplained annual difference. Record why each difference exists.\n\n### 4. Review before correction windows close\nAn annual return does not automatically reopen a missed claim or correction deadline. Set internal review dates early enough to investigate and use available correction/payment options within the relevant rules.",
      "legalBasis": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Three months of tax",
          "body": "Assume the permitted payment calculation gives ₹10,000, ₹12,000 and ₹8,000 for the three months.\n\n1. Quarter total = 10,000 + 12,000 + 8,000 = **₹30,000**.\n2. Follow the scheme’s monthly and quarterly payment process.\n3. Do not infer an annual payment deadline from quarterly filing."
        },
        {
          "title": "An annual difference to investigate",
          "body": "Books show ₹5,00,000 sales GST; filed returns show ₹4,95,000, without an explained adjustment.\n\n1. Difference = **₹5,000**.\n2. Trace the invoices/periods behind it.\n3. Determine the permitted correction or payment separately before finalising the annual review."
        }
      ],
      "nuances": [
        "Quarterly returns do not automatically mean only quarterly payments.",
        "Annual applicability needs a year-specific check.",
        "Year-end reporting does not restore every expired correction window."
      ],
      "recap": [
        "Check filing and payment separately.",
        "Use IFF only for its permitted purpose.",
        "Resolve annual differences before relevant deadlines."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "What does QRMP stand for?",
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
          "question": "Filing an annual return automatically extends every expired purchase-credit deadline.",
          "correctBool": false,
          "explanation": "Credit time limits must be independently satisfied.",
          "id": "8.3-q2",
          "sectionRef": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications."
        },
        {
          "type": "numeric",
          "question": "Assume the three monthly tax amounts are ₹10,000, ₹12,000 and ₹8,000. What is the quarter's total, in rupees?",
          "correctNumber": 30000,
          "tolerance": 0.01,
          "explanation": "The three amounts total ₹30,000.",
          "id": "8.3-q3",
          "sectionRef": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications."
        },
        {
          "type": "mcq",
          "question": "When should annual-return exemption conditions be checked?",
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
      ],
      "learningGoal": "Understand quarterly filing with monthly payments and the purpose of a year-end check.",
      "story": "Asha chooses a permitted quarterly-return option. She assumes there is no GST work until the quarter ends. The name of the scheme points to a different answer: quarterly return, monthly payment.",
      "selfCheck": {
        "question": "What is the key distinction in the name QRMP?",
        "answer": "Returns can be quarterly, while tax-payment requirements continue monthly under the scheme."
      }
    },
    {
      "id": "8.4",
      "title": "TDS, TCS & Platform Transactions",
      "roadmap": "Understand deductions and collections on platform sales without mistaking the bank payout for sales value.",
      "keyTerms": [
        {
          "term": "GST TDS",
          "def": "Tax Deducted at Source: specified buyers deduct GST amounts in covered contracts and report them through the prescribed process."
        },
        {
          "term": "GST TCS",
          "def": "Tax Collected at Source: applicable online operators collect tax on the prescribed net-supply base and report it."
        },
        {
          "term": "Net taxable supplies",
          "def": "The legally defined supply-value base for the operator’s collection, after permitted adjustments/exclusions."
        },
        {
          "term": "Settlement",
          "def": "The payout after sales, returns, fees, collections and other valid adjustments are brought together."
        }
      ],
      "explanation": "### 1. Keep GST deductions separate from income-tax deductions\nGST TDS applies only to specified buyers/contracts and location conditions. It is not the same mechanism as income-tax TDS. The deduction and cash-ledger process do not replace the seller’s own GST calculation.\n\n### 2. Understand platform collection\nGST TCS uses the defined net value and notified rate. Returns and excluded categories matter. It is not a replacement for GST on the underlying sale. Platforms paying tax on specified services under section 9(5) use a different responsibility rule.\n\n### 3. Rebuild the settlement\nStart with sales, separate GST, subtract valid returns and fees, and identify TCS and other deductions. Compare the result with the bank payment. Do not report only the payout as sales because the platform deducted a cost.\n\n### 4. Check registration relief conditions\nSome small online sellers can qualify for specific relief, including relevant intra-State and enrolment conditions. It is not a blanket exemption for anyone using an online marketplace.",
      "legalBasis": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "A collection calculation",
          "body": "Assume the correct net taxable supply base is ₹1,00,000 and the combined exercise TCS rate is 0.5%.\n\n1. Collection = ₹1,00,000 × 0.5% = **₹500**.\n2. Calculate the actual sale’s GST separately at its own rate.\n\nThe ₹500 does not replace output GST."
        },
        {
          "title": "From sales to bank payout",
          "body": "Customer total is ₹1,18,000, including ₹18,000 GST. Valid fees, TCS and other deductions total ₹8,000.\n\n1. Sales value before GST = ₹1,00,000.\n2. Bank payout = ₹1,18,000 − ₹8,000 = ₹1,10,000.\n3. Do not confuse **₹1,10,000 settlement** with **₹1,00,000 sales value**."
        }
      ],
      "nuances": [
        "GST TDS and income-tax TDS are different.",
        "Platform collection does not replace the seller’s sales GST.",
        "A net bank payout is not automatically turnover."
      ],
      "recap": [
        "Identify the deduction/collection rule.",
        "Calculate sales GST separately.",
        "Reconcile sales, fees, collections and the bank payout."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Is the money a platform finally pays into your bank automatically your taxable sales value?",
          "options": [
            "Yes always",
            "No; compare sales, GST and settlement deductions",
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
          "question": "GST collected by an online operator replaces all the seller's own sales GST.",
          "correctBool": false,
          "explanation": "It is a collection mechanism with separate underlying tax obligations.",
          "id": "8.4-q2",
          "sectionRef": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications."
        },
        {
          "type": "numeric",
          "question": "Assume the correct platform-collection base is ₹1,00,000 and the combined exercise rate is 0.5%. How much is collected, in rupees?",
          "correctNumber": 500,
          "tolerance": 0.01,
          "explanation": "₹1,00,000 × 0.5% = ₹500.",
          "id": "8.4-q3",
          "sectionRef": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications."
        },
        {
          "type": "mcq",
          "question": "What does the GST TDS mechanism involve?",
          "options": [
            "A shipping document",
            "A rule for inclusive-price arithmetic",
            "Specified buyers deduct GST on covered contracts",
            "Income-tax salary deductions"
          ],
          "correctIndex": 2,
          "explanation": "GST TDS is the specified-buyer deduction mechanism under section 51. It is separate from income-tax TDS.",
          "id": "8.4-q4",
          "sectionRef": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications."
        }
      ],
      "learningGoal": "Understand deductions and collections on platform sales without mistaking the bank payout for sales value.",
      "story": "Asha sells through an online marketplace. The platform pays less than the customer paid because it deducts fees and tax collections. The bank payout is the final settlement, not automatically the amount of her sales.",
      "selfCheck": {
        "question": "Why is the platform’s ₹1,10,000 payout not the taxable sales value?",
        "answer": "It includes the effect of GST and settlement deductions. The example’s sales value before GST is ₹1,00,000."
      }
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "Sales records show ₹45,000 GST; the draft return shows ₹42,000 with no explained adjustment. What difference needs investigating, in rupees?",
      "correctNumber": 3000,
      "tolerance": 0.01,
      "explanation": "₹45,000 − ₹42,000 = ₹3,000 to investigate.",
      "id": "m8-q1",
      "sectionRef": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm)."
    },
    {
      "type": "mcq",
      "question": "A supplier adds an invoice through GSTR-1A. Which information should guide when the customer can see it for purchase-credit review?",
      "options": [
        "Only the supplier bank date",
        "Only the PDF creation date",
        "Automatic same-day credit",
        "The official guidance on which later GSTR-2B period shows the invoice"
      ],
      "correctIndex": 3,
      "explanation": "The portal describes the customer/receiving business credit appearing in the subsequent GSTR-2B period.",
      "id": "m8-q2",
      "sectionRef": "CGST Act sections 37 and 39; CGST Rules 59 and 61. [Official GSTR-1A FAQ](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm)."
    },
    {
      "type": "numeric",
      "question": "Purchase GST is ₹28,000, including ₹3,000 personal-use and ₹4,000 blocked tax. All remaining conditions hold. What credit is allowed, in rupees?",
      "correctNumber": 21000,
      "tolerance": 0.01,
      "explanation": "₹28,000 − ₹3,000 − ₹4,000 = ₹21,000.",
      "id": "m8-q3",
      "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
    },
    {
      "type": "tf",
      "question": "A missing purchase-statement record can be a timing issue rather than proof of a fake invoice.",
      "correctBool": true,
      "explanation": "Investigate the facts and the correct reporting period.",
      "id": "m8-q4",
      "sectionRef": "CGST Act sections 16 and 17; Rules 36 and 60. [GSTR-2B FAQ](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm) · [GST portal advisories](https://www.gst.gov.in/)."
    },
    {
      "type": "numeric",
      "question": "Annual sales GST in the books is ₹5,00,000, but returns show ₹4,95,000 without an explained adjustment. What is the gap, in rupees?",
      "correctNumber": 5000,
      "tolerance": 0.01,
      "explanation": "₹5,00,000 − ₹4,95,000 = ₹5,000.",
      "id": "m8-q5",
      "sectionRef": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications."
    },
    {
      "type": "tf",
      "question": "GSTR-9C should always be described as the old CA-certified GST audit.",
      "correctBool": false,
      "explanation": "The current reconciliation-statement framework uses self-certification where applicable.",
      "id": "m8-q6",
      "sectionRef": "CGST Act sections 37, 39 and 44; CGST Rules 59, 61 and 80; QRMP and annual-exemption notifications."
    },
    {
      "type": "numeric",
      "question": "A platform settlement starts at ₹1,18,000, with valid deductions of ₹8,000. What reaches the bank, in rupees?",
      "correctNumber": 110000,
      "tolerance": 0.01,
      "explanation": "₹1,18,000 − ₹8,000 = ₹1,10,000.",
      "id": "m8-q7",
      "sectionRef": "CGST Act sections 9(5), 24, 51 and 52; applicable TDS/TCS rates and conditional seller-relief notifications."
    },
    {
      "type": "mcq",
      "question": "How should registration relief for a small seller using an online operator be treated?",
      "options": [
        "Available only when the stated restrictions and enrolment conditions are met",
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
