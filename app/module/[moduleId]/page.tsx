import { MODULES } from "@/lib/content";
import { notFound } from "next/navigation";
import ModuleClient from "./ModuleClient";

export function generateStaticParams() {
  return MODULES.map((m) => ({ moduleId: m.id }));
}

export default async function ModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const resolved = await params;
  const mod = MODULES.find((m) => m.id === resolved.moduleId);
  if (!mod) notFound();
  return <ModuleClient moduleId={resolved.moduleId} />;
}
