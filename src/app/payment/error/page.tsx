// @ts-nocheck
import Link from "next/link";
export default function Page({ searchParams }: any){
  const id = searchParams?.order_id || "";
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">Pembayaran Gagal</h1>
      <p className="text-slate-600 mb-4">Order ID: <b>{id || "-"}</b></p>
      <Link className="btn" href="/">Kembali</Link>
    </div>
  );
}
