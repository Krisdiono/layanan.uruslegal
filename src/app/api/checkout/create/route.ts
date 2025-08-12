import { NextRequest, NextResponse } from "next/server";
import { getPrice, computeFinal } from "@/lib/prices";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const slug = String(body?.slug || "");
    const metaId = body?.metaId ? String(body.metaId) : null;

    const pr = getPrice(slug);
    const calc = computeFinal(pr);
    if (!pr || calc.rfq) {
      return NextResponse.json({ error: "no-price" }, { status: 400 });
    }

    const feePct = Number(process.env.GATEWAY_FEE_PCT || "0.03");
    const gross = Math.round(calc.final * (1 + feePct));

    const serverKey = process.env.MIDTRANS_SERVER_KEY!;
    if (!serverKey) return NextResponse.json({ error: "missing-server-key" }, { status: 500 });
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
          order_id: `UL-${slug}-${metaId || Date.now()}`,
          gross_amount: gross
        },
        item_details: [
          { id: slug, price: gross, quantity: 1, name: slug }
        ],
        customer_details: {
          first_name: "UrusLegal",
          email: "customer@uruslegal.id"
        }
      })
    });

    const json = await res.json().catch(()=>null);
    if (!res.ok || !json?.token) {
      return NextResponse.json({ error: json?.status_message || "midtrans-error", details: json }, { status: 400 });
    }
    return NextResponse.json({ token: json.token });
  } catch (e:any) {
    return NextResponse.json({ error: e?.message || "unexpected" }, { status: 500 });
  }
}
