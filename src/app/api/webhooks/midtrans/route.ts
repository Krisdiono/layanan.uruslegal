import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const data = await req.json();
  const { order_id, status_code, gross_amount, signature_key, transaction_status } = data;

  const serverKey = process.env.MIDTRANS_SERVER_KEY!;
  const sign = crypto.createHash("sha512")
    .update(order_id + status_code + gross_amount + serverKey)
    .digest("hex");

  const verified = sign === signature_key;
  if (!verified) return NextResponse.json({ ok: false }, { status: 401 });

  // TODO: update order status in DB (for now, just log)
  console.log("MIDTRANS:", order_id, transaction_status);
  return NextResponse.json({ ok: true });
}
