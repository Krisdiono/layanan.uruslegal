import { E_STAMP_PRICE, E_SIGN_PRICE } from "@/lib/costs";
// /src/app/layanan/[slug]/page.tsx
// @ts-nocheck
import Link from "next/link";
import { getLayananBySlug } from "@/lib/solusi";

export const revalidate = 300;

export default async function LayananDetail({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { tab?: string };
}) {
  const svc = await getLayananBySlug(params.slug);
  if (!svc) {
    return (
      <div className="container mx-auto px-4 py-10">
        <Link href="/" className="btn btn-ghost">← Kembali</Link>
        <h1 className="text-2xl font-semibold mt-6">Layanan tidak ditemukan</h1>
      </div>
    );
  }

  const wa = process.env.NEXT_PUBLIC_WA_NUMBER || "6281142677700";
  const waText = encodeURIComponent(
    `Halo UrusLegal, saya ingin konsultasi: ${svc.title} (${svc.slug})`
  );

  const tabs = ["Informasi", "Persyaratan", "Proses", "Biaya"] as const;
  const active =
    (searchParams?.tab && tabs.includes(searchParams.tab as any))
      ? (searchParams!.tab as typeof tabs[number])
      : "Informasi";

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="btn btn-ghost">← Kembali</Link>
      <h1 className="text-3xl font-semibold mt-4">{svc.title}</h1>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        {/* Tabs */}
        <div className="lg:col-span-2 card">
          <div className="flex gap-2 p-2 border-b overflow-x-auto">
            {tabs.map((t) => (
              <Link
                key={t}
                href={`?tab=${t}`}
                className={`px-4 py-2 rounded-lg ${
                  active === t ? "bg-emerald-600 text-white" : "hover:bg-gray-100"
                }`}
              >
                {t}
              </Link>
            ))}
          </div>

          <div className="p-5 space-y-4">
            {active === "Informasi" && (
              <>
                {(svc.description || svc.summary) && (
                  <div
                    className="prose max-w-none text-slate-700"
                    dangerouslySetInnerHTML={{
                      __html: String(svc.description || svc.summary),
                    }}
                  />
                )}
                {svc.detail?.inclusions?.length ? (
                  <>
                    <h3 className="text-lg font-semibold">Yang Anda Dapatkan</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {svc.detail.inclusions.map((x: string, i: number) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </>
            )}

            {active === "Persyaratan" && (
              svc.detail?.requirements?.length ? (
                <ul className="list-disc pl-6 space-y-1">
                  {svc.detail.requirements.map((x: string, i: number) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              ) : (
                <div className="text-slate-500">
                  Persyaratan akan diinformasikan saat konsultasi.
                </div>
              )
            )}

            {active === "Proses" && (
              svc.detail?.process?.length ? (
                <ol className="list-decimal pl-6 space-y-1">
                  {svc.detail.process.map((x: string, i: number) => (
                    <li key={i}>{x}</li>
                  ))}
                </ol>
              ) : (
                <div className="text-slate-500">
                  Proses pengajuan mengikuti regulasi terbaru.
                </div>
              )
            )}

            {active === "Biaya" && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm table-zebra">
                  <tbody>
  <tbody>
    <tr className="border-b">
      <td className="py-2">Harga Layanan</td>
      <td className="py-2 text-right">
        {typeof svc.price === "number" ? `Rp${svc.price.toLocaleString("id-ID")}` : "Minta Penawaran"}
      </td>
    </tr>
    <tr className="border-b">
      <td className="py-2">e-Materai</td>
      <td className="py-2 text-right">Rp{E_STAMP_PRICE.toLocaleString("id-ID")}/lembar (opsional)</td>
    </tr>
    <tr className="border-b">
      <td className="py-2">e-Sign</td>
      <td className="py-2 text-right">Rp{E_SIGN_PRICE.toLocaleString("id-ID")}/tanda tangan (opsional)</td>
    </tr>
    <tr>
      <td className="py-2 text-slate-500">Biaya Pemerintah</td>
      <td className="py-2 text-right text-slate-500">Sesuai kebutuhan & regulasi</td>
    </tr>
  </tbody>
</tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Ringkasan */}
        <aside className="card p-5 h-fit space-y-4">
          <div className="text-sm text-slate-500">Ringkasan</div>
          <div className="text-2xl font-bold">
            {typeof svc.price === "number"
              ? `Rp${svc.price.toLocaleString("id-ID")}`
              : "Minta Penawaran"}
          </div>

          <div className="flex flex-col gap-2">
            {typeof svc.price === "number" ? (
              <Link href={`/checkout/${svc.slug}`} className="btn btn-primary w-full">
                Ajukan Proses
              </Link>
            ) : (
              <a
                href={`https://wa.me/${wa}?text=${waText}`}
                target="_blank"
                className="btn btn-primary w-full"
              >
                Minta Penawaran
              </a>
            )}

            <a
              href={`https://wa.me/${wa}?text=${waText}`}
              target="_blank"
              className="btn w-full"
            >
              Tanya via WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
