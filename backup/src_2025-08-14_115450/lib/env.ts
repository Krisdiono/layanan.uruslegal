// Sumber kebenaran base URL API solusi
export const SERVER_SERVICES_BASE =
  process.env.SERVICES_API_BASE || "https://portal.uruslegal.id/api";

// Dipakai di client hanya kalau benar2 perlu (sebaiknya pakai proxy /api/services)
export const PUBLIC_SERVICES_BASE =
  process.env.NEXT_PUBLIC_SERVICES_API_BASE || SERVER_SERVICES_BASE;
