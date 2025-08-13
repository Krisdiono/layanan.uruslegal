"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window { snap: any }
}

function loadSnapScript() {
  // hindari inject berkali-kali
  if (document.querySelector('script[data-midtrans-snap]')) return;
  const isProd = String(process.env.NEXT_PUBLIC_MIDTRANS_IS_PRODUCTION) === "true";
  const src = isProd
    ? "https://app.midtrans.com/snap/snap.js"
    : "https://app.sandbox.midtrans.com/snap/snap.js";
  const s = document.createElement("script");
  s.src = src;
  s.setAttribute("data-client-key", String(process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || ""));
  s.setAttribute("data-midtrans-snap", "1");
  document.body.appendChild(s);
}

export default function CheckoutClient({ svc }: { svc: any }) {
  const [loading, setLoading] = useState(false);
  const [addons, setAddons] = useState({ eStampQty: 0, eSignQty: 0 });

  useEffect(() => { loadSnapScript(); }, []);

  async function onPay() {
    try {
      setLoading(true);
      const res = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          service: { slug: svc.slug, title: svc.title, price: svc.price ?? 0 },
          customer: {}, // TODO: isi dari form kalau sudah ada
          addons,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      const order = await res.json();
      const token = order?.midtrans?.token;
      if (!token) throw new Error("Token Snap tidak tersedia");
      window.snap?.pay(token, {
        onSuccess: () => window.location.href = `/orders/${order.id}?paid=1`,
        onPending: () => window.location.href = `/orders/${order.id}?pending=1`,
        onError: () => alert("Pembayaran gagal. Coba lagi."),
        onClose: () => console.log("Snap closed"),
      });
    } catch (e: any) {
      alert(e?.message || "Gagal membuat transaksi");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center">
        <label className="flex items-center gap-2">
          <input
            type="number"
            min={0}
            value={addons.eStampQty}
            onChange={(e)=>setAddons(a=>({...a, eStampQty: Number(e.target.value||0)}))}
            className="input input-bordered w-24"
          />
          <span>e-Materai</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="number"
            min={0}
            value={addons.eSignQty}
            onChange={(e)=>setAddons(a=>({...a, eSignQty: Number(e.target.value||0)}))}
            className="input input-bordered w-24"
          />
          <span>e-Sign</span>
        </label>
      </div>

      <button onClick={onPay} disabled={loading} className={`btn ${loading ? "btn-disabled" : "btn-primary"}`}>
        {loading ? "Memproses..." : "Bayar Sekarang"}
      </button>
    </div>
  );
}
