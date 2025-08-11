import { NextResponse } from "next/server";
const BASE = process.env.SOLUSI_API_BASE!; // https://portal.uruslegal.id/ul/api

export async function POST(req: Request) {
  try {
    const { slug } = (await req.json()) as { slug?: string };
    if (!slug) return NextResponse.json({ error: "Missing slug" }, { status: 400 });

    // Ambil harga authoritative dari Perfex
    const rs = await fetch(`${BASE}/layanan/${slug}`, { cache: "no-store" });
    if (!rs.ok) return NextResponse.json({ error: "Service not found" }, { status: 404 });
    const svc = await rs.json();

    const basePrice = parseFloat(String(svc?.price ?? 0)) || 0;
    const discount = parseFloat(String(svc?.fee_discount ?? 0)) || 0; // kalau gak ada, 0
    const final = Math.max(0, basePrice - discount);

    const feePct = parseFloat(process.env.GATEWAY_FEE_PCT ?? "0.03");
    const gatewayFee = Math.round(final * feePct);
    const grossAmount = final + gatewayFee;

    const orderId = `${slug}-${Date.now()}`;

    const serverKey = process.env.MIDTRANS_SERVER_KEY!;
    const auth = Buffer.from(serverKey + ":").toString("base64");

    const body = {
      transaction_details: { order_id: orderId, gross_amount: grossAmount },
      item_details: [
        { id: svc.id ?? slug, name: svc.title ?? slug, price: final, quantity: 1 },
        { id: "fee", name: "Biaya Gateway", price: gatewayFee, quantity: 1 },
      ],
      callbacks: { finish: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success` },
      credit_card: { secure: true },
    };

    const r = await fetch("https://app.sandbox.midtrans.com/snap/v1/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Basic ${auth}` },
      body: JSON.stringify(body),
    });

    const j = await r.json();
    if (!r.ok) return NextResponse.json({ error: j?.status_message || "Midtrans error" }, { status: r.status });
    return NextResponse.json({ token: j.token, redirect_url: j.redirect_url });
  } catch (e: any) {
    console.error("checkout/create error:", e);
    return NextResponse.json({ error: e?.message || "Unexpected error" }, { status: 500 });
  }
}
