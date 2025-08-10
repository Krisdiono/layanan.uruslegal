import Link from "next/link";
import services from "@/data/services.json";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Katalog Layanan</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s:any) => (
          <Link key={s.slug} href={`/layanan/${s.slug}`} className="block border rounded-2xl p-4 hover:shadow-md">
            <div className="font-medium">{s.title}</div>
            <p className="text-sm text-slate-600 mt-1 line-clamp-3">{s.summary}</p>
            {s.price ? <div className="mt-3 text-emerald-700 font-semibold">Rp {s.price.toLocaleString("id-ID")}</div> : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
