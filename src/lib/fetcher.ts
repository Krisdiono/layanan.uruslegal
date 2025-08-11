import "server-only";
import { svcListSchema, svcSchema } from "@/lib/schema";
import fallback from "@/data/services.fallback.json";

// Base URL API solusi.uruslegal
const base = process.env.NEXT_PUBLIC_SERVICES_API_BASE!;

// Ambil list layanan (revalidate = 5 menit)
export async function fetchServices() {
  const r = await fetch(`${base}/services`, { next: { revalidate: 300 } });
  if (!r.ok) throw new Error(`Fetch services failed: ${r.status}`);
  const j = await r.json();
  return svcListSchema.parse(j);
}

// Ambil detail layanan berdasarkan slug
export async function fetchServiceBySlug(slug: string) {
  const r = await fetch(`${base}/services/${slug}`, { next: { revalidate: 300 } });
  if (!r.ok) throw new Error(`Fetch service failed: ${r.status}`);
  const j = await r.json();
  return svcSchema.parse(j);
}

// Safe fetch: fallback ke JSON lokal jika API down
export async function safeFetchServices() {
  try {
    return await fetchServices();
  } catch (e) {
    console.warn("API down, using fallback", e);
    return svcListSchema.parse(fallback);
  }
}
