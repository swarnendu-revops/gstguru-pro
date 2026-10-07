import type { Module } from "./types";

export const module2: Module = {
  "id": "module-2",
  "number": 2,
  "title": "Supply, Bundles & Reverse Charge",
  "summary": "Learn the scope of supply, supplies without consideration, composite and mixed supplies, and who pays tax under reverse charge.",
  "chapters": [
    {
      "id": "2.1",
      "title": "The Scope of Supply",
      "roadmap": "Apply the supply test before looking up a rate.",
      "keyTerms": [
        {
          "term": "Supply",
          "def": "The taxable-event framework covering qualifying transactions under section 7."
        },
        {
          "term": "Schedule I",
          "def": "Listed activities treated as supply even without consideration."
        },
        {
          "term": "Schedule III",
          "def": "Listed activities treated as neither supply of goods nor supply of services."
        }
      ],
      "explanation": "Ordinary supply analysis asks whether there is a transaction involving goods or services, consideration, and a business connection. Imports of services for consideration have a separate limb even without a business connection. Certain Schedule I activities count without consideration; Schedule III excludes identified activities.\n\nSchedule II classifies specified activities as goods or services **after** they constitute a supply under section 7. It is not a stand-alone device to tax every transaction listed there. Employee services to the employer in the course of employment fall in Schedule III; a person's separate independent consultancy requires its own analysis.\n\nRead agreements, delivery evidence and the actual conduct. Receiving money is not enough to establish a supply: damages, grants and deposits need a reciprocal-obligation analysis rather than an automatic label. Conversely, no invoice or no cash does not prevent a Schedule I supply.",
      "legalBasis": "CGST Act section 7 and Schedules I, II and III.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Employee versus consultant",
          "body": "An employer pays ₹50,000 salary for employee duties: that employment service falls outside supply. It separately hires an independent consultant for ₹50,000. At an assumed 18% taxable service rate, the consultancy carries **₹9,000** GST subject to the levy and registration facts."
        },
        {
          "title": "No consideration",
          "body": "A registered business moves goods to its distinct-person branch in another State without charging a price. Schedule I can treat this as supply; establish valuation and the correct tax head."
        }
      ],
      "nuances": [
        "Schedule II classifies; first establish supply.",
        "A penalty receipt is not automatically consideration for tolerating an act.",
        "A personal import of services for consideration needs separate analysis."
      ],
      "recap": [
        "Apply section 7 before rates.",
        "Read Schedule I and III exceptions.",
        "Determine the real relationship of the parties."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Which schedule lists activities treated as neither goods nor services supply?",
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
          "question": "Schedule II alone makes every listed activity taxable.",
          "correctBool": false,
          "explanation": "It classifies an activity that first constitutes supply under section 7.",
          "id": "2.1-q2",
          "sectionRef": "CGST Act section 7 and Schedules I, II and III."
        },
        {
          "type": "numeric",
          "question": "A taxable independent consultancy has ₹50,000 value at assumed 18%. GST in ₹?",
          "correctNumber": 9000,
          "tolerance": 0.01,
          "explanation": "₹50,000 × 18% = ₹9,000.",
          "id": "2.1-q3",
          "sectionRef": "CGST Act section 7 and Schedules I, II and III."
        },
        {
          "type": "mcq",
          "question": "Employee services in the course of employment are generally:",
          "options": [
            "A mixed supply",
            "IGST exports",
            "Schedule III activity",
            "Always RCM"
          ],
          "correctIndex": 2,
          "explanation": "The employment exclusion is in Schedule III.",
          "id": "2.1-q4",
          "sectionRef": "CGST Act section 7 and Schedules I, II and III."
        }
      ]
    },
    {
      "id": "2.2",
      "title": "Composite & Mixed Supplies",
      "roadmap": "Identify whether one principal supply controls a bundle or the highest rate applies.",
      "keyTerms": [
        {
          "term": "Composite supply",
          "def": "Naturally bundled supplies made together, with a principal supply."
        },
        {
          "term": "Principal supply",
          "def": "The predominant element of a composite supply."
        },
        {
          "term": "Mixed supply",
          "def": "Individual supplies sold together for a single price without being composite."
        }
      ],
      "explanation": "Look at commercial reality: does a customer ordinarily obtain the elements together, with one element supporting the predominant one? Where supplies are naturally bundled, the principal supply determines treatment under section 8. A seller's statement that a bundle is composite is not conclusive.\n\nA mixed supply requires individual supplies offered together for a **single price**, where the package is not a composite supply. It takes the highest applicable rate among its components. Independently priced items generally require individual classification rather than automatically becoming a mixed supply just because they appear on one invoice.\n\nPackaging and delivery integral to a goods sale can be ancillary to that supply, but an independently contracted transport service may have a different result. Keep the contract, price structure, usual industry practice and customer expectation in the classification memo.",
      "legalBasis": "CGST Act sections 2(30), 2(74), 2(90) and 8.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Natural bundle",
          "body": "Assume a machine sale with mandatory packing and delivery is a composite supply whose principal machine rate is 18%. For a ₹1,00,000 bundle, GST is **₹18,000** under the stated assumptions."
        },
        {
          "title": "Gift package",
          "body": "Assume unrelated items with rates of 5% and 18% are packaged for one ₹2,000 price and the bundle is mixed. The highest 18% rate gives **₹360** GST. If separately sold and priced, analyse each item separately."
        }
      ],
      "nuances": [
        "A single invoice does not prove a mixed supply.",
        "Natural bundling is a fact test.",
        "Exercise rates do not identify actual commodity rates."
      ],
      "recap": [
        "Composite follows the principal supply.",
        "Mixed follows the highest rate.",
        "Examine pricing and commercial facts."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "A composite supply generally follows:",
          "options": [
            "The purchaser tax slab",
            "No rate",
            "The lowest rate",
            "The principal supply"
          ],
          "correctIndex": 3,
          "explanation": "Section 8 applies the principal-supply treatment.",
          "id": "2.2-q1",
          "sectionRef": "CGST Act sections 2(30), 2(74), 2(90) and 8."
        },
        {
          "type": "tf",
          "question": "Every invoice containing several items is a mixed supply.",
          "correctBool": false,
          "explanation": "The single-price and non-composite requirements must be satisfied.",
          "id": "2.2-q2",
          "sectionRef": "CGST Act sections 2(30), 2(74), 2(90) and 8."
        },
        {
          "type": "numeric",
          "question": "A mixed ₹2,000 bundle has assumed component rates 5% and 18%. Tax in ₹?",
          "correctNumber": 360,
          "tolerance": 0.01,
          "explanation": "₹2,000 × highest rate 18% = ₹360.",
          "id": "2.2-q3",
          "sectionRef": "CGST Act sections 2(30), 2(74), 2(90) and 8."
        },
        {
          "type": "mcq",
          "question": "Which fact supports composite supply?",
          "options": [
            "Naturally bundled commercial elements",
            "Any common customer",
            "Different States",
            "No invoice"
          ],
          "correctIndex": 0,
          "explanation": "Natural bundling and a principal supply are central.",
          "id": "2.2-q4",
          "sectionRef": "CGST Act sections 2(30), 2(74), 2(90) and 8."
        }
      ]
    },
    {
      "id": "2.3",
      "title": "Reverse Charge & Section 9(5)",
      "roadmap": "Separate the recipient-pays mechanism from platform-pays transactions.",
      "keyTerms": [
        {
          "term": "Reverse charge (RCM)",
          "def": "A notified mechanism placing tax liability on the recipient."
        },
        {
          "term": "Forward charge",
          "def": "The ordinary mechanism under which the supplier pays tax."
        },
        {
          "term": "Section 9(5)",
          "def": "Specified services for which an electronic commerce operator is liable as if the supplier."
        }
      ],
      "explanation": "Reverse charge is triggered by the statutory provision and the relevant notification, not simply by an unregistered supplier. Section 9(3) covers notified categories; section 9(4) operates for notified classes and categories. Read supplier and recipient qualifications, exceptions and the supply description together.\n\nOnce RCM applies, identify time of supply, issue the prescribed documents where needed, report liability and pay it through the cash ledger. Output tax excludes reverse-charge tax, so ITC cannot discharge that RCM liability. After payment, qualifying credit may be available subject to the credit rules.\n\nSection 9(5) is a separate framework for notified platform services. Do not confuse it with TCS collection by an operator or recipient RCM. Maintain a vendor-category review rather than a blanket policy of taxing all unregistered purchases.",
      "legalBasis": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Cash first",
          "body": "Assume a notified RCM service costs ₹1,00,000 at 18%. RCM tax is **₹18,000**, payable in cash. If every ITC condition is met, ₹18,000 can subsequently be credited; available ITC cannot replace the initial cash payment."
        },
        {
          "title": "Unregistered vendor trap",
          "body": "A business buys ₹25,000 of ordinary goods from an unregistered local vendor. This fact alone does not establish RCM. Identify a notification covering both the recipient class and the supply."
        }
      ],
      "nuances": [
        "Some service notifications depend on supplier options.",
        "RCM registration consequences and exemptions need separate checks.",
        "Section 9(5), RCM and TCS are different mechanisms."
      ],
      "recap": [
        "RCM requires an applicable legal trigger.",
        "Pay RCM tax in cash.",
        "Credit eligibility is a subsequent test."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "How is RCM liability discharged?",
          "options": [
            "With any ITC",
            "Through the cash ledger",
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
          "question": "All purchases from unregistered suppliers attract RCM.",
          "correctBool": false,
          "explanation": "Section 9(4) is notification-specific.",
          "id": "2.3-q2",
          "sectionRef": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5."
        },
        {
          "type": "numeric",
          "question": "Assumed RCM value ₹1,00,000 at 18%. Cash tax in ₹?",
          "correctNumber": 18000,
          "tolerance": 0.01,
          "explanation": "₹1,00,000 × 18% = ₹18,000.",
          "id": "2.3-q3",
          "sectionRef": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5."
        },
        {
          "type": "mcq",
          "question": "Section 9(5) primarily addresses liability of:",
          "options": [
            "Every exporter",
            "An employee",
            "An operator for specified services",
            "Every customer"
          ],
          "correctIndex": 2,
          "explanation": "The operator is liable for the notified services under that mechanism.",
          "id": "2.3-q4",
          "sectionRef": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5."
        }
      ]
    },
    {
      "id": "2.4",
      "title": "Distinct Persons, Branches & Job Work",
      "roadmap": "Understand supplies within one organisation and movements that are not sales.",
      "keyTerms": [
        {
          "term": "Distinct persons",
          "def": "Separate GST registrations treated as separate persons under section 25."
        },
        {
          "term": "Job work",
          "def": "Treatment or processing of goods belonging to another registered person."
        },
        {
          "term": "Delivery challan",
          "def": "A prescribed movement document for cases where an invoice is not appropriate."
        }
      ],
      "explanation": "Separate registrations under one PAN can be distinct persons. Business transfers between them may be supplies without consideration under Schedule I. Do not use financial consolidation to conclude that a branch movement is outside GST. Related-party valuation rules can apply rather than an arbitrary book-transfer price.\n\nJob work starts with goods owned by the principal. Section 143 permits specified movements without tax subject to conditions, records and return/supply deadlines. The ordinary deadlines are one year for inputs and three years for capital goods, with statutory exclusions and possible permitted extensions. A processing fee is a separate service; the goods' ownership does not transfer merely because they move to a job worker.\n\nTrack dispatch dates, challans, quantities, returns, waste and onward supplies. Failure to meet the permitted deadline can produce a deemed supply from the original dispatch date. Tooling exclusions and direct supply from a job worker require careful reading.",
      "legalBasis": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55.\n\n[Read the GST Acts on CBIC](https://cbic-gst.gov.in/gst-acts.html) · [Check amendments, rules and notifications](https://taxinformation.cbic.gov.in/)",
      "examples": [
        {
          "title": "Branch supply",
          "body": "A Maharashtra registration transfers stock to its Karnataka registration. Assume taxable value ₹2,00,000 and 18% IGST under the applicable facts: **₹36,000** output IGST, with recipient credit tested separately."
        },
        {
          "title": "Job-worker fee",
          "body": "A job worker processes principal-owned material and charges ₹20,000. At an assumed 18% service rate, fee tax is **₹3,600**. The material value is not automatically the job worker service value."
        }
      ],
      "nuances": [
        "Same PAN does not eliminate a distinct-person supply.",
        "Job-work deadlines have exceptions and extension mechanisms.",
        "Full recipient ITC eligibility matters under Rule 28."
      ],
      "recap": [
        "Track branches by GST registration.",
        "Separate material movement from processing fees.",
        "Maintain date-wise job-work control."
      ],
      "quiz": [
        {
          "type": "mcq",
          "question": "Two State registrations with the same PAN can be:",
          "options": [
            "Always non-residents",
            "Only composition dealers",
            "Always one GST person",
            "Distinct persons"
          ],
          "correctIndex": 3,
          "explanation": "Section 25 treats separate registrations as distinct persons.",
          "id": "2.4-q1",
          "sectionRef": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55."
        },
        {
          "type": "tf",
          "question": "Moving goods to a job worker always transfers ownership.",
          "correctBool": false,
          "explanation": "Job work processes another registered person’s goods.",
          "id": "2.4-q2",
          "sectionRef": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55."
        },
        {
          "type": "numeric",
          "question": "A ₹20,000 processing fee attracts assumed 18%. Tax in ₹?",
          "correctNumber": 3600,
          "tolerance": 0.01,
          "explanation": "₹20,000 × 18% = ₹3,600.",
          "id": "2.4-q3",
          "sectionRef": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55."
        },
        {
          "type": "mcq",
          "question": "Ordinary input return/supply deadline under section 143, before exceptions or extension, is:",
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
      ]
    }
  ],
  "moduleQuiz": [
    {
      "type": "mcq",
      "question": "A salary ledger includes an independent vendor fee. How should it be treated?",
      "options": [
        "Everything is employment",
        "Examine the actual vendor relationship separately",
        "Always exempt",
        "Ignore consideration"
      ],
      "correctIndex": 1,
      "explanation": "The substance of the relationship controls the employment exclusion.",
      "id": "m2-q1",
      "sectionRef": "CGST Act section 7 and Schedules I, II and III."
    },
    {
      "type": "tf",
      "question": "No consideration always means no supply.",
      "correctBool": false,
      "explanation": "Schedule I can deem specified activities to be supplies without consideration.",
      "id": "m2-q2",
      "sectionRef": "CGST Act section 7 and Schedules I, II and III."
    },
    {
      "type": "numeric",
      "question": "A natural machine-and-installation bundle is assumed composite at its principal 18% rate, value ₹2,50,000. Tax in ₹?",
      "correctNumber": 45000,
      "tolerance": 0.01,
      "explanation": "₹2,50,000 × 18% = ₹45,000.",
      "id": "m2-q3",
      "sectionRef": "CGST Act sections 2(30), 2(74), 2(90) and 8."
    },
    {
      "type": "mcq",
      "question": "Unrelated products are separately priced on one bill. What is the proper starting point?",
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
      "question": "A ₹60,000 service is confirmed RCM at assumed 18%. Available ITC is ₹50,000. Minimum cash required for this RCM in ₹?",
      "correctNumber": 10800,
      "tolerance": 0.01,
      "explanation": "The entire RCM amount ₹10,800 must be paid in cash.",
      "id": "m2-q5",
      "sectionRef": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5."
    },
    {
      "type": "mcq",
      "question": "A vendor is unregistered. What should be checked first?",
      "options": [
        "Whether it is Tuesday",
        "The bank balance",
        "Only invoice colour",
        "The applicable RCM notification and recipient conditions"
      ],
      "correctIndex": 3,
      "explanation": "Unregistered status alone is insufficient.",
      "id": "m2-q6",
      "sectionRef": "CGST Act sections 2(82), 9(3), 9(4), 9(5), 31(3) and 49; corresponding IGST Act section 5."
    },
    {
      "type": "numeric",
      "question": "Assume a taxable branch transfer value ₹2,00,000 at 18% IGST. Tax in ₹?",
      "correctNumber": 36000,
      "tolerance": 0.01,
      "explanation": "₹2,00,000 × 18% = ₹36,000.",
      "id": "m2-q7",
      "sectionRef": "CGST Act sections 2(68), 25, 143 and Schedule I; CGST Rules 28, 45 and 55."
    },
    {
      "type": "mcq",
      "question": "Job-work inputs remain outstanding beyond the permitted period without an exception. What risk arises?",
      "options": [
        "Deemed supply from original dispatch",
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
