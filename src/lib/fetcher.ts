import "server-only";
import { svcListSchema, svcSchema } from "@/lib/schema";
import fallback from "@/data/services.fallback.json";
import { SERVER_SERVICES_BASE } from "@/lib/env";

// --- SERVER FETCHERS (dipanggil dari Server Component / Route Handler) ---

export async function fetchServices() {
  const r = await fetch(`${SERVER_SERVICES_BASE}/services`, { next: { revalidate: 300 } });
  if (!r.ok) throw new Error(`Fetch services failed: ${r.status}`);
  const j = await r.json();
  return svcListSchema.parse(j);
}

export async function fetchServiceBySlug(slug: string) {
  const r = await fetch(`${SERVER_SERVICES_BASE}/services/${slug}`, { next: { revalidate: 300 } });
  if (!r.ok) throw new Error(`Fetch service failed: ${r.status}`);
  const j = await r.json();
  return svcSchema.parse(j);
}

export async function safeFetchServices() {
  try { return await fetchServices(); }
  catch (e) {
    console.warn("API down, using fallback", e);
    return svcListSchema.parse(fallback);
  }
}
