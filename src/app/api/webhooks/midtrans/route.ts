import { NextResponse } from "next/server";
import { updateStatus } from "@/lib/orders";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const orderId = body?.order_id || body?.merchant_order_id;
    const tx = (body?.transaction_status || "").toLowerCase();
    if (!orderId) return NextResponse.json({ ok:false, error:"missing_order_id" }, { status:400 });

    let status: "success"|"pending"|"expire"|"cancel"|"deny"|"error" = "pending";
    if (["settlement","capture","success"].includes(tx)) status = "success";
    else if (tx==="expire") status = "expire";
    else if (tx==="cancel") status = "cancel";
    else if (tx==="deny") status = "deny";
    else if (tx==="pending") status = "pending";
    else status = "error";

    const ok = updateStatus(String(orderId), status as any, body);
    if (!ok) return NextResponse.json({ ok:false, error:"order_not_found" }, { status:404 });

    // Optional bridge to Perfex (via ulcatalog)
    try {
      const BASE = process.env.SOLUSI_API_BASE || "";
      if (BASE && status==="success") {
        await fetch(`${BASE.replace(/\/+$/,"")}/ul/api/orders`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id: String(orderId), status, midtrans: body }),
        }).catch(()=>{});
      }
    } catch {}

    return NextResponse.json({ ok:true, id: String(orderId), status });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message || "bad_request" }, { status:400 });
  }
}
