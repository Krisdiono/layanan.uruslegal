// @ts-nocheck
"use client";
import { useState } from "react";
import { getLayananBySlugSync } from "@/lib/solusi";
import Script from "next/script";

export default function Checkout({ params }) {
  const svc = getLayananBySlugSync(params.slug);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!svc) return <div className="p-6">Layanan tidak ditemukan.</div>;

  const price = typeof svc.price === "number" ? svc.price : 0;
  const feePct = parseFloat(process.env.NEXT_PUBLIC_GATEWAY_FEE_PCT ?? "0.03");
  const fee = Math.round(price * feePct);
  const total = price + fee;

  const onPay = async () => {
    const res = await fetch("/api/checkout/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: svc.slug })
    });
    const json = await res.json();
    if (!json?.token) return alert("Gagal membuat transaksi");
    window.snap?.pay(json.token);
  };

  const wa = process.env.NEXT_PUBLIC_WA_NUMBER || "6281142677700";
  const waText = encodeURIComponent(
    `Halo, saya ingin ajukan proses ${svc.title}. Nama: ${name||"-"}, Email: ${email||"-"}.`
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Checkout: {svc.title}</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 card p-5 space-y-4">
          <div>
            <div className="text-sm text-slate-600 mb-2">Data Pemesan</div>
            <div className="grid sm:grid-cols-2 gap-3">
              <input className="input border rounded-xl px-3 py-2" placeholder="Nama Lengkap" value={name} onChange={(e)=>setName(e.target.value)} />
              <input className="input border rounded-xl px-3 py-2" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
          </div>
        </section>

        <aside className="card p-5 h-fit space-y-3">
          <div className="font-medium">Ringkasan</div>
          <div className="flex justify-between text-sm"><span>Harga</span><span>Rp{price.toLocaleString("id-ID")}</span></div>
          <div className="flex justify-between text-sm"><span>Biaya gateway (±{Math.round(feePct*100)}%)</span><span>Rp{fee.toLocaleString("id-ID")}</span></div>
          <div className="flex justify-between text-base font-semibold border-t pt-2"><span>Total</span><span>Rp{total.toLocaleString("id-ID")}</span></div>

          {price > 0 ? (
            <button onClick={onPay} className="btn btn-primary w-full mt-2">Bayar Sekarang</button>
          ) : null}

          <a className="btn w-full" target="_blank" href={`https://wa.me/${wa}?text=${waText}`}>Tanya via WhatsApp</a>
        </aside>
      </div>

      {/* Midtrans Snap (sandbox) */}
      <Script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY ?? ""} />
    </div>
  );
}
