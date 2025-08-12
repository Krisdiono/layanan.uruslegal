import { NextResponse } from "next/server";
import { updateStatus } from "@/lib/orders";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const orderId = body?.order_id || body?.merchant_order_id;
    const txStatus = (body?.transaction_status || "").toLowerCase();

    if (!orderId) return NextResponse.json({ ok:false, error:"missing_order_id" }, { status:400 });

    let newStatus: "success" | "pending" | "error" | "settlement" | "expire" | "cancel" | "deny" = "pending";
    if (["settlement","capture","success"].includes(txStatus)) newStatus = "success";
    else if (["expire"].includes(txStatus)) newStatus = "expire";
    else if (["cancel"].includes(txStatus)) newStatus = "cancel";
    else if (["deny"].includes(txStatus)) newStatus = "deny";
    else if (["pending"].includes(txStatus)) newStatus = "pending";

    const ok = updateStatus(orderId, newStatus, body);
    if (!ok) return NextResponse.json({ ok:false, error:"order_not_found" }, { status:404 });

    // Optional push ke Perfex (pakai modul ulcatalog) jika SOLUSI_API_BASE di-set
    try {
      if (newStatus === "success") {
        const PERFEX_BASE = process.env.SOLUSI_API_BASE || "";
        if (PERFEX_BASE) {
          await fetch(`${PERFEX_BASE.replace(/\/+$/,"")}/ul/api/orders`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ id: orderId, status: newStatus, midtrans: body }),
          }).catch(()=>{});
        }
      }
    } catch {}

    return NextResponse.json({ ok:true, id: orderId, status: newStatus });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message || "bad_request" }, { status:400 });
  }
}
