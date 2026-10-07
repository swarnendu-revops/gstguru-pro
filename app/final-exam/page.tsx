"use client";
import Link from "next/link";
import { FINAL_EXAM, FINAL_EXAM_PASS_PERCENT } from "@/lib/content/finalExam";
import { recordFinalExam } from "@/lib/progress";
import QuizRunner from "@/components/QuizRunner";
export default function FinalExamPage(){return <main style={{maxWidth:800,margin:'auto',padding:'32px 20px 60px'}}><Link href="/">← All modules</Link><p className="eyebrow" style={{marginTop:24}}>TEST YOUR UNDERSTANDING</p><h1>Final course assessment</h1><p style={{color:'var(--text-dim)'}}>{FINAL_EXAM.length} questions across all ten modules. Benchmark: {FINAL_EXAM_PASS_PERCENT}%. Answers remain hidden until you finish; your results include a module breakdown and explanations.</p><p style={{fontSize:12,color:'var(--text-dim)'}}>This educational assessment is not a statutory professional qualification. Your completed score is saved in this browser; an unfinished attempt restarts if you reload or leave.</p><QuizRunner title="GSTGuru Pro · Final assessment" questions={FINAL_EXAM} passPercent={FINAL_EXAM_PASS_PERCENT} examMode onComplete={recordFinalExam}/></main>}
