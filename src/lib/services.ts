// /src/lib/services.ts — client-safe helper
import catalog from "@/data/catalog.json";
import type { CatalogItem } from "@/lib/catalog";
import { getPrice, computeFinal } from "@/lib/prices";

export type Layanan = CatalogItem & { price?: number | null };

/**
 * Ambil layanan secara sinkron (aman dipakai di komponen client).
 * Hitung harga final dari prices.json (tanpa gateway fee).
 */
export function getLayananBySlugSync(slug: string): Layanan | undefined {
  const it = (catalog as any[]).find(x => String(x.slug) === String(slug));
  if (!it) return undefined;
  const pr = getPrice((it as any).slug);
  const calc = computeFinal(pr);
  return { ...(it as any), price: calc.rfq ? null : calc.final };
}
