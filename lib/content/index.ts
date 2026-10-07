import type { Module } from "./types";
import { module1 } from "./module1";
import { module2 } from "./module2";
import { module3 } from "./module3";
import { module4 } from "./module4";
import { module5 } from "./module5";
import { module6 } from "./module6";
import { module7 } from "./module7";
import { module8 } from "./module8";
import { module9 } from "./module9";
import { module10 } from "./module10";
export const MODULES: Module[] = [module1, module2, module3, module4, module5, module6, module7, module8, module9, module10];
export function getModule(moduleId: string): Module | undefined {
  return MODULES.find((m) => m.id === moduleId);
}

export function getChapter(moduleId: string, chapterId: string) {
  const mod = getModule(moduleId);
  if (!mod) return undefined;
  return mod.chapters.find((c) => c.id === chapterId);
}

export function getAdjacentChapters(moduleId: string, chapterId: string) {
  const mod = getModule(moduleId);
  if (!mod) return { prev: null, next: null, moduleIndex: -1, chapterIndex: -1 };
  const chapterIndex = mod.chapters.findIndex((c) => c.id === chapterId);
  const moduleIndex = MODULES.findIndex((m) => m.id === moduleId);

  let prev: { moduleId: string; chapterId: string } | null = null;
  let next: { moduleId: string; chapterId: string } | null = null;

  if (chapterIndex > 0) {
    prev = { moduleId, chapterId: mod.chapters[chapterIndex - 1].id };
  } else if (moduleIndex > 0) {
    const prevMod = MODULES[moduleIndex - 1];
    prev = { moduleId: prevMod.id, chapterId: prevMod.chapters[prevMod.chapters.length - 1].id };
  }

  if (chapterIndex < mod.chapters.length - 1) {
    next = { moduleId, chapterId: mod.chapters[chapterIndex + 1].id };
  } else if (moduleIndex < MODULES.length - 1) {
    const nextMod = MODULES[moduleIndex + 1];
    next = { moduleId: nextMod.id, chapterId: nextMod.chapters[0].id };
  }

  return { prev, next, moduleIndex, chapterIndex };
}

export function totalChapterCount(): number {
  return MODULES.reduce((sum, m) => sum + m.chapters.length, 0);
}
