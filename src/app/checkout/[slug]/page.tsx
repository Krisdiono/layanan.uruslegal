// @ts-nocheck
"use client";
import { useState } from "react";
import { getLayananBySlugSync } from "@/lib/services"; // client-safe copy
import Script from "next/script";

export default function Checkout({ params }) {
  const svc = getLayananBySlugSync(params.slug);
  const [files, setFiles] = useState<File[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const price = typeof svc?.price === "number" ? svc.price : 0;
  const fee = Math.round(price * 0.03);
  const total = price + fee;

  const onPay = async () => {
    const res = await fetch("/api/midtrans/create-transaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        serviceSlug: svc.slug,
        serviceTitle: svc.title,
        amount: total,
        customer: { name, email }
      })
    });
    const { token } = await res.json();
    window.snap.pay(token);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Checkout: {svc.title}</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border p-4">
            <div className="font-medium mb-2">Data Pemesan</div>
            <div className="grid md:grid-cols-2 gap-3">
              <input className="input" placeholder="Nama Lengkap" value={name} onChange={e=>setName(e.target.value)} />
              <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
          </div>

          <div className="rounded-xl border p-4">
            <div className="font-medium mb-2">Upload Dokumen (KTP, NPWP, dsb.)</div>
            <input
              type="file" multiple
              onChange={e => setFiles(Array.from(e.target.files || []))}
            />
            {files.length>0 && (
              <ul className="text-sm mt-2 list-disc pl-5">
                {files.map((f,i)=><li key={i}>{f.name} — {(f.size/1024).toFixed(0)} KB</li>)}
              </ul>
            )}
          </div>
        </section>

        <aside className="rounded-xl border p-4 h-fit">
          <div className="font-medium mb-3">Ringkasan</div>
          <div className="flex justify-between text-sm py-1"><span>Harga</span><span>Rp{price.toLocaleString("id-ID")}</span></div>
          <div className="flex justify-between text-sm py-1"><span>Biaya gateway (3%)</span><span>Rp{fee.toLocaleString("id-ID")}</span></div>
          <div className="flex justify-between py-2 font-semibold border-t mt-2">
            <span>Total</span><span>Rp{total.toLocaleString("id-ID")}</span>
          </div>

          <button className="btn btn-primary w-full mt-3" onClick={onPay}>Bayar Sekarang</button>
          <a
            className="btn w-full mt-2"
            target="_blank"
            href={`https://wa.me/6281142677700?text=${encodeURIComponent(
              `Halo, saya ingin ajukan proses ${svc.title}. Nama: ${name || "-"}, Email: ${email || "-"}.`
            )}`}
          >
            Tanya via WhatsApp
          </a>
        </aside>
      </div>

      {/* Midtrans Snap */}
      <Script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY} />
    </div>
  );
}
