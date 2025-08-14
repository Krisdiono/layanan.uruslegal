import { NextResponse } from "next/server";
import { listLayanan } from "@/lib/solusi";
export async function GET() {
  return NextResponse.json(await listLayanan());
}
