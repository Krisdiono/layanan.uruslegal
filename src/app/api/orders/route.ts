import { NextResponse } from "next/server";
import { readAll } from "@/lib/orders";

export async function GET() {
  const { orders } = readAll();
  return NextResponse.json({ ok:true, count: orders.length, orders });
}
