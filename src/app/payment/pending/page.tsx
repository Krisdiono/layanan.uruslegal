export default function Page({ searchParams }: { searchParams: { order?: string } }) {
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mb-2">Menunggu Pembayaran</h1>
      {searchParams?.order && <p className="text-slate-600 mb-4">Order ID: {searchParams.order}</p>}
      <p>Silakan selesaikan pembayaran Anda. Jika sudah membayar, halaman ini akan otomatis ter-update setelah kami menerima notifikasi.</p>
    </div>
  );
}
