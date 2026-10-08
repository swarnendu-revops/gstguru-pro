import type { Module } from "./types";

export const module10: Module = {
  "id": "module-10",
  "number": 10,
  "title": "Notices, Demands & Practitioner Workflow",
  "summary": "Read a notice, organise evidence, understand appeal basics and build a clear monthly review.",
  "chapters": [
    {
      "id": "10.1",
      "title": "Scrutiny, Audit & Evidence",
      "roadmap": "Read a GST notice calmly and build a response from records.",
      "keyTerms": [
        {
          "term": "Scrutiny",
          "def": "A review of filed returns in which the department asks about apparent discrepancies."
        },
        {
          "term": "Departmental audit",
          "def": "A broader review of records by the tax department under the prescribed procedure."
        },
        {
          "term": "Special audit",
          "def": "A directed audit through the specified professional process in covered cases."
        },
        {
          "term": "Evidence file",
          "def": "Organised documents supporting your explanation, such as invoices, returns, bank records and calculations."
        }
      ],
      "explanation": "### 1. Read the header and deadline\nIdentify the issuing authority, legal provision, period, documents requested and response date. A scrutiny notice, demand notice, audit request and summons are different. A summons requires specified attendance or information; it is not simply another sales-return query.\n\n### 2. Rebuild the difference\nCompare the relevant records period by period. Some gaps are genuine omissions; others may be valid timing or classification differences. An ASMT-10 scrutiny communication does not, by itself, establish that its suggested amount must be paid.\n\n### 3. Explain each amount with evidence\nLink invoices, notes, returns, payment records and calculations. Separate admitted errors from disputed amounts. A clear table and supporting documents are more useful than a generic paragraph saying “everything is correct.”\n\n### 4. Save the submission and follow-up\nKeep acknowledgement and proof of what was submitted. Check closure, further requests and hearing opportunities where available. Cooperate with lawful requests while checking the authority and scope of the proceeding.",
      "legalBasis": "CGST Act sections 61, 65, 66 and 70; CGST Rules 99, 101 and 102; ASMT and audit forms.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Part of a difference is explainable",
          "body": "Books show ₹60,000 tax and reported tax is ₹55,000. A documented valid timing difference explains ₹3,000.\n\n1. Initial difference = ₹5,000.\n2. Explained part = ₹3,000.\n3. Remaining **₹2,000** needs explanation or correction.\n\nDo not automatically admit the entire ₹5,000."
        },
        {
          "title": "Two different communications",
          "body": "A summons asks for invoice records; a scrutiny notice asks about a return difference.\n\n1. Prepare the requested records for the summons.\n2. Prepare the factual reconciliation for scrutiny.\n3. Track each deadline and submission separately."
        }
      ],
      "nuances": [
        "A discrepancy communication is not automatically a final tax order.",
        "A timing explanation must be supported, not merely asserted.",
        "Do not miss a deadline while informally discussing the issue."
      ],
      "recap": [
        "Identify the proceeding and period.",
        "Explain differences using records.",
        "Keep submission proof and track the next step."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "What does an ASMT-10 communication normally concern?",
          "options": [
            "A customs bill",
            "An export LUT",
            "A salary declaration",
            "A request about apparent differences found during return scrutiny"
          ],
          "correctIndex": 3,
          "explanation": "It is used in the scrutiny process under Rule 99.",
          "id": "10.1-q1",
          "sectionRef": "CGST Act sections 61, 65, 66 and 70; CGST Rules 99, 101 and 102; ASMT and audit forms."
        },
        {
          "type": "tf",
          "question": "A suggested mismatch in a notice is automatically an amount you have admitted and a final demand.",
          "correctBool": false,
          "explanation": "Facts, law and the proceeding must be examined.",
          "id": "10.1-q2",
          "sectionRef": "CGST Act sections 61, 65, 66 and 70; CGST Rules 99, 101 and 102; ASMT and audit forms."
        },
        {
          "type": "numeric",
          "question": "A ₹5,000 mismatch includes a documented valid timing difference of ₹3,000. What remains unexplained, in rupees?",
          "correctNumber": 2000,
          "tolerance": 0.01,
          "explanation": "₹5,000 − ₹3,000 = ₹2,000.",
          "id": "10.1-q3",
          "sectionRef": "CGST Act sections 61, 65, 66 and 70; CGST Rules 99, 101 and 102; ASMT and audit forms."
        },
        {
          "type": "mcq",
          "question": "What should you do first after receiving a GST notice?",
          "options": [
            "Identify section, authority, period and deadline",
            "Delete old records",
            "File GSTR-9 automatically",
            "Pay every proposed amount instantly"
          ],
          "correctIndex": 0,
          "explanation": "The proceeding determines the appropriate response.",
          "id": "10.1-q4",
          "sectionRef": "CGST Act sections 61, 65, 66 and 70; CGST Rules 99, 101 and 102; ASMT and audit forms."
        }
      ],
      "learningGoal": "Read a GST notice calmly and build a response from records.",
      "story": "Asha receives a notice because two tax totals differ. A notice is a request or proceeding to respond to; it is not automatically proof that every suggested amount is payable.",
      "selfCheck": {
        "question": "What is the first practical action after receiving a notice?",
        "answer": "Read the type, authority, period, requested information and reply deadline, then organise the relevant records."
      }
    },
    {
      "id": "10.2",
      "title": "Demands: Sections 73, 74 & 74A",
      "roadmap": "Understand how the tax period and allegations affect a GST demand.",
      "keyTerms": [
        {
          "term": "Demand",
          "def": "A legal process to determine and recover alleged unpaid tax, wrongly claimed credit or an incorrect refund."
        },
        {
          "term": "Non-fraud demand",
          "def": "A case without the specified fraud-type allegations under the applicable provision."
        },
        {
          "term": "Fraud allegation",
          "def": "A claim of intentional wrongdoing, such as deliberate misstatement or hiding facts to evade tax; it needs factual/legal examination."
        },
        {
          "term": "Section 74A",
          "def": "The unified demand framework for financial year 2024–25 onward, with different penalty outcomes depending on the facts."
        }
      ],
      "explanation": "### 1. Identify the year under review\nFor periods up to financial year 2023–24, sections 73 and 74 distinguish non-fraud and fraud-type cases. For financial year 2024–25 onward, section 74A is the applicable framework. A financial year runs from April to March.\n\n### 2. Read the actual allegation\nIs tax said to be unpaid, credit wrongly taken, or a refund incorrect? What facts support that claim? Fraud/non-fraud distinctions remain important for penalties even under the newer unified framework.\n\n### 3. Check procedure and possible responses\nReview authority, limitation deadlines, detailed notice/order and common procedural protections. Payment before or after a notice can have different consequences depending on the provision, timing and facts. Do not use one generic closure rule for every demand.\n\n### 4. Keep relief provisions specific\nA time-bound waiver or amnesty applies only to its stated cases and conditions. It does not permanently remove all interest and penalties. Separate amounts already paid, admitted mistakes and genuinely disputed amounts before choosing the response.",
      "legalBasis": "CGST Act sections 73, 74, 74A, 75, 122 and 128A; Rule 142. [Official period-change/proper-officer summary](https://www.gstcouncil.gov.in/sites/default/files/2025-11/october_issue.pdf).\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "An old year and a newer year",
          "body": "Compare underpayments for financial years 2022–23 and 2025–26.\n\n1. For 2022–23, review sections 73/74 and the allegations.\n2. For 2025–26, review **section 74A**.\n3. Check the applicable deadlines, penalty and closure options separately."
        },
        {
          "title": "Break down a ₹1,00,000 demand",
          "body": "Records show ₹30,000 already paid and ₹20,000 admitted omitted tax.\n\n1. Document the already-paid ₹30,000.\n2. Identify the admitted ₹20,000 and relevant payment consequences.\n3. Remaining amount = ₹1,00,000 − ₹30,000 − ₹20,000 = **₹50,000** for further factual/legal analysis."
        }
      ],
      "nuances": [
        "Choose the framework by the period, not just the notice date.",
        "A fraud allegation is not established merely by being written in a notice.",
        "Waivers and closure options have specific conditions and deadlines."
      ],
      "recap": [
        "Find the relevant financial year.",
        "Separate allegation, evidence and amount.",
        "Compare the lawful response/payment options."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which demand framework normally applies to financial year 2025–26?",
          "options": [
            "Only section 73",
            "Section 74A",
            "Income-tax section 143",
            "Only section 10"
          ],
          "correctIndex": 1,
          "explanation": "Section 74A covers FY 2024–25 onward.",
          "id": "10.2-q1",
          "sectionRef": "CGST Act sections 73, 74, 74A, 75, 122 and 128A; Rule 142. [Official period-change/proper-officer summary](https://www.gstcouncil.gov.in/sites/default/files/2025-11/october_issue.pdf)."
        },
        {
          "type": "tf",
          "question": "Under section 74A, intentional wrongdoing allegations can never affect penalties.",
          "correctBool": false,
          "explanation": "Fraud/non-fraud differences still affect penalties and legal options.",
          "id": "10.2-q2",
          "sectionRef": "CGST Act sections 73, 74, 74A, 75, 122 and 128A; Rule 142. [Official period-change/proper-officer summary](https://www.gstcouncil.gov.in/sites/default/files/2025-11/october_issue.pdf)."
        },
        {
          "type": "numeric",
          "question": "A ₹1,00,000 notice includes ₹30,000 already paid and ₹20,000 admitted omitted tax. What amount remains disputed or unresolved, in rupees?",
          "correctNumber": 50000,
          "tolerance": 0.01,
          "explanation": "₹1,00,000 − ₹30,000 − ₹20,000 = ₹50,000.",
          "id": "10.2-q3",
          "sectionRef": "CGST Act sections 73, 74, 74A, 75, 122 and 128A; Rule 142. [Official period-change/proper-officer summary](https://www.gstcouncil.gov.in/sites/default/files/2025-11/october_issue.pdf)."
        },
        {
          "type": "mcq",
          "question": "How should a waiver such as section 128A be understood?",
          "options": [
            "An export rate",
            "A permanent universal waiver",
            "Relief for specified cases, conditions and time limits",
            "An automatic ITC approval"
          ],
          "correctIndex": 2,
          "explanation": "Its scope and deadlines must be independently checked.",
          "id": "10.2-q4",
          "sectionRef": "CGST Act sections 73, 74, 74A, 75, 122 and 128A; Rule 142. [Official period-change/proper-officer summary](https://www.gstcouncil.gov.in/sites/default/files/2025-11/october_issue.pdf)."
        }
      ],
      "learningGoal": "Understand how the tax period and allegations affect a GST demand.",
      "story": "Asha reviews an old underpayment and a similar recent one. Although the numbers look alike, the applicable demand framework changes with the financial year, and intentional wrongdoing allegations affect the consequences.",
      "selfCheck": {
        "question": "Why should an old sections-73/74 template not be reused blindly for 2025–26?",
        "answer": "The demand framework for financial year 2024–25 onward is section 74A, with its own rules and consequences."
      }
    },
    {
      "id": "10.3",
      "title": "Appeals & Advance Rulings",
      "roadmap": "Understand challenging an order and the limited role of a taxpayer-specific advance ruling.",
      "keyTerms": [
        {
          "term": "Appeal",
          "def": "A formal legal challenge to an order before the permitted authority or forum."
        },
        {
          "term": "Pre-deposit",
          "def": "The amount the appeal rules require you to deposit for a disputed amount; it is not automatically the entire demand."
        },
        {
          "term": "Admitted dues",
          "def": "Amounts you accept as payable, separate from amounts you dispute."
        },
        {
          "term": "Advance ruling",
          "def": "A decision on specified permitted GST questions, with limited binding reach for the applicant and relevant officer."
        }
      ],
      "explanation": "### 1. Calendar the appeal deadline\nFor a first appeal, check the time limit, limited rules for accepting a late appeal, date you received the order and filing process. Save proof of when the order was communicated. An informal request or rectification application does not automatically preserve the appeal deadline.\n\n### 2. Separate accepted and disputed amounts\nOrdinary first appeals generally require admitted dues plus 10% of disputed tax, subject to caps and special provisions. Penalty-only and other specified orders can differ. Tribunal appeals have their own deposit rules; do not copy the first-appeal figure blindly.\n\n### 3. Build reasons, not just disagreement\nIdentify the factual or legal errors, link evidence and state the relief sought. Keep the order, calculation, filing acknowledgement and required deposit evidence together.\n\n### 4. Use advance rulings carefully\nOnly specified questions can be considered, with restrictions for issues already pending/decided in the applicant’s case. A ruling generally binds that applicant and the relevant officer within the Act. Another person’s ruling is useful research, not automatic nationwide permission.",
      "legalBasis": "CGST Act sections 97–104, 107, 112 and 161; applicable appeal rules and current forum notifications.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "A simplified first-appeal payment",
          "body": "Assume admitted tax ₹20,000 and disputed tax ₹1,00,000, with no cap or special provision affecting the example.\n\n1. Deposit on disputed tax = 10% × ₹1,00,000 = ₹10,000.\n2. Add admitted tax ₹20,000.\n3. Total = **₹30,000**, excluding any separately admitted interest/penalty."
        },
        {
          "title": "Reading another taxpayer’s ruling",
          "body": "A different taxpayer obtained a favourable ruling on a similar product.\n\n1. Compare their facts and legal reasoning with yours.\n2. Check the ruling’s limited binding scope.\n3. Do not treat it as automatically binding for every taxpayer or State."
        }
      ],
      "nuances": [
        "Informal correspondence does not automatically pause appeal time limits.",
        "First-appeal and tribunal deposit rules differ.",
        "A ruling for another taxpayer is not universal precedent."
      ],
      "recap": [
        "Preserve the deadline and communication evidence.",
        "Calculate admitted dues and the applicable deposit.",
        "Use rulings with their actual scope."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "What does an ordinary first-appeal payment requirement generally include?",
          "options": [
            "No payment in any case",
            "Every alleged penalty automatically",
            "Only 10% of all invoice value",
            "Amounts you accept as payable plus the required disputed-tax deposit"
          ],
          "correctIndex": 3,
          "explanation": "Section 107 sets the required admitted-dues and deposit framework.",
          "id": "10.3-q1",
          "sectionRef": "CGST Act sections 97–104, 107, 112 and 161; applicable appeal rules and current forum notifications."
        },
        {
          "type": "tf",
          "question": "An advance ruling for one applicant automatically binds every taxpayer nationwide.",
          "correctBool": false,
          "explanation": "Section 103 limits its binding reach.",
          "id": "10.3-q2",
          "sectionRef": "CGST Act sections 97–104, 107, 112 and 161; applicable appeal rules and current forum notifications."
        },
        {
          "type": "numeric",
          "question": "Assume admitted tax ₹20,000 plus a 10% deposit on disputed tax ₹1,00,000, with no special rule/cap or other admitted charges. What is the combined amount, in rupees?",
          "correctNumber": 30000,
          "tolerance": 0.01,
          "explanation": "₹20,000 + ₹10,000 = ₹30,000.",
          "id": "10.3-q3",
          "sectionRef": "CGST Act sections 97–104, 107, 112 and 161; applicable appeal rules and current forum notifications."
        },
        {
          "type": "mcq",
          "question": "Does an informal request automatically stop the appeal deadline clock?",
          "options": [
            "No",
            "Only if emailed",
            "Only if printed",
            "Yes"
          ],
          "correctIndex": 0,
          "explanation": "Preserve appeal rights under the legal limitation rules.",
          "id": "10.3-q4",
          "sectionRef": "CGST Act sections 97–104, 107, 112 and 161; applicable appeal rules and current forum notifications."
        }
      ],
      "learningGoal": "Understand challenging an order and the limited role of a taxpayer-specific advance ruling.",
      "story": "Asha disagrees with a tax order. She needs to preserve the appeal deadline and work out the required payment. Reading a favourable ruling for someone else may help research, but does not automatically decide her own case.",
      "selfCheck": {
        "question": "Is the first-appeal example’s deposit 10% of every amount in the demand?",
        "answer": "No. The ordinary illustration uses 10% of disputed tax, adds admitted tax, and excludes separate/special cases from its assumptions."
      }
    },
    {
      "id": "10.4",
      "title": "Monthly Review & Integrated Case Study",
      "roadmap": "Bring sales, purchase credit, payments and unresolved issues into one monthly review.",
      "keyTerms": [
        {
          "term": "Compliance pack",
          "def": "A dated collection of the month’s GST records, comparisons, calculations and filing/payment proof."
        },
        {
          "term": "Exception register",
          "def": "A list of unresolved items showing the amount, reason, responsible person and next-action date."
        },
        {
          "term": "Review sign-off",
          "def": "A recorded confirmation of what was reviewed, what was concluded and what is still unresolved."
        },
        {
          "term": "Reclaim",
          "def": "Taking back eligible credit after a temporary reversal, when the required conditions are met."
        }
      ],
      "explanation": "### 1. Review what changed\nCheck new locations, products, contracts and effective rule changes. For each sale, confirm classification, location, timing, value and document. Compare the sales records with GSTR-1/1A and draft GSTR-3B.\n\n### 2. Review purchases independently\nCheck bills, receipt, business use, portal information, blocked categories and deadlines. Calculate shared-use and unpaid-bill reversals. Identify any permitted reclaims. Do not assume the portal total is the credit total.\n\n### 3. Build the payment calculation\nHandle reverse-charge tax in cash, then test any resulting credit. Apply the tax-account restrictions to ordinary tax. Calculate required interest or fees separately. A usable-credit assumption must be stated, not hidden in one grand total.\n\n### 4. Close the evidence loop\nCheck exports/refunds, platform settlements, notices and filing acknowledgements. Record unresolved differences and who will fix them. A reviewer should be able to reproduce the conclusion from the file without relying on someone’s memory.",
      "legalBasis": "Integrated application of CGST Act sections 7, 9, 15–17, 31, 37, 39, 49 and 50, with IGST place/zero-rating provisions.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "One monthly calculation, explained in order",
          "body": "Assume ordinary sales GST ₹54,000 and potential credit ₹38,000; ₹8,000 must be reversed. Reverse-charge GST is ₹9,000, paid in cash, and its credit is eligible in the same period and usable tax category.\n\n1. Initial usable credit = ₹38,000 − ₹8,000 = ₹30,000.\n2. Pay reverse-charge tax ₹9,000 in cash.\n3. Add eligible reverse-charge credit: ₹30,000 + ₹9,000 = ₹39,000.\n4. Ordinary cash tax = ₹54,000 − ₹39,000 = ₹15,000.\n5. Total cash = ₹15,000 + ₹9,000 = **₹24,000**.\n\nOther charges and restrictions are excluded from this exercise."
        },
        {
          "title": "The reverse-charge credit is blocked",
          "body": "Use the same facts, but the ₹9,000 reverse-charge credit is not eligible.\n\n1. Usable credit stays ₹30,000.\n2. Ordinary cash tax = ₹54,000 − ₹30,000 = ₹24,000.\n3. Add reverse-charge cash ₹9,000.\n4. Total cash = **₹33,000**.\n\nPaying reverse-charge GST does not guarantee credit."
        }
      ],
      "nuances": [
        "State the period and tax-account assumptions in calculations.",
        "Reverse-charge cash payment and credit eligibility are separate checks.",
        "Unresolved differences need named owners and follow-up dates."
      ],
      "recap": [
        "Check sales and purchases separately.",
        "Calculate permitted credit use and cash payment.",
        "Save the evidence and follow up on open items."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which result best completes a monthly GST review?",
          "options": [
            "Only a final total",
            "Records that explain the result, with unresolved items tracked",
            "A screenshot without records",
            "An assumed rate list"
          ],
          "correctIndex": 1,
          "explanation": "Review should be traceable to evidence and identified unresolved items.",
          "id": "10.4-q1",
          "sectionRef": "Integrated application of CGST Act sections 7, 9, 15–17, 31, 37, 39, 49 and 50, with IGST place/zero-rating provisions."
        },
        {
          "type": "tf",
          "question": "Paying reverse-charge GST in cash guarantees credit on every such purchase.",
          "correctBool": false,
          "explanation": "Credit eligibility must be assessed separately.",
          "id": "10.4-q2",
          "sectionRef": "Integrated application of CGST Act sections 7, 9, 15–17, 31, 37, 39, 49 and 50, with IGST place/zero-rating provisions."
        },
        {
          "type": "numeric",
          "question": "Assume ordinary sales GST ₹54,000, usable ordinary credit ₹30,000, and ₹9,000 reverse-charge GST paid in cash. That ₹9,000 credit is eligible in the same period and usable tax account. What is total cash paid, including reverse charge, in rupees?",
          "correctNumber": 24000,
          "tolerance": 0.01,
          "explanation": "Credit ₹39,000 leaves ordinary cash ₹15,000; plus RCM ₹9,000 = ₹24,000.",
          "id": "10.4-q3",
          "sectionRef": "Integrated application of CGST Act sections 7, 9, 15–17, 31, 37, 39, 49 and 50, with IGST place/zero-rating provisions."
        },
        {
          "type": "numeric",
          "question": "Assume ordinary sales GST ₹54,000, usable ordinary credit ₹30,000, and ₹9,000 reverse-charge GST paid in cash whose credit is blocked. What is total cash paid, including reverse charge, in rupees?",
          "correctNumber": 33000,
          "tolerance": 0.01,
          "explanation": "Ordinary cash ₹54,000 − ₹30,000 = ₹24,000; plus RCM ₹9,000 = ₹33,000.",
          "id": "10.4-q4",
          "sectionRef": "Integrated application of CGST Act sections 7, 9, 15–17, 31, 37, 39, 49 and 50, with IGST place/zero-rating provisions."
        }
      ],
      "learningGoal": "Bring sales, purchase credit, payments and unresolved issues into one monthly review.",
      "story": "Asha’s month-end folder has sales invoices, supplier bills, a reverse-charge purchase and a few unanswered queries. A repeatable checklist helps her turn the folder into a return she can explain.",
      "selfCheck": {
        "question": "Why do the two examples have different total cash payments?",
        "answer": "The second disallows ₹9,000 reverse-charge credit. That increases ordinary cash tax by ₹9,000, although the reverse-charge payment is the same."
      }
    }
  ],
  "moduleQuiz": [
    {
      "type": "mcq",
      "question": "A business receives both audit and scrutiny communications. What is the best response approach?",
      "options": [
        "Only a phone call",
        "One undated generic reply",
        "Separate responses for each proceeding, with organised evidence",
        "Ignore the audit"
      ],
      "correctIndex": 2,
      "explanation": "Each proceeding needs appropriate records and a tracked response.",
      "id": "m10-q1",
      "sectionRef": "CGST Act sections 61, 65, 66 and 70; CGST Rules 99, 101 and 102; ASMT and audit forms."
    },
    {
      "type": "tf",
      "question": "Keep proof of submitting your notice reply.",
      "correctBool": true,
      "explanation": "Submission proof protects the response chronology.",
      "id": "m10-q2",
      "sectionRef": "CGST Act sections 61, 65, 66 and 70; CGST Rules 99, 101 and 102; ASMT and audit forms."
    },
    {
      "type": "mcq",
      "question": "A 2026 notice concerns financial year 2022–23. Which fact should guide the applicable demand framework?",
      "options": [
        "Only the payment bank",
        "Only business age",
        "Only notice year",
        "The year under review and the older sections 73/74 framework"
      ],
      "correctIndex": 3,
      "explanation": "Earlier periods remain subject to their relevant demand provisions.",
      "id": "m10-q3",
      "sectionRef": "CGST Act sections 73, 74, 74A, 75, 122 and 128A; Rule 142. [Official period-change/proper-officer summary](https://www.gstcouncil.gov.in/sites/default/files/2025-11/october_issue.pdf)."
    },
    {
      "type": "tf",
      "question": "A summary demand form means you do not need to read the detailed notice, allegations or order.",
      "correctBool": false,
      "explanation": "The underlying notice/order and legal procedure must be reviewed.",
      "id": "m10-q4",
      "sectionRef": "CGST Act sections 73, 74, 74A, 75, 122 and 128A; Rule 142. [Official period-change/proper-officer summary](https://www.gstcouncil.gov.in/sites/default/files/2025-11/october_issue.pdf)."
    },
    {
      "type": "numeric",
      "question": "Assume disputed tax ₹2,00,000 and an ordinary 10% first-appeal deposit, with no cap or special rule. What is the deposit only, excluding any admitted dues, in rupees?",
      "correctNumber": 20000,
      "tolerance": 0.01,
      "explanation": "₹2,00,000 × 10% = ₹20,000; admitted dues are additional if any.",
      "id": "m10-q5",
      "sectionRef": "CGST Act sections 97–104, 107, 112 and 161; applicable appeal rules and current forum notifications."
    },
    {
      "type": "mcq",
      "question": "How should a ruling for another taxpayer be used?",
      "options": [
        "Research to compare with your facts, checking its limited binding reach",
        "A substitute for reading the Act",
        "An invoice correction",
        "Universal binding law"
      ],
      "correctIndex": 0,
      "explanation": "Analyse applicability without overstating its legal reach.",
      "id": "m10-q6",
      "sectionRef": "CGST Act sections 97–104, 107, 112 and 161; applicable appeal rules and current forum notifications."
    },
    {
      "type": "numeric",
      "question": "Assume ordinary sales GST ₹72,000, usable ordinary credit ₹40,000 and ₹8,000 reverse-charge tax paid in cash. Its credit is eligible in the same period and usable account. What is total cash paid including reverse charge, in rupees?",
      "correctNumber": 32000,
      "tolerance": 0.01,
      "explanation": "Usable credit ₹48,000; ordinary cash ₹24,000 plus RCM cash ₹8,000 = ₹32,000.",
      "id": "m10-q7",
      "sectionRef": "Integrated application of CGST Act sections 7, 9, 15–17, 31, 37, 39, 49 and 50, with IGST place/zero-rating provisions."
    },
    {
      "type": "mcq",
      "question": "The team cannot explain a draft-return difference. What is the correct next action?",
      "options": [
        "Insert an arbitrary plug",
        "Record the difference and investigate it before approving the return",
        "Claim extra ITC to match",
        "Delete the invoice"
      ],
      "correctIndex": 1,
      "explanation": "Unexplained balancing entries do not establish compliance.",
      "id": "m10-q8",
      "sectionRef": "Integrated application of CGST Act sections 7, 9, 15–17, 31, 37, 39, 49 and 50, with IGST place/zero-rating provisions."
    }
  ]
};
