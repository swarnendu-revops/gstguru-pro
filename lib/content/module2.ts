import type { Module } from "./types";

export const module2: Module = {
  "id": "module-2",
  "number": 2,
  "title": "Supply, Bundles & Reverse Charge",
  "summary": "Understand what counts as a supply, how packages are taxed, and who pays GST.",
  "chapters": [
    {
      "id": "2.1",
      "title": "The Scope of Supply",
      "roadmap": "Decide whether an activity is a GST supply before calculating tax.",
      "keyTerms": [
        {
          "term": "Supply",
          "def": "A transaction GST recognises, usually selling goods or doing work in return for something, connected with business. Special inclusions and exclusions also apply."
        },
        {
          "term": "Schedule I",
          "def": "A list attached to the Act naming certain activities that can count as supplies even without payment."
        },
        {
          "term": "Schedule III",
          "def": "A list attached to the Act naming activities treated as neither a goods supply nor a service supply."
        },
        {
          "term": "Schedule II",
          "def": "A list used to classify certain supplies as goods or services after they qualify as supplies."
        }
      ],
      "explanation": "### 1. Start with the ordinary sale\nAsk: is someone providing goods or services? Is something given in return? Is it connected with business? These questions are a useful starting point. Imports of services for payment have an additional rule and can count even without a business connection.\n\n### 2. Check the special lists\nSome business transfers count without payment under Schedule I. Some activities are excluded by Schedule III. Employee work for an employer in the course of employment is one exclusion. Separate independent freelance work is a different arrangement.\n\n### 3. Classify only after finding a supply\nSchedule II helps decide whether a qualifying transaction is goods or services. It does not mean that every listed activity is automatically taxable without the first supply test.\n\n### 4. Read the agreement behind the receipt\nA deposit, grant or compensation payment needs its own facts. A payment called “damages” does not automatically mean a taxable fee for agreeing to something. Likewise, having no invoice or no money does not rule out a supply between separately registered branches.",
      "legalBasis": "CGST Act section 7 and Schedules I, II and III.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Salary versus separate freelance work",
          "body": "Dev earns ₹50,000 salary for his employee duties.\n\n1. That employment service falls outside supply.\n2. A different business pays him ₹50,000 for independent consulting work.\n3. If the consulting supply is taxable at an assumed 18% and the applicable registration/charging rules are met, GST is **₹9,000**.\n\nThe work arrangement, not the bank amount, explains the difference."
        },
        {
          "title": "Moving goods between State registrations",
          "body": "A business sends stock to its separately registered branch in another State and charges no price.\n\n1. Check whether the two registrations are treated as separate persons for GST.\n2. If the Schedule I conditions apply, the transfer can be a supply without payment.\n3. Then work out the value and tax type under the relevant rules.\n\n“No payment” is not the end of the analysis."
        }
      ],
      "nuances": [
        "Do not tax every bank receipt automatically.",
        "Do not assume a transfer is outside GST because no invoice was issued.",
        "Employee duties and independent consulting are different arrangements."
      ],
      "recap": [
        "Test whether there is a supply first.",
        "Special lists add or exclude particular activities.",
        "Only then choose classification, value and tax."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which list attached to the Act contains activities treated as neither goods supplies nor service supplies?",
          "options": [
            "II",
            "III",
            "IV",
            "I"
          ],
          "correctIndex": 1,
          "explanation": "Schedule III identifies specified exclusions.",
          "id": "2.1-q1",
          "sectionRef": "CGST Act section 7 and Schedules I, II and III."
        },
        {
          "type": "tf",
          "question": "Putting an activity in Schedule II alone makes it taxable, without first checking whether it is a supply.",
          "correctBool": false,
          "explanation": "It classifies an activity that first constitutes supply under section 7.",
          "id": "2.1-q2",
          "sectionRef": "CGST Act section 7 and Schedules I, II and III."
        },
        {
          "type": "numeric",
          "question": "Assume independent consulting work is taxable: ₹50,000 before GST at 18%. What is the GST, in rupees?",
          "correctNumber": 9000,
          "tolerance": 0.01,
          "explanation": "₹50,000 × 18% = ₹9,000.",
          "id": "2.1-q3",
          "sectionRef": "CGST Act section 7 and Schedules I, II and III."
        },
        {
          "type": "mcq",
          "question": "How is employee work for an employer, in the course of employment, generally treated?",
          "options": [
            "A mixed supply",
            "IGST exports",
            "An activity excluded by Schedule III",
            "Always RCM"
          ],
          "correctIndex": 2,
          "explanation": "The employment exclusion is in Schedule III.",
          "id": "2.1-q4",
          "sectionRef": "CGST Act section 7 and Schedules I, II and III."
        }
      ],
      "learningGoal": "Decide whether an activity is a GST supply before calculating tax.",
      "story": "Dev receives a salary from his employer, a fee for separate freelance repair work and a refundable deposit. All three bring money into his account. The first GST question is what each payment is actually for.",
      "selfCheck": {
        "question": "Why is salary treated differently from a freelance fee?",
        "answer": "Employee duties for an employer fall within an exclusion. Independent work must be tested separately as a possible business supply."
      }
    },
    {
      "id": "2.2",
      "title": "Composite & Mixed Supplies",
      "roadmap": "Recognise a natural package and an artificial bundle, and understand why their GST treatment differs.",
      "keyTerms": [
        {
          "term": "Composite supply",
          "def": "Things normally supplied together as one natural package, with one main supply. The main supply determines the treatment."
        },
        {
          "term": "Principal supply",
          "def": "The main thing the customer is buying in a natural package."
        },
        {
          "term": "Mixed supply",
          "def": "Independent items sold together for one price, where the package is not a composite supply. The highest applicable component rate is used."
        }
      ],
      "explanation": "### 1. Ask why the customer buys the package\nFor a machine that must be safely packed and delivered, those services may support the machine sale. The customer mainly wants the machine. This can be a composite supply if the items are naturally bundled under the facts.\n\n### 2. Find the main supply\nFor a composite supply, treatment follows the principal supply. Do not simply choose the lowest or highest rate. First establish what the main supply is and whether the bundle meets the conditions.\n\n### 3. Look for independent items at one price\nUnrelated items in a single-price gift pack can be a mixed supply. A mixed supply takes the highest applicable rate among its components. A pack is not mixed merely because several items appear on a bill.\n\n### 4. Check how the price is presented\nSeparately sold and separately priced items generally need their own treatment. Keep the order and price breakdown. A seller writing “composite” on the bill does not establish that the items are naturally supplied together.",
      "legalBasis": "CGST Act sections 2(30), 2(74), 2(90) and 8.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Machine with packing and delivery",
          "body": "Assume the package meets the composite-supply conditions and the machine’s rate is 18%.\n\n1. Total package price before tax: ₹1,00,000.\n2. The machine is the main supply.\n3. GST = ₹1,00,000 × 18% = **₹18,000**.\n\nThe supporting packing and delivery follow the main supply on these facts."
        },
        {
          "title": "One-price gift hamper",
          "body": "Assume unrelated products with 5% and 18% rates are a mixed supply, sold for ₹2,000 before tax.\n\n1. Find the highest component rate: 18%.\n2. Apply it to the bundle: ₹2,000 × 18% = **₹360**.\n\nIf the items were independently sold and priced, you would analyse each separately."
        }
      ],
      "nuances": [
        "One invoice does not automatically mean mixed supply.",
        "A natural bundle needs facts, not just a label.",
        "A separately contracted transport service can need separate treatment."
      ],
      "recap": [
        "Natural package: find the main supply.",
        "Mixed single-price package: use the highest applicable component rate.",
        "Independent prices generally need individual checks."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A qualifying natural package (composite supply) generally follows the treatment of what?",
          "options": [
            "The purchaser tax slab",
            "No rate",
            "The lowest rate",
            "The main supply in the natural package"
          ],
          "correctIndex": 3,
          "explanation": "Section 8 applies the principal-supply treatment.",
          "id": "2.2-q1",
          "sectionRef": "CGST Act sections 2(30), 2(74), 2(90) and 8."
        },
        {
          "type": "tf",
          "question": "Several items on one invoice always make a mixed supply.",
          "correctBool": false,
          "explanation": "The single-price and non-composite requirements must be satisfied.",
          "id": "2.2-q2",
          "sectionRef": "CGST Act sections 2(30), 2(74), 2(90) and 8."
        },
        {
          "type": "numeric",
          "question": "Assume an unrelated single-price package is a mixed supply. Its price is ₹2,000 before tax, with component rates 5% and 18%. What is the GST, in rupees?",
          "correctNumber": 360,
          "tolerance": 0.01,
          "explanation": "₹2,000 × highest rate 18% = ₹360.",
          "id": "2.2-q3",
          "sectionRef": "CGST Act sections 2(30), 2(74), 2(90) and 8."
        },
        {
          "type": "mcq",
          "question": "Which fact supports treating a package as a composite supply?",
          "options": [
            "Items normally supplied together as a natural package",
            "Any common customer",
            "Different States",
            "No invoice"
          ],
          "correctIndex": 0,
          "explanation": "Natural bundling and a principal supply are central.",
          "id": "2.2-q4",
          "sectionRef": "CGST Act sections 2(30), 2(74), 2(90) and 8."
        }
      ],
      "learningGoal": "Recognise a natural package and an artificial bundle, and understand why their GST treatment differs.",
      "story": "Asha sells a machine with necessary packing and delivery. She also sells a gift hamper containing unrelated products for one price. Both are packages, but the tax rule asks whether the items naturally belong together.",
      "selfCheck": {
        "question": "Why does the machine package not automatically use the highest rate?",
        "answer": "Because a qualifying composite supply follows its main supply. The highest-rate rule belongs to mixed supplies."
      }
    },
    {
      "id": "2.3",
      "title": "Reverse Charge & Section 9(5)",
      "roadmap": "Understand the cases where the buyer or a platform pays GST instead of the seller.",
      "keyTerms": [
        {
          "term": "Forward charge",
          "def": "The ordinary arrangement: the seller is responsible for paying the supply’s GST to the government."
        },
        {
          "term": "Reverse charge (RCM)",
          "def": "Reverse Charge Mechanism: for specified cases, the buyer is responsible for the supply’s GST."
        },
        {
          "term": "Cash ledger",
          "def": "The GST portal account holding money deposited to make tax and other payments."
        },
        {
          "term": "Section 9(5)",
          "def": "A rule making an online platform responsible for GST on specified services, as if it supplied them. It is separate from buyer reverse charge."
        }
      ],
      "explanation": "### 1. Check whether this purchase is covered\nReverse charge applies only when the legal provision and notification cover the facts. A notification is an official document identifying the relevant category and conditions. Buying from a seller without GST registration is not, by itself, a universal reverse-charge trigger.\n\n### 2. Pay the reverse-charge tax using money\nCalculate the tax, find the reporting period and prepare any required documents. The reverse-charge amount must be paid through the cash ledger. Purchase-tax credit cannot pay that initial reverse-charge liability.\n\n### 3. Then test purchase-credit eligibility\nAfter the tax is paid, the buyer may be able to claim qualifying credit. That is a second decision, based on business use and all the credit conditions. Payment does not guarantee that the credit is allowed.\n\n### 4. Keep platform rules separate\nFor specified online services, section 9(5) makes the operator responsible. This differs from reverse charge paid by the buyer and from tax a platform collects from seller settlements. Identify the correct mechanism before calculating.",
      "legalBasis": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Pay first, then check credit",
          "body": "Assume a covered reverse-charge service costs ₹1,00,000 before tax at 18%.\n\n1. Reverse-charge GST = ₹1,00,000 × 18% = **₹18,000**.\n2. Pay ₹18,000 through the cash ledger.\n3. If all credit conditions hold, claim the ₹18,000 as purchase credit through the prescribed process.\n\nExisting credit cannot replace step 2."
        },
        {
          "title": "A seller without registration",
          "body": "Asha buys ordinary goods worth ₹25,000 from an unregistered local seller.\n\n1. Identify the type of purchase and buyer.\n2. Look for a reverse-charge notification covering both.\n3. If no applicable rule covers the facts, do not create reverse-charge tax merely because the seller is unregistered."
        }
      ],
      "nuances": [
        "An unregistered seller alone does not prove reverse charge applies.",
        "Reverse-charge tax needs cash payment even when you have credit available.",
        "Platform tax responsibility and platform tax collection are different rules."
      ],
      "recap": [
        "Identify who is responsible for the tax.",
        "Reverse charge needs a specific legal trigger.",
        "Payment and later credit eligibility are separate steps."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "How must the buyer pay GST that is due under reverse charge?",
          "options": [
            "With any ITC",
            "Using deposited money in the cash ledger",
            "With a credit note only",
            "Only by the supplier"
          ],
          "correctIndex": 1,
          "explanation": "RCM cannot be paid using the electronic credit ledger.",
          "id": "2.3-q1",
          "sectionRef": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5."
        },
        {
          "type": "tf",
          "question": "Every purchase from a seller without GST registration automatically attracts reverse charge.",
          "correctBool": false,
          "explanation": "Section 9(4) is notification-specific.",
          "id": "2.3-q2",
          "sectionRef": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5."
        },
        {
          "type": "numeric",
          "question": "Assume a covered reverse-charge purchase is ₹1,00,000 before GST at 18%. What is the cash tax payment, in rupees?",
          "correctNumber": 18000,
          "tolerance": 0.01,
          "explanation": "₹1,00,000 × 18% = ₹18,000.",
          "id": "2.3-q3",
          "sectionRef": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5."
        },
        {
          "type": "mcq",
          "question": "For the specified services covered by section 9(5), who is responsible for GST?",
          "options": [
            "Every exporter",
            "An employee",
            "The online operator, for the specified services",
            "Every customer"
          ],
          "correctIndex": 2,
          "explanation": "The operator is liable for the notified services under that mechanism.",
          "id": "2.3-q4",
          "sectionRef": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5."
        }
      ],
      "learningGoal": "Understand the cases where the buyer or a platform pays GST instead of the seller.",
      "story": "Usually Asha pays a supplier’s bill including GST, and the supplier accounts for the tax. For a specifically covered purchase, Asha may instead have to pay the GST directly to the government. This changes who pays, not whether paperwork matters.",
      "selfCheck": {
        "question": "Can Asha use existing purchase credit to pay ₹18,000 reverse-charge tax?",
        "answer": "No. That liability is paid using cash. Any later eligible credit is a separate step."
      }
    },
    {
      "id": "2.4",
      "title": "Distinct Persons, Branches & Job Work",
      "roadmap": "Tell apart a branch transfer and sending your own goods out for processing.",
      "keyTerms": [
        {
          "term": "Distinct persons",
          "def": "Separate GST registrations that the law treats as separate persons, even when one business owns them."
        },
        {
          "term": "Job work",
          "def": "Processing goods that still belong to another registered business. The processor is paid for work, not automatically for the goods themselves."
        },
        {
          "term": "Principal",
          "def": "The registered business that owns goods sent for job work."
        },
        {
          "term": "Delivery challan",
          "def": "A prescribed goods-movement document used in permitted cases where a sales invoice is not the right document."
        }
      ],
      "explanation": "### 1. Identify the registration on each side\nTwo GST registrations under one business identity can be distinct persons. Sending stock between them can count as a supply even without charging a price. Company accounts combining both branches do not cancel this GST treatment.\n\n### 2. Identify who owns the goods\nFor job work, the principal still owns the goods. Sending fabric for stitching does not, by itself, sell the fabric to the tailor. The tailor’s processing fee is a separate service to check for GST.\n\n### 3. Track the return dates\nThe permitted job-work procedure has conditions. Ordinary return/supply deadlines are one year for inputs, such as material, and three years for capital goods, such as equipment. Specified tools and other cases have exceptions; permitted extensions also need checking.\n\n### 4. Keep a movement record\nRecord the dispatch date, challan, quantity and return or onward supply. Missing the permitted deadline can cause the goods to be treated as supplied from the original sending date. Physical movement and a taxable sale are related questions, but they are not identical.",
      "legalBasis": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55.\n\n[GST Council: Acts, rules and notifications](https://gstcouncil.gov.in/central-gst) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Stock sent to another State registration",
          "body": "Assume the Maharashtra-to-Karnataka transfer is taxable, the correct value is ₹2,00,000 and the rate is 18%.\n\n1. Treat the registrations separately for GST.\n2. Use the applicable inter-State tax, IGST.\n3. GST = ₹2,00,000 × 18% = **₹36,000**.\n\nThe receiving branch separately checks whether that tax qualifies as credit."
        },
        {
          "title": "Paying for stitching work",
          "body": "The tailor works on Asha’s material and charges ₹20,000 for processing. Assume the service rate is 18%.\n\n1. The service value is the processing charge on these facts.\n2. GST = ₹20,000 × 18% = **₹3,600**.\n3. Track Asha’s goods separately under the job-work movement rules.\n\nDo not automatically add the whole fabric value to the processing fee."
        }
      ],
      "nuances": [
        "Branches can be separate GST persons even under one owner.",
        "Job-work goods remain the principal’s property.",
        "Missing a return deadline can create tax consequences from the original dispatch date."
      ],
      "recap": [
        "Check registrations for branch movements.",
        "Check ownership for processing movements.",
        "Track documents, quantities and deadlines."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "How can GST treat two State registrations belonging to one PAN?",
          "options": [
            "Always non-residents",
            "Only composition dealers",
            "Always one GST person",
            "Separate GST persons, despite common ownership"
          ],
          "correctIndex": 3,
          "explanation": "Section 25 treats separate registrations as distinct persons.",
          "id": "2.4-q1",
          "sectionRef": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55."
        },
        {
          "type": "tf",
          "question": "Sending your goods to a job worker always transfers ownership to that worker.",
          "correctBool": false,
          "explanation": "Job work processes another registered person’s goods.",
          "id": "2.4-q2",
          "sectionRef": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55."
        },
        {
          "type": "numeric",
          "question": "A processor charges ₹20,000 for work before GST. Assume 18%. What is the GST on that fee, in rupees?",
          "correctNumber": 3600,
          "tolerance": 0.01,
          "explanation": "₹20,000 × 18% = ₹3,600.",
          "id": "2.4-q3",
          "sectionRef": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55."
        },
        {
          "type": "mcq",
          "question": "Before exceptions or permitted extensions, what is the ordinary job-work return/supply deadline for inputs such as materials?",
          "options": [
            "One year",
            "One day",
            "Ten years",
            "No deadline"
          ],
          "correctIndex": 0,
          "explanation": "The ordinary input deadline is one year.",
          "id": "2.4-q4",
          "sectionRef": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55."
        }
      ],
      "learningGoal": "Tell apart a branch transfer and sending your own goods out for processing.",
      "story": "Asha sends stock from her Maharashtra registration to her Karnataka registration. On another day she sends her own fabric to a tailor for stitching. The goods move in both cases, but the ownership and GST registration facts are different.",
      "selfCheck": {
        "question": "Is sending your fabric to a job worker automatically a sale of the fabric?",
        "answer": "No. Under the permitted procedure the fabric remains yours. The processing fee and the movement conditions need separate checks."
      }
    }
  ],
  "moduleQuiz": [
    {
      "type": "mcq",
      "question": "An account labelled salary also contains an independent vendor's fee. What should you do with that fee?",
      "options": [
        "Everything is employment",
        "Check whether the person is an employee or an independent supplier",
        "Always exempt",
        "Ignore consideration"
      ],
      "correctIndex": 1,
      "explanation": "Check the real arrangement: employee duties and independent work are different.",
      "id": "m2-q1",
      "sectionRef": "CGST Act section 7 and Schedules I, II and III."
    },
    {
      "type": "tf",
      "question": "If nothing is given in return, there can never be a GST supply.",
      "correctBool": false,
      "explanation": "Schedule I can deem specified activities to be supplies without consideration.",
      "id": "m2-q2",
      "sectionRef": "CGST Act section 7 and Schedules I, II and III."
    },
    {
      "type": "numeric",
      "question": "Assume a natural machine-and-installation package qualifies as composite, its main supply rate is 18%, and value before tax is ₹2,50,000. What is GST, in rupees?",
      "correctNumber": 45000,
      "tolerance": 0.01,
      "explanation": "₹2,50,000 × 18% = ₹45,000.",
      "id": "m2-q3",
      "sectionRef": "CGST Act sections 2(30), 2(74), 2(90) and 8."
    },
    {
      "type": "mcq",
      "question": "Unrelated products have separate prices on one bill. Where should the classification review begin?",
      "options": [
        "Always a works contract",
        "Highest rate on all",
        "Classify the separately priced supplies",
        "Automatically exempt"
      ],
      "correctIndex": 2,
      "explanation": "One bill does not itself create a mixed single-price supply.",
      "id": "m2-q4",
      "sectionRef": "CGST Act sections 2(30), 2(74), 2(90) and 8."
    },
    {
      "type": "numeric",
      "question": "A ₹60,000 service is confirmed taxable under reverse charge at 18%. You have ₹50,000 purchase credit. How much cash must pay this reverse-charge GST, in rupees?",
      "correctNumber": 10800,
      "tolerance": 0.01,
      "explanation": "The entire RCM amount ₹10,800 must be paid in cash.",
      "id": "m2-q5",
      "sectionRef": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5."
    },
    {
      "type": "mcq",
      "question": "A vendor has no GST registration. What should you check before deciding reverse charge applies?",
      "options": [
        "Whether it is Tuesday",
        "The bank balance",
        "Only invoice colour",
        "The official reverse-charge category and buyer conditions"
      ],
      "correctIndex": 3,
      "explanation": "Unregistered status alone is insufficient.",
      "id": "m2-q6",
      "sectionRef": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5."
    },
    {
      "type": "numeric",
      "question": "Assume a taxable branch transfer is valued at ₹2,00,000 before IGST at 18%. What is IGST, in rupees?",
      "correctNumber": 36000,
      "tolerance": 0.01,
      "explanation": "₹2,00,000 × 18% = ₹36,000.",
      "id": "m2-q7",
      "sectionRef": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55."
    },
    {
      "type": "mcq",
      "question": "Job-work materials are not returned or supplied within the permitted period, and no exception applies. What tax risk arises?",
      "options": [
        "Goods can be treated as supplied from the original sending date",
        "Salary tax",
        "Only a bank fee",
        "Automatic exemption"
      ],
      "correctIndex": 0,
      "explanation": "Section 143 provides a deemed-supply consequence.",
      "id": "m2-q8",
      "sectionRef": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55."
    }
  ]
};
