# Verification results

Initial release: 7 October 2026.

- Next.js 16.4.0 / React 19.3.0 production static export: passed.
- Route type generation and TypeScript check: passed.
- Course verifier: 10 modules, 40 chapters, 240 unique practice questions; 60 final questions with six per module.
- Every authored answer key checked against the shared evaluator, including a wrong/empty answer.
- Strict numeric parsing, Indian/international comma grouping, exact 70% pass boundary and malformed progress recovery: passed.
- 65 exported HTML index pages served over HTTP and checked: passed.
- Browser topic search: filtered to the export module as expected.
- Chapter 1.1 completion and four-question quiz: 4/4; stored completion and 100% score visible after a fresh module-page load.
- Numeric input `9000abc` blocked; `9,000` scored correctly.
- Final assessment: feedback remained hidden; going back restored the editable prior answer.
- Mobile viewport 390 × 844: document and scroll widths both 390; no horizontal overflow.
- Browser warning/error log in exercised flows: empty.
- Production dependency audit: zero reported vulnerabilities at verification time.
- Vercel production build and course verifier: passed. Public homepage, module, chapter, quiz, assessment and source routes served successfully; all 65 exported index pages checked, following canonical redirects. Missing route returned 404.
- Live browser search filtered to exports; chapter content loaded and its first quiz answer produced the expected feedback.
- Production repository: `swarnendu-revops/gstguru-pro`, linked to Vercel project `gstguru-pro` with production branch `main`.

Browser interaction tests used a separate local port/origin so their saved results do not appear in the primary preview.

These checks validate the software and data structure. Legal editorial scope and limits are documented in CONTENT_REVIEW.md.

## Beginner teaching revision — 8 October 2026

- All 40 lessons contain an everyday situation, plain-language definitions, numbered teaching steps, two worked examples, a recap and an explain-back check.
- All 240 question IDs, answer keys, numeric tolerances and question types match the prior release. Prompts and dense answer labels were rewritten; the 60-question final assessment remains balanced.
- Route type generation, TypeScript, course verifier and production static export passed; all 65 local index routes served successfully.
- Browser checks covered the first lesson, an advanced credit-sharing lesson, expandable self-checks, practice word help and correct-answer feedback.
- Final-assessment navigation accepted an Indian-grouped numeric answer and kept feedback and practice word help hidden during the attempt.
- Phone viewport 390 × 844: first and advanced lessons had matching document/scroll widths of 390, with no horizontal overflow. Temporary viewport override was reset.
- Browser warning/error log in exercised flows: empty.

The teaching rewrite retains the recorded legal scope; it does not constitute a new exhaustive amendment review.
