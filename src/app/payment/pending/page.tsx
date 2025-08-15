export default function Page({ searchParams }:{ searchParams?: { order_id?: string } }) {
  const id = searchParams?.order_id ?? "-";
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-semibold mb-2">Menunggu Pembayaran ⌛</h1>
      <p className="mb-6">Order <b>{id}</b> belum selesai. Ikuti instruksi di halaman pembayaran.</p>
      <a className="px-4 py-2 rounded-2xl border" href="/">Kembali ke Beranda</a>
    </div>
  );
}
