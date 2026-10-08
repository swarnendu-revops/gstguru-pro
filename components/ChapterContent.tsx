import { Chapter } from "@/lib/content/types";
import Md from "./Md";

export default function ChapterContent({ chapter }: { chapter: Chapter }) {
  return <article className="lesson">
    <header className="lesson-header">
      <p className="eyebrow">CHAPTER {chapter.id} · START WITH THE IDEA</p>
      <h1>{chapter.title}</h1>
      <p className="lesson-goal"><strong>By the end, you can:</strong> {chapter.learningGoal}</p>
    </header>
    <section className="lesson-story" aria-labelledby="story-heading">
      <h2 id="story-heading">Start with a real-life situation</h2><p>{chapter.story}</p>
    </section>
    <section aria-labelledby="words-heading">
      <h2 id="words-heading">The words you need, in plain English</h2>
      <dl className="lesson-terms">{chapter.keyTerms.map(({term,def})=><div key={term}><dt>{term}</dt><dd>{def}</dd></div>)}</dl>
    </section>
    <section aria-labelledby="idea-heading">
      <h2 id="idea-heading">Build the idea, step by step</h2><Md>{chapter.explanation}</Md>
    </section>
    <section aria-labelledby="examples-heading">
      <h2 id="examples-heading">Work through it</h2>
      <p className="lesson-caption">Follow the facts, then the steps. Rates and special conditions stated in these examples are exercise assumptions.</p>
      <div className="lesson-examples">{chapter.examples.map((example,i)=><article key={example.title} className="lesson-example"><p className="eyebrow">EXAMPLE {i+1}</p><h3>{example.title}</h3><Md>{example.body}</Md></article>)}</div>
    </section>
    <section aria-labelledby="mistakes-heading"><h2 id="mistakes-heading">Easy mistakes to avoid</h2><ul>{chapter.nuances.map((item,i)=><li key={i}><Md>{item}</Md></li>)}</ul></section>
    <section className="lesson-recap" aria-labelledby="recap-heading"><h2 id="recap-heading">What to remember</h2><ul>{chapter.recap.map((item,i)=><li key={i}>{item}</li>)}</ul></section>
    <section className="lesson-check" aria-labelledby="check-heading">
      <h2 id="check-heading">Explain it in your own words</h2><p>{chapter.selfCheck.question}</p>
      <p className="lesson-caption">Try saying the answer aloud before opening the explanation.</p>
      <details><summary>See a simple explanation</summary><p>{chapter.selfCheck.answer}</p></details>
    </section>
    <details className="lesson-sources"><summary>Law and sources — optional deeper reading</summary>
      <p className="lesson-caption">An Act is a law; a section is a numbered part of it. CGST is the central GST law and IGST covers integrated GST. The references below support this lesson. Check the version and effective date for a real transaction.</p>
      <Md>{chapter.legalBasis}</Md>
    </details>
  </article>;
}
