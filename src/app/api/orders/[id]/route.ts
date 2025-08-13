import { NextResponse } from "next/server";
import { getOrder } from "@/lib/orders";

export async function GET(_: Request, ctx: { params: { id: string } }) {
  const order = getOrder(ctx.params.id);
  if (!order) return NextResponse.json({ ok:false, error:"not_found" }, { status:404 });
  // Return the order object directly (pages expect top-level fields like .status)
  return NextResponse.json(order);
}
