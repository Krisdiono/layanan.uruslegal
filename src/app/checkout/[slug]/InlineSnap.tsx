'use client';

import Script from 'next/script';
import { useCallback, useMemo, useState } from 'react';

type Props = {
  service: { slug: string; title: string };
  amount: number; // total yang akan dibayar (tanpa fee tambahan)
};

export default function InlineSnap({ service, amount }: Props) {
  const [busy, setBusy] = useState(false);

  const snapSrc = useMemo(
    () =>
      process.env.NEXT_PUBLIC_MIDTRANS_IS_PRODUCTION === 'true'
        ? 'https://app.midtrans.com/snap/snap.js'
        : 'https://app.sandbox.midtrans.com/snap/snap.js',
    []
  );
  const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || '';

  const handlePay = useCallback(async () => {
    if (!amount || amount <= 0) {
      alert('Harga belum tersedia.');
      return;
    }

    setBusy(true);
    try {
      // 1) minta token ke server
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service,
          amounts: { subtotal: amount, total: amount }, // TANPA fee
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Checkout gagal');

      const token: string | undefined = data?.midtrans?.token;
      const redirectUrl: string | undefined = data?.midtrans?.redirect_url;

      // 2) kalau snap sudah ready, buka modal
      const snap: any = (globalThis as any).snap;
      if (snap?.pay && token) {
        snap.pay(token, {
          onSuccess: () => console.log('Snap success'),
          onPending: () => console.log('Snap pending'),
          onError: (e: any) => {
            console.error('Snap error', e);
            alert('Terjadi kesalahan pada Midtrans.');
          },
          onClose: () => console.log('Snap closed'),
        });
        return;
      }

      // 3) fallback: kalau snap belum ready, buka redirect_url di tab baru
      if (redirectUrl) {
        window.open(redirectUrl, '_blank');
        return;
      }

      alert('Snap belum siap dan tidak ada redirect URL.');
    } catch (e: any) {
      console.error(e);
      alert(e?.message || 'Gagal memproses pembayaran.');
    } finally {
      setBusy(false);
    }
  }, [amount, service]);

  return (
    <>
      {/* Load Snap JS sekali, lazy supaya gak blokir render */}
      <Script
        src={snapSrc}
        data-client-key={clientKey}
        strategy="lazyOnload"
        onLoad={() => console.log('Snap JS loaded')}
        onError={() => console.error('Gagal memuat Snap JS')}
      />

      <button
        type="button"
        onClick={handlePay}
        disabled={busy || !amount}
        className="px-4 py-2 rounded-2xl bg-emerald-600 text-white disabled:opacity-50"
      >
        {busy ? 'Memproses…' : 'Ajukan Proses'}
      </button>
    </>
  );
}
