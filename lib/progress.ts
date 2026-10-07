export type QuizResult={score:number;total:number;completedAt:string};
export type ChapterResult=QuizResult;
export type ProgressState={chapterQuiz:Record<string,QuizResult>;moduleQuiz:Record<string,QuizResult>;finalExam:QuizResult|null;chaptersRead:Record<string,true>};
export const PROGRESS_KEY='gstguru-pro-progress-v1';
function defaultState():ProgressState{return{chapterQuiz:{},moduleQuiz:{},finalExam:null,chaptersRead:{}};}
function validResult(value:unknown):value is QuizResult{if(!value||typeof value!=='object')return false;const r=value as QuizResult;return Number.isInteger(r.score)&&Number.isInteger(r.total)&&r.total>0&&r.score>=0&&r.score<=r.total&&typeof r.completedAt==='string';}
function resultMap(value:unknown):Record<string,QuizResult>{if(!value||typeof value!=='object'||Array.isArray(value))return {};return Object.fromEntries(Object.entries(value).filter(([,v])=>validResult(v)));}
export function decodeProgress(raw:string|null):ProgressState{if(!raw)return defaultState();try{const value=JSON.parse(raw);if(!value||typeof value!=='object'||Array.isArray(value))return defaultState();return{chapterQuiz:resultMap(value.chapterQuiz),moduleQuiz:resultMap(value.moduleQuiz),finalExam:validResult(value.finalExam)?value.finalExam:null,chaptersRead:value.chaptersRead&&typeof value.chaptersRead==='object'&&!Array.isArray(value.chaptersRead)?Object.fromEntries(Object.entries(value.chaptersRead).filter(([,v])=>v===true)) as Record<string,true>:{}};}catch{return defaultState();}}
export function loadProgress():ProgressState{if(typeof window==='undefined')return defaultState();try{return decodeProgress(localStorage.getItem(PROGRESS_KEY));}catch{return defaultState();}}
export function saveProgress(state:ProgressState):boolean{if(typeof window==='undefined')return false;try{localStorage.setItem(PROGRESS_KEY,JSON.stringify(state));return true;}catch{return false;}}
export function markChapterRead(moduleId:string,chapterId:string):boolean{const state=loadProgress();state.chaptersRead[`${moduleId}/${chapterId}`]=true;return saveProgress(state);}
export function recordChapterQuiz(moduleId:string,chapterId:string,score:number,total:number){const s=loadProgress();s.chapterQuiz[`${moduleId}/${chapterId}`]={score,total,completedAt:new Date().toISOString()};saveProgress(s);}
export function recordModuleQuiz(moduleId:string,score:number,total:number){const s=loadProgress();s.moduleQuiz[moduleId]={score,total,completedAt:new Date().toISOString()};saveProgress(s);}
export function recordFinalExam(score:number,total:number){const s=loadProgress();s.finalExam={score,total,completedAt:new Date().toISOString()};saveProgress(s);}
export function resetProgress(){return saveProgress(defaultState());}
