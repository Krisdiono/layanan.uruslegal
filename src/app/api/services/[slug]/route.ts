import { NextResponse } from "next/server";
const BASE = process.env.SERVICES_API_BASE!;
export const revalidate = 300;
export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const r = await fetch(`${BASE}/services/${params.slug}`, { cache: "force-cache" });
  const j = await r.json();
  return NextResponse.json(j, {
    headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=60" },
  });
}
