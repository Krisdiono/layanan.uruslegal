<<<<<<< HEAD
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
=======
import { getLayanan } from "@/lib/solusi";
import Link from "next/link";

export default async function LayananDetail({ params }: { params: { slug: string } }) {
  const svc = await getLayanan(params.slug);

  if (!svc) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <p>Layanan tidak ditemukan.</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-6 grid lg:grid-cols-3 gap-6">
      <section className="lg:col-span-2 space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm border rounded-xl px-3 py-2">← Kembali</Link>
        <h1 className="text-3xl font-semibold">{svc.title}</h1>
        {svc.price != null ? (
          <div className="text-emerald-700 font-semibold">Mulai Rp {Number(svc.price).toLocaleString("id-ID")}</div>
        ) : (
          <div className="text-slate-600">Minta Penawaran</div>
        )}
        <p className="text-slate-700">{svc.description || svc.summary || "Deskripsi belum tersedia."}</p>

        {!!svc.detail?.inclusions?.length && (
          <div>
            <h3 className="font-semibold mb-2">Yang Anda Dapatkan</h3>
            <ul className="list-disc ml-5 space-y-1">
              {svc.detail.inclusions.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
        )}

        {!!svc.detail?.process?.length && (
          <div>
            <h3 className="font-semibold mb-2">Proses Pengajuan</h3>
            <ol className="list-decimal ml-5 space-y-1">
              {svc.detail.process.map((it, i) => <li key={i}>{it}</li>)}
            </ol>
          </div>
        )}
      </section>

      <aside className="border rounded-2xl p-4 h-fit space-y-3" id="bayar">
        <div className="font-medium">Ringkasan</div>
        {svc.price != null ? (
          <>
            <div>Harga: <b>Rp {Number(svc.price).toLocaleString("id-ID")}</b></div>
            <a href="#todo-pay" className="btn-brand block text-center">Ajukan Proses</a>
          </>
        ) : (
          <a
            className="px-4 py-2 rounded-xl border block text-center"
            href={`https://wa.me/6281142677700?text=${encodeURIComponent("Halo, saya tertarik dengan " + svc.title)}`}
            target="_blank">Tanya via WhatsApp</a>
        )}
      </aside>
    </main>
>>>>>>> be6706a (Update project (checkout + Midtrans + env example))
  );
}
