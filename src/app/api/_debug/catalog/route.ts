import * as mod from "@/lib/catalog";
import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ keys: Object.keys(mod) });
}
