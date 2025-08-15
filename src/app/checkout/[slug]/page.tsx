import { getService, getPrice } from "@/lib/catalog";
import InlineSnap from "./InlineSnap";

export default async function Page({ params }:{ params:{ slug:string } }){
  const s:any = await Promise.resolve(getService(params.slug));
  const amount = getPrice(s) ?? 0;
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Checkout: {s.title}</h1>
      <InlineSnap service={{ slug: s.slug, title: s.title }} amount={amount} />
      <div className="mt-4 flex items-center justify-between rounded-xl border p-4">
        <span>Harga</span>
        <span className="font-semibold">
          {new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(amount)}
        </span>
      </div>
      <p className="mt-3 text-slate-500 text-sm">Jika popup tidak muncul, klik tombol lagi atau matikan popup blocker.</p>
    </div>
  );
}
