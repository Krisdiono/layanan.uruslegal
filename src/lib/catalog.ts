import catalog from "@/data/catalog.json";

export type CatalogItem = {
  slug: string;
  category?: string;
  title: string;
  summary?: string;
  description?: string;
  detail?: { inclusions?: string[]; process?: string[] };
  timeline?: string;
};

export function listCatalog(): CatalogItem[] {
  return catalog as CatalogItem[];
}

export function getCatalog(slug: string): CatalogItem | undefined {
  return (catalog as CatalogItem[]).find((x) => x.slug === slug);
}
