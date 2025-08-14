import catalog from "@/data/catalog.json";

export type Svc = {
  slug: string; title: string; summary?: string; description?: string;
  price?: number | null; sale_price?: number | null; base_price?: number | null;
  currency?: string; category?: string; image_url?: string;
  [k: string]: any;
};

export function listServices(): Svc[] { return catalog as Svc[]; }
export function getService(slug: string): Svc | undefined {
  return (catalog as Svc[]).find((x) => x.slug === slug);
}
/** Harga final TANPA biaya tambahan apa pun */
export function getPrice(s: Svc): number {
  return (s.price ?? s.sale_price ?? s.base_price ?? 0) as number;
}
