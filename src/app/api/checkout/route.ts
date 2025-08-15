import { NextResponse } from "next/server";

function makeOrderId() {
  const ts = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0,14);
  const rnd = Math.random().toString(36).slice(2,6).toUpperCase();
  return `UL-${ts}-${rnd}`;
}

export async function POST(req: Request) {
  const { service, amounts } = await req.json().catch(() => ({}));
  const total = Number(amounts?.total) || 0;
  if (!total || total < 1000) {
    return NextResponse.json({ error: "Invalid total amount" }, { status: 400 });
  }

  const serverKey = process.env.MIDTRANS_SERVER_KEY || "";
  const isProd = String(process.env.MIDTRANS_IS_PRODUCTION) === "true";
  const baseUrl = isProd
    ? "https://app.midtrans.com/snap/v1/transactions"
    : "https://app.sandbox.midtrans.com/snap/v1/transactions";
  if (!serverKey) {
    return NextResponse.json({ error: "Server key not configured" }, { status: 500 });
  }

  const order_id = makeOrderId();
  const APP_URL = (process.env.APP_URL ?? "http://localhost:3000").replace(/\/+$/,"");

  const payload = {
    transaction_details: {
      order_id,
      gross_amount: total,
    },
    item_details: [
      {
        id: service?.slug ?? "service",
        price: total,
        quantity: 1,
        name: service?.title ?? "Layanan",
      },
    ],
    credit_card: { secure: true },
    // Redirects
    callbacks: { finish: `${APP_URL}/payment/success?order_id=${order_id}` },
    finish_redirect_url: `${APP_URL}/payment/success?order_id=${order_id}`,
    unfinish_redirect_url: `${APP_URL}/payment/pending?order_id=${order_id}`,
    error_redirect_url: `${APP_URL}/payment/error?order_id=${order_id}`,
  };

  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Basic " + Buffer.from(serverKey + ":").toString("base64"),
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    return NextResponse.json({ error: "Midtrans error", detail: JSON.stringify(data) }, { status: res.status });
  }

  return NextResponse.json({ order_id, midtrans: data });
}
