"use client";

// Tipis saja biar aman di client; kalau mau, bisa didefinisikan type-nya lebih lengkap.
export type CatalogItem = any;

export async function getLayananList(): Promise<CatalogItem[]> {
  const res = await fetch("/api/layanan", { cache: "no-store" });
  if (!res.ok) throw new Error("Gagal memuat layanan");
  return res.json();
}

export async function getLayananBySlug(slug: string): Promise<CatalogItem | undefined> {
  const res = await fetch(`/api/layanan/${encodeURIComponent(slug)}`, { cache: "no-store" });
  if (res.status === 404) return undefined;
  if (!res.ok) throw new Error("Gagal memuat layanan");
  return res.json();
}
