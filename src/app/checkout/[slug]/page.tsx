// @ts-nocheck
"use client";
import { useState } from "react";
import Script from "next/script";
import { getLayananBySlugSync } from "@/lib/solusi.browser"; // client-safe
import { E_STAMP_PRICE, E_SIGN_PRICE } from "@/lib/costs";

export default function Checkout({ params }) {
  const svc = getLayananBySlugSync(params.slug);
  const [files, setFiles] = useState<File[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [eStampQty, setEStampQty] = useState(0);
  const [eSignQty, setESignQty] = useState(0);

  const subtotal = typeof svc.price === "number" ? svc.price : 0;
  const extras = eStampQty * E_STAMP_PRICE + eSignQty * E_SIGN_PRICE;
  const total = subtotal + extras;

  async function logOrder(status, snapResult, extra) {
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
    }).catch(()=>{});
  }

  async function onPay() {
    const r = await fetch("/api/midtrans/create-transaction", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        serviceSlug: svc.slug,
        serviceTitle: svc.title,
        amount: total,
        customer: { name, email, phone },
      }),
    });
    const { token, order_id } = await r.json();

    const uploadNames = files.map(f=>f.name);

    window.snap.pay(token, {
      onSuccess: async (res) => {
        await logOrder("success", res, {
          service: { slug: svc.slug, title: svc.title, price: svc.price ?? null },
          amounts: { subtotal, total, extras },
          customer: { name, email, phone },
          files: uploadNames,
        });
        window.location.href = `/payment/success?order_id=${encodeURIComponent(res.order_id || order_id)}`;
      },
      onPending: async (res) => {
        await logOrder("pending", res, {
          service: { slug: svc.slug, title: svc.title, price: svc.price ?? null },
          amounts: { subtotal, total, extras },
          customer: { name, email, phone },
          files: uploadNames,
        });
        window.location.href = `/payment/pending?order_id=${encodeURIComponent(res.order_id || order_id)}`;
      },
      onError: async (res) => {
        await logOrder("error", res, {
          service: { slug: svc.slug, title: svc.title, price: svc.price ?? null },
          amounts: { subtotal, total, extras },
          customer: { name, email, phone },
          files: uploadNames,
        });
        window.location.href = `/payment/error?order_id=${encodeURIComponent(res?.order_id || order_id || "")}`;
      },
    });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Checkout: {svc.title}</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border p-4">
            <div className="font-medium mb-2">Data Pemesan</div>
            <div className="grid md:grid-cols-3 gap-3">
              <input className="input" placeholder="Nama Lengkap" value={name} onChange={e=>setName(e.target.value)} />
              <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
              <input className="input" placeholder="No. Telepon (opsional)" value={phone} onChange={e=>setPhone(e.target.value)} />
            </div>
          </div>

          <div className="rounded-xl border p-4">
            <div className="font-medium mb-2">Upload Dokumen (KTP/NPWP/dll) — max 10MB/file</div>
            <input type="file" multiple onChange={e=>setFiles(Array.from(e.target.files || []))} />
            {files.length>0 && (
              <ul className="text-sm mt-2 list-disc pl-5">
                {files.map((f,i)=><li key={i}>{f.name} — {(f.size/1024).toFixed(0)} KB</li>)}
              </ul>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center justify-between card p-3">
              <span>e-Materai (Rp{E_STAMP_PRICE.toLocaleString("id-ID")})</span>
              <input type="number" min={0} value={eStampQty} onChange={e=>setEStampQty(parseInt(e.target.value||"0",10))} className="input input-bordered w-24 text-right"/>
            </label>
            <label className="flex items-center justify-between card p-3">
              <span>e-Sign (Rp{E_SIGN_PRICE.toLocaleString("id-ID")})</span>
              <input type="number" min={0} value={eSignQty} onChange={e=>setESignQty(parseInt(e.target.value||"0",10))} className="input input-bordered w-24 text-right"/>
            </label>
          </div>

          <div className="rounded-xl border p-4">
            <div className="font-medium mb-2">Catatan</div>
            <textarea className="textarea w-full" rows={4} placeholder="Tambahkan informasi tambahan (opsional)" value={notes} onChange={e=>setNotes(e.target.value)} />
          </div>
        </section>

        <aside className="rounded-xl border p-4 h-fit space-y-1">
          <div className="font-medium mb-2">Ringkasan</div>
          <div className="flex justify-between"><span>Harga</span><span>Rp{subtotal.toLocaleString("id-ID")}</span></div>
          <div className="flex justify-between text-slate-700"><span>Extras (e-Materai & e-Sign)</span><span>Rp{extras.toLocaleString("id-ID")}</span></div>
          <div className="flex justify-between text-slate-500"><span>Biaya Pemerintah</span><span>Belum termasuk</span></div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg"><span>Total</span><span>Rp{total.toLocaleString("id-ID")}</span></div>

          <button className="btn btn-primary w-full mt-3" onClick={onPay}>Bayar Sekarang</button>
          <a className="btn w-full mt-2" target="_blank" href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || "6281142677700"}?text=${encodeURIComponent(`Halo, saya ingin ajukan proses ${svc.title}. Nama: ${name||"-"}, Email: ${email||"-"}.`)}`}>Tanya via WhatsApp</a>
        </aside>
      </div>

      <Script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY} />
    </div>
  );
}
