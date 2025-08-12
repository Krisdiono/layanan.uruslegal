// src/lib/solusi.ts
import type { Layanan } from "@/types/service";
import catalog from "@/data/catalog.json";
import prices from "@/data/prices.json";

const priceMap = new Map<string, number | null>();
(prices as any[]).forEach(p => priceMap.set(String(p.slug), p.price ?? null));

const all: Layanan[] = (catalog as any[]).map((it) => ({
  slug: String(it.slug),
  title: String(it.title),
  summary: it.summary ?? "",
  description: it.description ?? "",
  detail: it.detail ?? undefined,     // <- optional OK
  timeline: it.timeline ?? "",
  category: it.category ?? "",
  price: priceMap.has(String(it.slug)) ? (priceMap.get(String(it.slug)) as any) : null,
}));

export async function listLayanan(): Promise<Layanan[]> {
  return all;
}

export async function getLayanan(slug: string): Promise<Layanan | undefined> {
  return all.find(s => s.slug === String(slug));
}
export type PriceItem = { label: string; amount: number };

export type Layanan = {
  id: string | number;
  slug: string;
  title: string;
  summary?: string;
  price?: number;                 // base price
  description?: string;
  requirements?: string[];        // Persyaratan
  timeline?: string[];            // Langkah / estimasi
  priceBreakdown?: PriceItem[];   // Rincian biaya
};
