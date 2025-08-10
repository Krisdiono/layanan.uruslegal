// @ts-nocheck
import localServices from "@/data/services.json";

export type Layanan = { slug: string; title: string; summary?: string; price?: number };

export async function getLayananList(): Promise<Layanan[]> {
  try {
    // ganti "layanan" sesuai endpoint Perfex kamu (mis. "products")
    const res = await fetch(`/api/solusi/layanan`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("bad status");
    const data = await res.json();

    // TODO: mapping sesuai response Perfex kamu
    return (Array.isArray(data) ? data : data?.data || []).map((x: any) => ({
      slug: x.slug || x.id || String(x.product_id),
      title: x.title || x.name,
      summary: x.summary || x.description,
      price: Number(x.price ?? x.amount ?? 0) || undefined,
    }));
  } catch {
    return (localServices as any[]).map((x) => ({
      slug: x.slug,
      title: x.title,
      summary: x.summary,
      price: x.price,
    }));
  }
}

export async function getLayananBySlug(slug: string): Promise<Layanan | null> {
  try {
    const res = await fetch(`/api/solusi/layanan/${slug}`, { cache: "no-store" });
    if (res.ok) {
      const x = await res.json();
      return {
        slug: x.slug || x.id || String(x.product_id),
        title: x.title || x.name,
        summary: x.summary || x.description,
        price: Number(x.price ?? x.amount ?? 0) || undefined,
      };
    }
  } catch {}
  const list = await getLayananList();
  return list.find((s) => s.slug == slug) || null;
}
