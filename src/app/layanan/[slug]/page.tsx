import Link from "next/link";
import { getService, getPrice } from "@/lib/catalog";
import { notFound } from "next/navigation";

export default async function Page({ params }:{ params:{ slug:string } }){
  const s:any = await Promise.resolve(getService(params.slug));
  if (!s) notFound();
  const price = getPrice(s);
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-3">{s.title}</h1>
      {s.summary && <p className="text-slate-700 mb-6">{s.summary}</p>}
      <div className="text-xl font-bold mb-6">
        {price !== undefined
          ? new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(price)
          : "-"}
      </div>
      <div className="flex gap-3">
        <Link className="px-4 py-2 rounded-2xl bg-emerald-600 text-white" href={`/checkout/${s.slug}`}>Ajukan Proses</Link>
        <a className="px-4 py-2 rounded-2xl border border-emerald-500 text-emerald-600"
           href={`https://wa.me/6281142677700?text=${encodeURIComponent(`Halo UrusLegal, saya ingin tanya tentang ${s.title}`)}`}>
          Tanya via WhatsApp
        </a>
      </div>
    </div>
  );
}
