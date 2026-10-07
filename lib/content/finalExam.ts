import { MODULES } from "./index";
import type { QuizQuestion } from "./types";
export const FINAL_EXAM_PASS_PERCENT = 70;
export const FINAL_EXAM: QuizQuestion[] = MODULES.flatMap(mod => [
 ...mod.chapters.map(ch => ({ ...ch.quiz[2], topic: mod.title })),
 ...mod.moduleQuiz.filter((_, i) => i === 0 || i === 5).map(q => ({ ...q, topic: mod.title })),
]).map((q, i) => ({ ...q, id: `final-${i+1}-${q.id}` }));
