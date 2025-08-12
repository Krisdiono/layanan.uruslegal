import Link from "next/link";

export default function PaymentError({ searchParams }: { searchParams: { order_id?: string } }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-rose-600">Pembayaran Gagal</h1>
      <p className="mt-3 text-slate-700">
        Maaf, transaksi tidak dapat diproses. Anda dapat mencoba kembali atau hubungi kami.
      </p>
      <div className="mt-4 card p-5">
        <div className="text-sm text-slate-500">Order ID</div>
        <div className="font-mono">{searchParams?.order_id ?? "-"}</div>
      </div>
      <div className="mt-6 flex gap-2">
        <Link href="/" className="btn btn-primary">Coba Lagi</Link>
        <a className="btn" target="_blank" href="https://wa.me/6281142677700?text=Halo%20pembayaran%20saya%20gagal.%20Mohon%20bantuannya.">Bantuan via WhatsApp</a>
      </div>
    </div>
  );
}
