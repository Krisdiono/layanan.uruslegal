import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const total: number = body?.amounts?.total;
    const service = body?.service;
    if (!total || Number.isNaN(total) || total <= 0)
      return NextResponse.json({ error: "Invalid total" }, { status: 400 });

    const isProd =
      String(process.env.MIDTRANS_IS_PRODUCTION).toLowerCase() === "true";
    const base = isProd
      ? "https://api.midtrans.com"
      : "https://app.sandbox.midtrans.com";
    const serverKey = process.env.MIDTRANS_SERVER_KEY!;
    const auth = "Basic " + Buffer.from(serverKey + ":").toString("base64");

    const payload = {
      transaction_details: {
        order_id: `UL-${Date.now()}`,
        gross_amount: Math.round(total),
      },
      item_details: [
        {
          id: service?.slug,
          name: service?.title,
          price: Math.round(total),
          quantity: 1,
        },
      ],
      callbacks: { finish: `${process.env.APP_URL}/payment/finish` },
      credit_card: { secure: true },
    };

    const res = await fetch(`${base}/snap/v1/transactions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: auth },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const json = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { error: "Midtrans error", detail: JSON.stringify(json) },
        { status: 502 },
      );
    }
    return NextResponse.json({
      order_id: payload.transaction_details.order_id,
      midtrans: json,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: "Server error", detail: e?.message },
      { status: 500 },
    );
  }
}
