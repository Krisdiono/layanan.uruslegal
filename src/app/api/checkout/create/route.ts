import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { orderId, amount, customer, items } = await req.json();
  if (!orderId || !amount) return NextResponse.json({ error: "Bad req" }, { status: 400 });

  const serverKey = process.env.MIDTRANS_SERVER_KEY!;
  const auth = Buffer.from(serverKey + ":").toString("base64");

  const body = {
    transaction_details: { order_id: orderId, gross_amount: amount },
    item_details: (items ?? []).map((it: any) => ({
      id: it.id, price: it.price, quantity: it.qty ?? 1, name: it.name,
    })),
    customer_details: {
      first_name: customer?.name ?? "UrusLegal",
      email: customer?.email ?? "no-reply@uruslegal.id",
      phone: customer?.phone ?? "000",
    },
    callbacks: {
      finish: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
    },
    credit_card: { secure: true }
  };

  const r = await fetch("https://app.sandbox.midtrans.com/snap/v1/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Basic ${auth}` },
    body: JSON.stringify(body),
  });

  const j = await r.json();
  if (!r.ok) return NextResponse.json(j, { status: r.status });
  return NextResponse.json({ token: j.token, redirect_url: j.redirect_url });
}
