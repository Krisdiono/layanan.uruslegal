import data from "@/data/catalog.json";

export type Service = {
  slug: string;
  title: string;
  summary?: string;
  category?: string;
  price?: number;
  sale_price?: number;
  base_price?: number;
  currency?: string;
  image_url?: string;
};

export function listServices(): Service[] {
  return data as Service[];
}
export function getService(slug: string): Service | undefined {
  return (data as Service[]).find((s) => s.slug === slug);
}
export function getPrice(s: Service): number {
  return s.price ?? s.sale_price ?? s.base_price ?? 0;
}
