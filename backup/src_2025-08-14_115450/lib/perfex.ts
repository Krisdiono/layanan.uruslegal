import { notFound } from 'next/navigation';

const DEFAULT_BASE = 'https://portal.uruslegal.id/ul/api';
const RAW_BASE = (process.env.SOLUSI_API_BASE && process.env.SOLUSI_API_BASE.trim()) || DEFAULT_BASE;
const BASE = RAW_BASE.replace(/\/+$/, ''); // strip trailing slash
export const PERFEX_BASE = BASE;           // << dipakai debug

type ServiceItem = {
  slug: string; title: string; summary?: string;
  price?: number; sale_price?: number; base_price?: number;
  currency?: string; category?: string; image_url?: string; order_index?: number;
};
export type { ServiceItem };

async function fetchJSON<T>(url: string, reval = 900): Promise<T> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 5000);
  try {
    const res = await fetch(url, { signal: ctrl.signal, next: { revalidate: reval } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } finally { clearTimeout(t); }
}

export async function listServices(): Promise<ServiceItem[]> {
  return await fetchJSON<ServiceItem[]>(`${BASE}/layanan`);
}

export async function getService(slug: string): Promise<any> {
  try {
    return await fetchJSON<any>(`${BASE}/layanan/${encodeURIComponent(slug)}`);
  } catch {
    notFound();
  }
}
