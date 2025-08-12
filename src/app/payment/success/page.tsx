// @ts-nocheck
import Link from "next/link";

async function getOrder(id:string){
  try { const r = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/orders/${id}`, { cache:"no-store" }); if(!r.ok) return null; return await r.json(); } catch { return null; }
}
export default async function Page({ searchParams }: any){
  const id = searchParams?.order_id || "";
  const order = id ? await getOrder(id) : null;
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">Pembayaran Berhasil</h1>
      <p className="text-slate-600 mb-4">Order ID: <b>{id}</b></p>
      {order && (
        <div className="card p-4 mb-4">
          <div className="flex justify-between"><span>Layanan</span><span>{order?.service?.title}</span></div>
          <div className="flex justify-between"><span>Total</span><span>Rp{(order?.amounts?.total||0).toLocaleString("id-ID")}</span></div>
        </div>
      )}
      <Link className="btn" href="/">Kembali</Link>
    </div>
  );
}
