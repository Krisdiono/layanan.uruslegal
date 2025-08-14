'use client';

import Script from 'next/script';
import { useState } from 'react';

type Svc = { slug: string; title: string };
type Props = { service: Svc; amount: number };

declare global {
  interface Window {
    snap?: { pay: (token: string, opts?: any) => void };
  }
}

export default function InlineSnap({ service, amount }: Props) {
  const [loading, setLoading] = useState(false);

  async function handlePay() {
    setLoading(true);
    try {
      // 1) Mintakan token ke API (pakai angka polos, tanpa fee tambahan)
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service,
          amounts: { subtotal: amount, total: amount },
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Gagal membuat transaksi');

      const token = data?.midtrans?.token as string | undefined;
      const redirect = data?.midtrans?.redirect_url as string | undefined;
      if (!token && !redirect) throw new Error('Token Midtrans kosong');

      // 2) Kalau Snap belum kebaca (dev environment suka begini), buka redirect URL
      if (!window.snap?.pay) {
        if (redirect) window.open(redirect, '_blank', 'noopener,noreferrer');
        else throw new Error('Snap belum siap');
        return;
      }

      // 3) Normal flow: bayar pakai Snap popup
      window.snap.pay(token!, {
        onSuccess: (r: any) => console.log('Snap success', r),
        onPending: (r: any) => console.log('Snap pending', r),
        onError:   (e: any) => alert('Snap error: ' + JSON.stringify(e)),
        onClose:   () => console.log('Snap closed'),
      });
    } catch (e: any) {
      alert(e?.message || 'Checkout gagal');
    } finally {
      setLoading(false);
    }
  }

  const isSandbox = (process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || '').startsWith('SB-');
  const snapSrc = isSandbox
    ? 'https://app.sandbox.midtrans.com/snap/snap.js'
    : 'https://app.midtrans.com/snap/snap.js';

  return (
    <>
      <Script
        id="midtrans-snap"
        src={snapSrc}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        strategy="afterInteractive"
        onLoad={() => console.log('Snap JS loaded')}
      />
      <button
        onClick={handlePay}
        disabled={loading}
        className="px-4 py-2 rounded-2xl bg-emerald-600 text-white"
      >
        {loading ? 'Memproses…' : 'Ajukan Proses'}
      </button>
    </>
  );
}
