import type { Layanan } from "@/types/service";
// ...
const all: Layanan[] = (catalog as any[]).map((it) => ({
  slug: String(it.slug),
  title: String(it.title),
  summary: it.summary ?? "",
  description: it.description ?? "",
  detail: it.detail ?? undefined,
  timeline: it.timeline ?? "",
  category: it.category ?? "",
  price: priceMap.has(String(it.slug)) ? (priceMap.get(String(it.slug)) as any) : null,
}));

export async function listLayanan(): Promise<Layanan[]> { return all; }
export async function getLayanan(slug: string): Promise<Layanan | undefined> {
  return all.find(s => s.slug === String(slug));
}
