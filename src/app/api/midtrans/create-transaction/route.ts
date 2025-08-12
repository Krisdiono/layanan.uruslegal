import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const serverKey = process.env.MIDTRANS_SERVER_KEY!;
  const auth = Buffer.from(serverKey + ":").toString("base64");

  const res = await fetch("https://app.sandbox.midtrans.com/snap/v1/transactions", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      transaction_details: {
        order_id: `UL-${body.serviceSlug}-${Date.now()}`,
        gross_amount: body.amount
      },
      item_details: [
        { id: body.serviceSlug, price: body.amount, quantity: 1, name: body.serviceTitle }
      ],
      customer_details: {
        first_name: body.customer?.name || "UrusLegal",
        email: body.customer?.email || "no-email@uruslegal.id"
      }
    })
  });

  const json = await res.json();
  return NextResponse.json({ token: json.token });
}
