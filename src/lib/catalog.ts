// src/lib/catalog.ts
import { notFound } from "next/navigation";

type Svc = {
  slug: string; title: string; price?: number; sale_price?: number;
  category?: string; image_url?: string; detail?: any;
};

const PERFEX_BASE = (process.env.SOLUSI_API_BASE || "").replace(/\/+$/,""); 
const SOLUSI_FALLBACK = "https://solusi.uruslegal.id/api.php"; // read-only

function slugify(s: string) {
  return s.normalize("NFKD").replace(/[^a-zA-Z0-9\s-]/g,"")
    .trim().replace(/\s+/g,"-").toLowerCase();
}

export async function listServices(): Promise<Svc[]> {
  // coba Perfex dulu
  if (PERFEX_BASE) {
    try {
      const r = await fetch(`${PERFEX_BASE}/layanan`, { next:{ revalidate:300 }});
      if (r.ok) {
        const rows = await r.json() as any[];
        return rows.map((x:any)=>({
          slug: x.slug || slugify(x.title || x.name || ""),
          title: x.title || x.name,
          price: x.price ?? x.base_price,
          sale_price: x.sale_price,
          category: x.category,
          image_url: x.image_url || x.image
        }));
      }
    } catch {}
  }
  // fallback ke solusi API
  const r = await fetch(SOLUSI_FALLBACK, { next:{ revalidate:300 }});
  const j = await r.json();
  return (j.services || []).map((x:any)=>({
    slug: slugify(x.name),
    title: x.name,
    price: Number(x.price ?? x.fee ?? 0),
    sale_price: Number(x.fee_discount ?? 0) > 0 ? Number(x.price ?? x.fee) : undefined,
    category: x.category,
    image_url: x.image,
    detail: x.detail,
  }));
}

export async function getService(slug: string): Promise<Svc> {
  const list = await listServices();
  const svc = list.find(s => s.slug === slug);
  if (!svc) notFound();
  return svc;
}
