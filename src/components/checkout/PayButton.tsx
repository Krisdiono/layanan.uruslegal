"use client";
import { useEffect } from "react";

declare global { interface Window { snap: any } }

export default function PayButton({ order }: { order: {
  id: string; amount: number;
  customer?: { name?: string; email?: string; phone?: string };
  items?: { id: string; name: string; price: number; qty?: number }[];
}}) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    s.setAttribute("data-client-key", process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!);
    document.body.appendChild(s);
    return () => { document.body.removeChild(s); };
  }, []);

  const pay = async () => {
    const r = await fetch("/api/checkout/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: order.id, amount: order.amount,
        customer: order.customer, items: order.items
      })
    });
    const { token, redirect_url } = await r.json();
    if (!token && redirect_url) return (window.location.href = redirect_url);
    window.snap.pay(token, {
      onSuccess: () => (window.location.href = "/payment/success"),
      onPending: () => (window.location.href = "/payment/pending"),
      onError: () => (window.location.href = "/payment/error"),
      onClose: () => {}
    });
  };

  return <button onClick={pay} className="w-full rounded-xl bg-emerald-600 text-white py-3">Bayar Sekarang</button>;
}
