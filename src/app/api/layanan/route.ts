import { NextResponse } from "next/server";
const BASE = process.env.SOLUSI_API_BASE!; // https://portal.uruslegal.id/ul/api
export const revalidate = 300;
export async function GET() {
  const r = await fetch(`${BASE}/layanan`, { cache: "force-cache" });
  const j = await r.json();
  return NextResponse.json(j, {
    headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=60" },
  });
}
