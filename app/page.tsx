"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MODULES, totalChapterCount } from "@/lib/content";
import { loadProgress, ProgressState } from "@/lib/progress";

export default function Home() {
 const [progress, setProgress] = useState<ProgressState | null>(null);
 const [query, setQuery] = useState("");
 useEffect(() => { setProgress(loadProgress()); }, []);
 const chapters = MODULES.flatMap(m => m.chapters.map(c => ({m,c})));
 const completed = chapters.filter(({m,c}) => progress?.chaptersRead[`${m.id}/${c.id}`]).length;
 const total = totalChapterCount();
 const next = chapters.find(({m,c}) => !progress?.chaptersRead[`${m.id}/${c.id}`]) ?? chapters[0];
 const filtered = MODULES.filter(m => [m.title,m.summary,...m.chapters.map(c=>c.title)].join(" ").toLowerCase().includes(query.toLowerCase().trim()));
 return <div className="dashboard">
  <section className="hero">
   <div><p className="eyebrow">THE INDIAN GST PRACTITIONER COURSE</p><h1>Learn the law.<br/><em>Master the practice.</em></h1><p className="hero-copy">A structured path through GST taxation, from your first supply test to a confident compliance review. Learn one chapter. Work the numbers. Test your understanding.</p>
    <Link className="primary" href={`/module/${next.m.id}/chapter/${next.c.id}`}>{completed ? "Continue learning" : "Start the course"} <span aria-hidden="true">↗</span></Link>
    <a className="text-link" href="#curriculum">Explore the curriculum ↓</a>
   </div>
   <aside className="learning-card"><span className="eyebrow">YOUR LEARNING JOURNEY</span><div className="progress-number">{completed}<span> / {total}</span></div><p>chapters marked complete</p><progress aria-label="Completed chapters" value={completed} max={total}/><div className="learning-next"><span className="eyebrow">UP NEXT · CHAPTER {next.c.id}</span><Link href={`/module/${next.m.id}/chapter/${next.c.id}`}>{next.c.title} →</Link></div><small>Progress stays in this browser. No account required.</small></aside>
  </section>
  <div className="course-stats"><div><strong>{MODULES.length}</strong><span>focused modules</span></div><div><strong>{total}</strong><span>practical chapters</span></div><div><strong>{MODULES.reduce((n,m)=>n+m.moduleQuiz.length+m.chapters.reduce((s,c)=>s+c.quiz.length,0),0)}</strong><span>practice questions</span></div><div><strong>70%</strong><span>final assessment benchmark</span></div></div>
  <section id="curriculum"><div className="section-heading"><div><p className="eyebrow">BUILD YOUR EXPERTISE</p><h2>The curriculum</h2></div><label className="search"><span className="sr-only">Search course topics</span><input type="search" placeholder="Search topics: ITC, exports, returns…" value={query} onChange={e=>setQuery(e.target.value)}/></label></div>
   <div className="module-grid">{filtered.map(mod=>{const read=mod.chapters.filter(c=>progress?.chaptersRead[`${mod.id}/${c.id}`]).length;const score=progress?.moduleQuiz[mod.id];return <Link className="module-card" href={`/module/${mod.id}`} key={mod.id}><div className="card-top"><span className="module-index">{String(mod.number).padStart(2,"0")}</span><span className="eyebrow">MODULE {mod.number}</span>{score&&<span className="score">{Math.round(score.score/score.total*100)}%</span>}</div><h3>{mod.title}</h3><p>{mod.summary}</p><div className="card-bottom"><span>{mod.chapters.length} chapters · {read} complete</span><span aria-hidden="true">↗</span></div></Link>})}</div>
   {filtered.length===0&&<p role="status">No modules match “{query}”. Try ITC, registration or exports.</p>}
  </section>
  <section className="assessment-banner"><div><p className="eyebrow">PUT IT ALL TOGETHER</p><h2>Final course assessment</h2><p>60 questions across all ten modules. Review your strengths and the topics to revisit.</p><small>A course assessment, with a 70% benchmark. It is not a statutory professional qualification.</small></div><Link className="primary" href="/final-exam">Take the assessment ↗</Link></section>
  <section className="source-note"><div><h3>Learn with the source beside you.</h3><p>Chapters link to official GST Acts and amendment resources. Exercise rates are stated assumptions; transaction-specific rates, thresholds and deadlines need the applicable notification.</p></div><Link href="/resources">Official sources & update notes →</Link></section>
 </div>;
}
