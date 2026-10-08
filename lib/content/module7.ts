import type { Module } from "./types";

export const module7: Module = {
  "id": "module-7",
  "number": 7,
  "title": "Invoices, E-way Bills & Payments",
  "summary": "Understand bills, electronic invoice registration, goods-movement records and delayed-payment charges.",
  "chapters": [
    {
      "id": "7.1",
      "title": "Invoices, Notes & Record Keeping",
      "roadmap": "Know what a sales bill must show and how to record later corrections.",
      "keyTerms": [
        {
          "term": "Tax invoice",
          "def": "The formal GST bill for a taxable supply, containing the required business, value and tax details."
        },
        {
          "term": "Debit note",
          "def": "A document increasing an earlier billed amount or tax where the relevant correction rules apply."
        },
        {
          "term": "Credit note",
          "def": "A document reducing an earlier billed amount; reducing GST requires the applicable conditions."
        },
        {
          "term": "Audit trail",
          "def": "Linked records showing how a transaction moved from agreement to delivery, invoice, return and payment."
        }
      ],
      "explanation": "### 1. Put the important facts on the bill\nIdentify the seller and buyer, relevant GSTINs, unique invoice number, date, description, classification code, taxable value and tax amounts. Include place-of-supply details where required. GSTIN is the registration number; taxable value is the amount before GST used for calculation.\n\n### 2. Issue it at the right time\nGoods, services and continuing supplies can have different invoice timing rules. Exempt and composition supplies can require a bill of supply instead. Consumer-bill details and combined-invoice permissions have conditions.\n\n### 3. Link corrections to the original\nA debit note can address omitted value/tax. A credit note can address eligible reductions, returned goods or other covered cases. Check when and how the note is reported, and whether it actually changes tax.\n\n### 4. Keep evidence beyond the PDF\nSave the order, invoice, delivery/receipt evidence, relevant electronic records and return link. The ordinary retention period is 72 months from the relevant annual-return due date, with longer periods for certain proceedings. Use the correct starting date, not just six years from the invoice.",
      "legalBasis": "CGST Act sections 31–36; CGST Rules 46–55 and 56.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Showing an ordinary intra-State bill",
          "body": "Assume ₹1,00,000 before tax and combined 18% GST split equally.\n\n1. Show taxable value ₹1,00,000.\n2. Show **₹9,000 CGST and ₹9,000 SGST**.\n3. Customer total = ₹1,18,000.\n4. Include the required identities, numbers, dates and other particulars."
        },
        {
          "title": "Correcting an omitted charge",
          "body": "An invoice left out ₹10,000 taxable charges. Assume 18% applies and a valid debit-note correction is available.\n\n1. Extra tax = ₹10,000 × 18% = **₹1,800**.\n2. Issue and report the correct note.\n3. Keep it linked to the original bill so the adjustment can be traced."
        }
      ],
      "nuances": [
        "A good design does not establish a legally complete invoice.",
        "A note changing the customer balance does not always change GST.",
        "Retention is measured from the specified annual-return due date, with proceeding-related exceptions."
      ],
      "recap": [
        "Use the right bill and required details.",
        "Correct through linked documents and reporting.",
        "Keep the full transaction trail."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which document normally addresses an earlier understatement of taxable value?",
          "options": [
            "A bill of supply only",
            "A salary slip",
            "A shipping manifest only",
            "Debit note"
          ],
          "correctIndex": 3,
          "explanation": "Section 34 provides for debit notes where value/tax is understated.",
          "id": "7.1-q1",
          "sectionRef": "CGST Act sections 31–36; CGST Rules 46–55 and 56."
        },
        {
          "type": "tf",
          "question": "All GST records can be destroyed as soon as GSTR-3B is filed.",
          "correctBool": false,
          "explanation": "The Act imposes retention duties and can require longer retention for disputes.",
          "id": "7.1-q2",
          "sectionRef": "CGST Act sections 31–36; CGST Rules 46–55 and 56."
        },
        {
          "type": "numeric",
          "question": "A valid debit note adds omitted charges of ₹10,000 before GST at assumed 18%. What extra tax is added, in rupees?",
          "correctNumber": 1800,
          "tolerance": 0.01,
          "explanation": "₹10,000 × 18% = ₹1,800.",
          "id": "7.1-q3",
          "sectionRef": "CGST Act sections 31–36; CGST Rules 46–55 and 56."
        },
        {
          "type": "mcq",
          "question": "Which sales document is generally needed for composition supplies?",
          "options": [
            "Bill of supply",
            "Tax collection on a normal invoice",
            "No document",
            "IRN in every case"
          ],
          "correctIndex": 0,
          "explanation": "Composition taxpayers use a bill of supply.",
          "id": "7.1-q4",
          "sectionRef": "CGST Act sections 31–36; CGST Rules 46–55 and 56."
        }
      ],
      "learningGoal": "Know what a sales bill must show and how to record later corrections.",
      "story": "Asha’s customer needs a bill showing the product price and correct GST. Later Asha discovers she omitted a charge. A neat-looking PDF is not enough; the bill and correction must tell a consistent story.",
      "selfCheck": {
        "question": "Why retain delivery records as well as the invoice?",
        "answer": "They help establish what was supplied or received and make the tax treatment traceable."
      }
    },
    {
      "id": "7.2",
      "title": "E-invoicing & IRN",
      "roadmap": "Understand what e-invoicing adds to an ordinary invoice and check whether it applies.",
      "keyTerms": [
        {
          "term": "IRP",
          "def": "Invoice Registration Portal: a portal that receives covered invoice data and returns the registration details."
        },
        {
          "term": "IRN",
          "def": "Invoice Reference Number: the unique number generated for registered invoice data."
        },
        {
          "term": "AATO",
          "def": "Aggregate Annual Turnover: the turnover measure used for mandate/portal tests, including relevant previous financial years."
        },
        {
          "term": "B2B",
          "def": "Business-to-business: a sale to another business, rather than an ordinary consumer sale."
        }
      ],
      "explanation": "### 1. Separate making the bill from registering its data\nThe business prepares the invoice and sends the required structured details to an IRP. The portal returns an IRN and prescribed signed QR code. The business then issues the compliant invoice with those details.\n\n### 2. Check who and what are covered\nThe mandate depends on notified turnover history, transaction/document type, start date and excluded business classes. The ₹5 crore threshold introduced from August 2023 is not just a current-month sales test. The ordinary mandate does not cover every consumer bill. Specified consumer bills may instead have separate dynamic-QR requirements; these are not the same as IRN registration.\n\n### 3. Check the operational reporting window\nOfficial IRP guidance describes a 30-day reporting restriction for AATO ₹10 crore and above from 1 April 2025. Check current guidance for implementation. Do not wait until an arbitrary month-end if the applicable reporting window expires earlier.\n\n### 4. Monitor success and corrections\nTrack invoice date, registration result, failures and permitted cancellation/correction steps. An IRN supports invoice reporting; it does not prove that the buyer’s purchase credit satisfies every condition.",
      "legalBasis": "CGST Rule 48(4)/(5); applicable e-invoice mandate notifications. [Official IRP operational guidance](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/).\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Sales fall after crossing the historical test",
          "body": "Assume a covered business crossed the notified turnover threshold in a relevant earlier year but now sells less.\n\n1. Review the required historical-year test.\n2. Check exclusions and covered documents.\n3. Do not turn off e-invoicing solely because current sales are lower."
        },
        {
          "title": "PDF versus registered invoice",
          "body": "A covered invoice shows ₹1,00,000 value plus ₹18,000 assumed GST.\n\n1. Prepare the required invoice data.\n2. Complete applicable IRP registration and obtain IRN/QR details.\n3. Issue the compliant invoice.\n\nA **₹1,18,000 PDF alone** does not replace a required registration."
        }
      ],
      "nuances": [
        "An emailed PDF is not automatically an e-invoice under the mandate.",
        "Historical turnover can matter even when current sales are lower.",
        "An IRN does not guarantee the buyer’s credit eligibility."
      ],
      "recap": [
        "Check coverage and relevant turnover history.",
        "Register covered invoice data and retain the result.",
        "Track reporting windows and failed registrations."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "What does mandatory e-invoicing involve?",
          "options": [
            "Emailing a PDF",
            "Registering covered structured invoice data with an IRP",
            "Printing in colour",
            "Entering the annual return"
          ],
          "correctIndex": 1,
          "explanation": "IRP registration generates the required IRN/QR data.",
          "id": "7.2-q1",
          "sectionRef": "CGST Rule 48(4)/(5); applicable e-invoice mandate notifications. [Official IRP operational guidance](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/)."
        },
        {
          "type": "tf",
          "question": "An IRN automatically proves that the customer's purchase credit meets every condition.",
          "correctBool": false,
          "explanation": "Credit conditions require separate assessment.",
          "id": "7.2-q2",
          "sectionRef": "CGST Rule 48(4)/(5); applicable e-invoice mandate notifications. [Official IRP operational guidance](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/)."
        },
        {
          "type": "mcq",
          "question": "Which turnover period may matter when checking whether e-invoicing is required?",
          "options": [
            "Only cash receipts",
            "Only current monthly sales",
            "Specified historical annual turnover",
            "Only net profit"
          ],
          "correctIndex": 2,
          "explanation": "The notified historical turnover framework matters.",
          "id": "7.2-q3",
          "sectionRef": "CGST Rule 48(4)/(5); applicable e-invoice mandate notifications. [Official IRP operational guidance](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/)."
        },
        {
          "type": "mcq",
          "question": "Are ordinary IRN requirements and consumer dynamic-QR requirements the same framework?",
          "options": [
            "Both salary rules",
            "Both annual exams",
            "Always the same",
            "Separate frameworks"
          ],
          "correctIndex": 3,
          "explanation": "They should not be confused.",
          "id": "7.2-q4",
          "sectionRef": "CGST Rule 48(4)/(5); applicable e-invoice mandate notifications. [Official IRP operational guidance](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/)."
        }
      ],
      "learningGoal": "Understand what e-invoicing adds to an ordinary invoice and check whether it applies.",
      "story": "Asha emails a PDF invoice. Another supplier sends a bill with an Invoice Reference Number and signed QR code. The difference is registration of covered invoice data with an authorised portal, not simply sending the bill electronically.",
      "selfCheck": {
        "question": "What makes an e-invoice different from an emailed bill?",
        "answer": "Covered data is registered with an IRP, producing the required IRN and signed QR details. Email alone does not perform that step."
      }
    },
    {
      "id": "7.3",
      "title": "E-way Bills & Goods Movement",
      "roadmap": "Understand the document used to track covered goods movement and how to check its value.",
      "keyTerms": [
        {
          "term": "E-way bill",
          "def": "An electronic record for covered goods movement, with details about the goods, route and transport."
        },
        {
          "term": "Consignment value",
          "def": "The value used for the movement test, calculated under the prescribed definition rather than just a chosen subtotal."
        },
        {
          "term": "Part B",
          "def": "The transport-detail part of the e-way bill, such as vehicle information."
        },
        {
          "term": "Challan",
          "def": "A permitted movement document for cases such as specified job-work movements, instead of an ordinary sales invoice."
        }
      ],
      "explanation": "### 1. Check whether the movement is covered\nThe general rule requires an e-way bill before covered movement above ₹50,000 consignment value. Some specified movements require one regardless of value; some have exemptions. Relevant State rules for movements within a State also need checking.\n\n### 2. Use the prescribed value\nGST can form part of consignment value. A common invoice containing taxable and exempt goods has a special exclusion rule. Do not compare only the pre-tax subtotal with the limit without checking the definition.\n\n### 3. Match the movement to its document\nA sale can use an invoice. A permitted job-work movement can use a delivery challan. Returns and stock transfers need their own document check. Goods movement without a current sale can still trigger e-way requirements.\n\n### 4. Keep transport information current\nRecord destination, distance, transporter and vehicle details where required. Check validity and permitted updates for vehicle changes or delays. An IRN identifies an invoice; an e-way bill tracks movement. One does not generally replace the other.",
      "legalBasis": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Value below ₹50,000 before tax, above it after tax",
          "body": "Assume covered goods have value ₹48,000 plus GST ₹8,640, with no exemption or other adjustment.\n\n1. Consignment value = ₹48,000 + ₹8,640 = **₹56,640**.\n2. It exceeds the general ₹50,000 limit.\n3. Follow the applicable e-way process before movement."
        },
        {
          "title": "Sending goods for processing",
          "body": "Asha sends her own goods to a job worker using a permitted delivery challan.\n\n1. There may be no current sale of those goods.\n2. Still check the applicable e-way movement rule.\n3. Record goods, route and required transport details.\n\nA no-sale movement is not automatically exempt from movement controls."
        }
      ],
      "nuances": [
        "The general value limit has mandatory-case and exemption exceptions.",
        "GST-inclusive consignment value can cross the limit.",
        "Invoice registration and transport documentation serve different purposes."
      ],
      "recap": [
        "Check coverage before dispatch.",
        "Use the legally defined consignment value.",
        "Keep the document and transport details aligned."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Besides taxable sales, what else can the e-way bill rules cover?",
          "options": [
            "Covered non-sale movements too",
            "Only imports",
            "Only services",
            "Only taxable sales"
          ],
          "correctIndex": 0,
          "explanation": "The rule covers specified movement beyond sales.",
          "id": "7.3-q1",
          "sectionRef": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129."
        },
        {
          "type": "tf",
          "question": "A valid invoice IRN always removes every e-way bill requirement.",
          "correctBool": false,
          "explanation": "Invoice registration and movement documentation have separate functions.",
          "id": "7.3-q2",
          "sectionRef": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129."
        },
        {
          "type": "numeric",
          "question": "Assume covered consignment value includes ₹48,000 goods value plus ₹8,640 GST, with no excluded component. What is that value, in rupees?",
          "correctNumber": 56640,
          "tolerance": 0.01,
          "explanation": "₹48,000 + ₹8,640 = ₹56,640.",
          "id": "7.3-q3",
          "sectionRef": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129."
        },
        {
          "type": "mcq",
          "question": "What else should you check alongside the general ₹50,000 e-way bill value test?",
          "options": [
            "Only payment mode",
            "Mandatory cases and applicable exemptions",
            "Only profit",
            "Only recipient income tax"
          ],
          "correctIndex": 1,
          "explanation": "The threshold is not the entire movement rule.",
          "id": "7.3-q4",
          "sectionRef": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129."
        }
      ],
      "learningGoal": "Understand the document used to track covered goods movement and how to check its value.",
      "story": "Asha loads goods onto a truck. Another load goes to a processor and is not being sold. GST’s goods-movement rules can matter in both cases, even though the underlying documents differ.",
      "selfCheck": {
        "question": "Why can ₹48,000 goods need an e-way bill in the example?",
        "answer": "Including ₹8,640 GST makes the relevant value ₹56,640, above the general limit on the stated facts."
      }
    },
    {
      "id": "7.4",
      "title": "Cash Ledger, Interest & Late Fees",
      "roadmap": "Tell apart depositing money, settling tax, interest for delay and a late-filing fee.",
      "keyTerms": [
        {
          "term": "Cash ledger",
          "def": "Your GST portal balance of deposited money, available for permitted payments."
        },
        {
          "term": "Credit ledger",
          "def": "Your recorded eligible purchase-tax credit, usable only for permitted tax payments."
        },
        {
          "term": "Liability ledger",
          "def": "The portal record of amounts owed."
        },
        {
          "term": "Interest",
          "def": "An additional amount for covered delay or certain wrongly claimed and used credit, calculated under the applicable rule."
        },
        {
          "term": "Late fee",
          "def": "A separate charge for covered late filing; it is not the same as interest on delayed tax."
        }
      ],
      "explanation": "### 1. Follow the money through two steps\nA challan is a payment document used to deposit funds. The deposit adds money to the cash ledger. The return/payment process must then use the proper balance against the tax owed. Compare cash, credit and liability records.\n\n### 2. Find the interest base before using a percentage\nThe law distinguishes delayed-payment cases and wrongly claimed-and-used credit. Interest is not automatically charged on every sales-tax amount or every entry mistake. Check the legally relevant amount, delay, use of credit and rate.\n\n### 3. Separate interest from late fees\nInterest concerns specified tax/credit situations; late fees concern covered delayed filing. Caps, waivers and relief depend on the return, period and notification. These amounts ordinarily need cash, not purchase credit.\n\n### 4. Keep a dated calculation\nWrite the amount, rate and day count clearly. The example uses an assumed annual 18% rate and 365-day year for arithmetic. Actual liabilities need the applicable legal base, rate and rounding.",
      "legalBasis": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "A 30-day interest illustration",
          "body": "Assume the correct interest base is ₹50,000, annual rate 18% and delay 30 days, using 365 days.\n\n1. Annual interest on the base: ₹50,000 × 18% = ₹9,000.\n2. 30-day share: ₹9,000 × 30 ÷ 365 = **₹739.73**.\n3. Apply prescribed rounding for a real payment."
        },
        {
          "title": "Wrongly entered, but not used",
          "body": "Asha mistakenly records ₹10,000 credit but never uses it to pay tax.\n\n1. Correct the credit entry as required.\n2. Check the specific interest rule and actual use.\n3. Do not automatically calculate used-credit interest as though all ₹10,000 funded a tax payment."
        }
      ],
      "nuances": [
        "Depositing money is not automatically settling the liability.",
        "An incorrect credit entry and using that credit are different facts.",
        "Interest and late-filing fees have different rules."
      ],
      "recap": [
        "Match the deposit to the actual liability payment.",
        "Establish the interest base and period.",
        "Check late fees separately."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "What does a cash-ledger deposit, by itself, establish?",
          "options": [
            "The registration is closed",
            "The return is filed",
            "Money is in the account; settling the tax is a separate step",
            "ITC is eligible"
          ],
          "correctIndex": 2,
          "explanation": "The liability must also be paid through the required process.",
          "id": "7.4-q1",
          "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
        },
        {
          "type": "tf",
          "question": "Interest on tax and a fee for late filing are the same charge.",
          "correctBool": false,
          "explanation": "They arise under different provisions.",
          "id": "7.4-q2",
          "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
        },
        {
          "type": "numeric",
          "question": "Assume correct interest base ₹50,000, annual rate 18%, delay 30 days and a 365-day year. What is interest, in rupees rounded to two decimals?",
          "correctNumber": 739.73,
          "tolerance": 0.01,
          "explanation": "50,000 × 0.18 × 30/365 = ₹739.73.",
          "id": "7.4-q3",
          "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
        },
        {
          "type": "mcq",
          "question": "When checking interest on wrongly claimed purchase credit, which fact about the credit matters?",
          "options": [
            "Only invoice colour",
            "Only turnover",
            "Only the PAN",
            "Whether the credit was wrongly claimed and actually used"
          ],
          "correctIndex": 3,
          "explanation": "Check whether the wrong credit was actually used, and when, under the applicable interest rule.",
          "id": "7.4-q4",
          "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
        }
      ],
      "learningGoal": "Tell apart depositing money, settling tax, interest for delay and a late-filing fee.",
      "story": "Asha deposits money on the GST portal and assumes the tax is paid. But the money may still be sitting unused in her cash ledger. Payment needs a matching settlement step against the liability.",
      "selfCheck": {
        "question": "What should you check after depositing cash on the portal?",
        "answer": "That the payment process actually debited the correct balance against the liability, rather than leaving the deposit unused."
      }
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "Assume an ordinary intra-State invoice has ₹1,00,000 value before GST, combined rate 18% and equal central/State parts. What is SGST, in rupees?",
      "correctNumber": 9000,
      "tolerance": 0.01,
      "explanation": "₹1,00,000 × 9% = ₹9,000.",
      "id": "m7-q1",
      "sectionRef": "CGST Act sections 31–36; CGST Rules 46–55 and 56."
    },
    {
      "type": "mcq",
      "question": "The ordinary records-retention period ends, but a proceeding concerning that year is still pending. What should you do?",
      "options": [
        "Check whether pending proceedings require keeping the records longer",
        "Delete invoices only",
        "Keep totals but lose evidence",
        "Destroy all files"
      ],
      "correctIndex": 0,
      "explanation": "Pending proceedings can require extended retention.",
      "id": "m7-q2",
      "sectionRef": "CGST Act sections 31–36; CGST Rules 46–55 and 56."
    },
    {
      "type": "mcq",
      "question": "A supplier required to e-invoice sends a PDF without the required IRN. What needs checking?",
      "options": [
        "Only the file size",
        "Whether the required invoice-registration process was completed",
        "Only customer preference",
        "Nothing"
      ],
      "correctIndex": 1,
      "explanation": "A PDF alone does not satisfy the structured registration requirement.",
      "id": "m7-q3",
      "sectionRef": "CGST Rule 48(4)/(5); applicable e-invoice mandate notifications. [Official IRP operational guidance](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/)."
    },
    {
      "type": "tf",
      "question": "A covered supplier can ignore the IRP reporting window until its annual review.",
      "correctBool": false,
      "explanation": "Operational time restrictions can prevent delayed IRN generation.",
      "id": "m7-q4",
      "sectionRef": "CGST Rule 48(4)/(5); applicable e-invoice mandate notifications. [Official IRP operational guidance](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/)."
    },
    {
      "type": "mcq",
      "question": "Goods sent for job work are not currently sold. What should you do about an e-way bill?",
      "options": [
        "Ignore transport data",
        "Never needed",
        "Check the goods-movement rule and any exemption",
        "Use GSTR-9 instead"
      ],
      "correctIndex": 2,
      "explanation": "Non-sale movement can still be covered.",
      "id": "m7-q5",
      "sectionRef": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129."
    },
    {
      "type": "tf",
      "question": "Whether GST is charged on the goods is the only fact needed to decide e-way requirements.",
      "correctBool": false,
      "explanation": "Purpose, value and special movement rules also matter.",
      "id": "m7-q6",
      "sectionRef": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129."
    },
    {
      "type": "numeric",
      "question": "Assume correct interest base ₹1,00,000, annual rate 18%, delay 10 days and a 365-day year. What is interest, in rupees to two decimals?",
      "correctNumber": 493.15,
      "tolerance": 0.01,
      "explanation": "1,00,000 × 0.18 × 10/365 = ₹493.15.",
      "id": "m7-q7",
      "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
    },
    {
      "type": "tf",
      "question": "Wrongly recorded but unused purchase credit always attracts the same interest as wrongly used credit.",
      "correctBool": false,
      "explanation": "Determine whether and when the wrong credit was utilised.",
      "id": "m7-q8",
      "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
    }
  ]
};
