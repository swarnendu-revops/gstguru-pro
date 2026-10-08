"use client";
import { useState } from "react";
import Md from "./Md";
import { getQuizTerms } from "@/lib/content/glossary";
import type { QuizQuestion } from "@/lib/content/types";
import { Answer, hasAnswer, isCorrect, passes } from "@/lib/quiz";

type Props={title:string;questions:QuizQuestion[];passPercent?:number;examMode?:boolean;onComplete?:(score:number,total:number)=>void};
type Entry=Answer&{submitted?:boolean};
export default function QuizRunner({title,questions,passPercent=70,examMode=false,onComplete}:Props){
 const [index,setIndex]=useState(0);const [answers,setAnswers]=useState<Record<string,Entry>>({});const [finished,setFinished]=useState(false);
 if(!questions.length)return <p>No questions available.</p>;
 const q=questions[index];const words=examMode?[]:getQuizTerms(q);const current=answers[q.id]??{};
 const score=questions.filter(item=>isCorrect(item,answers[item.id]??{})).length;
 const update=(patch:Partial<Entry>)=>setAnswers(prev=>({...prev,[q.id]:{...(prev[q.id]??{}),...patch}}));
 function finish(){setFinished(true);onComplete?.(score,questions.length);}
 const box={border:'1px solid var(--border)',borderRadius:12,padding:24,background:'var(--panel)'};
 const button={background:'var(--panel-2)',color:'var(--text)',border:'1px solid var(--border)',borderRadius:8,padding:'11px 15px',textAlign:'left' as const,cursor:'pointer',fontSize:14};
 const primary={...button,background:'var(--accent)',fontWeight:700};
 if(finished){
  const pct=Math.round(score/questions.length*100);const passed=passes(score,questions.length,passPercent);
  const topics=[...new Set(questions.map(item=>item.topic??'This assessment'))];
  return <section style={box} className="quiz-box" aria-label="Assessment results"><h2 style={{marginTop:0}}>Your results</h2><p style={{fontSize:32,fontWeight:700,color:passed?'var(--accent-2)':'var(--danger)'}}>{score} / {questions.length} <span style={{fontSize:18}}>({pct}%)</span></p><p><strong>{passed?'Benchmark met':'More practice recommended'}</strong> · Pass benchmark: {passPercent}%.</p>
   {examMode&&<p style={{fontSize:13,color:'var(--text-dim)'}}>This is an educational course assessment, not a statutory qualification.</p>}
   {topics.length>1&&<div><h3>Module breakdown</h3>{topics.map(topic=>{const items=questions.filter(item=>item.topic===topic);const correct=items.filter(item=>isCorrect(item,answers[item.id]??{})).length;return <p key={topic} style={{fontSize:13,display:'flex',justifyContent:'space-between',gap:16}}><span>{topic}</span><strong>{correct}/{items.length}</strong></p>})}</div>}
   <details style={{marginTop:20}}><summary style={{cursor:'pointer',fontWeight:700}}>Review all answers and explanations</summary>{questions.map((item,i)=>{const correct=isCorrect(item,answers[item.id]??{});const expected=item.type==='mcq'?item.options?.[item.correctIndex??0]:item.type==='tf'?(item.correctBool?'True':'False'):String(item.correctNumber);return <article key={item.id} style={{borderTop:'1px solid var(--border)',paddingTop:15,marginTop:15}}><strong>{i+1}. {item.question}</strong><p style={{fontSize:13,color:correct?'var(--accent-2)':'var(--danger)'}}>{correct?'Correct':'Review needed'} · Answer: {expected}</p><p style={{fontSize:13}}>{item.explanation}</p><details className="quiz-law"><summary>Law reference</summary><Md>{item.sectionRef??""}</Md></details></article>})}</details>
   <button style={{...button,marginTop:20}} onClick={()=>{setAnswers({});setIndex(0);setFinished(false)}}>Retake {examMode?'assessment':'quiz'}</button>
  </section>;
 }
 const options=q.type==='mcq'?(q.options??[]).map((text,i)=>({text,index:i})):q.type==='tf'?[{text:'True',bool:true},{text:'False',bool:false}]:[];
 return <section style={box} className="quiz-box" aria-label={title}><div className="quiz-header" style={{display:'flex',justifyContent:'space-between',marginBottom:14,fontSize:13}}><strong>{title}</strong><span>Question {index+1} of {questions.length}</span></div><progress aria-label="Question progress" max={questions.length} value={index+1} style={{width:'100%',height:5,accentColor:'#327858'}}/>
  {examMode&&<p style={{fontSize:12,color:'var(--text-dim)'}}>Answers and explanations appear after you finish. You can go back and change an answer.</p>}
  <p style={{fontSize:17,fontWeight:650,marginTop:20}} id={`question-${q.id}`}>{q.question}</p>
  {!!words.length&&<details className="quiz-words"><summary>Need a word explained?</summary><dl>{words.map(word=><div key={word.term}><dt>{word.term}</dt><dd>{word.def}</dd></div>)}</dl></details>}
  {!!options.length&&<div role="group" aria-labelledby={`question-${q.id}`} style={{display:'grid',gap:9}}>{options.map((opt,i)=>{const idx='index'in opt?opt.index:undefined;const bool='bool'in opt?opt.bool:undefined;const selected=q.type==='mcq'?current.selectedIndex===idx:current.selectedBool===bool;const right=q.type==='mcq'?idx===q.correctIndex:bool===q.correctBool;const show=current.submitted&&!examMode;return <button key={i} className="quiz-option" type="button" style={{...button,background:show&&right?'#e1f2e5':show&&selected&&!right?'#fae9e5':selected?'var(--user-bubble)':'var(--panel-2)'}} aria-pressed={selected} disabled={!!current.submitted&&!examMode} onClick={()=>update(q.type==='mcq'?{selectedIndex:idx}:{selectedBool:bool})}>{opt.text}</button>})}</div>}
  {q.type==='numeric'&&<div><label htmlFor={`numeric-${q.id}`} style={{fontSize:12}}>Numeric answer (units as stated in the question)</label><input id={`numeric-${q.id}`} type="text" inputMode="decimal" autoComplete="off" style={{...button,width:'100%',display:'block'}} placeholder="e.g. 18000 or 18,000" value={current.numericInput??''} disabled={!!current.submitted&&!examMode} onChange={e=>update({numericInput:e.target.value})}/>{current.numericInput&&!hasAnswer(q,current)&&<p role="status" style={{fontSize:12,color:'var(--danger)'}}>Enter a complete number, with optional valid comma grouping.</p>}</div>}
  {current.submitted&&!examMode&&<div className="quiz-feedback" role="status" style={{borderLeft:`3px solid ${isCorrect(q,current)?'var(--accent-2)':'var(--danger)'}`,padding:'10px 16px',marginTop:18,background:'var(--panel-2)'}}><strong>{isCorrect(q,current)?'Correct':'Not quite'}</strong><p style={{fontSize:14,margin:'6px 0'}}>{q.explanation}</p><details className="quiz-law"><summary>Law reference</summary><Md>{q.sectionRef??""}</Md></details></div>}
  <div style={{display:'flex',justifyContent:'space-between',gap:12,marginTop:22}}>{examMode&&index>0?<button style={button} onClick={()=>setIndex(index-1)}>← Previous</button>:<span/>}{examMode?<button style={primary} disabled={!hasAnswer(q,current)} onClick={()=>index<questions.length-1?setIndex(index+1):finish()}>{index<questions.length-1?'Next question →':'Finish assessment'}</button>:!current.submitted?<button style={primary} disabled={!hasAnswer(q,current)} onClick={()=>update({submitted:true})}>Check answer</button>:<button style={primary} onClick={()=>index<questions.length-1?setIndex(index+1):finish()}>{index<questions.length-1?'Next question →':'See results'}</button>}</div>
 </section>;
}
