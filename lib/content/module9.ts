import type { Module } from "./types";

export const module9: Module = {
  "id": "module-9",
  "number": 9,
  "title": "Exports, Imports & Refunds",
  "summary": "Check overseas transactions and learn how permitted refund routes and calculations work.",
  "chapters": [
    {
      "id": "9.1",
      "title": "Export of Services & SEZ Evidence",
      "roadmap": "Check the full service-export conditions and the evidence for an SEZ supply.",
      "keyTerms": [
        {
          "term": "SEZ",
          "def": "Special Economic Zone: an officially designated area with special business and tax rules. Selling to a business there needs extra checks before the special GST treatment applies."
        },
        {
          "term": "LUT",
          "def": "Letter of Undertaking: the prescribed declaration used for qualifying zero-rated supplies without paying IGST upfront, subject to conditions."
        },
        {
          "term": "Authorised operations",
          "def": "The activities an SEZ business is officially permitted to carry out; the zero-rated supply must be for these purposes."
        },
        {
          "term": "Permitted INR receipt",
          "def": "Receiving export-service payment in Indian rupees where RBI rules permit it. INR means Indian rupees; RBI is India’s central bank."
        },
        {
          "term": "Zero-rated",
          "def": "A special export/qualifying-SEZ treatment that can preserve eligible purchase credit."
        }
      ],
      "explanation": "### 1. Check all service-export facts\nFor Dev’s work to count as an export of services, he must be in India, his customer must be outside India, and the GST location rules must place the service outside India. Payment must meet the foreign-currency or permitted-rupee conditions. Dev and the customer also cannot be merely branches of the same person. Every condition must fit; a foreign address alone is not enough.\n\n### 2. Check whether this is your own overseas establishment\nAn Indian head office supplying its own overseas branch raises the establishment restriction. A separately incorporated foreign customer, even in the same group, needs analysis of its own facts rather than an automatic branch result.\n\n### 3. Choose the permitted payment route\nA valid LUT can support a qualifying zero-rated supply without paying IGST upfront. Purchase-credit eligibility and any refund are separate checks. “Zero-rated” does not guarantee a refund of every purchase tax amount.\n\n### 4. Gather SEZ evidence\nConfirm that the supply is for authorised operations and keep the required official confirmation and evidence that the service or goods were received. A qualifying supply to an SEZ is treated as inter-State even where both locations are in the same State. The special legal category overrides the ordinary geographic shortcut.",
      "legalBasis": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "A qualifying service export under LUT",
          "body": "Assume Dev’s ₹3,00,000 own-account consultancy meets every export condition and uses a valid LUT.\n\n1. Use the permitted no-upfront-IGST route.\n2. Output IGST on these facts is **₹0**.\n3. Review eligible purchase credit and any refund separately."
        },
        {
          "title": "An SEZ customer in the same State",
          "body": "Supplier and SEZ unit are both in Gujarat; the supply is for authorised operations.\n\n1. Confirm the qualifying purpose and prescribed evidence.\n2. Apply the special inter-State/zero-rated framework.\n3. Do not treat it as an ordinary intra-State sale solely because both addresses say Gujarat."
        }
      ],
      "nuances": [
        "A foreign invoice alone does not establish export of services.",
        "An overseas branch and a separate foreign customer are not identical arrangements.",
        "SEZ zero-rating needs the authorised purpose and evidence."
      ],
      "recap": [
        "Test every export condition.",
        "Use the permitted zero-rated route.",
        "Keep SEZ purpose and receipt evidence."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "How do the service-export conditions work together?",
          "options": [
            "Alternative choices",
            "All the conditions must be met together",
            "Only a bank test",
            "Only a postcode test"
          ],
          "correctIndex": 1,
          "explanation": "All legal conditions must hold.",
          "id": "9.1-q1",
          "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
        },
        {
          "type": "tf",
          "question": "Every sale to an SEZ address automatically qualifies as zero-rated.",
          "correctBool": false,
          "explanation": "Authorised operations and other conditions matter.",
          "id": "9.1-q2",
          "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
        },
        {
          "type": "numeric",
          "question": "Assume a ₹3,00,000 service export qualifies under a valid LUT route without IGST payment. What is output IGST, in rupees?",
          "correctNumber": 0,
          "tolerance": 0.01,
          "explanation": "The stated LUT route supplies without payment of IGST.",
          "id": "9.1-q3",
          "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
        },
        {
          "type": "mcq",
          "question": "Which framework covers a qualifying authorised-operation SEZ supply even when seller and SEZ are in one State?",
          "options": [
            "No supply ever",
            "Ordinary intra-State rule only",
            "The special inter-State treatment for qualifying SEZ supplies",
            "Income tax only"
          ],
          "correctIndex": 2,
          "explanation": "Section 7(5) addresses supplies to/from SEZ units/developers.",
          "id": "9.1-q4",
          "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
        }
      ],
      "learningGoal": "Check the full service-export conditions and the evidence for an SEZ supply.",
      "story": "Dev invoices a foreign customer, while Asha supplies an Indian Special Economic Zone business. Both may qualify for zero-rated treatment, but neither a foreign address nor an SEZ address completes the required checks.",
      "selfCheck": {
        "question": "Can a Gujarat-to-Gujarat SEZ supply be treated as inter-State?",
        "answer": "Yes. The special SEZ rules can make it inter-State despite both locations being in the same State."
      }
    },
    {
      "id": "9.2",
      "title": "Import of Goods & Import of Services",
      "roadmap": "Understand how importing a product differs from buying a service from abroad.",
      "keyTerms": [
        {
          "term": "Bill of entry",
          "def": "The customs document for imported goods, relevant to the import value, duties and eligible import-GST credit."
        },
        {
          "term": "Import of services",
          "def": "A service meeting the location conditions: supplier outside India, recipient in India and place of supply in India."
        },
        {
          "term": "Basic customs duty (BCD)",
          "def": "A customs charge on covered imports. It is generally not ordinary GST purchase credit."
        },
        {
          "term": "Import IGST",
          "def": "Integrated GST charged on covered imported goods through the customs framework."
        }
      ],
      "explanation": "### 1. For goods, establish the customs calculation\nImport IGST uses the prescribed customs value base. That can include basic customs duty and other required additions, not just the foreign invoice price. Customs valuation and GST-credit eligibility are separate checks.\n\n### 2. Separate import tax from customs cost\nA valid bill of entry and the normal conditions can support eligible import-IGST credit. Basic customs duty is generally not GST ITC. Keep these amounts in separate categories.\n\n### 3. For services, apply the three location tests\nCheck where the supplier and recipient are and where the law places the supply. A qualifying business-service import can attract buyer reverse charge under the relevant notification. Pay the required GST in cash, then test credit eligibility.\n\n### 4. Do not generalise every overseas purchase\nPersonal imports and specified online-service categories have their own rules. Review the transaction, exchange-rate requirements, documents and receipt evidence. No Indian GST on the overseas vendor’s bill does not automatically mean no Indian GST obligation.",
      "legalBasis": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "A simplified goods-import bill",
          "body": "Assume customs assessable value ₹1,00,000, includible basic duty ₹10,000, no other additions and IGST rate 18%.\n\n1. IGST base = ₹1,10,000.\n2. IGST = ₹1,10,000 × 18% = **₹19,800**.\n3. Check credit eligibility for IGST separately; **₹10,000 BCD is not ordinary GST ITC**."
        },
        {
          "title": "A covered overseas business service",
          "body": "Assume a ₹50,000 business-service import attracts reverse charge at 18%.\n\n1. Indian reverse-charge GST = **₹9,000**.\n2. Pay it in cash through the prescribed process.\n3. Then check if ₹9,000 qualifies for purchase credit.\n\nThe foreign bill can show no Indian tax and this liability can still arise."
        }
      ],
      "nuances": [
        "The foreign invoice amount is not always the full import-IGST base.",
        "Basic customs duty and eligible import-IGST credit are different.",
        "Service imports need location and category checks."
      ],
      "recap": [
        "Goods imports use customs value and documents.",
        "Service imports can require buyer reverse charge.",
        "Tax payment and credit eligibility remain separate."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which charge is not ordinary GST purchase credit?",
          "options": [
            "Eligible domestic CGST",
            "Eligible domestic SGST",
            "Eligible import IGST",
            "Basic customs duty"
          ],
          "correctIndex": 3,
          "explanation": "BCD is a customs cost outside ordinary GST purchase credit (ITC).",
          "id": "9.2-q1",
          "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
        },
        {
          "type": "tf",
          "question": "If a foreign supplier's service bill has no Indian GST, the Indian buyer can never owe reverse-charge GST.",
          "correctBool": false,
          "explanation": "customer/receiving business RCM can apply to qualifying imports.",
          "id": "9.2-q2",
          "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
        },
        {
          "type": "numeric",
          "question": "Assume the correct import-IGST base is ₹1,10,000 at 18%. What is import IGST, in rupees?",
          "correctNumber": 19800,
          "tolerance": 0.01,
          "explanation": "₹1,10,000 × 18% = ₹19,800.",
          "id": "9.2-q3",
          "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
        },
        {
          "type": "mcq",
          "question": "Which document ordinarily supports the tax details for goods imports?",
          "options": [
            "Bill of entry",
            "Only a salary slip",
            "Only a composition bill",
            "Only an annual-return screenshot"
          ],
          "correctIndex": 0,
          "explanation": "The required customs document supports import IGST evidence.",
          "id": "9.2-q4",
          "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
        }
      ],
      "learningGoal": "Understand how importing a product differs from buying a service from abroad.",
      "story": "Asha imports equipment and Dev buys an overseas business service. One goes through customs documents; the other can require the Indian buyer to pay reverse-charge GST. A foreign supplier’s tax-free invoice does not settle Indian tax.",
      "selfCheck": {
        "question": "Why is the goods-import example taxed on ₹1,10,000 rather than ₹1,00,000?",
        "answer": "Its stated customs base includes ₹10,000 basic duty in addition to the assessable value."
      }
    },
    {
      "id": "9.3",
      "title": "LUT, Export Records & Refund Routes",
      "roadmap": "Choose a permitted export route and keep records that support it.",
      "keyTerms": [
        {
          "term": "LUT/bond route",
          "def": "The prescribed route for qualifying zero-rated supplies without paying IGST upfront, subject to conditions."
        },
        {
          "term": "Zero-rated refund route",
          "def": "A permitted legal process for obtaining the relevant export/SEZ refund, with its own eligibility and evidence."
        },
        {
          "term": "Shipping bill",
          "def": "The customs export document used as key evidence for goods exports and specified refund processes."
        },
        {
          "term": "Realisation evidence",
          "def": "Proof that export proceeds were received where the applicable rules require it."
        }
      ],
      "explanation": "### 1. Understand the two broad approaches\nA qualifying LUT/bond route avoids upfront IGST and can support a permitted refund of eligible unused purchase credit. The IGST-paid refund route is limited to the notified classes of persons or supplies under the amended framework. It is not an unrestricted choice for every exporter.\n\n### 2. Prepare documents before sending the supply\nComplete the applicable LUT and invoice wording. For goods, align invoice, shipping bill and export evidence. For services, keep the contract, location analysis and relevant payment evidence.\n\n### 3. Track the relevant timelines\nGoods export and service-payment conditions have different timing rules. Check the prescribed extensions, consequences and restrictions for the particular route. Certain export-duty goods and other excluded cases can affect refund availability.\n\n### 4. Reconcile before applying\nCompare returns with customs/service documents and bank records. A zero-rated sale does not guarantee refund of the full credit balance. Each refund needs the right category, eligible components and calculation.",
      "legalBasis": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Goods sent under LUT",
          "body": "Assume a ₹2,00,000 goods export qualifies for the LUT route.\n\n1. Keep the valid LUT and required invoice endorsement.\n2. Save the shipping bill and proof of export.\n3. No output IGST is charged on the stated route.\n4. Calculate any eligible unused-credit refund separately."
        },
        {
          "title": "An exporter wants the tax-paid route",
          "body": "An exporter proposes ₹36,000 IGST on a ₹2,00,000 supply at assumed 18% and wants a refund.\n\n1. Check whether the exporter/supply is covered by the notified route.\n2. Confirm the remaining conditions and evidence.\n3. A large purchase-credit balance does not, by itself, permit that route."
        }
      ],
      "nuances": [
        "Paying IGST and claiming it back is not automatically available to every exporter.",
        "Goods and services have different evidence/timing requirements.",
        "Unused credit is not automatically fully refundable."
      ],
      "recap": [
        "Choose an eligible route first.",
        "Keep invoice, export and payment evidence aligned.",
        "Calculate the permitted refund separately."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Is paying export IGST and claiming it back freely available to every exporter?",
          "options": [
            "Unconditionally open to every export",
            "Only for the classes of exporters or supplies permitted by the rules",
            "Only a domestic exempt refund",
            "Always a cash-ledger transfer"
          ],
          "correctIndex": 1,
          "explanation": "Amended section 16 contains route restrictions.",
          "id": "9.3-q1",
          "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
        },
        {
          "type": "tf",
          "question": "Having a valid LUT alone proves every supply is a qualifying export.",
          "correctBool": false,
          "explanation": "The underlying export facts and evidence must also be established.",
          "id": "9.3-q2",
          "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
        },
        {
          "type": "numeric",
          "question": "Assume a ₹2,00,000 export qualifies under a valid LUT route without IGST payment. What is output IGST, in rupees?",
          "correctNumber": 0,
          "tolerance": 0.01,
          "explanation": "The route supplies without payment of IGST.",
          "id": "9.3-q3",
          "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
        },
        {
          "type": "mcq",
          "question": "Which records should an export evidence file bring into agreement?",
          "options": [
            "Only the bank balance",
            "Only the supplier PAN",
            "Invoice, returns and customs/service evidence",
            "Only the logo"
          ],
          "correctIndex": 2,
          "explanation": "Inconsistent records can affect refund processing and entitlement.",
          "id": "9.3-q4",
          "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
        }
      ],
      "learningGoal": "Choose a permitted export route and keep records that support it.",
      "story": "Asha wants to export goods without paying IGST upfront. Another exporter wants to pay IGST and ask for it back. The available route depends on the rules, not simply on which option seems easiest.",
      "selfCheck": {
        "question": "What should be checked before choosing the IGST-paid refund route?",
        "answer": "Whether the relevant exporter or supply is within the notified classes, plus the route’s remaining conditions."
      }
    },
    {
      "id": "9.4",
      "title": "Refund Computation & Procedure",
      "roadmap": "Identify the refund category before calculating how much can be claimed.",
      "keyTerms": [
        {
          "term": "Net ITC",
          "def": "The eligible purchase-credit figure defined for the particular refund formula, not automatically every credit in the ledger."
        },
        {
          "term": "Adjusted total turnover",
          "def": "The sales/supply total as specifically defined for the refund formula’s denominator."
        },
        {
          "term": "Inverted duty structure",
          "def": "A covered situation where input-goods tax rates are higher than output rates, potentially causing accumulated credit; restrictions apply."
        },
        {
          "term": "Relevant date",
          "def": "The legally specified starting date for a refund time limit, which depends on the category."
        }
      ],
      "explanation": "### 1. Name the refund reason\nIs it excess cash deposited, wrong/excess tax, eligible export credit or eligible inverted-rate accumulation? Different categories use different documents, amounts and rules. A credit balance alone is not a general refund entitlement.\n\n### 2. Understand the simplified export formula\nFor the covered LUT formula, take qualifying zero-rated turnover as a share of adjusted total turnover, then multiply by the defined Net ITC. These are legal definitions, not arbitrary spreadsheet totals. Capital-goods credit is not simply inserted into this Net ITC figure.\n\n### 3. Do not reuse that formula everywhere\nInverted-rate refunds have a different formula and input-goods focus. Do not copy the export calculation or include all service credit without checking. The 2026 refund amendments also need transaction-period commencement checks.\n\n### 4. Check timing and track the application\nThe general two-year period uses a category-specific relevant date and has exceptions. Keep the application and evidence, resolve deficiency requests, answer proposed rejection and reconcile any approved refund with the accounts.",
      "legalBasis": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "A simplified LUT refund formula",
          "body": "Assume qualifying zero-rated turnover ₹4,00,000, adjusted total turnover ₹10,00,000 and correctly defined Net ITC ₹50,000, with no other limit.\n\n1. Qualifying share = 4 ÷ 10 = 40%.\n2. Formula amount = ₹50,000 × 40% = **₹20,000**.\n3. Apply the complete legal definitions and other limits for an actual claim."
        },
        {
          "title": "Cash balance versus credit balance",
          "body": "Asha has ₹15,000 excess cash deposit and ₹15,000 unused credit.\n\n1. Review the cash refund category for the excess deposit.\n2. For credit, establish a permitted unused-credit refund ground.\n3. Do not assume both balances can be withdrawn by the same calculation."
        }
      ],
      "nuances": [
        "Net ITC is a formula-defined amount, not the whole ledger.",
        "The export formula does not automatically apply to inverted-rate refunds.",
        "The refund clock does not always begin on the invoice date."
      ],
      "recap": [
        "Identify the category and timing rule.",
        "Use its defined credit and turnover amounts.",
        "Keep evidence and track the outcome."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which starting date should be used when checking the refund time limit?",
          "options": [
            "Only application file name",
            "Only PAN date",
            "Always invoice date",
            "The category’s legal starting date, including applicable exceptions"
          ],
          "correctIndex": 3,
          "explanation": "Relevant date differs by refund category.",
          "id": "9.4-q1",
          "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
        },
        {
          "type": "tf",
          "question": "Every GST refund category uses exactly the same formula.",
          "correctBool": false,
          "explanation": "Cash, export and inverted-rate categories have different rules.",
          "id": "9.4-q2",
          "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
        },
        {
          "type": "numeric",
          "question": "For a simplified eligible LUT refund, zero-rated turnover is ₹4 lakh, adjusted total turnover ₹10 lakh and correctly defined Net ITC ₹50,000. With no other limit, what is the formula amount, in rupees?",
          "correctNumber": 20000,
          "tolerance": 0.01,
          "explanation": "4/10 × ₹50,000 = ₹20,000.",
          "id": "9.4-q3",
          "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
        },
        {
          "type": "mcq",
          "question": "Can all capital-goods credit automatically be included in the LUT refund formula's Net ITC?",
          "options": [
            "No; include only what that formula’s credit definition allows",
            "Only if rounded",
            "Always 50%",
            "Yes all of it"
          ],
          "correctIndex": 0,
          "explanation": "The Net purchase credit (ITC) definition must be used rather than all ledger credit.",
          "id": "9.4-q4",
          "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
        }
      ],
      "learningGoal": "Identify the refund category before calculating how much can be claimed.",
      "story": "Asha has unused money in her cash account and unused credit in her credit account. She cannot treat both as the same kind of refund. The reason for the balance determines the process and calculation.",
      "selfCheck": {
        "question": "Does ₹15,000 in the credit ledger automatically mean a ₹15,000 cash refund?",
        "answer": "No. A qualifying statutory refund category, eligible components and the applicable calculation are needed."
      }
    }
  ],
  "moduleQuiz": [
    {
      "type": "mcq",
      "question": "An Indian business serves its own foreign branch and receives foreign currency. What must be checked?",
      "options": [
        "Only the payment",
        "The own-establishment restriction and all the other export conditions",
        "Only invoice font",
        "No conditions"
      ],
      "correctIndex": 1,
      "explanation": "The establishment condition can prevent export status.",
      "id": "m9-q1",
      "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
    },
    {
      "type": "tf",
      "question": "SEZ evidence should support the authorised purpose and prescribed receipt or endorsement.",
      "correctBool": true,
      "explanation": "It supports zero-rating and the applicable refund process.",
      "id": "m9-q2",
      "sectionRef": "IGST Act sections 2(6), 7(5), 13 and 16; CGST Rules 89 and 96A."
    },
    {
      "type": "numeric",
      "question": "Assume a covered overseas-service purchase is ₹50,000 before reverse-charge GST at 18%. What cash tax is due, in rupees?",
      "correctNumber": 9000,
      "tolerance": 0.01,
      "explanation": "₹50,000 × 18% = ₹9,000.",
      "id": "m9-q3",
      "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
    },
    {
      "type": "tf",
      "question": "Import IGST must always be calculated only on the foreign seller's invoice price.",
      "correctBool": false,
      "explanation": "The required customs tax base can include duties and additions.",
      "id": "m9-q4",
      "sectionRef": "IGST Act sections 2(11), 5 and 13; Customs Tariff Act section 3(7)/(8); CGST Act sections 16/17 and relevant import-service RCM notification."
    },
    {
      "type": "numeric",
      "question": "Assume the exporter is eligible for the IGST-paid route, with ₹2,00,000 export value before tax at 18%. What is IGST, in rupees?",
      "correctNumber": 36000,
      "tolerance": 0.01,
      "explanation": "₹2,00,000 × 18% = ₹36,000; route eligibility is an express assumption.",
      "id": "m9-q5",
      "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
    },
    {
      "type": "tf",
      "question": "Any export automatically makes the entire purchase-credit balance refundable.",
      "correctBool": false,
      "explanation": "Refund category, eligible credit and legal restrictions determine the amount.",
      "id": "m9-q6",
      "sectionRef": "IGST Act section 16(3)–(5); CGST Act section 54; CGST Rules 89, 96 and 96A."
    },
    {
      "type": "numeric",
      "question": "For a simplified eligible LUT refund, qualifying turnover is ₹6 lakh, adjusted total turnover ₹12 lakh and correctly defined Net ITC ₹80,000. Before other limits, what is the formula amount, in rupees?",
      "correctNumber": 40000,
      "tolerance": 0.01,
      "explanation": "6/12 × ₹80,000 = ₹40,000, before other constraints.",
      "id": "m9-q7",
      "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
    },
    {
      "type": "mcq",
      "question": "Someone copies the LUT export formula for an inverted-rate refund. What should happen next?",
      "options": [
        "Use the cash balance only",
        "Accept automatically",
        "Use the inverted-rate category’s own formula and eligibility definitions",
        "Use gross sales only"
      ],
      "correctIndex": 2,
      "explanation": "Rule 89(5) has its own formula and eligibility limits.",
      "id": "m9-q8",
      "sectionRef": "CGST Act sections 54–56; CGST Rules 89–97A; Rule 89(4) and 89(5) category-specific formulae."
    }
  ]
};
