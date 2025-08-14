import { NextResponse } from "next/server";
import { getLayanan } from "@/lib/solusi";
export async function GET(_: Request, { params }: { params: { slug: string }}) {
  return NextResponse.json(await getLayanan(params.slug) ?? null);
}
