import type { Module } from "./types";

export const module5: Module = {
  "id": "module-5",
  "number": 5,
  "title": "Value, Classification & Tax Computation",
  "summary": "Calculate the tax base, handle discounts and related-party values, and choose rates from the correct legal classification.",
  "chapters": [
    {
      "id": "5.1",
      "title": "Transaction Value & Inclusions",
      "roadmap": "Move from the invoice headline to the actual taxable value.",
      "keyTerms": [
        {
          "term": "Transaction value",
          "def": "Price paid or payable where parties are unrelated and price is the sole consideration."
        },
        {
          "term": "Incidental expenses",
          "def": "Supply-related expenses such as packing charged by the supplier."
        },
        {
          "term": "Price-linked subsidy",
          "def": "A subsidy directly tied to the supply price, with government exclusions."
        }
      ],
      "explanation": "Transaction value is the starting point when section 15(1) conditions hold. Add statutory inclusions: certain other taxes, supplier liabilities paid by the recipient, incidental charges, delayed-payment charges and qualifying price-linked subsidies. GST itself is not added again to its own base.\n\nPacking or handling charged in relation to the supply can form part of value even if separately shown. A recipient paying an expense legally owed by the supplier may also create an inclusion. Central/State government subsidies have a specific exclusion; a private price-linked subsidy must be assessed differently.\n\nWhere price is not the sole consideration or parties are related, move to the applicable valuation rules. Distinguish a genuine reimbursement qualifying under Rule 33 from an expense incurred as part of your own supply. Record value components on the working paper before multiplying by the assumed or verified rate.",
      "legalBasis": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Packing included",
          "body": "Goods price ₹1,00,000 plus supplier packing ₹5,000, with no other adjustments. Taxable value = **₹1,05,000**. At assumed 18%, GST = **₹18,900**."
        },
        {
          "title": "Recipient pays liability",
          "body": "Contract price is ₹80,000. The buyer also pays ₹10,000 that the supplier was liable to pay in relation to the supply, omitted from price. Value becomes **₹90,000**, giving ₹16,200 at assumed 18%."
        }
      ],
      "nuances": [
        "A separate line item is not automatically outside value.",
        "Price-linked private and government subsidies differ.",
        "Do not tax GST on GST."
      ],
      "recap": [
        "Check section 15(1) conditions.",
        "Add statutory inclusions.",
        "Use valuation rules where required."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Transaction value assumes:",
          "options": [
            "Only cash sales",
            "Only exports",
            "Related parties always",
            "Unrelated parties and price as sole consideration"
          ],
          "correctIndex": 3,
          "explanation": "Both statutory conditions must hold.",
          "id": "5.1-q1",
          "sectionRef": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35."
        },
        {
          "type": "tf",
          "question": "Supplier-charged packing is always excluded because separately invoiced.",
          "correctBool": false,
          "explanation": "Incidental supply expenses can be included under section 15(2).",
          "id": "5.1-q2",
          "sectionRef": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35."
        },
        {
          "type": "numeric",
          "question": "₹1,00,000 price plus ₹5,000 includible packing at assumed 18%. GST in ₹?",
          "correctNumber": 18900,
          "tolerance": 0.01,
          "explanation": "₹1,05,000 × 18% = ₹18,900.",
          "id": "5.1-q3",
          "sectionRef": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35."
        },
        {
          "type": "mcq",
          "question": "Which subsidy has the specific exclusion under section 15(2)(e)?",
          "options": [
            "Central/State government subsidy",
            "Every customer payment",
            "Supplier discount",
            "Every private subsidy"
          ],
          "correctIndex": 0,
          "explanation": "Government subsidies are excluded under the stated provision.",
          "id": "5.1-q4",
          "sectionRef": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35."
        }
      ]
    },
    {
      "id": "5.2",
      "title": "Discounts & Credit Notes",
      "roadmap": "Separate a commercial discount from a reduction of GST liability.",
      "keyTerms": [
        {
          "term": "Invoice discount",
          "def": "A discount given before/at supply and recorded in the invoice."
        },
        {
          "term": "GST credit note",
          "def": "A statutory document whose tax adjustment must satisfy section 34."
        },
        {
          "term": "Commercial credit note",
          "def": "A financial adjustment that need not reduce output GST."
        }
      ],
      "explanation": "A discount given before or at supply can be excluded when recorded on the invoice. A later financial concession does not automatically reduce GST. Under the pre-2026-amendment section 15(3)(b) framework used in the exercises here, a post-supply discount needs an agreement at/before supply, linkage to relevant invoices and attributable recipient ITC reversal.\n\nFinance Act 2026 provides a revised post-supply discount framework. The official section page marks its commencement as **yet to be notified** in the source snapshot reviewed. Check the Gazette for the transaction period before selecting the version; this course does not assume that uncommenced text is already applicable.\n\nA valid GST credit note also has section 34 reporting and adjustment conditions, including the applicable deadline and recipient-credit implications. A commercial note can reduce the amount receivable without reducing output tax. Keep agreement, invoice linkage, recipient confirmation and the reported note together.",
      "legalBasis": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001).\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Invoice discount",
          "body": "List price ₹1,00,000; qualifying invoice discount ₹10,000. Value = **₹90,000**. At assumed 18%, GST = **₹16,200**."
        },
        {
          "title": "Commercial note only",
          "body": "Original value ₹50,000 at assumed 18% gives ₹9,000 GST. A later ₹5,000 discount fails the stated period-applicable statutory conditions. A commercial note may adjust the balance, but it does not automatically reduce the ₹9,000 output GST."
        }
      ],
      "nuances": [
        "Exercises expressly use the pre-amendment discount conditions.",
        "Commercial adjustment and tax adjustment are different.",
        "Commencement and the section 34 deadline both matter."
      ],
      "recap": [
        "Invoice discounts require invoice recording.",
        "Apply the period-valid later-discount conditions.",
        "Do not reduce GST merely because money is refunded."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A qualifying ₹10,000 invoice discount on ₹1,00,000 makes value:",
          "options": [
            "₹1,10,000",
            "₹90,000",
            "₹1,00,000 always",
            "Zero"
          ],
          "correctIndex": 1,
          "explanation": "A recorded qualifying invoice discount reduces value.",
          "id": "5.2-q1",
          "sectionRef": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001)."
        },
        {
          "type": "tf",
          "question": "Every commercial credit note automatically reduces output GST.",
          "correctBool": false,
          "explanation": "Statutory discount and credit-note conditions must be satisfied.",
          "id": "5.2-q2",
          "sectionRef": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001)."
        },
        {
          "type": "numeric",
          "question": "Value after eligible discount ₹90,000 at assumed 18%. GST in ₹?",
          "correctNumber": 16200,
          "tolerance": 0.01,
          "explanation": "₹90,000 × 18% = ₹16,200.",
          "id": "5.2-q3",
          "sectionRef": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001)."
        },
        {
          "type": "mcq",
          "question": "A 2026 amendment shown as awaiting commencement should be used:",
          "options": [
            "Without reading section 34",
            "Automatically from the Finance Act date",
            "Only after checking the applicable commencement",
            "For every earlier year"
          ],
          "correctIndex": 2,
          "explanation": "Enactment is not automatically commencement.",
          "id": "5.2-q4",
          "sectionRef": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001)."
        }
      ]
    },
    {
      "id": "5.3",
      "title": "Related-party Value & Pure Agents",
      "roadmap": "Use the right alternative valuation rule and test pass-through expenses rigorously.",
      "keyTerms": [
        {
          "term": "Open market value",
          "def": "The comparable full monetary value of a supply between unrelated persons."
        },
        {
          "term": "Full ITC proviso",
          "def": "A Rule 28 rule treating declared invoice value as open market value in specified full-credit cases."
        },
        {
          "term": "Pure agent",
          "def": "A supplier meeting all prescribed conditions for excluding a qualifying pass-through amount."
        }
      ],
      "explanation": "Related- or distinct-person supplies use Rule 28, with specific branches and provisos. The recipient's full ITC entitlement can support the declared-invoice-value deeming rule. Restricted credit at the recipient changes that analysis. Corporate guarantees have a specific sub-rule and must not be priced using the ordinary rule without checking it.\n\nRule 27 addresses non-monetary consideration; cost-based and residual approaches under Rules 30/31 may follow when the earlier methods cannot determine value. Select rules in their prescribed order.\n\nRule 33 excludes qualifying pure-agent expenditure only where all conditions are met. The payment must be authorised, separately indicated, and relate to the recipient's liability; the supplier cannot hold title, use it for their own interest, or recover more than the qualifying actual payment. Merely writing \"reimbursement\" on a bill does not satisfy the rule.",
      "legalBasis": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Full-credit branch",
          "body": "Assume a qualifying distinct-person supply with invoice value ₹80,000 and full recipient ITC entitlement under the relevant Rule 28 proviso. On these stated facts, the declared value can be deemed open market value; at assumed 18%, tax is **₹14,400**."
        },
        {
          "title": "Pass-through boundary",
          "body": "Service fee ₹20,000 plus a separately indicated ₹5,000 government payment meets every Rule 33 pure-agent condition. Tax base is **₹20,000**, not ₹25,000. At assumed 18%, GST is ₹3,600. If conditions fail, reanalyse inclusion."
        }
      ],
      "nuances": [
        "Full ITC means legally eligible full credit, not simply a large credit balance.",
        "Corporate guarantee valuation requires its specific rule.",
        "Reimbursement wording alone does not create a pure agent."
      ],
      "recap": [
        "Select the appropriate valuation rule.",
        "Check recipient credit eligibility.",
        "Document every pure-agent condition."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Rule 28 primarily covers:",
          "options": [
            "Salary slabs",
            "Only exempt imports",
            "Final exams",
            "Related/distinct-person supplies"
          ],
          "correctIndex": 3,
          "explanation": "It is the related/distinct-person valuation rule.",
          "id": "5.3-q1",
          "sectionRef": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33."
        },
        {
          "type": "tf",
          "question": "Every reimbursement qualifies as pure-agent exclusion.",
          "correctBool": false,
          "explanation": "All Rule 33 conditions must be met.",
          "id": "5.3-q2",
          "sectionRef": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33."
        },
        {
          "type": "numeric",
          "question": "₹20,000 fee plus ₹5,000 valid pure-agent exclusion, at assumed 18%. GST in ₹?",
          "correctNumber": 3600,
          "tolerance": 0.01,
          "explanation": "Only ₹20,000 is the assumed taxable base.",
          "id": "5.3-q3",
          "sectionRef": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33."
        },
        {
          "type": "mcq",
          "question": "The full ITC proviso depends on:",
          "options": [
            "Recipient full credit eligibility",
            "Supplier profits",
            "Transport distance",
            "Recipient having cash"
          ],
          "correctIndex": 0,
          "explanation": "Actual eligibility, not ledger balance, supports the proviso.",
          "id": "5.3-q4",
          "sectionRef": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33."
        }
      ]
    },
    {
      "id": "5.4",
      "title": "HSN, SAC & Inclusive-tax Computations",
      "roadmap": "Research classification and reverse-calculate tax without mistaking example rates for a schedule.",
      "keyTerms": [
        {
          "term": "HSN",
          "def": "The goods classification nomenclature used to identify tariff headings."
        },
        {
          "term": "SAC",
          "def": "A service classification code."
        },
        {
          "term": "Tax-inclusive price",
          "def": "A total already containing tax, requiring a reverse calculation."
        }
      ],
      "explanation": "Classification starts from product composition, function, tariff notes and the legal description, or the actual service supplied. A common trade name and a search-engine rate are not sufficient. Match the classification to the operative rate/exemption notification, conditions and date.\n\nThe 2025 rate changes are a reason to avoid carrying an old generic slab table into a new course. This course therefore uses expressly assumed rates for arithmetic and links to official rate resources. It does not serve as an exhaustive current commodity-rate lookup.\n\nFor a tax-inclusive amount at combined rate r, taxable value is total × 100/(100+r), and tax is total × r/(100+r). For an ordinary intra-State supply, split the combined tax into the applicable central and State components. Use a consistent rounding policy and reconcile invoice totals; don't simply multiply the inclusive total by the rate.",
      "legalBasis": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf).\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Inclusive price",
          "body": "Assume ₹1,18,000 includes 18% GST. Taxable value = ₹1,18,000 × 100/118 = **₹1,00,000**; tax = **₹18,000**. Multiplying ₹1,18,000 by 18% would overstate the tax."
        },
        {
          "title": "Intra-State split",
          "body": "For ₹50,000 taxable value at an assumed combined 18%, total tax = ₹9,000. With equal components, CGST = **₹4,500** and SGST = **₹4,500**; gross invoice = ₹59,000."
        }
      ],
      "nuances": [
        "Tariff notes can override casual product descriptions.",
        "Special rates and exemptions require individual verification.",
        "Price-inclusive computation differs from adding tax to a net price."
      ],
      "recap": [
        "Classify before choosing a rate.",
        "Check the operative notification date.",
        "Reverse-calculate inclusive prices correctly."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "The correct first basis for goods classification is:",
          "options": [
            "Marketing title alone",
            "Product facts and tariff text/notes",
            "The cheapest rate",
            "Customer preference"
          ],
          "correctIndex": 1,
          "explanation": "Classification requires the relevant legal and product facts.",
          "id": "5.4-q1",
          "sectionRef": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        },
        {
          "type": "tf",
          "question": "GST included in ₹1,18,000 at 18% equals ₹21,240.",
          "correctBool": false,
          "explanation": "Included tax is ₹1,18,000 × 18/118 = ₹18,000.",
          "id": "5.4-q2",
          "sectionRef": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        },
        {
          "type": "numeric",
          "question": "Gross price ₹1,18,000 includes assumed 18% GST. Included GST in ₹?",
          "correctNumber": 18000,
          "tolerance": 0.01,
          "explanation": "₹1,18,000 × 18/118 = ₹18,000.",
          "id": "5.4-q3",
          "sectionRef": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        },
        {
          "type": "numeric",
          "question": "₹50,000 net value at assumed 18% with equal CGST/SGST. CGST in ₹?",
          "correctNumber": 4500,
          "tolerance": 0.01,
          "explanation": "₹50,000 × 9% = ₹4,500.",
          "id": "5.4-q4",
          "sectionRef": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        }
      ]
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "Price ₹80,000 plus supplier liability ₹10,000 paid by recipient, both taxable at assumed 18%. GST in ₹?",
      "correctNumber": 16200,
      "tolerance": 0.01,
      "explanation": "₹90,000 × 18% = ₹16,200.",
      "id": "m5-q1",
      "sectionRef": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35."
    },
    {
      "type": "mcq",
      "question": "Parties are related. Best valuation approach?",
      "options": [
        "Always zero",
        "Use invoice price automatically",
        "Apply the relevant valuation rule",
        "Use income-tax profit"
      ],
      "correctIndex": 2,
      "explanation": "Section 15(4) and prescribed rules apply.",
      "id": "m5-q2",
      "sectionRef": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35."
    },
    {
      "type": "numeric",
      "question": "Original GST ₹9,000; a commercial-only ₹5,000 concession does not qualify for tax adjustment on the stated facts. Output GST remaining in ₹?",
      "correctNumber": 9000,
      "tolerance": 0.01,
      "explanation": "Without a valid tax adjustment, the original GST remains ₹9,000.",
      "id": "m5-q3",
      "sectionRef": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001)."
    },
    {
      "type": "mcq",
      "question": "Under the stated pre-amendment conditions, an ad-hoc later discount lacks an agreement at/before supply. What follows?",
      "options": [
        "Recipient can claim extra ITC",
        "Tax doubles",
        "Automatic GST reduction",
        "No automatic section 15(3)(b) reduction"
      ],
      "correctIndex": 3,
      "explanation": "The exercise expressly applies the earlier statutory requirements.",
      "id": "m5-q4",
      "sectionRef": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001)."
    },
    {
      "type": "numeric",
      "question": "Declared value ₹80,000 valid under the stated full-ITC Rule 28 proviso, rate 18%. GST in ₹?",
      "correctNumber": 14400,
      "tolerance": 0.01,
      "explanation": "₹80,000 × 18% = ₹14,400.",
      "id": "m5-q5",
      "sectionRef": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33."
    },
    {
      "type": "mcq",
      "question": "A supplier uses a recovered expense for its own service and labels it reimbursement. What should be checked?",
      "options": [
        "Rule 33 conditions and value inclusion",
        "Nothing",
        "Only payment method",
        "Only the label"
      ],
      "correctIndex": 0,
      "explanation": "Own-interest use can prevent pure-agent treatment.",
      "id": "m5-q6",
      "sectionRef": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33."
    },
    {
      "type": "numeric",
      "question": "An inclusive invoice is ₹59,000 at assumed 18%. Taxable value in ₹?",
      "correctNumber": 50000,
      "tolerance": 0.01,
      "explanation": "₹59,000 × 100/118 = ₹50,000.",
      "id": "m5-q7",
      "sectionRef": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
    },
    {
      "type": "mcq",
      "question": "A 2024 rate list conflicts with the operative 2025 notification. What should guide a post-change supply?",
      "options": [
        "The old list",
        "The applicable notification and transition rule",
        "Customer memory",
        "An average of both"
      ],
      "correctIndex": 1,
      "explanation": "Classification, commencement and time of supply determine the applicable treatment.",
      "id": "m5-q8",
      "sectionRef": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
    }
  ]
};
