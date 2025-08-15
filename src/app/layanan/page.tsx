import Link from "next/link";
import { listServices, getPrice } from "@/lib/catalog";

export const dynamic = "force-static";

export default function Page(){
  const services = listServices();
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Katalog Layanan</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s:any)=> {
          const price = getPrice(s);
          return (
            <div key={s.slug} className="rounded-2xl border p-4">
              <div className="text-lg font-semibold mb-1">{s.title}</div>
              {s.summary && <p className="text-slate-600 mb-3 text-sm">{s.summary}</p>}
              <div className="font-bold mb-3">
                {price !== undefined
                  ? new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(price)
                  : "-"}
              </div>
              <div className="flex gap-2">
                <Link className="px-3 py-2 rounded-xl border" href={`/layanan/${s.slug}`}>Detail</Link>
                <Link className="px-3 py-2 rounded-xl bg-emerald-600 text-white" href={`/checkout/${s.slug}`}>Ajukan Proses</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
