cat > src/lib/solusi.ts <<'TS'
import type { Svc } from "@/types/service";
import catalog from "@/data/catalog.json";
import prices from "@/data/prices.json";

// prices: { slug, price }[]
const priceMap = new Map<string, number | null>();
(prices as any[]).forEach(p => priceMap.set(String(p.slug), p.price ?? null));

const all: Svc[] = (catalog as any[]).map((it) => ({
  slug: String(it.slug),
  title: String(it.title),
  summary: it.summary ?? "",
  description: it.description ?? "",
  detail: it.detail ?? undefined,
  timeline: it.timeline ?? "",
  category: it.category ?? "",
  price: priceMap.has(String(it.slug)) ? (priceMap.get(String(it.slug)) as any) : null,
}));

export async function listLayanan(): Promise<Svc[]> {
  return all;
}

export async function getLayanan(slug: string): Promise<Svc | undefined> {
  const key = String(slug);
  return all.find(s => s.slug === key);
}
TS
