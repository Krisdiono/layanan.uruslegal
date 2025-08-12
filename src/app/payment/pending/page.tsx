import Link from "next/link";

export default function PaymentPending({ searchParams }: { searchParams: { order_id?: string } }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-amber-600">Menunggu Pembayaran</h1>
      <p className="mt-3 text-slate-700">
        Transaksi Anda belum selesai. Silakan selesaikan sesuai instruksi pada metode yang dipilih.
      </p>
      <div className="mt-4 card p-5">
        <div className="text-sm text-slate-500">Order ID</div>
        <div className="font-mono">{searchParams?.order_id ?? "-"}</div>
      </div>
      <div className="mt-6 flex gap-2">
        <Link href="/" className="btn btn-primary">Kembali ke Beranda</Link>
      </div>
    </div>
  );
}
