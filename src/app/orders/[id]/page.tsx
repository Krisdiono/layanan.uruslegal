import "server-only";
import OrderStatusClient from "@/components/orders/OrderStatusClient";

export const dynamic = "force-dynamic";

export default async function Page({ params, searchParams }:{
  params: { id: string }, searchParams: Record<string,string|undefined>
}) {
  const { id } = params;
  const hint = searchParams?.paid ? "Pembayaran berhasil." :
               searchParams?.pending ? "Transaksi masih menunggu." :
               searchParams?.failed ? "Transaksi gagal/dibatalkan." : null;

  return (
    <div className="container p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Ringkasan Pesanan</h1>
      <div className="text-slate-600">Order ID: <code>{id}</code></div>
      {hint && <div className="p-3 bg-yellow-50 rounded">{hint}</div>}
      <OrderStatusClient id={id} />
    </div>
  );
}
