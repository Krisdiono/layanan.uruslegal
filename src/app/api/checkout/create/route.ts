import { NextResponse } from "next/server";
import { svcSchema } from "@/lib/schema";

// Baca base API server-side (pakai server env kalau ada)
const SERVICE_BASE = process.env.SERVICES_API_BASE || process.env.NEXT_PUBLIC_SERVICES_API_BASE!;

export async function POST(req: Request) {
  try {
    const { slug } = await req.json() as { slug?: string };
    if (!slug) return NextResponse.json({ error: "Missing slug" }, { status: 400 });

    // 1) Ambil harga authoritative dari solusi.uruslegal (no-store)
    const rs = await fetch(`${SERVICE_BASE}/services/${slug}`, { cache: "no-store" });
    if (!rs.ok) {
      const t = await rs.text();
      throw new Error(`Fetch service failed: ${rs.status} ${t}`);
    }
    const svc = svcSchema.parse(await rs.json());

    // 2) Hitung fee di server (jangan percaya angka client)
    const feePct = parseFloat(process.env.GATEWAY_FEE_PCT ?? "0.03"); // server-only
    const basePrice = svc.price;
    const gatewayFee = Math.round(basePrice * feePct);
    const grossAmount = basePrice + gatewayFee;

    // 3) Buat order id unik
    const orderId = `${slug}-${Date.now()}`;

    // 4) Panggil Midtrans Snap
    const serverKey = process.env.MIDTRANS_SERVER_KEY!;
    const auth = Buffer.from(serverKey + ":").toString("base64");
    const body = {
      transaction_details: { order_id: orderId, gross_amount: grossAmount },
      item_details: [
        { id: svc.id, name: svc.title, price: basePrice, quantity: 1 },
        { id: "fee", name: "Biaya Gateway", price: gatewayFee, quantity: 1 },
      ],
      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
      },
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
