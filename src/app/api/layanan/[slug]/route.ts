import "server-only";
import { NextResponse } from "next/server";
import { getLayananBySlug } from "@/lib/solusi";

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const svc = await getLayananBySlug(params.slug);
  if (!svc) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(svc);
}
