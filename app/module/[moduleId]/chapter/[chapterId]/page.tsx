import { MODULES } from "@/lib/content";
import { notFound } from "next/navigation";
import ChapterClient from "./ChapterClient";

export function generateStaticParams() {
  const params: { moduleId: string; chapterId: string }[] = [];
  for (const mod of MODULES) {
    for (const ch of mod.chapters) {
      params.push({ moduleId: mod.id, chapterId: ch.id });
    }
  }
  return params;
}

export default async function ChapterPage({ params }: { params: Promise<{ moduleId: string; chapterId: string }> }) {
  const resolved = await params;
  const mod = MODULES.find((m) => m.id === resolved.moduleId);
  const chapter = mod?.chapters.find((c) => c.id === resolved.chapterId);
  if (!mod || !chapter) notFound();
  return <ChapterClient moduleId={resolved.moduleId} chapterId={resolved.chapterId} />;
}
