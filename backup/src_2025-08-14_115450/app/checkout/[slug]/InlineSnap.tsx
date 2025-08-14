// src/app/checkout/[slug]/InlineSnap.tsx
'use client';

type Svc = { slug: string; title: string };
export default function InlineSnap(
  { service, amount }: { service: Svc; amount: number }
) {
  async function pay() {
    try {
      const total = Math.round(Number(amount || 0)); // angka mentah, tanpa format
      const payload = {
        service,
        amounts: { subtotal: total, total }, // TANPA fee, biar simple dulu
        customer: {}
      };

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },   // <— penting
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Gagal membuat transaksi');

      // panggil snap
      // @ts-ignore
      window.snap?.pay?.(json.token, {
        onSuccess: () => alert('Pembayaran berhasil'),
        onPending: () => alert('Menunggu pembayaran'),
        onError: () => alert('Pembayaran gagal'),
        onClose: () => {},
      });
    } catch (e: any) {
      alert(e?.message || 'Error');
    }
  }

  return (
    <button onClick={pay} className="px-4 py-2 rounded-2xl bg-emerald-600 text-white">
      Ajukan Proses
    </button>
  );
}
