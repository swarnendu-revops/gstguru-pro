"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getModule, getChapter, getAdjacentChapters } from "@/lib/content";
import { markChapterRead, recordChapterQuiz, loadProgress } from "@/lib/progress";
import ChapterContent from "@/components/ChapterContent";
import QuizRunner from "@/components/QuizRunner";

export default function ChapterClient({ moduleId, chapterId }: { moduleId: string; chapterId: string }) {
  const mod = getModule(moduleId);
  const chapter = getChapter(moduleId, chapterId);
  const { prev, next } = getAdjacentChapters(moduleId, chapterId);
  const [showQuiz, setShowQuiz] = useState(false);

  const [read, setRead] = useState(false);
  const [storageNotice, setStorageNotice] = useState("");
  useEffect(() => {
    setRead(!!loadProgress().chaptersRead[`${moduleId}/${chapterId}`]);
    setShowQuiz(false);
  }, [moduleId, chapterId]);

  if (!mod || !chapter) return null;

  return (
    <div style={styles.wrap}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
        <Link href={`/module/${mod.id}`} style={styles.back}>
          ← Module {mod.number}: {mod.title}
        </Link>
        <Link href="/" style={styles.back}>
          All modules
        </Link>
      </div>

      <ChapterContent chapter={chapter} />
      <div className="read-control">
        <button disabled={read} onClick={() => {
          if (markChapterRead(moduleId, chapterId)) setRead(true);
          else setStorageNotice("Browser storage is unavailable. You can keep learning, but completion cannot be saved here.");
        }}>{read ? "✓ Chapter marked complete" : "Mark chapter complete"}</button>
        <p role="status">{storageNotice || "Mark complete after reading. Quiz scores are saved separately."}</p>
      </div>

      <div style={{ marginTop: 32 }}>
        {!showQuiz ? (
          <button style={styles.quizToggle} onClick={() => setShowQuiz(true)}>
            📝 Take Chapter Quiz ({chapter.quiz.length} questions)
          </button>
        ) : (
          <QuizRunner
            title={`Chapter ${chapter.id} Quiz`}
            questions={chapter.quiz}
            passPercent={60}
            onComplete={(score, total) => recordChapterQuiz(moduleId, chapterId, score, total)}
          />
        )}
      </div>

      <div className="chapter-navigation" style={styles.navRow}>
        {prev ? (
          <Link href={`/module/${prev.moduleId}/chapter/${prev.chapterId}`} style={styles.navBtn}>
            ← Previous chapter
          </Link>
        ) : (
          <span />
        )}
        {next && next.moduleId === moduleId ? (
          <Link href={`/module/${next.moduleId}/chapter/${next.chapterId}`} style={styles.navBtn}>
            Next chapter →
          </Link>
        ) : (
          <Link href={`/module/${mod.id}/quiz`} style={styles.navBtn}>
            Module Quiz →
          </Link>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: { maxWidth: 760, margin: "0 auto", padding: "28px 20px 60px" },
  back: { color: "var(--accent)", textDecoration: "none", fontSize: 14 },
  quizToggle: {
    width: "100%",
    background: "var(--accent)",
    color: "#1c1a14",
    fontWeight: 700,
    border: "none",
    borderRadius: 10,
    padding: "14px 20px",
    cursor: "pointer",
    fontSize: 15,
  },
  navRow: { display: "flex", justifyContent: "space-between", marginTop: 32 },
  navBtn: {
    color: "var(--accent)",
    textDecoration: "none",
    fontWeight: 600,
    border: "1px solid var(--border)",
    borderRadius: 8,
    padding: "8px 16px",
  },
};
