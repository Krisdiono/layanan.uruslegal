"use client";
import PayButton from "@/components/checkout/PayButton";
import type { Svc } from "@/types/service";

export default function OrderActions({ svc, amount }: { svc: Svc; amount: number }) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const wa = process.env.NEXT_PUBLIC_WA_NUMBER || "6281142677700";

  const pageUrl =
    typeof window !== "undefined" && !base
      ? `${window.location.origin}/${svc.slug}`
      : `${base}/${svc.slug}`;

  const msg = encodeURIComponent(`${svc.slug} - ${pageUrl}`);
  const waUrl = `https://wa.me/${wa}?text=${msg}`;

  const order = {
    id: `${svc.slug}-${Date.now()}`, // unik
    amount,
    customer: {}, // bisa diisi nama/email/phone kalau sudah ada form
    items: [{ id: svc.id ?? svc.slug, name: svc.title, price: amount, qty: 1 }],
  };

  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      <PayButton order={order} />
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-xl bg-green-600 px-4 py-3 text-center font-medium text-white hover:bg-green-700"
      >
        Tanya via WhatsApp
      </a>
    </div>
  );
}
