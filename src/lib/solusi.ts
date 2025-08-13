import "server-only";
import { loadCatalog, type ServiceItem } from "./catalog";

export type CatalogItem = ServiceItem;

export async function getLayananList(): Promise<CatalogItem[]> {
  return await loadCatalog();
}
export async function getLayananBySlug(slug: string): Promise<CatalogItem | undefined> {
  const rows = await loadCatalog();
  return rows.find((it) => (it as any)?.slug === slug);
}

/** Back-compat (kalau ada file lama pakai nama ini) */
export async function listCatalog(): Promise<CatalogItem[]> { return getLayananList(); }
export async function getCatalog(): Promise<CatalogItem[]> { return getLayananList(); }
export async function getServiceBySlug(slug: string) { return getLayananBySlug(slug); }
