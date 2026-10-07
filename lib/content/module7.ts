import type { Module } from "./types";

export const module7: Module = {
  "id": "module-7",
  "number": 7,
  "title": "Invoices, E-way Bills & Payments",
  "summary": "Issue the right documents, distinguish IRN from goods movement records, and calculate cash payments and interest.",
  "chapters": [
    {
      "id": "7.1",
      "title": "Invoices, Notes & Record Keeping",
      "roadmap": "Build invoice controls that support both output reporting and recipient credit.",
      "keyTerms": [
        {
          "term": "Tax invoice",
          "def": "A prescribed supply document carrying details such as parties, value and tax."
        },
        {
          "term": "Debit note",
          "def": "A statutory document correcting an undercharged taxable value or tax."
        },
        {
          "term": "Audit trail",
          "def": "Linked records allowing a transaction to be followed through accounts and returns."
        }
      ],
      "explanation": "A tax invoice should correctly state supplier/recipient identity, GSTIN where applicable, serial number, date, description, classification, taxable value, tax heads and required place-of-supply particulars. Timing differs for goods and services and certain continuous supplies; use section 31 and the relevant rules.\n\nUse a bill of supply where required for exempt or composition supplies. Debit notes address understatements; credit notes address qualifying overstatements, returns, deficiencies or other period-applicable grounds. Their tax effect and reporting are not merely a bookkeeping choice. Unregistered-recipient particulars and consolidated invoice permissions have conditions.\n\nRetain invoice, contract, delivery/receipt evidence, e-invoice/e-way records, return mapping and note linkage. The ordinary section 36 retention period is 72 months from the due date of the relevant annual return, with longer retention where proceedings require it. Record integrity and reconstructability matter more than a pretty invoice template.",
      "legalBasis": "CGST Act sections 31–36; CGST Rules 46–55 and 56.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Correct tax heads",
          "body": "Assume an ordinary intra-State invoice has net value ₹1,00,000 at combined 18%. Show **₹9,000 CGST + ₹9,000 SGST**, total ₹1,18,000, with the prescribed particulars."
        },
        {
          "title": "Undercharged value",
          "body": "An invoice omitted ₹10,000 taxable charges at assumed 18%. A qualifying debit note adds **₹1,800** tax; report it in the appropriate period and preserve the original linkage."
        }
      ],
      "nuances": [
        "A credit note needs statutory tax-adjustment conditions.",
        "Service and goods invoice timing are not identical.",
        "Pending disputes may extend the record-retention requirement."
      ],
      "recap": [
        "Use the prescribed document for the supply.",
        "Check particulars, timing and tax head.",
        "Preserve a linked transaction trail."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "An understatement of taxable value is ordinarily corrected using:",
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
          "question": "All GST records may be destroyed immediately after filing GSTR-3B.",
          "correctBool": false,
          "explanation": "The Act imposes retention duties and can require longer retention for disputes.",
          "id": "7.1-q2",
          "sectionRef": "CGST Act sections 31–36; CGST Rules 46–55 and 56."
        },
        {
          "type": "numeric",
          "question": "Omitted taxable charges ₹10,000 at assumed 18%. Debit-note tax in ₹?",
          "correctNumber": 1800,
          "tolerance": 0.01,
          "explanation": "₹10,000 × 18% = ₹1,800.",
          "id": "7.1-q3",
          "sectionRef": "CGST Act sections 31–36; CGST Rules 46–55 and 56."
        },
        {
          "type": "mcq",
          "question": "Composition supplies generally require:",
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
      ]
    },
    {
      "id": "7.2",
      "title": "E-invoicing & IRN",
      "roadmap": "Check mandate applicability and distinguish a registered invoice from a PDF.",
      "keyTerms": [
        {
          "term": "IRP",
          "def": "An Invoice Registration Portal receiving prescribed invoice data."
        },
        {
          "term": "IRN",
          "def": "The Invoice Reference Number generated for a registered e-invoice."
        },
        {
          "term": "AATO",
          "def": "Aggregate annual turnover, with mandate tests looking at specified historical years."
        }
      ],
      "explanation": "E-invoicing is structured reporting of covered documents to an IRP, producing an IRN and prescribed signed QR code. It does not mean merely emailing a PDF or outsourcing invoice creation. A business still issues the actual invoice with the required registered data.\n\nMandate applicability depends on the notified historical turnover test, covered transaction/document type, effective date and exclusions for specified classes. The ₹5 crore threshold introduced from August 2023 is not a test of just this month's sales, and not every B2C invoice is within the ordinary IRN mandate. Check the current notification before implementation.\n\nIRP operational restrictions can be stricter than a team's month-end routine. The official IRP describes a 30-day reporting restriction for AATO ₹10 crore and above from 1 April 2025. Track issue dates, IRN generation, failures and permitted correction/cancellation workflows. Neither a valid IRN nor a QR code proves recipient ITC eligibility.",
      "legalBasis": "CGST Rule 48(4)/(5); applicable e-invoice mandate notifications. [Official IRP operational guidance](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/).\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Historical test",
          "body": "Assume an otherwise covered supplier crossed the notified threshold in a relevant prior year, but current turnover falls below it. Review the historical AATO test; do not switch off IRN reporting merely from lower current sales."
        },
        {
          "title": "Document check",
          "body": "A covered B2B invoice for ₹1,00,000 plus assumed ₹18,000 GST must follow the applicable IRN process. A ₹1,18,000 PDF without required registration is not automatically a valid substitute."
        }
      ],
      "nuances": [
        "Specified entity exclusions need explicit checking.",
        "B2C dynamic QR requirements are a different topic from IRN.",
        "Portal reporting limits must be checked alongside legal invoice timing."
      ],
      "recap": [
        "Evaluate the historical turnover test.",
        "Identify covered documents and exclusions.",
        "Keep IRN errors out of the month-end backlog."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "E-invoicing primarily means:",
          "options": [
            "Emailing a PDF",
            "Registering covered structured invoice data with an IRP",
            "Printing in colour",
            "Entering the annual return"
          ],
          "correctIndex": 1,
          "explanation": "IRP registration generates the prescribed IRN/QR data.",
          "id": "7.2-q1",
          "sectionRef": "CGST Rule 48(4)/(5); applicable e-invoice mandate notifications. [Official IRP operational guidance](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/)."
        },
        {
          "type": "tf",
          "question": "IRN automatically certifies that all recipient ITC conditions are met.",
          "correctBool": false,
          "explanation": "Credit conditions require separate assessment.",
          "id": "7.2-q2",
          "sectionRef": "CGST Rule 48(4)/(5); applicable e-invoice mandate notifications. [Official IRP operational guidance](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/)."
        },
        {
          "type": "mcq",
          "question": "Mandate threshold testing may require:",
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
          "question": "The ordinary IRN mandate and B2C dynamic QR requirements are:",
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
      ]
    },
    {
      "id": "7.3",
      "title": "E-way Bills & Goods Movement",
      "roadmap": "Control movement documents without assuming every movement is a taxable sale.",
      "keyTerms": [
        {
          "term": "E-way bill",
          "def": "An electronic document required for covered movement of goods."
        },
        {
          "term": "Consignment value",
          "def": "The value determined for the movement threshold under the rules."
        },
        {
          "term": "Part B",
          "def": "Transport/conveyance details required in applicable cases."
        }
      ],
      "explanation": "Rule 138 generally requires an e-way bill before covered movement when consignment value exceeds ₹50,000, with specified mandatory cases and exemptions. It can apply to movement for reasons other than supply and to inward movement from an unregistered person. State-specific intra-State exemptions and conditions need separate checking.\n\nA sale, stock transfer, job work or return can use different underlying invoice/challan documents, but movement control remains necessary. Consignment value has a prescribed definition including tax and a special exclusion where a common invoice contains taxable and exempt goods. Do not compare only an arbitrary net subtotal with the threshold.\n\nCapture transporter, vehicle, destination and distance; monitor validity, transshipment and permitted updates/extensions. Ordinary cargo validity uses the applicable distance rules, while over-dimensional cargo differs. An IRN and an e-way bill perform different functions; one does not generally replace the other.",
      "legalBasis": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Threshold crossing",
          "body": "Assume an ordinary covered consignment has taxable value ₹48,000 plus GST ₹8,640. Consignment value is **₹56,640**, exceeding the general ₹50,000 threshold, absent an exemption."
        },
        {
          "title": "Movement without sale",
          "body": "Principal-owned goods go to a job worker on a delivery challan under the permitted job-work procedure. There may be no current output-tax sale, yet the applicable e-way requirement still needs checking."
        }
      ],
      "nuances": [
        "Some specified movements require a bill regardless of value.",
        "State exemptions and movement conditions can differ.",
        "E-way validity does not validate the underlying tax classification."
      ],
      "recap": [
        "Review movement purpose and consignment value.",
        "Check mandatory cases and exemptions.",
        "Maintain transport details and validity."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "An e-way bill can be required for:",
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
          "question": "A valid IRN always replaces every e-way bill obligation.",
          "correctBool": false,
          "explanation": "Invoice registration and movement documentation have separate functions.",
          "id": "7.3-q2",
          "sectionRef": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129."
        },
        {
          "type": "numeric",
          "question": "₹48,000 value plus ₹8,640 GST, no excluded component. Consignment value in ₹?",
          "correctNumber": 56640,
          "tolerance": 0.01,
          "explanation": "₹48,000 + ₹8,640 = ₹56,640.",
          "id": "7.3-q3",
          "sectionRef": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129."
        },
        {
          "type": "mcq",
          "question": "Before using the general ₹50,000 test, also check:",
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
      ]
    },
    {
      "id": "7.4",
      "title": "Cash Ledger, Interest & Late Fees",
      "roadmap": "Distinguish payment records from tax discharge and compute only the relevant interest base.",
      "keyTerms": [
        {
          "term": "Cash ledger",
          "def": "The ledger holding amounts deposited for tax and other payments."
        },
        {
          "term": "Credit ledger",
          "def": "Eligible ITC balance, with restrictions on its use."
        },
        {
          "term": "Interest",
          "def": "A statutory charge for specified delay or wrongful credit use, separate from late fees."
        }
      ],
      "explanation": "Depositing funds and discharging a liability are different steps. A challan payment populates the cash ledger; the return/payment process must debit the proper balance against the liability. Reconcile the cash, credit and liability ledgers to avoid mistaking an unused deposit for a settled tax.\n\nSection 50 and Rule 88B distinguish delayed tax-payment scenarios and wrongly availed-and-utilised ITC. Interest is not automatically computed on all gross output tax or on every credit error. Determine the statutory base, actual utilisation, period and notified rate; the net-cash treatment has qualifications. Interest and late fees are separate and ordinarily require cash.\n\nLate filing can generate section 47 fees, with caps, waivers or relief dependent on the return, period and notification. This course's arithmetic uses an expressly assumed annual rate and a 365-day convention. For live cases use the operative provisions and a dated calculation worksheet.",
      "legalBasis": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Illustrative delay",
          "body": "Assume legally determined interest base ₹50,000, rate 18% per year and 30 days delay using 365 days. Interest = 50,000 × 18% × 30/365 = **₹739.73** before prescribed rounding."
        },
        {
          "title": "Wrong credit distinction",
          "body": "A taxpayer wrongly enters ₹10,000 ITC but does not utilise it. Analyse section 50(3) and Rule 88B; do not automatically charge utilisation-based interest as if the entire ₹10,000 had funded output tax."
        }
      ],
      "nuances": [
        "Ledger deposit alone is not liability discharge.",
        "Interest depends on the relevant base and legal scenario.",
        "Late fees can have notification-specific caps or relief."
      ],
      "recap": [
        "Reconcile all three ledgers.",
        "Separate tax, interest and late fees.",
        "Compute the statutory base before applying a rate."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A cash-ledger deposit alone proves:",
          "options": [
            "The registration is closed",
            "The return is filed",
            "Funds have reached the ledger, not necessarily tax discharge",
            "ITC is eligible"
          ],
          "correctIndex": 2,
          "explanation": "The liability must also be discharged through the prescribed process.",
          "id": "7.4-q1",
          "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
        },
        {
          "type": "tf",
          "question": "Interest and late fee are the same statutory charge.",
          "correctBool": false,
          "explanation": "They arise under different provisions.",
          "id": "7.4-q2",
          "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
        },
        {
          "type": "numeric",
          "question": "Interest base ₹50,000, assumed 18% annual rate, 30 days/365. Interest in ₹ rounded to two decimals?",
          "correctNumber": 739.73,
          "tolerance": 0.01,
          "explanation": "50,000 × 0.18 × 30/365 = ₹739.73.",
          "id": "7.4-q3",
          "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
        },
        {
          "type": "mcq",
          "question": "For wrong ITC interest under section 50(3), a key test is:",
          "options": [
            "Only invoice colour",
            "Only turnover",
            "Only the PAN",
            "Wrong availment and utilisation"
          ],
          "correctIndex": 3,
          "explanation": "The statutory utilisation condition and Rule 88B matter.",
          "id": "7.4-q4",
          "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
        }
      ]
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "Assumed intra-State net invoice ₹1,00,000, combined 18%, equal components. SGST in ₹?",
      "correctNumber": 9000,
      "tolerance": 0.01,
      "explanation": "₹1,00,000 × 9% = ₹9,000.",
      "id": "m7-q1",
      "sectionRef": "CGST Act sections 31–36; CGST Rules 46–55 and 56."
    },
    {
      "type": "mcq",
      "question": "A disputed year reaches its ordinary record-retention date. Best approach?",
      "options": [
        "Check the longer proceedings-related retention duty",
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
      "question": "A supplier covered by the mandate sends a PDF without its required IRN. What should be checked?",
      "options": [
        "Only the file size",
        "Compliance under Rule 48 and the mandate",
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
      "question": "A covered supplier can ignore the applicable IRP reporting window until annual reconciliation.",
      "correctBool": false,
      "explanation": "Operational time restrictions can prevent delayed IRN generation.",
      "id": "m7-q4",
      "sectionRef": "CGST Rule 48(4)/(5); applicable e-invoice mandate notifications. [Official IRP operational guidance](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/)."
    },
    {
      "type": "mcq",
      "question": "A job-work movement is not a current sale. E-way approach?",
      "options": [
        "Ignore transport data",
        "Never needed",
        "Assess movement rules and exemptions",
        "Use GSTR-9 instead"
      ],
      "correctIndex": 2,
      "explanation": "Non-sale movement can still be covered.",
      "id": "m7-q5",
      "sectionRef": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129."
    },
    {
      "type": "tf",
      "question": "E-way requirements are decided solely from whether output GST is charged.",
      "correctBool": false,
      "explanation": "Purpose, value and special movement rules also matter.",
      "id": "m7-q6",
      "sectionRef": "CGST Rules 138–138E; applicable State movement exemptions; CGST Act section 129."
    },
    {
      "type": "numeric",
      "question": "Assumed interest base ₹1,00,000, annual rate 18%, delay 10 days/365. Interest in ₹ to two decimals?",
      "correctNumber": 493.15,
      "tolerance": 0.01,
      "explanation": "1,00,000 × 0.18 × 10/365 = ₹493.15.",
      "id": "m7-q7",
      "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
    },
    {
      "type": "tf",
      "question": "Every wrongly entered but unused ITC amount automatically attracts the same utilisation-based interest.",
      "correctBool": false,
      "explanation": "Determine whether and when the wrong credit was utilised.",
      "id": "m7-q8",
      "sectionRef": "CGST Act sections 47, 49 and 50; CGST Rules 87, 88 and 88B."
    }
  ]
};
