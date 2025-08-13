// src/lib/perfex.ts
export const SOLUSI_API_BASE = process.env.SOLUSI_API_BASE!;
export async function listServices(): Promise<any[]> {
  const res = await fetch(`${SOLUSI_API_BASE}/layanan`, { next: { revalidate: 900 } });
  if (!res.ok) throw new Error('Gagal fetch list layanan');
  return res.json();
}
export async function getService(slug: string): Promise<any> {
  const res = await fetch(`${SOLUSI_API_BASE}/layanan/${slug}`, { next: { revalidate: 900 } });
  if (!res.ok) throw new Error('Layanan tidak ditemukan');
  return res.json();
}
