// src/lib/solusi.ts
import local from "@/data/services.json"; // <-- pastikan file ini ada

export type Layanan = {
  id: string | number;
  slug: string;
  title: string;
  summary?: string;
  price?: string | number;
  description?: string;
};

const BASE = process.env.SOLUSI_API_BASE ?? "https://portal.uruslegal.id/ul/api"; // fallback aman

async function get<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${BASE}${path}`;
  const r = await fetch(url, { next: { revalidate: 300 }, ...init });
  if (!r.ok) throw new Error(`Fetch ${url} failed: ${r.status}`);
  return r.json();
}

export async function listLayanan(): Promise<Layanan[]> {
  try {
    const data = await get<Layanan[]>("/layanan");
    return data.map(d => ({
      ...d,
      price: typeof d.price === "string" ? Number(d.price) : d.price,
    }));
  } catch {
    // Fallback ke static JSON agar build tidak gagal
    return (local as any[]).map((d, i) => ({
      id: d.id ?? i + 1,
      slug: d.slug,
      title: d.title,
      summary: d.summary,
      price: typeof d.price === "string" ? Number(d.price) : d.price,
      description: d.description,
    }));
  }
}

export async function getLayanan(slug: string): Promise<Layanan | null> {
  try {
    const d = await get<Layanan>(`/layanan/${encodeURIComponent(slug)}`);
    return { ...d, price: typeof d.price === "string" ? Number(d.price) : d.price };
  } catch {
    // Fallback cari dari static JSON
    const d = (local as any[]).find(x => x.slug === slug);
    return d
      ? {
          id: d.id ?? 0,
          slug: d.slug,
          title: d.title,
          summary: d.summary,
          price: typeof d.price === "string" ? Number(d.price) : d.price,
          description: d.description,
        }
      : null;
  }
}
