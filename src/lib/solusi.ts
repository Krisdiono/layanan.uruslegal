// compat wrapper untuk kode lama yang masih import "@/lib/solusi"
import { listCatalog, getCatalog, type CatalogItem } from "@/lib/catalog";
import { getPrice, computeFinal } from "@/lib/prices";

export type Layanan = CatalogItem & { price?: number | null };

export async function listLayanan(): Promise<Layanan[]> {
  const rows = listCatalog();
  return rows.map((it) => {
    const pr = getPrice(it.slug);
    const calc = computeFinal(pr);
    return { ...it, price: calc.rfq ? null : calc.final };
  });
}

export async function getLayananBySlug(
  slug: string
): Promise<Layanan | undefined> {
  const it = getCatalog(slug);
  if (!it) return undefined;
  const pr = getPrice(it.slug);
  const calc = computeFinal(pr);
  return { ...it, price: calc.rfq ? null : calc.final };
}
