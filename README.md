# GSTGuru Pro

A static Indian GST practitioner learning course adapted from [TaxGuru Pro](https://github.com/swarnendu-revops/taxguru), preserving its module/chapter/quiz learning flow while replacing the income-tax content with GST material.

- **10 modules, 40 chapters**, each with definitions, explanation, legal references, two worked examples, practitioner traps and recap.
- **160 chapter questions + 80 module questions**: MCQ, true/false and numeric exercises.
- **60-question final assessment**: six questions per module, answers hidden until completion, a 70% benchmark and module-wise results. It reuses selected authored questions; it is not a separate 60-question bank or statutory qualification.
- Searchable curriculum, resume link, explicit chapter completion, responsive layout and GST-specific browser progress.
- Official-source page and amendment checkpoints. No login, backend, API key or live AI service.

## Curriculum

1. GST foundations and legal framework
2. Supply, bundles and reverse charge
3. Registration and composition
4. Place and time of supply
5. Value, classification and tax computation
6. Input tax credit and ISD
7. Invoices, e-way bills and payments
8. Returns, reconciliation and e-commerce
9. Exports, imports and refunds
10. Notices, demands and practitioner workflow

## Run

Use Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For the production static export:

```sh
npm run build
npm run preview
```

The preview serves `out/` on http://127.0.0.1:3000. Set `PORT=3001` if needed. Preview is a local convenience server, not a public production server.

## Verify

```sh
npm run typecheck
npm run verify
npm run build
```

Verification checks curriculum completeness, question uniqueness/answer keys, final selection balance, chapter navigation, strict numeric parsing, the exact passing boundary and malformed stored progress. `npm run verify` creates a disposable `.verification/` directory.

## Edit content

`lib/content/module1.ts` through `module10.ts` contain the authored course objects. `lib/content/finalExam.ts` selects one question from each chapter plus two module questions per module. If the syllabus changes, update the selection and verification counts.

`app/resources/page.tsx` and [docs/CONTENT_REVIEW.md](docs/CONTENT_REVIEW.md) document the initial source review and update policy.

Progress is stored under `gstguru-pro-progress-v1`, separately from TaxGuru Pro. Completed scores and explicitly completed chapters persist on this browser only. Unfinished attempts are not saved. No learning records are sent to a server.

## Deploy to Vercel or another static host

The application uses Next.js static export with trailing slashes. The supplied `vercel.json` selects the Other framework preset, runs `npm run verify && npm run build`, and publishes `out/`. On a generic static host, upload the contents of `out/`, enable directory index files and use `404.html` for missing routes. There is no server runtime or environment-variable requirement.

- Production: [gstguru-pro.vercel.app](https://gstguru-pro.vercel.app/)
- Source: [swarnendu-revops/gstguru-pro](https://github.com/swarnendu-revops/gstguru-pro)
- Vercel project: `gstguru-pro` under `swarnendu-revops-projects`, connected to the repository's `main` branch. Pushing to `main` triggers a production deployment; other branches receive previews.

## Content scope

Research date: **7 October 2026**. Examples explicitly assume rates and simplified facts; the site is not a current commodity-rate database or live filing calendar. Selected amendment checkpoints include ISD, construction ITC, period-specific demand provisions, and 2026 commencement questions. Do not treat that source review as a comprehensive professional sign-off on every live GST position. See the review note for the precise limitations and maintenance workflow.

The course covers the core practitioner framework. Sector-specific opinions, detailed litigation research and live return filing require additional case-specific work.
