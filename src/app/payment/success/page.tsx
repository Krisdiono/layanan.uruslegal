import Link from "next/link";

export default function PaymentSuccess({ searchParams }: { searchParams: { order_id?: string } }) {
  const oid = searchParams?.order_id;
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-emerald-700">Pembayaran Berhasil 🎉</h1>
      <p className="mt-3 text-slate-700">
        Terima kasih! Kami sudah menerima pesanan Anda.
      </p>
      <div className="mt-4 card p-5">
        <div className="text-sm text-slate-500">Order ID</div>
        <div className="font-mono">{oid ?? "-"}</div>
      </div>
      <div className="mt-6 flex gap-2">
        <Link href="/" className="btn btn-primary">Kembali ke Beranda</Link>
        <a className="btn" target="_blank" href="https://wa.me/6281142677700?text=Halo%20saya%20sudah%20bayar%20pesanan%20saya.">Kirim bukti via WhatsApp</a>
      </div>
    </div>
  );
}
