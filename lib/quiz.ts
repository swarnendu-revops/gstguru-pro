import type { QuizQuestion } from "./content/types";
export type Answer = { selectedIndex?: number; selectedBool?: boolean; numericInput?: string };
export function parseNumeric(input: string): number | null {
 const text=input.trim();
 // Accept plain numbers and correctly grouped Indian or international separators.
 if(!/^[+-]?(?:\d+(?:\.\d+)?|(?:\d{1,3}(?:,\d{3})+|\d{1,2}(?:,\d{2})+,\d{3})(?:\.\d+)?)$/.test(text)) return null;
 const value=Number(text.replace(/,/g,""));
 return Number.isFinite(value)?value:null;
}
export function hasAnswer(q:QuizQuestion,a:Answer):boolean {
 if(q.type==='mcq') return Number.isInteger(a.selectedIndex)&&a.selectedIndex!>=0&&a.selectedIndex!<(q.options?.length??0);
 if(q.type==='tf') return typeof a.selectedBool==='boolean';
 return parseNumeric(a.numericInput??'')!==null;
}
export function isCorrect(q:QuizQuestion,a:Answer):boolean {
 if(!hasAnswer(q,a)) return false;
 if(q.type==='mcq') return a.selectedIndex===q.correctIndex;
 if(q.type==='tf') return a.selectedBool===q.correctBool;
 const value=parseNumeric(a.numericInput??'');
 return value!==null&&q.correctNumber!==undefined&&Math.abs(value-q.correctNumber)<=(q.tolerance??0)+Number.EPSILON*Math.max(1,Math.abs(q.correctNumber));
}
export function passes(score:number,total:number,percent:number):boolean{return total>0&&score*100>=percent*total;}
