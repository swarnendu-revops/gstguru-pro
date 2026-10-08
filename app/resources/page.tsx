import Link from "next/link";
const sources=[
 {title:'GST laws, rules and changes · GST Council',url:'https://gstcouncil.gov.in/central-gst',note:'Start here for the central GST Act, related rules and official changes. An Act is a law; a section is a numbered part of it.'},
 {title:'Official tax documents · CBIC',url:'https://taxinformation.cbic.gov.in/',note:'Find legal text, rate notifications and circulars. A notification is an official document putting a rule or rate into effect; a circular explains the administration’s approach.'},
 {title:'GST filing portal',url:'https://www.gst.gov.in/',note:'The website used for registration, statements, returns and payments. Its advisories explain current portal processes and announced filing-date changes.'},
 {title:'Sales reporting and corrections · official guide',url:'https://tutorial.gst.gov.in/userguide/returns/GSTR_1.htm',note:'GSTR-1 reports sales details. The optional GSTR-1A facility allows permitted same-period corrections before GSTR-3B, the summary tax return.'},
 {title:'Electronic invoice guidance · official IRP',url:'https://einvoice6.gst.gov.in/content/faq-powered-by-irisirp/',note:'An Invoice Registration Portal receives covered invoice data and returns an Invoice Reference Number (IRN). Check who is covered and the reporting window.'},
 {title:'September 2025 rate-change background · GST Council',url:'https://gstcouncil.gov.in/sites/default/files/2025-09/faq.pdf',note:'Background to that rate transition. For an actual product or service, check the official rate document and its start date.'},
 {title:'2026 GST amendment notes · Ministry of Finance',url:'https://www.indiabudget.gov.in/doc/cen/dojstru1.pdf',note:'Background on discount, refund and overseas-service changes. An explanation of a change does not, by itself, establish when the law starts applying.'},
];
export default function Resources(){return <main className="resource-wrap">
 <Link href="/">← All modules</Link><p className="eyebrow" style={{marginTop:24}}>WHEN YOU WANT TO CHECK THE SOURCE</p>
 <h1>You can learn the idea before reading the law.</h1>
 <p>The chapters explain each concept through situations, plain-language definitions and worked steps. Use this page when you want to check the official rule behind an idea.</p>
 <article><h3>How to read an exercise</h3><p>“Assume 18%” means use 18% for that calculation. It does not mean every product is taxed at 18%. First understand the method. For an actual transaction, check what was supplied, the locations, date, applicable rate and conditions.</p></article>
 <article><h3>A simple source-checking routine</h3><ol><li>Write down who supplied what, where and when.</li><li>Find the relevant Act section and related rules or notifications.</li><li>Check the effective date: when the rule starts applying.</li><li>Keep the source and a short explanation of your conclusion.</li></ol><p>This course does not automatically update live rates, deadlines or amendment status. The initial source review is dated 7 October 2026; the beginner rewrite is dated 8 October 2026.</p></article>
 <details className="lesson-sources"><summary>Changes to check for a real transaction</summary><ul>
 <li><strong>Shared service credits:</strong> Input Service Distributor (ISD) rules use the amended required framework from 1 April 2025 for covered service invoices. <a href="https://taxinformation.cbic.gov.in/content-page/explore-act/1000289/1000001">Section 20</a>.</li>
 <li><strong>Construction purchase credit:</strong> check the amended “plant and machinery” wording and its definition. <a href="https://taxinformation.cbic.gov.in/content-page/explore-act/1000286/1000001">Section 17</a>.</li>
 <li><strong>Tax demands:</strong> financial year 2024–25 onward uses section 74A; older periods use the relevant sections 73/74 framework.</li>
 <li><strong>2026 discounts:</strong> the initial source snapshot recorded pending commencement. Exercises expressly use the older conditions. Check later official start-date documents for the transaction. <a href="https://taxinformation.cbic.gov.in/content-page/explore-act/1000284/1000001">Section 15</a>.</li>
 <li><strong>Overseas intermediary services and refunds:</strong> check when the relevant 2026 changes start before using either legal version.</li>
 </ul></details>
 <h2 style={{marginTop:32}}>Official reading, with a purpose</h2>
 {sources.map(source=><article key={source.url}><h3><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a></h3><p style={{marginBottom:0,color:'var(--text-dim)'}}>{source.note}</p></article>)}
 <article><h3>Your learning progress</h3><p>Completed chapters and finished quiz scores are saved in this browser. They do not sync to another device. Clearing browser storage removes them. Unfinished quiz attempts are not saved.</p></article>
 </main>}
