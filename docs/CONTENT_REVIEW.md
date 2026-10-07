# Content review and maintenance

Initial research: 7 October 2026. This document records the scope of source work; it does not certify that every notification or judicial change through that date has been exhaustively reviewed.

## Source anchors

- [CBIC GST Acts](https://cbic-gst.gov.in/gst-acts.html): statutory framework used throughout. Older standalone Act pages can contain historic text; confirm operative amendments on the Tax Information Portal and Gazette.
- [CBIC Tax Information Portal](https://taxinformation.cbic.gov.in/): amendment, rule, notification and circular lookup.
- [CGST section 16](https://taxinformation.cbic.gov.in/content-page/explore-act/1000285/1000001): credit conditions and special period/restoration relief.
- [CGST section 17](https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001): blocks and amended plant-and-machinery wording.
- [CGST section 20](https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001): amended ISD requirements from April 2025.
- [CGST section 15](https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001) and [section 34](https://taxinformation.cbic.gov.in/content-page/explore-act/1000304/1000001): discount and credit-note amendments; the retrieved source marks the 2026 amendment commencement as yet to be notified. This is a source snapshot, not an exhaustive Gazette search proving no later commencement exists.
- [Ministry of Finance 2026 GST notes](https://www.indiabudget.gov.in/doc/cen/dojstru1.pdf): 2026 discount, refund and intermediary place-of-supply changes, and commencement caveats. Budget explanatory documents do not replace final enacted/commenced instruments.
- [GST Council September 2025 FAQ](https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf): rate transition and section 14 chronology.
- [GST Council October 2025 newsletter](https://www.gstcouncil.gov.in/sites/default/files/2025-11/october_issue.pdf): section 74A and proper-officer framework for FY 2024–25 onward.
- [Official GSTR-1A guide](https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm): optional same-period correction and recipient GSTR-2B timing.
- [Official GSTR-2B guide](https://tutorial.gst.gov.in/userguide/returns/FAQ_gstr2b.htm): data scope and eligibility limits.
- [Official IRP FAQ](https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/): historical mandate/operational reporting-window guidance.

## Deliberate boundaries

All exercise rates are assumptions. There is no exhaustive current HSN/SAC rate schedule, statutory filing-date calendar or sector-by-sector opinion database. Registration and composition limits are taught through the applicability method rather than asserted as one universal number. Exercises using post-supply discount rules expressly identify their pre-2026-amendment assumptions. Cross-border intermediary and refund transitions require case-period commencement checks.

Automated checks validate software behaviour, data structure and answer keys; they do not establish legal correctness. The initial curriculum is substantive educational material and should receive a GST practitioner's editorial review before it is marketed as professional training or relied on for a client filing.

## Updating the course

1. Identify the transaction period, State, facts and applicable legal version.
2. Preserve the Gazette/official source, notification number, publication date and commencement date. Separate proposals, enacted provisions, commenced provisions and portal operations.
3. Update the affected explanations, examples, legal references, chapter/module answer keys and source-page checkpoints together.
4. Review the final-assessment selections for affected questions.
5. Run `npm run typecheck`, `npm run verify` and `npm run build`; inspect the relevant chapter and assessment pages.
6. Publish the new static export and record a dated change note below.

## Change log

- 7 October 2026: initial GST course authored; source anchors and transition limitations recorded.
