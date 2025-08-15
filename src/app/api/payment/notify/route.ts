import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.json().catch(()=> ({} as any));
  const serverKey = process.env.MIDTRANS_SERVER_KEY || "";
  const raw = String(body.order_id ?? "") + String(body.status_code ?? "") + String(body.gross_amount ?? "") + serverKey;
  const sig = crypto.createHash("sha512").update(raw).digest("hex");
  const valid = (String(body.signature_key ?? "").toLowerCase() === sig.toLowerCase());

  console.log("[midtrans:notify]", { valid, order_id: body.order_id, transaction_status: body.transaction_status });
  // TODO: simpan ke DB / kirim ke Perfex

  return NextResponse.json({ ok: true, valid });
}
