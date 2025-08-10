// @ts-nocheck
import Link from "next/link";
import { getLayananBySlug } from "@/lib/solusi";

export default async function Detail({ params }) {
  const got = params?.then ? await params : params;
  const svc = await getLayananBySlug(got.slug);
  if (!svc) return <div>Layanan tidak ditemukan.</div>;

  const wa = `https://wa.me/6281142677700?text=${encodeURIComponent(`Halo UrusLegal, saya ingin tanya tentang: ${svc.title}`)}`;
  const tpl = process.env.CHECKOUT_URL_TEMPLATE || "https://solusi.uruslegal.id/checkout?service={slug}";
  const checkoutUrl = tpl.replace("{slug}", svc.slug);

  return (
    /* …(UI yang sudah cakep) ganti variabelnya pakai `svc` dari API … */
    /* (biar singkat, UI yang kemarin kita pakai tetap sama) */
    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
      {/* kiri: judul/summary/price + CTA */}
      <div className="lg:col-span-2 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{svc.title}</h1>
          {svc.summary && <p className="mt-2 text-lg text-gray-600">{svc.summary}</p>}
          {typeof svc.price === "number" && (
            <p className="mt-4 text-emerald-700 font-semibold text-xl">
              Mulai Rp {svc.price.toLocaleString("id-ID")}
            </p>
          )}
          <div className="flex gap-3 mt-6">
            <Link href={checkoutUrl} prefetch={false} className="px-6 py-3 rounded-lg text-white font-medium shadow bg-[var(--brand)] hover:bg-[var(--brand-2)]">
              Ajukan Proses
            </Link>
            <Link href={wa} className="px-6 py-3 rounded-lg border font-medium hover:bg-gray-50">
              Tanya via WhatsApp
            </Link>
          </div>
        </div>
        {/* …sections lainnya tetap… */}
      </div>
      {/* sidebar tetap… */}
    </div>
  );
}
