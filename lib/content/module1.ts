import type { Module } from "./types";

export const module1: Module = {
  "id": "module-1",
  "number": 1,
  "title": "GST Foundations & the Legal Framework",
  "summary": "Begin with a shop bill: understand GST, purchase credit and how to check a rule’s start date.",
  "chapters": [
    {
      "id": "1.1",
      "title": "How GST Works",
      "roadmap": "Understand where the GST on a shop bill goes and how purchase tax can reduce a business’s tax bill.",
      "keyTerms": [
        {
          "term": "GST",
          "def": "Goods and Services Tax: a tax on many things people buy, such as products and professional services. A business usually collects it from customers and pays the government."
        },
        {
          "term": "Output tax",
          "def": "The GST a business charges on its sales. “Output” means what goes out of the business."
        },
        {
          "term": "Input tax credit (ITC)",
          "def": "Purchase GST that the rules allow a business to use against its sales GST. It is a tax adjustment, not automatically a cash refund."
        },
        {
          "term": "CGST and SGST",
          "def": "The central-government and State-government parts of GST on an ordinary sale within one State. Some Union territories use UTGST instead of SGST."
        },
        {
          "term": "IGST",
          "def": "Integrated GST: the usual tax on a sale between States, after applying the location rules."
        }
      ],
      "explanation": "### 1. Separate the price from the tax\nIf Asha sells a notebook for ₹100 plus ₹18 GST, the customer pays ₹118. The ₹100 is the selling price; the ₹18 is tax she must account for. GST is not a tax on her profit. Profit depends on her costs as well as her sales.\n\n### 2. Give credit for qualifying purchase tax\nSuppose she already paid GST when buying the notebooks. The permitted part can reduce the GST she owes on sales. This is **input tax credit**, shortened to ITC. Think of it as purchase-tax credit in a separate tax account, not free money. A proper bill and the other eligibility conditions are needed.\n\n### 3. Choose the right tax names\nFor an ordinary sale within one State, the bill usually splits GST into CGST and SGST. Between States it usually shows IGST. Later chapters explain how the law decides the sale’s location. Do not use the customer’s address as the only test.\n\n### 4. Use the rule that is actually in force\nThe GST Council discusses changes, but an announcement alone does not change your bill. The government must put the change into the relevant legal document and specify when it starts.",
      "legalBasis": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Asha’s purchase and sale",
          "body": "Use an assumed 18% rate for this exercise.\n\n1. Asha buys stock for ₹1,00,000. Purchase GST is ₹18,000.\n2. She sells that stock for ₹1,50,000. Sales GST is ₹27,000.\n3. Assume all ₹18,000 of purchase GST qualifies as credit.\n4. Tax still to pay = ₹27,000 − ₹18,000 = **₹9,000**.\n\nWhy? The credit accounts for tax already paid earlier in the chain. ₹9,000 is the remaining GST payment, not Asha’s profit."
        },
        {
          "title": "When some purchase tax cannot be used",
          "body": "Keep the same sales GST of ₹27,000. This time, ₹3,000 of the purchase tax fails the credit rules.\n\n1. Usable credit = ₹18,000 − ₹3,000 = ₹15,000.\n2. Remaining tax = ₹27,000 − ₹15,000 = **₹12,000**.\n\nPaying GST on a purchase is the first fact to check. It does not, by itself, prove that the credit is allowed."
        }
      ],
      "nuances": [
        "Sales, profit and GST are three different numbers.",
        "Not every purchase GST amount qualifies as credit.",
        "The 18% rate here is an exercise assumption; actual products can have different rates."
      ],
      "recap": [
        "Sales GST is called output tax.",
        "Permitted purchase GST is called input tax credit.",
        "The business pays the remaining tax using the applicable tax-account rules."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Why can a business use eligible purchase-tax credit (ITC)?",
          "options": [
            "Avoid taxing the same value repeatedly by using eligible purchase credit",
            "Replace registration",
            "Exempt every purchase",
            "Tax all profit"
          ],
          "correctIndex": 0,
          "explanation": "Allowed purchase-tax credit accounts for tax already paid earlier in the chain.",
          "id": "1.1-q1",
          "sectionRef": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5."
        },
        {
          "type": "tf",
          "question": "A GST Council recommendation changes the tax rate immediately, without any implementing legal document.",
          "correctBool": false,
          "explanation": "Check the official document putting the change into effect and the date it starts.",
          "id": "1.1-q2",
          "sectionRef": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5."
        },
        {
          "type": "numeric",
          "question": "Sales GST is ₹27,000. Allowed purchase credit is ₹18,000. Assume the credit is usable against this tax. How much GST remains to pay, in rupees?",
          "correctNumber": 9000,
          "tolerance": 0.01,
          "explanation": "₹27,000 − ₹18,000 = ₹9,000.",
          "id": "1.1-q3",
          "sectionRef": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5."
        },
        {
          "type": "mcq",
          "question": "Which taxes normally apply to an ordinary sale within one State?",
          "options": [
            "No GST",
            "CGST plus SGST/UTGST",
            "IGST plus CGST",
            "Only income tax"
          ],
          "correctIndex": 1,
          "explanation": "An ordinary within-State supply combines central GST with State GST (or the applicable Union-territory GST).",
          "id": "1.1-q4",
          "sectionRef": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5."
        }
      ],
      "learningGoal": "Understand where the GST on a shop bill goes and how purchase tax can reduce a business’s tax bill.",
      "story": "Asha runs a stationery shop. She buys notebooks from a wholesaler and sells them to customers. Both bills show GST. Does the government collect the same tax twice? Follow one purchase and one sale to see how the system avoids that.",
      "selfCheck": {
        "question": "Why does Asha not pay the entire ₹27,000 sales GST in cash?",
        "answer": "Because ₹18,000 of qualifying purchase-tax credit can be used against it. The remaining ₹9,000 is paid separately."
      }
    },
    {
      "id": "1.2",
      "title": "Goods, Services & Business",
      "roadmap": "Tell apart a product, a service, a fee and a refundable deposit.",
      "keyTerms": [
        {
          "term": "Goods",
          "def": "Usually movable things you can buy, such as a laptop or a notebook. GST’s legal definition has special inclusions and excludes money and financial securities."
        },
        {
          "term": "Services",
          "def": "Work or other benefits supplied to someone, such as a repair or design service. GST’s definition is wider than these everyday examples."
        },
        {
          "term": "Consideration",
          "def": "What someone gives in return for a product or service: usually money, but sometimes another product, service or agreed action."
        },
        {
          "term": "Security deposit",
          "def": "Money held as protection and normally returned. It is not normally payment for a supply until it is used as that payment."
        }
      ],
      "explanation": "### 1. Ask what the customer receives\nA spare part is a good. The repair work is a service. Buying and selling shares is different from paying a broker to arrange the trade: the brokerage fee is a service even though the shares themselves are outside the goods/services definitions.\n\n### 2. Ask what is given in return\nThe law calls this **consideration**. A customer can pay money, or two businesses can exchange work. A designer who creates a logo in exchange for advertising has received something in return even though no cash arrives.\n\n### 3. Keep deposits separate from fees\nA refundable deposit is money held temporarily. If it remains a deposit, do not automatically treat it as the price of a service. If the agreement later uses it to pay a service charge, examine that change.\n\n### 4. A business can make a loss\nGST’s idea of business includes more than profitable sales. A loss-making activity or a side activity can still fall within the rules. Start with what actually happened; a bank receipt or an account labelled “other income” is not the answer.",
      "legalBasis": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Deposit and repair fee",
          "body": "Assume a taxable repair fee of ₹10,000 at 18%, plus a ₹20,000 refundable deposit that has not been used as payment.\n\n1. Calculate tax on the fee: ₹10,000 × 18% = **₹1,800**.\n2. Keep the ₹20,000 deposit separate.\n3. If the deposit is later used to pay for a supply, review the tax treatment then.\n\nThe deposit does not become a service fee just because it appears in the bank account."
        },
        {
          "title": "Exchanging work instead of money",
          "body": "A designer and an advertising business exchange services. Assume each service is valued at ₹50,000 and taxable at 18%.\n\n1. Each business has made a separate supply of work.\n2. GST on each assumed value is ₹50,000 × 18% = **₹9,000**.\n3. Any purchase-tax credit needs its own eligibility check.\n\nThe absence of cash does not automatically remove GST."
        }
      ],
      "nuances": [
        "A refundable deposit and an advance payment are different; read what the agreement says.",
        "A business activity need not make a profit to come within GST.",
        "Fees involving money or shares may be taxable even when the money or shares themselves are not."
      ],
      "recap": [
        "Identify what is sold before looking at the receipt.",
        "Something given in return is called consideration.",
        "A deposit needs a separate check before it is treated as payment."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A refundable deposit is still held as a deposit, not used to pay for anything. How is it generally treated?",
          "options": [
            "An export",
            "Automatically output tax",
            "Generally not payment for a supply until used as that payment",
            "Always salary"
          ],
          "correctIndex": 2,
          "explanation": "A refundable deposit remains separate until it is used as payment for a supply.",
          "id": "1.2-q1",
          "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
        },
        {
          "type": "tf",
          "question": "Exchanging products or services instead of cash can still be a GST supply.",
          "correctBool": true,
          "explanation": "Something given in return can be work or goods instead of cash.",
          "id": "1.2-q2",
          "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
        },
        {
          "type": "numeric",
          "question": "Assume a taxable service costs ₹10,000 before GST at 18%. How much GST is charged, in rupees?",
          "correctNumber": 1800,
          "tolerance": 0.01,
          "explanation": "₹10,000 × 18% = ₹1,800.",
          "id": "1.2-q3",
          "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
        },
        {
          "type": "mcq",
          "question": "Which charge needs its own service-taxability check, even though trading the shares themselves is outside the goods/services definitions?",
          "options": [
            "The shares themselves",
            "An untouched deposit",
            "The money amount itself, without a service fee",
            "The broker’s fee for arranging a share trade"
          ],
          "correctIndex": 3,
          "explanation": "Brokerage is a service even though securities themselves are excluded.",
          "id": "1.2-q4",
          "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
        }
      ],
      "learningGoal": "Tell apart a product, a service, a fee and a refundable deposit.",
      "story": "Dev repairs laptops. A customer pays for a spare part, repair work and a refundable deposit for a borrowed laptop. Money changes hands in all three cases, but GST does not treat every receipt in the same way.",
      "selfCheck": {
        "question": "Can two businesses make a supply without receiving cash?",
        "answer": "Yes. Exchanging products or services can provide consideration. Then check whether the particular supply is taxable."
      }
    },
    {
      "id": "1.3",
      "title": "Taxable, Exempt & Zero-rated",
      "roadmap": "Understand why two bills with no GST can have different purchase-credit consequences.",
      "keyTerms": [
        {
          "term": "Taxable supply",
          "def": "A supply on which GST applies, unless a relevant exemption changes the result."
        },
        {
          "term": "Exempt supply",
          "def": "A supply covered by GST’s exemption definition. It includes nil-rated supplies, wholly exempt supplies and non-taxable supplies. Related purchase credit is generally restricted."
        },
        {
          "term": "Zero-rated supply",
          "def": "A qualifying export or supply for authorised Special Economic Zone operations. Eligible purchase credit can remain available."
        },
        {
          "term": "Non-taxable supply",
          "def": "A supply on which the CGST or IGST charging rules do not impose GST. It is included in the broad exempt-supply definition."
        },
        {
          "term": "SEZ",
          "def": "Special Economic Zone: a designated area with special legal treatment. GST benefits depend on the authorised purpose of the supply, not just the address."
        }
      ],
      "explanation": "### 1. First ask whether the activity is a supply\nSome activities are outside GST’s definition of supply. Others are supplies but have a special tax treatment. “No GST on the bill” does not tell you which case you have.\n\n### 2. Understand domestic exemption\nFor a domestic exempt sale, the seller generally cannot keep purchase-tax credit linked only to that sale. A nil rate means the applicable GST rate is zero; it falls within the exemption definition. An exemption can also depend on who sells, who buys or how the item is used.\n\n### 3. Understand zero-rating\nZero-rating helps qualifying exports avoid carrying Indian GST into the overseas market. Unlike an ordinary domestic exemption, it can preserve eligible purchase credit. A refund may be possible through the prescribed process; it is not promised just because a bill shows zero tax.\n\n### 4. Check the conditions, not the label\nAn export has conditions. An SEZ supply must be for authorised operations: activities permitted for that SEZ business. Alcohol for human consumption is outside the GST levy; do not assume all fuels or all untaxed products have identical rules.",
      "legalBasis": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "The same purchase tax, two different uses",
          "body": "Assume ₹12,000 purchase GST relates only to a domestic exempt sale, with no special exception.\n\n1. The related credit is generally unavailable: **₹0 eligible credit**.\n2. If instead the purchase supports a qualifying zero-rated sale, check normal credit conditions.\n3. Credit may then be available; a refund still needs a separate category and calculation.\n\nThe reason for the untaxed sale determines the purchase-credit result."
        },
        {
          "title": "Selling to an SEZ customer",
          "body": "Asha receives an order worth ₹1,00,000 from an SEZ business.\n\n1. Confirm the customer’s SEZ status.\n2. Confirm that the order is for its authorised operations.\n3. Obtain the prescribed supporting evidence.\n4. Only then apply the appropriate zero-rated route.\n\nAn SEZ address on the invoice alone does not complete these checks."
        }
      ],
      "nuances": [
        "Zero-rated does not make personal or otherwise blocked purchases eligible for credit.",
        "An export and a domestic exempt sale need different checks.",
        "An exemption can depend on conditions and dates, not just a product name."
      ],
      "recap": [
        "No GST on a bill can have several explanations.",
        "Domestic exemption generally restricts related purchase credit.",
        "Qualifying zero-rated supplies can preserve eligible credit."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which supply can qualify for the special zero-rated export treatment?",
          "options": [
            "Export meeting the legal conditions",
            "Every exempt supply",
            "Every sale without an invoice",
            "Every small domestic sale"
          ],
          "correctIndex": 0,
          "explanation": "Exports and authorised SEZ supplies fall within the legal zero-rating framework.",
          "id": "1.3-q1",
          "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
        },
        {
          "type": "tf",
          "question": "Domestic exemption and zero-rated export treatment always have the same purchase-credit result.",
          "correctBool": false,
          "explanation": "Zero-rated supplies may preserve qualifying purchase credit (ITC); domestic exemptions generally restrict it.",
          "id": "1.3-q2",
          "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
        },
        {
          "type": "numeric",
          "question": "₹12,000 purchase GST relates only to domestic exempt supplies. Assume no exception applies. How much credit is allowed, in rupees?",
          "correctNumber": 0,
          "tolerance": 0.01,
          "explanation": "Credit linked exclusively to exempt supplies is restricted.",
          "id": "1.3-q3",
          "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
        },
        {
          "type": "mcq",
          "question": "An SEZ supply must be for which purpose to qualify for the special zero-rated treatment?",
          "options": [
            "Any employee purchase",
            "The SEZ’s officially permitted activities",
            "Any cash purchase",
            "Only tourism"
          ],
          "correctIndex": 1,
          "explanation": "Section 16 specifies authorised operations.",
          "id": "1.3-q4",
          "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
        }
      ],
      "learningGoal": "Understand why two bills with no GST can have different purchase-credit consequences.",
      "story": "Asha sees one seller issue a domestic bill without GST and another send goods overseas without charging GST under an export route. The bills look similar. The reasons behind them are different, and so are the rules for purchase-tax credit.",
      "selfCheck": {
        "question": "Does “no GST charged” always mean “no purchase credit allowed”?",
        "answer": "No. Qualifying zero-rated supplies can preserve eligible purchase credit, unlike the usual domestic-exemption result."
      }
    },
    {
      "id": "1.4",
      "title": "Finding the Law & Tracking Amendments",
      "roadmap": "Check when a GST change starts and keep a simple note of the source.",
      "keyTerms": [
        {
          "term": "Act",
          "def": "A law passed by the legislature. A section is a numbered part of that law."
        },
        {
          "term": "Notification",
          "def": "An official government document made under a legal power, often putting a rate, condition or start date into effect."
        },
        {
          "term": "Circular",
          "def": "An official explanation of how the tax administration understands a rule. It cannot replace the law."
        },
        {
          "term": "Effective date",
          "def": "The date a change starts applying; it may be later than the publication date."
        }
      ],
      "explanation": "### 1. Write down the real question\nStart with who sold what, to whom, in which locations and on what date. The month or year being reviewed matters. A current rule should not be pasted onto an older transaction without checking its start date.\n\n### 2. Follow the source trail\nFind the relevant part of the Act, then the related rules and notifications. An Act sets the legal framework; rules supply more detail. A notification may supply the applicable rate or date. A circular can help explain the administration’s approach.\n\n### 3. Separate a proposal from a working rule\nA GST Council recommendation, a passed amendment, its start date and a website update are different events. For example, the revised Input Service Distributor system, which allocates certain shared service credits between registrations, starts from 1 April 2025. An old article describing it as optional is not enough for a later period.\n\n### 4. Keep a note someone else can follow\nRecord the question, facts, official source, effective date and conclusion. If a point remains uncertain, say so. A ruling for a particular taxpayer has limited legal reach; do not assume it settles the issue for everyone.",
      "legalBasis": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001).\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Published in June, starting in July",
          "body": "A rule is published on 15 June and says it starts on 1 July.\n\n1. For a 25 June transaction, check the old rule and any transition provisions.\n2. For a 5 July transaction, check the new rule and its conditions.\n\nThe publication date tells you when the document appeared. The effective date tells you when the change applies."
        },
        {
          "title": "A useful purchase-credit note",
          "body": "Dev wants to claim ₹50,000 purchase-tax credit.\n\n1. Save the bill and proof of what was received.\n2. Record which credit rule applies and link the official source.\n3. State why the conditions are met and which period the claim belongs to.\n\nA dated explanation is easier to check than an undated screenshot of a search result."
        }
      ],
      "nuances": [
        "A portal feature can change without changing the Act.",
        "An official clarification does not override the law.",
        "Also check the relevant State’s rules where needed."
      ],
      "recap": [
        "Start with the facts and transaction date.",
        "Find the implemented rule and its effective date.",
        "Save the reason and source behind your conclusion."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A rule is published now but says it starts later. Which date normally tells you when the change applies?",
          "options": [
            "The customer email",
            "The last invoice date in the year",
            "The effective date",
            "The first news story"
          ],
          "correctIndex": 2,
          "explanation": "The effective date establishes when the change starts applying.",
          "id": "1.4-q1",
          "sectionRef": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        },
        {
          "type": "tf",
          "question": "An official circular can replace a conflicting requirement in the Act itself.",
          "correctBool": false,
          "explanation": "An official explanation cannot replace a conflicting requirement in the law.",
          "id": "1.4-q2",
          "sectionRef": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        },
        {
          "type": "mcq",
          "question": "Which record best helps someone else check your tax conclusion?",
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
          "question": "Who is normally bound by a taxpayer-specific advance ruling, within the Act?",
          "options": [
            "The applicant and the relevant GST officer, within the Act’s limits",
            "Every court",
            "Only the auditor",
            "All taxpayers nationwide"
          ],
          "correctIndex": 0,
          "explanation": "Section 103 defines its limited binding scope.",
          "id": "1.4-q4",
          "sectionRef": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
        }
      ],
      "learningGoal": "Check when a GST change starts and keep a simple note of the source.",
      "story": "Dev reads a headline saying a GST rule has changed. His colleague finds an older article saying something different. Before changing a customer’s bill, they need the rule that applies on the date of that transaction.",
      "selfCheck": {
        "question": "Why might a new article still be wrong for an older sale?",
        "answer": "The change may have started after the sale. You need the legal version for that sale’s date or period."
      }
    }
  ],
  "moduleQuiz": [
    {
      "type": "numeric",
      "question": "Sales GST is ₹45,000. Purchase GST is ₹32,000, including ₹5,000 blocked tax. Assume the remaining credit is usable against the sales tax. How much tax remains to pay, in rupees?",
      "correctNumber": 18000,
      "tolerance": 0.01,
      "explanation": "Eligible purchase credit (ITC) is ₹27,000; ₹45,000 − ₹27,000 = ₹18,000.",
      "id": "m1-q1",
      "sectionRef": "Constitution: Articles 246A, 269A and 279A; CGST Act section 9; IGST Act section 5."
    },
    {
      "type": "mcq",
      "question": "The GST Council announces a proposed change. What should you establish before using it on a bill?",
      "options": [
        "Only the headline",
        "The official implementing document, its conditions and start date",
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
      "question": "A not-for-profit organisation sells taxable products commercially. Where should the GST review begin?",
      "options": [
        "Treat all as securities",
        "No profit means no business",
        "Check the actual activity against the GST definitions",
        "All receipts are donations"
      ],
      "correctIndex": 2,
      "explanation": "Business need not have a profit motive.",
      "id": "m1-q3",
      "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
    },
    {
      "type": "numeric",
      "question": "A ₹30,000 refundable deposit remains unused as payment. Taxable fees are ₹40,000 before GST at assumed 18%. What is GST on the fees, in rupees?",
      "correctNumber": 7200,
      "tolerance": 0.01,
      "explanation": "The fee gives ₹40,000 × 18% = ₹7,200.",
      "id": "m1-q4",
      "sectionRef": "CGST Act sections 2(17), 2(31), 2(52) and 2(102); section 7."
    },
    {
      "type": "mcq",
      "question": "A business has domestic exempt supplies and overseas customer supplies. What should it do before claiming purchase credit?",
      "options": [
        "Claim every purchase credit",
        "Use income-tax residency only",
        "Treat both as nil without ITC review",
        "Identify each supply’s treatment, then work out its eligible purchase credit"
      ],
      "correctIndex": 3,
      "explanation": "Outward supply classification affects purchase credit (ITC) and refund treatment.",
      "id": "m1-q5",
      "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
    },
    {
      "type": "tf",
      "question": "Even an export business can have purchase tax that is blocked from credit.",
      "correctBool": true,
      "explanation": "Zero-rating does not override every section 17(5) restriction.",
      "id": "m1-q6",
      "sectionRef": "CGST Act sections 2(47), 2(78), 9, 11 and 17; IGST Act section 16."
    },
    {
      "type": "mcq",
      "question": "An old article says shared-service credit distribution (ISD) is optional. You review covered invoices from May 2025. What is the best next step?",
      "options": [
        "Check the updated ISD rules and when they started",
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
      "question": "A useful change log separates proposed changes from rules officially put into effect.",
      "correctBool": true,
      "explanation": "Recommendations and enacted, commenced rules are different statuses.",
      "id": "m1-q8",
      "sectionRef": "CGST Act sections 164, 168 and 103; updated section 20 from 1 April 2025. [Current ISD section](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001)."
    }
  ]
};
