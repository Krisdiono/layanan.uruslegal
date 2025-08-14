export default function Page({ searchParams }: { searchParams: { order?: string } }) {
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mb-2">Pembayaran Berhasil ��</h1>
      {searchParams?.order && <p className="text-slate-600 mb-4">Order ID: {searchParams.order}</p>}
      <p>Tim kami akan segera memproses pesanan Anda. Terima kasih!</p>
    </div>
  );
}
