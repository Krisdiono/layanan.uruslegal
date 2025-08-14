import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const {
    order_id,
    status_code,
    gross_amount,
    signature_key,
    transaction_status,
  } = data || {};
  const sign = crypto
    .createHash("sha512")
    .update(
      `${order_id}${status_code}${gross_amount}${process.env.MIDTRANS_SERVER_KEY}`,
    )
    .digest("hex");
  if (sign !== signature_key)
    return NextResponse.json({ ok: false }, { status: 401 });
  console.log("MIDTRANS:", order_id, transaction_status);
  return NextResponse.json({ ok: true });
}
