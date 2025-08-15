export default function Page({ searchParams }:{ searchParams?: { order_id?: string } }) {
  const id = searchParams?.order_id ?? "-";
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-semibold mb-2">Terima kasih! 🎉</h1>
      <p className="mb-6">Pembayaran berhasil. Nomor order: <b>{id}</b></p>
      <a className="px-4 py-2 rounded-2xl bg-emerald-600 text-white" href="/">Kembali ke Beranda</a>
    </div>
  );
}
