// @ts-nocheck
"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const sp = useSearchParams();
  const router = useRouter();
  const id = sp.get("order_id") || "";
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    if (!id) return;
    setLoading(true);
    try {
      const r = await fetch(`/api/orders/${encodeURIComponent(id)}`, { cache: "no-store" });
      if (r.ok) {
        const j = await r.json();
        setData(j);
        if (j?.status === "success") return router.replace(`/payment/success?order_id=${encodeURIComponent(id)}`);
        if (j?.status === "error" || j?.status === "cancel" || j?.status === "deny" || j?.status === "expire") {
          return router.replace(`/payment/error?order_id=${encodeURIComponent(id)}`);
        }
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{ load(); }, [id]);
  useEffect(()=>{
    if (!id) return;
    const t = setInterval(load, 5000);
    return ()=>clearInterval(t);
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">Menunggu Pembayaran</h1>
      <p className="text-slate-600 mb-4">Order ID: <b>{id || "—"}</b></p>
      <div className="flex gap-2">
        <button className="btn" onClick={load} disabled={loading}>{loading ? "Mengecek..." : "Check status"}</button>
        <Link className="btn btn-ghost" href="/">Kembali</Link>
      </div>
      {data && (
        <div className="card p-4 space-y-1 mt-4 text-sm">
          <div>Layanan: {data?.service?.title}</div>
          <div>Total: Rp{(data?.amounts?.total||0).toLocaleString("id-ID")}</div>
          <div>Status: {String(data?.status||"-")}</div>
          <div>Updated: {data?.updatedAt || "-"}</div>
        </div>
      )}
    </div>
  );
}
