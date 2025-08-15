export default function Page({ searchParams }:{ searchParams?: { order_id?: string } }) {
  const id = searchParams?.order_id ?? "-";
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-semibold mb-2">Transaksi Gagal ❌</h1>
      <p className="mb-6">Terjadi kendala memproses order <b>{id}</b>. Silakan coba lagi.</p>
      <a className="px-4 py-2 rounded-2xl border" href="/">Kembali ke Beranda</a>
    </div>
  );
}
