import Link from "next/link";
import { listServices, getPrice } from "@/lib/catalog";

export const dynamic = "force-static";

export default async function Page() {
  const services = listServices();
  return (
    <main className="max-w-6xl mx-auto p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <div key={s.slug} className="rounded-2xl border p-4">
          <h3 className="font-semibold mb-1">{s.title}</h3>
          {s.summary && <p className="text-slate-600 mb-3">{s.summary}</p>}
          <div className="text-emerald-700 font-bold mb-3">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: s.currency || "IDR",
            }).format(getPrice(s))}
          </div>
          <div className="flex gap-3">
            <Link className="underline" href={`/layanan/${s.slug}`}>
              Detail
            </Link>
            <Link className="underline" href={`/checkout/${s.slug}`}>
              Ajukan Proses
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}
