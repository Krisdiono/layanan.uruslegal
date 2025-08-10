// src/lib/solusi.ts
export type Layanan = {
  id: string | number;
  slug: string;
  title: string;
  summary?: string;
  price?: string | number;
  description?: string;
};

const BASE = process.env.SOLUSI_API_BASE!; // e.g. https://portal.uruslegal.id/ul/api

async function get<T>(path: string, init?: RequestInit): Promise<T> {
  const r = await fetch(`${BASE}${path}`, {
    next: { revalidate: 300 }, // cache 5 menit
    ...init,
  });
  if (!r.ok) throw new Error(`Fetch ${path} failed: ${r.status}`);
  return r.json();
}

export async function listLayanan(): Promise<Layanan[]> {
  const data = await get<Layanan[]>('/layanan');
  return data.map(d => ({
    ...d,
    price: typeof d.price === 'string' ? Number(d.price) : d.price,
  }));
}

export async function getLayanan(slug: string): Promise<Layanan | null> {
  try {
    const d = await get<Layanan>(`/layanan/${encodeURIComponent(slug)}`);
    return { ...d, price: typeof d.price === 'string' ? Number(d.price) : d.price };
  } catch {
    return null;
  }
}
