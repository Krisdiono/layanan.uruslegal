// /src/app/api/services/[slug]/route.ts
import { NextResponse } from "next/server";
import { svcSchema } from "@/lib/schema";

type Params = { params: { slug: string } };
export const revalidate = 300;

export async function GET(_req: Request, { params }: Params) {
  const base = process.env.NEXT_PUBLIC_SERVICES_API_BASE!;
  const r = await fetch(`${base}/services/${params.slug}`, { cache: "force-cache" });
  const j = await r.json();
  const parsed = svcSchema.parse(j);
  return NextResponse.json(parsed, {
    headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=60" },
  });
}
