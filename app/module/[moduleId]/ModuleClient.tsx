"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getModule } from "@/lib/content";
import { loadProgress, ProgressState } from "@/lib/progress";

export default function ModuleClient({ moduleId }: { moduleId: string }) {
  const mod = getModule(moduleId);
  const [progress, setProgress] = useState<ProgressState | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!mod) return null;

  return (
    <div style={styles.wrap}>
      <Link href="/" style={styles.back}>
        ← All modules
      </Link>
      <h1 style={{ marginBottom: 4 }}>
        Module {mod.number} — {mod.title}
      </h1>
      <p style={{ color: "var(--text-dim)", maxWidth: 700 }}>{mod.summary}</p>

      <div style={styles.list}>
        {mod.chapters.map((ch) => {
          const read = progress?.chaptersRead[`${mod.id}/${ch.id}`];
          const quizResult = progress?.chapterQuiz[`${mod.id}/${ch.id}`];
          return (
            <Link key={ch.id} href={`/module/${mod.id}/chapter/${ch.id}`} className="chapter-row" style={styles.chapterRow}>
              <div>
                <div style={{ fontWeight: 700 }}>
                  {ch.id} {ch.title}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 2 }}>{ch.roadmap}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                {quizResult && (
                  <span style={styles.scoreBadge}>
                    {Math.round((quizResult.score / quizResult.total) * 100)}%
                  </span>
                )}
                {read ? <span title="Marked complete">✅</span> : <span style={{ color: "var(--text-dim)" }}>→</span>}
              </div>
            </Link>
          );
        })}
      </div>

      <Link href={`/module/${mod.id}/quiz`} style={styles.moduleQuizBtn}>
        📝 Take Module {mod.number} Quiz ({mod.moduleQuiz.length} questions)
      </Link>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: { maxWidth: 800, margin: "0 auto", padding: "28px 20px 60px" },
  back: { color: "var(--accent)", textDecoration: "none", fontSize: 14 },
  list: { display: "flex", flexDirection: "column", gap: 10, marginTop: 24 },
  chapterRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    border: "1px solid var(--border)",
    borderRadius: 10,
    padding: "14px 18px",
    background: "var(--panel)",
    textDecoration: "none",
    color: "var(--text)",
  },
  scoreBadge: {
    fontSize: 12,
    fontWeight: 700,
    background: "var(--accent)",
    color: "#1c1a14",
    borderRadius: 999,
    padding: "2px 10px",
  },
  moduleQuizBtn: {
    display: "block",
    textAlign: "center",
    marginTop: 24,
    background: "var(--accent)",
    color: "#1c1a14",
    fontWeight: 700,
    borderRadius: 10,
    padding: "14px 20px",
    textDecoration: "none",
  },
};
