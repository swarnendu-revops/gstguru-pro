export type QuizQuestion = {
  id: string;
  type: "mcq" | "tf" | "numeric";
  question: string;
  options?: string[]; // mcq only
  correctIndex?: number; // mcq only
  correctBool?: boolean; // tf only
  correctNumber?: number; // numeric only
  tolerance?: number; // numeric only, default 0
  explanation: string;
  sectionRef?: string;
  topic?: string;
};

export type Example = {
  title: string;
  body: string; // markdown
};

export type KeyTerm = {
  term: string;
  def: string;
};

export type Chapter = {
  id: string; // e.g. "1.1"
  title: string;
  roadmap: string;
  learningGoal: string;
  story: string;
  selfCheck: { question: string; answer: string };
  keyTerms: KeyTerm[];
  explanation: string; // markdown
  legalBasis: string; // markdown
  examples: Example[];
  nuances: string[]; // markdown bullets
  recap: string[];
  quiz: QuizQuestion[];
};

export type Module = {
  id: string; // e.g. "module-1"
  number: number;
  title: string;
  summary: string;
  chapters: Chapter[];
  moduleQuiz: QuizQuestion[];
};
