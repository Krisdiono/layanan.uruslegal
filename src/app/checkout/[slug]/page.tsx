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
 const [eStampQty, setEStampQty] = useState(0);   // e-Materai
const [eSignQty, setESignQty] = useState(0);     // e-Sign

const E_STAMP_PRICE = 10000; // Rp10.000/lembar
const E_SIGN_PRICE  = 5000;  // contoh Rp5.000/tanda tangan

const subtotal = svc.price ?? 0; // atau angka yang kamu pakai
const extras   = eStampQty * E_STAMP_PRICE + eSignQty * E_SIGN_PRICE;
const total    = subtotal + extras;


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
    async function logOrder(status: "success"|"pending"|"error", snapResult: any, extra: {
  service: { slug: string; title: string; price: number|null },
  amounts: { subtotal: number|null; gatewayFee: number; total: number|null },
  customer: { name: string; email: string; phone?: string },
  uploadId?: string,
  files?: string[],
}) {
  const payload = {
    id: snapResult?.order_id ?? `UL-${Date.now()}`,
    status,
    ...extra,
    midtrans: snapResult,
  };
  await fetch("/api/orders/create", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

    window.snap.pay(token, {
  onSuccess: async (result: any) => {
    await logOrder("success", result, {
      service: { slug: svc.slug, title: svc.title, price: svc.price ?? null },
      amounts: { subtotal, gatewayFee, total },         // pakai nilai yang sudah kamu hitung di page ini
      customer: { name, email, phone },
      uploadId,                                         // kalau kamu pakai API /api/uploads
      files: uploadedFiles?.map(f => f.name) || [],
    });
    window.location.href = `/payment/success?order_id=${encodeURIComponent(result.order_id)}`;
  },
  onPending: async (result: any) => {
    await logOrder("pending", result, {
      service: { slug: svc.slug, title: svc.title, price: svc.price ?? null },
      amounts: { subtotal, gatewayFee, total },
      customer: { name, email, phone },
      uploadId,
      files: uploadedFiles?.map(f => f.name) || [],
    });
    window.location.href = `/payment/pending?order_id=${encodeURIComponent(result.order_id)}`;
  },
  onError: async (result: any) => {
    await logOrder("error", result, {
      service: { slug: svc.slug, title: svc.title, price: svc.price ?? null },
      amounts: { subtotal, gatewayFee, total },
      customer: { name, email, phone },
      uploadId,
      files: uploadedFiles?.map(f => f.name) || [],
    });
    window.location.href = `/payment/error?order_id=${encodeURIComponent(result.order_id || "")}`;
  },
});

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
          <div className="grid grid-cols-2 gap-3 mt-4">
  <label className="flex items-center justify-between card p-3">
    <span>e-Materai (Rp10.000)</span>
    <input type="number" min={0} value={eStampQty}
           onChange={(e)=>setEStampQty(parseInt(e.target.value||"0",10))}
           className="input input-bordered w-24 text-right" />
  </label>
  <label className="flex items-center justify-between card p-3">
    <span>e-Sign (Rp5.000)</span>
    <input type="number" min={0} value={eSignQty}
           onChange={(e)=>setESignQty(parseInt(e.target.value||"0",10))}
           className="input input-bordered w-24 text-right" />
  </label>
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
