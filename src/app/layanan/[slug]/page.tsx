// @ts-nocheck
import { getLayananBySlug } from "@/lib/services"; // helper ambil dari json
import Link from "next/link";

export default async function LayananDetail({ params }) {
  const svc = await getLayananBySlug(params.slug);
  if (!svc) return <div>Not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/"><button className="btn btn-ghost">← Kembali</button></Link>
      <h1 className="text-3xl font-semibold mt-4">{svc.title}</h1>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <Tabs svc={svc} />
        </div>

        <aside className="rounded-xl border bg-gray-50 p-4">
          <div className="text-sm text-gray-500 mb-2">Ringkasan</div>
          {typeof svc.price === "number" && (
            <div className="text-2xl font-bold mb-4">
              Rp{svc.price.toLocaleString("id-ID")}
            </div>
          )}

          <div className="flex gap-3">
            <Link href={`/checkout/${svc.slug}`} className="btn btn-primary w-full">
              Ajukan Proses
            </Link>
            <a
              className="btn w-full"
              href={`https://wa.me/6281142677700?text=${encodeURIComponent(
                `Halo UrusLegal, saya ingin konsultasi: ${svc.title} (${svc.slug})`
              )}`}
              target="_blank"
            >
              Tanya via WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Tabs({ svc }) {
  const tabs = ["Informasi", "Persyaratan", "Timeline", "Biaya"] as const;
  const [active, setActive] = React.useState(tabs[0]);

  return (
    <div className="rounded-xl border">
      <div className="flex gap-2 p-2 border-b overflow-x-auto">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-lg ${active===t ? "bg-emerald-600 text-white" : "hover:bg-gray-100"}`}
          >{t}</button>
        ))}
      </div>

      <div className="p-4">
        {active === "Informasi" && <div className="prose">{svc.description || svc.summary}</div>}

        {active === "Persyaratan" && (
          <ul className="list-disc pl-6 space-y-1">{svc.requirements?.map((x,i)=><li key={i}>{x}</li>)}</ul>
        )}

        {active === "Timeline" && (
          <ol className="list-decimal pl-6 space-y-1">{svc.timeline?.map((x,i)=><li key={i}>{x}</li>)}</ol>
        )}

        {active === "Biaya" && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {svc.priceBreakdown?.map((p,i)=>(
                  <tr key={i} className="border-b">
                    <td className="py-2">{p.label}</td>
                    <td className="py-2 text-right">Rp{p.amount.toLocaleString("id-ID")}</td>
                  </tr>
                ))}
                {typeof svc.price === "number" && (
                  <tr>
                    <td className="py-2 font-semibold">Total</td>
                    <td className="py-2 text-right font-semibold">
                      Rp{svc.price.toLocaleString("id-ID")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
