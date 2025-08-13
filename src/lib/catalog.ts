// src/lib/catalog.ts
import { notFound } from "next/navigation";

export type Svc = {
  slug: string;
  title: string;
  price?: number;
  sale_price?: number;
  base_price?: number;
  category?: string;
  image_url?: string;
  summary?: string;
  detail?: any;
};

const PERFEX_BASE = (process.env.SOLUSI_API_BASE || "").replace(/\/+$/, "");
const SOLUSI_FALLBACK = "https://solusi.uruslegal.id/api.php";

function slugify(s: string) {
  return s
    .normalize("NFKD")
    .replace(/[^A-Za-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
}

async function fetchJSON<T>(url: string, reval = 300): Promise<T> {
  const r = await fetch(url, { next: { revalidate: reval } });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return (await r.json()) as T;
}

/** LIST: coba Perfex -> fallback ke solusi */
export async function listServices(): Promise<Svc[]> {
  // 1) Perfex
  if (PERFEX_BASE) {
    try {
      const rows = await fetchJSON<any[]>(`${PERFEX_BASE}/layanan`);
      return rows.map((x) => ({
        slug: x.slug || slugify(x.title || x.name || ""),
        title: x.title || x.name,
        price: x.price ?? x.base_price ?? x.fee ?? 0,
        sale_price: x.sale_price ?? x.fee_discount ?? undefined,
        base_price: x.base_price ?? undefined,
        category: x.category,
        image_url: x.image_url || x.image,
        summary: x.summary,
      }));
    } catch (_) {
      // jatuh ke fallback
    }
  }

  // 2) fallback ke solusi
  const j = await fetchJSON<any>(SOLUSI_FALLBACK);
  const list: any[] = Array.isArray(j?.services) ? j.services : [];
  return list.map((x) => ({
    slug: slugify(x.name),
    title: x.name,
    price: Number(x.price ?? x.fee ?? 0),
    sale_price: Number(x.fee_discount ?? 0) > 0 ? Number(x.price ?? x.fee) : undefined,
    category: x.category,
    image_url: x.image,
    detail: x.detail,
  }));
}

/** DETAIL by slug: cari dari list (cukup cepat & konsisten antar sumber) */
export async function getService(slug: string): Promise<Svc> {
  const list = await listServices();
  const svc = list.find((s) => s.slug === slug);
  if (!svc) notFound();
  return svc!;
}

// PENTING: jangan ada "export default ..." di file ini.
// Kita hanya pakai NAMED exports (listServices, getService).
