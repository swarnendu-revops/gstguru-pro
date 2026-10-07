const assert=require('node:assert/strict');
const path=require('node:path');
const root=path.resolve(process.argv[2]||'.verification');
const {MODULES,getAdjacentChapters}=require(path.join(root,'content/index.js'));
const {FINAL_EXAM}=require(path.join(root,'content/finalExam.js'));
const {parseNumeric,isCorrect,hasAnswer,passes}=require(path.join(root,'quiz.js'));
const {decodeProgress,PROGRESS_KEY}=require(path.join(root,'progress.js'));
assert.equal(MODULES.length,10);
assert.equal(MODULES.flatMap(m=>m.chapters).length,40);
const ids=new Set();let questions=0;
function check(q){assert.ok(!ids.has(q.id),`duplicate ${q.id}`);ids.add(q.id);questions++;assert.ok(q.question&&q.explanation&&q.sectionRef);if(q.type==='mcq'){assert.equal(q.options.length,4);assert.ok(Number.isInteger(q.correctIndex)&&q.correctIndex>=0&&q.correctIndex<4);assert.ok(isCorrect(q,{selectedIndex:q.correctIndex}));assert.ok(!isCorrect(q,{selectedIndex:(q.correctIndex+1)%4}));}else if(q.type==='tf'){assert.equal(typeof q.correctBool,'boolean');assert.ok(isCorrect(q,{selectedBool:q.correctBool}));assert.ok(!isCorrect(q,{selectedBool:!q.correctBool}));}else{assert.ok(Number.isFinite(q.correctNumber));assert.ok(isCorrect(q,{numericInput:String(q.correctNumber)}));assert.ok(!isCorrect(q,{numericInput:String(q.correctNumber+100)}));}assert.ok(!hasAnswer(q,{}));}
for(const m of MODULES){assert.equal(m.chapters.length,4);assert.equal(m.moduleQuiz.length,8);for(const c of m.chapters){assert.equal(c.quiz.length,4);assert.equal(c.examples.length,2);assert.ok(c.keyTerms.length>=3&&c.nuances.length>=3&&c.recap.length>=3);assert.ok(c.explanation.length>=500&&c.legalBasis.includes('https://'));assert.ok(!/income tax|salaries|PGBP|AY 2026/.test(c.title));c.quiz.forEach(check);}m.moduleQuiz.forEach(check);}
assert.equal(questions,240);assert.equal(FINAL_EXAM.length,60);assert.equal(new Set(FINAL_EXAM.map(q=>q.id)).size,60);
for(const m of MODULES)assert.equal(FINAL_EXAM.filter(q=>q.topic===m.title).length,6);
assert.equal(getAdjacentChapters('module-1','1.1').prev,null);
assert.deepEqual(getAdjacentChapters('module-1','1.4').next,{moduleId:'module-2',chapterId:'2.1'});
assert.equal(getAdjacentChapters('module-10','10.4').next,null);
for(const s of ['','18abc','12,34','Infinity','NaN','1e4','--1'])assert.equal(parseNumeric(s),null,`invalid numeric ${s}`);
for(const s of ['18000','18,000',' 18000 ','1,18,000','1,180,000','739.73'])assert.ok(parseNumeric(s)!==null);
assert.equal(parseNumeric('1,18,000'),118000);
assert.ok(!passes(69,99,70));assert.ok(passes(42,60,70));assert.ok(!passes(41,60,70));
for(const s of [null,'broken','null','[]','{"chapterQuiz":null,"moduleQuiz":[],"chaptersRead":null,"finalExam":{}}'])assert.deepEqual(decodeProgress(s),{chapterQuiz:{},moduleQuiz:{},finalExam:null,chaptersRead:{}});
const decoded=decodeProgress(JSON.stringify({chaptersRead:{'module-1/1.1':true,bad:'yes'},moduleQuiz:{ok:{score:3,total:4,completedAt:'2026-10-07'},bad:{score:5,total:4,completedAt:'x'}}}));assert.equal(Object.keys(decoded.chaptersRead).length,1);assert.equal(Object.keys(decoded.moduleQuiz).length,1);assert.equal(PROGRESS_KEY,'gstguru-pro-progress-v1');
console.log('PASS: 40 chapters, 240 unique questions, 60 balanced final questions, navigation, answer scoring, numeric validation, exact pass threshold, and malformed progress recovery.');
