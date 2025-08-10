import Link from "next/link";
import { getLayananList } from "@/lib/solusi";

export default async function Home() {
  const list = await getLayananList();
  const tpl = process.env.CHECKOUT_URL_TEMPLATE || "https://solusi.uruslegal.id/checkout?service={slug}";

  return (
    <div className="space-y-8">
      <section className="text-center space-y-3">
        <h1 className="text-3xl font-bold">Katalog Layanan</h1>
        <p className="text-gray-600">Transparan, cepat, & terpercaya.</p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((svc) => {
          const checkoutUrl = tpl.replace("{slug}", svc.slug);
          const wa = `https://wa.me/6281142677700?text=${encodeURIComponent(`Halo UrusLegal, saya ingin tanya tentang: ${svc.title}`)}`;
          return (
            <article key={svc.slug} className="border rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition flex flex-col gap-3">
              <div>
                <h2 className="font-semibold">{svc.title}</h2>
                {svc.summary && <p className="text-sm text-gray-600 mt-1">{svc.summary}</p>}
                {typeof svc.price === "number" && (
                  <p className="mt-2 text-emerald-700 font-semibold">Rp {svc.price.toLocaleString("id-ID")}</p>
                )}
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <Link href={`/layanan/${svc.slug}`} className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-50">Detail</Link>
                <Link href={wa} className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-50">Tanya</Link>
                <Link href={checkoutUrl} prefetch={false} className="px-5 py-2 rounded-lg text-white font-medium shadow bg-[var(--brand)] hover:bg-[var(--brand-2)] text-sm ml-auto">
                  Ajukan Proses
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
