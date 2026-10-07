import { Chapter } from "@/lib/content/types";
import Md from "./Md";

export default function ChapterContent({ chapter }: { chapter: Chapter }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <section>
        <h1 style={{ marginBottom: 4 }}>
          📘 {chapter.id} — {chapter.title}
        </h1>
        <p style={{ color: "var(--text-dim)", fontSize: 15 }}>{chapter.roadmap}</p>
      </section>

      {chapter.keyTerms.length > 0 && (
        <section>
          <h3>🔑 Key Terms</h3>
          <dl style={{ display: "grid", gap: 10 }}>
            {chapter.keyTerms.map((kt) => (
              <div key={kt.term} style={{ background: "var(--panel-2)", border: "1px solid var(--border)", borderRadius: 8, padding: "10px 14px" }}>
                <dt style={{ fontWeight: 700 }}>{kt.term}</dt>
                <dd style={{ margin: "4px 0 0", color: "var(--text-dim)" }}>{kt.def}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section>
        <h3>📖 Core Concept</h3>
        <Md>{chapter.explanation}</Md>
      </section>

      <section>
        <h3>⚖️ Legal Basis</h3>
        <Md>{chapter.legalBasis}</Md>
      </section>

      <section>
        <h3>🧮 Worked Examples</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {chapter.examples.map((ex) => (
            <div key={ex.title} style={{ border: "1px solid var(--border)", borderRadius: 10, padding: 16, background: "var(--panel)" }}>
              <div style={{ fontWeight: 700, marginBottom: 6, color: "var(--accent)" }}>{ex.title}</div>
              <Md>{ex.body}</Md>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>⚠️ Nuances & Edge Cases</h3>
        <ul style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 20 }}>
          {chapter.nuances.map((n, i) => (
            <li key={i}>
              <Md>{n}</Md>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ background: "var(--panel-2)", border: "1px solid var(--border)", borderRadius: 10, padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>✅ Quick Recap</h3>
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          {chapter.recap.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
