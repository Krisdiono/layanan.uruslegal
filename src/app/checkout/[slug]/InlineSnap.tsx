"use client";
import { useState } from "react";

export default function InlineSnap({ service, amount }:{ service:{slug:string; title:string}; amount:number }){
  const [loading, setLoading] = useState(false);

  async function pay(){
    try{
      setLoading(true);
      const subtotal = Math.max(0, Math.round(Number(amount)||0));
      if (!subtotal) { alert("Harga tidak valid"); return; }

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({ service, amounts: { subtotal, total: subtotal } })
      });

      const data = await res.json();
      if(!res.ok){ alert(data?.error || "Gagal membuat transaksi"); return; }

      // @ts-ignore
      if (typeof window !== "undefined" && window.snap){
        // @ts-ignore
        window.snap.pay(data.midtrans.token, {
          onError: (e:any)=> alert("Pembayaran gagal"),
          onClose: ()=> {},
        });
      }else{
        // fallback
        if (data?.midtrans?.redirect_url) window.location.href = data.midtrans.redirect_url;
        else alert("Token Snap tidak ditemukan");
      }
    }finally{ setLoading(false); }
  }

  return (
    <button onClick={pay} disabled={loading}
      className="px-4 py-2 rounded-2xl bg-emerald-600 text-white disabled:opacity-60">
      {loading ? "Memproses..." : "Ajukan Proses"}
    </button>
  );
}
