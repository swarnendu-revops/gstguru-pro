import type { Module } from "./types";

export const module5: Module = {
  "id": "module-5",
  "number": 5,
  "title": "Value, Classification & Tax Computation",
  "summary": "Find the value before tax, handle discounts and work backward from a GST-inclusive price.",
  "chapters": [
    {
      "id": "5.1",
      "title": "Transaction Value & Inclusions",
      "roadmap": "Find the amount GST is calculated on before multiplying by a rate.",
      "keyTerms": [
        {
          "term": "Transaction value",
          "def": "The agreed price used as the starting GST value when buyer and seller are unrelated and price is the only consideration."
        },
        {
          "term": "Taxable value",
          "def": "The amount to which the GST rate is applied, after required additions and permitted deductions."
        },
        {
          "term": "Incidental expenses",
          "def": "Related charges such as packing or handling that can form part of the supply’s value."
        },
        {
          "term": "Price-linked subsidy",
          "def": "Support tied directly to the supply price. Government and private subsidies can be treated differently."
        }
      ],
      "explanation": "### 1. Start with the agreed price\nFor an ordinary sale between unrelated parties, with price as the only thing given in return, use the agreed price as the starting point. Then check the legal additions and deductions.\n\n### 2. Add charges that belong to this supply\nPacking, handling and other related charges can be included even when shown on separate bill lines. If the buyer pays an expense the seller was legally responsible for and it was omitted from the price, that can also need adding.\n\n### 3. Keep GST itself separate\nGST is calculated on the taxable value. Do not add GST into that value and tax it again. Certain other taxes and delayed-payment charges have their own inclusion rules.\n\n### 4. Check unusual price arrangements\nRelated parties, payment partly in goods/services and qualifying payments made purely on the customer’s behalf can require different valuation rules. Price-linked private support also needs a separate check; Central/State government subsidies have a specific exclusion. List the components before multiplying.",
      "legalBasis": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Goods plus packing",
          "body": "Assume goods cost ₹1,00,000 before tax, supplier packing is ₹5,000, and the rate is 18%.\n\n1. Taxable value = ₹1,00,000 + ₹5,000 = ₹1,05,000.\n2. GST = ₹1,05,000 × 18% = **₹18,900**.\n\nShowing packing separately does not automatically remove it from value."
        },
        {
          "title": "Buyer pays a seller’s expense",
          "body": "Assume price is ₹80,000 and the buyer also pays ₹10,000 that the seller owed for this supply, not already included.\n\n1. Add the omitted seller obligation: value = ₹90,000.\n2. At assumed 18%, GST = **₹16,200**.\n\nThe legal responsibility for the expense matters."
        }
      ],
      "nuances": [
        "Separate bill lines do not automatically mean separate tax values.",
        "Do not include GST again in its own calculation base.",
        "Related parties and non-cash payment need different valuation checks."
      ],
      "recap": [
        "Begin with the agreed price where permitted.",
        "Add required supply-related amounts.",
        "Apply the rate only after finding taxable value."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "The ordinary transaction-value starting point assumes which relationship and payment conditions?",
          "options": [
            "Only cash sales",
            "Only exports",
            "Related parties always",
            "Unrelated parties, with price as the only thing given in return"
          ],
          "correctIndex": 3,
          "explanation": "Both legal conditions must hold.",
          "id": "5.1-q1",
          "sectionRef": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35."
        },
        {
          "type": "tf",
          "question": "Packing charged by the supplier is always excluded from GST value if it has its own invoice line.",
          "correctBool": false,
          "explanation": "Incidental supply expenses can be included under section 15(2).",
          "id": "5.1-q2",
          "sectionRef": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35."
        },
        {
          "type": "numeric",
          "question": "Assume price ₹1,00,000 plus includible packing ₹5,000, before GST at 18%. What is GST, in rupees?",
          "correctNumber": 18900,
          "tolerance": 0.01,
          "explanation": "₹1,05,000 × 18% = ₹18,900.",
          "id": "5.1-q3",
          "sectionRef": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35."
        },
        {
          "type": "mcq",
          "question": "Which price-support category has a specific exclusion from the price-linked subsidy addition?",
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
      ],
      "learningGoal": "Find the amount GST is calculated on before multiplying by a rate.",
      "story": "Asha sells goods for ₹1,00,000 and separately charges ₹5,000 for packing. She cannot assume GST applies only to the goods-price line. First she needs the full taxable value.",
      "selfCheck": {
        "question": "Why is the packing charge included in the first example?",
        "answer": "It is a supplier charge connected with the goods supply, so the stated facts require adding it to the GST value."
      }
    },
    {
      "id": "5.2",
      "title": "Discounts & Credit Notes",
      "roadmap": "Understand when a discount changes the GST value and when it only changes the money owed.",
      "keyTerms": [
        {
          "term": "Invoice discount",
          "def": "A discount shown on the bill at or before the supply. It can reduce value when the conditions are met."
        },
        {
          "term": "GST credit note",
          "def": "A formal reduction document that can adjust sales GST when the legal grounds, reporting and timing conditions are met."
        },
        {
          "term": "Commercial credit note",
          "def": "A reduction in the customer’s balance that does not necessarily reduce GST."
        }
      ],
      "explanation": "### 1. Read the invoice-time discount\nIf a qualifying discount is recorded on the invoice at or before supply, calculate tax on the reduced value. Keep the discount visible in the bill calculation.\n\n### 2. Treat a later reduction as a new check\nUnder the pre-2026-amendment rules used in these exercises, a later discount needs an agreement at or before the supply, a link to the relevant invoices and the customer’s related purchase-credit reversal. “Reversal” means giving back credit previously claimed.\n\n### 3. Separate money from tax\nA commercial credit note may reduce what the customer owes without reducing the seller’s output GST. A GST credit note has its own grounds, reporting deadline and customer-credit conditions. A bookkeeping entry cannot create a tax adjustment by itself.\n\n### 4. Use the correct legal version\nThe Finance Act 2026 changes the later-discount framework. The original source review recorded pending commencement; check the latest official start date for an actual transaction. The examples explicitly use the older framework rather than assuming the new wording is already effective.",
      "legalBasis": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001).\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Discount shown on the invoice",
          "body": "Assume listed price ₹1,00,000, qualifying invoice discount ₹10,000 and GST rate 18%.\n\n1. Reduced value = ₹1,00,000 − ₹10,000 = ₹90,000.\n2. GST = ₹90,000 × 18% = **₹16,200**.\n\nThe discount is part of the permitted invoice-time calculation."
        },
        {
          "title": "Goodwill reduction after the sale",
          "body": "Original taxable value is ₹50,000 at assumed 18%: GST is ₹9,000. A later ₹5,000 reduction fails the stated older discount conditions.\n\n1. Reduce the customer’s balance through an appropriate commercial note.\n2. Do not automatically reduce the original **₹9,000 GST**.\n\nA lower amount receivable and a lower tax liability are separate results."
        }
      ],
      "nuances": [
        "A later discount is not automatically a GST reduction.",
        "Check the applicable legal version and credit-note deadline.",
        "If required, the customer’s related credit must also be adjusted."
      ],
      "recap": [
        "Invoice-time discounts can reduce value when valid.",
        "Later discounts need separate conditions.",
        "A commercial adjustment need not change GST."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A valid ₹10,000 invoice discount reduces a ₹1,00,000 price before GST to what?",
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
          "question": "Every commercial credit note automatically reduces the seller's GST.",
          "correctBool": false,
          "explanation": "legal discount and credit-note conditions must be satisfied.",
          "id": "5.2-q2",
          "sectionRef": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001)."
        },
        {
          "type": "numeric",
          "question": "After an allowed discount, value before GST is ₹90,000. Assume 18%. What is GST, in rupees?",
          "correctNumber": 16200,
          "tolerance": 0.01,
          "explanation": "₹90,000 × 18% = ₹16,200.",
          "id": "5.2-q3",
          "sectionRef": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001)."
        },
        {
          "type": "mcq",
          "question": "How should you treat a 2026 amendment whose start date has not been confirmed?",
          "options": [
            "Without reading section 34",
            "Automatically from the Finance Act date",
            "Only after checking the start date applicable to the case",
            "For every earlier year"
          ],
          "correctIndex": 2,
          "explanation": "Enactment is not automatically start date.",
          "id": "5.2-q4",
          "sectionRef": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001)."
        }
      ],
      "learningGoal": "Understand when a discount changes the GST value and when it only changes the money owed.",
      "story": "Asha gives a discount on today’s invoice. A month later she gives another customer a goodwill reduction. Both reduce the customer’s bill, but only a discount meeting the applicable rules can reduce GST.",
      "selfCheck": {
        "question": "Can a ₹5,000 goodwill discount always reduce the original GST?",
        "answer": "No. It can reduce money owed while leaving GST unchanged if the applicable tax-adjustment conditions are not met."
      }
    },
    {
      "id": "5.3",
      "title": "Related-party Value & Pure Agents",
      "roadmap": "Understand why related-business prices need checking and when a customer’s expense can be excluded.",
      "keyTerms": [
        {
          "term": "Open market value",
          "def": "A comparable price for the same supply between unrelated parties under normal conditions."
        },
        {
          "term": "Full ITC proviso",
          "def": "A special condition in the valuation rule: if the receiving registration can claim full purchase credit, the declared invoice value can be accepted as open market value in the covered case."
        },
        {
          "term": "Pure agent",
          "def": "A supplier paying a qualifying expense strictly on the customer’s behalf, meeting all the exclusion conditions. A reimbursement label alone is insufficient."
        }
      ],
      "explanation": "### 1. Recognise related or separately registered parties\nA price within one business group may not be an ordinary market price. Related- or distinct-person supplies use special valuation rules. Distinct persons means separate GST registrations treated as separate persons.\n\n### 2. Check the receiving party’s credit position\nFor a covered case with full credit entitlement at the recipient, the invoice-value rule can simplify valuation. If credit is restricted, do not assume the same treatment. Corporate guarantees have their own specific provision.\n\n### 3. Keep non-cash pricing separate\nIf something besides money is given in return, special valuation methods can apply. Comparable value, cost-based or other methods follow the prescribed sequence; choosing a convenient figure is not enough.\n\n### 4. Test a pure-agent payment carefully\nThe customer must authorise a payment for the customer’s liability. It must be separately shown and satisfy the other conditions: the supplier does not own or use it for its own benefit and recovers only the actual qualifying payment. Ordinary travel or business expenses are not automatically pure-agent exclusions.",
      "legalBasis": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Branch with full purchase-credit entitlement",
          "body": "Assume the covered transfer has invoice value ₹80,000, full recipient credit eligibility and the relevant invoice-value rule applies.\n\n1. Accept ₹80,000 as the prescribed value on these facts.\n2. At assumed 18%, GST = **₹14,400**.\n\nIf recipient credit is restricted, review the value again."
        },
        {
          "title": "Customer’s government fee",
          "body": "Dev charges ₹20,000 for work and separately recovers ₹5,000 paid on the customer’s behalf. Assume every pure-agent condition is met.\n\n1. Exclude the qualifying ₹5,000 payment.\n2. Taxable service value = ₹20,000.\n3. At assumed 18%, GST = **₹3,600**.\n\nIf the conditions fail, recheck whether the payment must be included."
        }
      ],
      "nuances": [
        "A group-company price is not automatically the correct GST value.",
        "Full recipient credit is a condition, not an assumption.",
        "Writing “reimbursement” does not establish a pure-agent exclusion."
      ],
      "recap": [
        "Related-party transactions need valuation rules.",
        "Recipient credit can affect which rule applies.",
        "Pure-agent exclusions require every condition."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "The special valuation rule in Rule 28 primarily concerns supplies between which parties?",
          "options": [
            "Salary slabs",
            "Only exempt imports",
            "Final exams",
            "Supplies between related parties or separate GST registrations"
          ],
          "correctIndex": 3,
          "explanation": "It is the related/distinct-person valuation rule.",
          "id": "5.3-q1",
          "sectionRef": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33."
        },
        {
          "type": "tf",
          "question": "Every expense labelled reimbursement qualifies for exclusion as a pure-agent payment.",
          "correctBool": false,
          "explanation": "All Rule 33 conditions must be met.",
          "id": "5.3-q2",
          "sectionRef": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33."
        },
        {
          "type": "numeric",
          "question": "A ₹20,000 service fee has a separately shown ₹5,000 recovery satisfying all pure-agent exclusion conditions. Assume 18% on the fee. What is GST, in rupees?",
          "correctNumber": 3600,
          "tolerance": 0.01,
          "explanation": "Only ₹20,000 is the assumed taxable base.",
          "id": "5.3-q3",
          "sectionRef": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33."
        },
        {
          "type": "mcq",
          "question": "The full-credit invoice-value simplification depends on which condition?",
          "options": [
            "The receiving party can claim the full eligible credit",
            "Supplier profits",
            "Transport distance",
            "Recipient having cash"
          ],
          "correctIndex": 0,
          "explanation": "Actual eligibility, not ledger balance, supports the proviso.",
          "id": "5.3-q4",
          "sectionRef": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33."
        }
      ],
      "learningGoal": "Understand why related-business prices need checking and when a customer’s expense can be excluded.",
      "story": "Asha transfers goods to another registration owned by her business. Dev pays a government fee on a customer’s behalf. Both need a closer look than an ordinary unrelated-customer price.",
      "selfCheck": {
        "question": "Why is Dev’s ₹5,000 recovery excluded in the example?",
        "answer": "The facts explicitly satisfy all pure-agent conditions. The exclusion would not follow from the word “reimbursement” alone."
      }
    },
    {
      "id": "5.4",
      "title": "HSN, SAC & Inclusive-tax Computations",
      "roadmap": "Recognise product/service codes and calculate GST inside an inclusive price.",
      "keyTerms": [
        {
          "term": "HSN",
          "def": "Harmonised System of Nomenclature: product classification codes used to identify goods for GST and other purposes."
        },
        {
          "term": "SAC",
          "def": "Services Accounting Code: classification codes used for services."
        },
        {
          "term": "Tax-inclusive price",
          "def": "A total that already includes GST."
        },
        {
          "term": "Combined rate",
          "def": "The total GST percentage; for an ordinary intra-State example, 18% may split into 9% CGST and 9% SGST."
        }
      ],
      "explanation": "### 1. Identify what is actually sold\nA product’s material, use and legal description help establish its classification. For a service, examine the work actually provided. A popular name or a search result is not a sufficient code/rate check.\n\n### 2. Match the code to the period’s rate\nThe official notification and its conditions determine the rate. Old rate tables can become outdated. This course uses stated exercise rates so you can learn the calculation; it is not a current rate database for every product.\n\n### 3. Understand the inclusive-price proportion\nAt 18%, each ₹100 of price before tax becomes ₹118 including tax. So divide the final total into 118 parts: 100 are base price and 18 are tax. Base = total × 100/118; tax = total × 18/118.\n\n### 4. Split the tax where required\nFor an ordinary intra-State sale with equal components, divide the combined GST into central and State parts. Keep rounding consistent and check that base plus tax equals the customer total.",
      "legalBasis": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf).\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Taking GST out of an inclusive total",
          "body": "Assume ₹1,18,000 already includes 18% GST.\n\n1. Base price = ₹1,18,000 × 100 ÷ 118 = **₹1,00,000**.\n2. GST = ₹1,18,000 − ₹1,00,000 = **₹18,000**.\n3. Check: ₹1,00,000 + ₹18,000 = ₹1,18,000.\n\nDo not multiply the inclusive total by 18%."
        },
        {
          "title": "Splitting an intra-State bill",
          "body": "Assume value before tax ₹50,000 and combined GST 18%, split equally.\n\n1. Total GST = ₹50,000 × 18% = ₹9,000.\n2. CGST = **₹4,500**; SGST = **₹4,500**.\n3. Customer total = ₹59,000."
        }
      ],
      "nuances": [
        "A familiar product name does not prove its legal classification.",
        "Do not calculate tax on top of a total that already includes tax.",
        "An assumed example rate is not a live rate recommendation."
      ],
      "recap": [
        "Find the right goods or service code.",
        "Check the rate and date.",
        "For inclusive prices, extract the base and tax rather than adding tax again."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "What is the sound starting point for classifying a product?",
          "options": [
            "Marketing title alone",
            "What the product is, plus the legal classification wording and notes",
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
          "question": "A ₹1,18,000 total already including 18% GST contains ₹21,240 GST.",
          "correctBool": false,
          "explanation": "Included tax is ₹1,18,000 × 18/118 = ₹18,000.",
          "id": "5.4-q2",
          "sectionRef": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        },
        {
          "type": "numeric",
          "question": "Assume ₹1,18,000 includes GST at 18%. How much of that total is GST, in rupees?",
          "correctNumber": 18000,
          "tolerance": 0.01,
          "explanation": "₹1,18,000 × 18/118 = ₹18,000.",
          "id": "5.4-q3",
          "sectionRef": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        },
        {
          "type": "numeric",
          "question": "Assume value before tax ₹50,000, combined 18% GST and equal central/State parts. What is the CGST part, in rupees?",
          "correctNumber": 4500,
          "tolerance": 0.01,
          "explanation": "₹50,000 × 9% = ₹4,500.",
          "id": "5.4-q4",
          "sectionRef": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
        }
      ],
      "learningGoal": "Recognise product/service codes and calculate GST inside an inclusive price.",
      "story": "Asha advertises a product at ₹1,180 including GST. Taking 18% of ₹1,180 would tax an amount that already contains tax. She needs to work backward from the final price.",
      "selfCheck": {
        "question": "Why does ₹118 inclusive at 18% contain ₹18 GST rather than ₹21.24?",
        "answer": "The ₹118 is already ₹100 base plus ₹18 tax. The percentage is applied to the base, not again to the inclusive total."
      }
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "Assume price ₹80,000 plus an omitted ₹10,000 seller obligation paid by the buyer, both included in value, at 18%. What is GST, in rupees?",
      "correctNumber": 16200,
      "tolerance": 0.01,
      "explanation": "₹90,000 × 18% = ₹16,200.",
      "id": "m5-q1",
      "sectionRef": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35."
    },
    {
      "type": "mcq",
      "question": "Buyer and seller are related. How should the GST value be checked?",
      "options": [
        "Always zero",
        "Use invoice price automatically",
        "Apply the relevant valuation rule",
        "Use income-tax profit"
      ],
      "correctIndex": 2,
      "explanation": "Section 15(4) and required rules apply.",
      "id": "m5-q2",
      "sectionRef": "CGST Act section 15(1), 15(2) and 15(4); CGST Rules 27–35."
    },
    {
      "type": "numeric",
      "question": "Original sales GST is ₹9,000. A later ₹5,000 commercial reduction fails the stated tax-adjustment conditions. What sales GST remains, in rupees?",
      "correctNumber": 9000,
      "tolerance": 0.01,
      "explanation": "Without a valid tax adjustment, the original GST remains ₹9,000.",
      "id": "m5-q3",
      "sectionRef": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001)."
    },
    {
      "type": "mcq",
      "question": "Under the stated older discount framework, a later discount had no agreement at or before supply. What follows?",
      "options": [
        "Recipient can claim extra ITC",
        "Tax doubles",
        "Automatic GST reduction",
        "No automatic GST reduction under the stated older discount rule"
      ],
      "correctIndex": 3,
      "explanation": "The exercise expressly applies the earlier legal requirements.",
      "id": "m5-q4",
      "sectionRef": "CGST Act sections 15(3) and 34. [Section 15 amendment status](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) · [Section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001)."
    },
    {
      "type": "numeric",
      "question": "Assume ₹80,000 declared value is valid under the covered full-recipient-credit rule, at 18%. What is GST, in rupees?",
      "correctNumber": 14400,
      "tolerance": 0.01,
      "explanation": "₹80,000 × 18% = ₹14,400.",
      "id": "m5-q5",
      "sectionRef": "CGST Act section 15(4); CGST Rules 27, 28, 30, 31 and 33."
    },
    {
      "type": "mcq",
      "question": "A supplier uses an expense for its own service but calls the recovery reimbursement. What should be checked?",
      "options": [
        "Every pure-agent condition and whether the expense belongs in value",
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
      "question": "Assume a ₹59,000 customer total already includes 18% GST. What is the value before GST, in rupees?",
      "correctNumber": 50000,
      "tolerance": 0.01,
      "explanation": "₹59,000 × 100/118 = ₹50,000.",
      "id": "m5-q7",
      "sectionRef": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
    },
    {
      "type": "mcq",
      "question": "An old rate list conflicts with the official rule effective for the sale. Which should guide the calculation?",
      "options": [
        "The old list",
        "The official rate rule and the applicable date-transition treatment",
        "Customer memory",
        "An average of both"
      ],
      "correctIndex": 1,
      "explanation": "Classification, start date and time of supply determine the applicable treatment.",
      "id": "m5-q8",
      "sectionRef": "CGST Act sections 9, 11 and 15; CGST Rule 35; operative HSN/SAC rate notifications. [Official 2025 rate-transition FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf)."
    }
  ]
};
