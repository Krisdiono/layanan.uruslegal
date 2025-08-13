// src/lib/catalog.ts
import catalog from "@/data/catalog.json";
import { notFound } from "next/navigation";

export type CatalogItem = {
  slug: string;
  category?: string;
  title: string;
  summary?: string;
  description?: string;
  detail?: { inclusions?: string[]; process?: string[] };
  timeline?: string;
  // optional – biar seragam dgn FE:
  price?: number;
  sale_price?: number;
  base_price?: number;
  image_url?: string;
};

export function listCatalog(): CatalogItem[] {
  return catalog as CatalogItem[];
}

export function getCatalog(slug: string): CatalogItem | undefined {
  return (catalog as CatalogItem[]).find((x) => x.slug === slug);
}

/* ===== Compat exports yg dipakai di halaman ===== */
export type Svc = CatalogItem;

export function listServices(): Svc[] {
  return listCatalog();
}

export async function getService(slug: string): Promise<Svc> {
  const svc = getCatalog(slug);
  if (!svc) notFound();
  return svc!;
}
const Catalog = { listServices, getService, listCatalog, getCatalog };
export default Catalog;
/* ================================================= */
