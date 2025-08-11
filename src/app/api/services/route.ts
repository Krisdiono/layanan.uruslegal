import { NextResponse } from "next/server";
import { SERVER_SERVICES_BASE } from "@/lib/env";
import { svcListSchema } from "@/lib/schema";

export const revalidate = 300; // 5 menit

export async function GET() {
  const r = await fetch(`${SERVER_SERVICES_BASE}/services`, { cache: "force-cache" });
  const j = await r.json();
  const parsed = svcListSchema.parse(j);
  return NextResponse.json(parsed, {
    headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=60" }
  });
}
