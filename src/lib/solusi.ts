// @ts-nocheck
import localServices from "@/data/services.json";

// Bentuk data minimal yang UI kita butuh
export type Layanan = { slug: string; title: string; summary?: string; price?: number };

export async function getLayananList(): Promise<Layanan[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ? "" : ""}/api/solusi/layanan`, {
      // ganti "layanan" sesuai endpoint mu, mis. "products"
      next: { revalidate: 60 }, // cache 60s di edge
    });
    if (!res.ok) throw new Error("bad status");
    const data = await res.json();
    // TODO: sesuaikan mapping sesuai payload Perfex kamu
    return data.map((x: any) => ({
      slug: x.slug || x.id || String(x.product_id),
      title: x.title || x.name,
      summary: x.summary || x.description,
      price: Number(x.price ?? x.amount ?? 0) || undefined,
    }));
  } catch {
    // fallback lokal kalau API down
    return (localServices as any[]).map((x) => ({
      slug: x.slug,
      title: x.title,
      summary: x.summary,
      price: x.price,
    }));
  }
}

export async function getLayananBySlug(slug: string): Promise<Layanan | null> {
  // Bisa ambil detail langsung atau filter dari list
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
