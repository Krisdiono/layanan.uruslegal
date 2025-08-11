// /src/app/api/services/route.ts
import { NextResponse } from "next/server";
import { svcListSchema } from "@/lib/schema";

export const revalidate = 300;

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SERVICES_API_BASE!;
  const r = await fetch(`${base}/services`, { cache: "force-cache" });
  const j = await r.json();
  const parsed = svcListSchema.parse(j);
  return NextResponse.json(parsed, {
    headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=60" },
  });
}
