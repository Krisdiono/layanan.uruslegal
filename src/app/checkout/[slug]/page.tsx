// @ts-nocheck
"use client";
import { useState } from "react";
import { getLayananBySlugSync } from "@/lib/solusi";
import Script from "next/script";

type UploadItem = { name: string; type: string; size: number; base64: string };

export default function Checkout({ params }) {
  const svc = getLayananBySlugSync(params.slug);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [uploads, setUploads] = useState<UploadItem[]>([]);

  if (!svc) return <div className="p-6">Layanan tidak ditemukan.</div>;

  const price = typeof svc.price === "number" ? svc.price : 0;
  const feePct = Number(process.env.NEXT_PUBLIC_GATEWAY_FEE_PCT ?? "0.03");
  const fee = Math.round(price * feePct);
  const total = price + fee;

  const onFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const sel = Array.from(e.target.files || []);
    const MAX = 8;
    const files = sel.slice(0, MAX);
    const out: UploadItem[] = [];
    for (const f of files) {
      if (f.size > 10 * 1024 * 1024) continue; // 10MB
      const base64 = await new Promise<string>((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(String(r.result).split(",")[1] || "");
        r.onerror = rej;
        r.readAsDataURL(f);
      });
      out.push({ name: f.name, type: f.type, size: f.size, base64 });
    }
    setUploads(out);
  };

  const uploadMeta = async () => {
    const r = await fetch("/api/uploads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        serviceSlug: svc.slug,
        customer: { name, email, phone, note },
        files: uploads.map(({ name, type, size, base64 }) => ({ name, type, size, data: base64 })),
      }),
    });
    const j = await r.json().catch(() => null);
    if (!j?.ok) throw new Error(j?.error || "upload-failed");
    return j.id as string;
  };

  const onPay = async () => {
    try {
      const metaId = await uploadMeta().catch(() => null); // masih lanjut walau gagal simpan doc
      const res = await fetch("/api/checkout/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: svc.slug, metaId })
      });
      const json = await res.json().catch(() => null);
      if (!json?.token) return alert("Gagal membuat transaksi: " + (json?.error || "unknown"));
      window.snap?.pay(json.token);
    } catch (e:any) {
      alert("Gagal memproses: " + (e?.message || e));
    }
  };

  const onRFQ = async () => {
    // untuk layanan tanpa harga: simpan dokumen + buka WA
    try {
      const metaId = await uploadMeta();
      const wa = process.env.NEXT_PUBLIC_WA_NUMBER || "6281142677700";
      const text = encodeURIComponent(
        `Halo, saya ingin ajukan proses ${svc.title} (${svc.slug}).\nNama: ${name||"-"}\nEmail: ${email||"-"}\nTelepon: ${phone||"-"}\nCatatan: ${note||"-"}\nRef: ${metaId}`
      );
      window.open(`https://wa.me/${wa}?text=${text}`, "_blank");
    } catch (e:any) {
      alert("Gagal kirim permintaan: " + (e?.message || e));
    }
  };

  const hasPrice = price > 0;

  const wa = process.env.NEXT_PUBLIC_WA_NUMBER || "6281142677700";
  const waText = encodeURIComponent(
    `Halo, saya ingin ajukan proses ${svc.title}. Nama: ${name||"-"}, Email: ${email||"-"}, Telepon: ${phone||"-"}.`
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Checkout: {svc.title}</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 card p-5 space-y-6">
          <div>
            <div className="text-sm text-slate-600 mb-2">Data Pemesan</div>
            <div className="grid md:grid-cols-3 gap-3">
              <input className="border rounded-xl px-3 py-2" placeholder="Nama Lengkap" value={name} onChange={(e)=>setName(e.target.value)} />
              <input className="border rounded-xl px-3 py-2" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <input className="border rounded-xl px-3 py-2" placeholder="No. Telepon (opsional)" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </div>
          </div>

          <div>
            <div className="text-sm text-slate-600 mb-2">Upload Dokumen (KTP/NPWP/dll) — max 10MB/file</div>
            <input type="file" multiple onChange={onFiles} accept=".pdf,.jpg,.jpeg,.png,.webp" />
            {uploads.length>0 && (
              <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
                {uploads.map((f,i)=>(
                  <li key={i}>{f.name} — {(f.size/1024).toFixed(0)} KB</li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <div className="text-sm text-slate-600 mb-2">Catatan</div>
            <textarea className="w-full border rounded-xl px-3 py-2 min-h-[90px]" placeholder="Tambahkan informasi tambahan (opsional)" value={note} onChange={(e)=>setNote(e.target.value)} />
          </div>
        </section>

        <aside className="card p-5 h-fit space-y-3">
          <div className="font-medium">Ringkasan</div>
          <div className="flex justify-between text-sm"><span>Harga</span><span>Rp{price.toLocaleString("id-ID")}</span></div>
          <div className="flex justify-between text-base font-semibold border-t pt-2"><span>Total</span><span>Rp{total.toLocaleString("id-ID")}</span></div>

          {hasPrice ? (
            <button onClick={onPay} className="btn btn-primary w-full mt-2">Bayar Sekarang</button>
          ) : (
            <button onClick={onRFQ} className="btn btn-primary w-full mt-2">Kirim Permintaan</button>
          )}
          <a className="btn w-full" target="_blank" href={`https://wa.me/${wa}?text=${waText}`}>Tanya via WhatsApp</a>
        </aside>
      </div>

      {/* Midtrans Snap (sandbox) */}
      <Script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY ?? ""} />
    </div>
  );
}
