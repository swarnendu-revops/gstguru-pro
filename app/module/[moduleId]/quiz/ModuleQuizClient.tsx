"use client";

import Link from "next/link";
import { getModule, MODULES } from "@/lib/content";
import { recordModuleQuiz } from "@/lib/progress";
import QuizRunner from "@/components/QuizRunner";

export default function ModuleQuizClient({ moduleId }: { moduleId: string }) {
  const mod = getModule(moduleId);
  if (!mod) return null;

  const modIndex = MODULES.findIndex((m) => m.id === moduleId);
  const nextMod = MODULES[modIndex + 1];

  return (
    <div style={styles.wrap}>
      <Link href={`/module/${mod.id}`} style={styles.back}>
        ← Module {mod.number}: {mod.title}
      </Link>
      <h1 style={{ marginTop: 8 }}>Module {mod.number} Quiz</h1>
      <p style={{ color: "var(--text-dim)" }}>
        {mod.moduleQuiz.length} questions spanning every chapter in this module. Aim for 70%+.
      </p>

      <div style={{ marginTop: 20 }}>
        <QuizRunner
          title={`Module ${mod.number}: ${mod.title}`}
          questions={mod.moduleQuiz}
          passPercent={70}
          onComplete={(score, total) => recordModuleQuiz(moduleId, score, total)}
        />
      </div>

      <div style={{ marginTop: 28, textAlign: "center" }}>
        {nextMod ? (
          <Link href={`/module/${nextMod.id}`} style={styles.navBtn}>
            Continue to Module {nextMod.number} →
          </Link>
        ) : (
          <Link href="/final-exam" style={styles.navBtn}>
            🎓 Continue to Final Exam →
          </Link>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: { maxWidth: 760, margin: "0 auto", padding: "28px 20px 60px" },
  back: { color: "var(--accent)", textDecoration: "none", fontSize: 14 },
  navBtn: {
    color: "var(--accent)",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid var(--border)",
    borderRadius: 8,
    padding: "10px 20px",
  },
};
