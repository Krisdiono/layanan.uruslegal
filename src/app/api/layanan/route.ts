import "server-only";
import { NextResponse } from "next/server";
import { getLayananList } from "@/lib/solusi";

export async function GET() {
  const list = await getLayananList();
  return NextResponse.json(list);
}
