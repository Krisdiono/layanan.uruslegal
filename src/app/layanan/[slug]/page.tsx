// @ts-nocheck
import Link from "next/link";
import services from "@/data/services.json";

export default async function Detail(props: any) {
  const got = props?.params?.slug ? props.params : await props.params;
  const slug = got.slug as string;

  const svc = (services as any[]).find((x) => x.slug === slug);
  if (!svc) return <div>Layanan tidak ditemukan.</div>;

  const wa = `https://wa.me/6281142677700?text=${encodeURIComponent(
    `Halo UrusLegal, saya ingin tanya tentang: ${svc.title}`
  )}`;

  return (
    <article className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">{svc.title}</h1>
        {svc.summary ? <p className="text-slate-700 mt-2">{svc.summary}</p> : null}
        {typeof svc.price === "number" ? (
          <div className="mt-2 text-emerald-700 font-semibold">
            Mulai Rp {svc.price.toLocaleString("id-ID")}
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href={wa} className="px-4 py-2 rounded-xl border hover:bg-slate-50 text-sm">
          Tanya (WhatsApp)
        </Link>
        <Link href={`/checkout/${svc.slug}`} className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm">
          Ajukan Proses
        </Link>
      </div>

      <section className="grid sm:grid-cols-2 gap-4">
        <div className="border rounded-2xl p-4">
          <h2 className="font-medium mb-2">Informasi</h2>
          <p className="text-sm text-slate-700">
            Detail ringkas mengenai {svc.title}. (Konten nanti kita tarik dari panduan API.)
          </p>
        </div>
        <div className="border rounded-2xl p-4">
          <h2 className="font-medium mb-2">Persyaratan</h2>
          <ul className="text-sm text-slate-700 list-disc ml-5 space-y-1">
            <li>KTP/Paspor pemilik</li>
            <li>NPWP (jika ada)</li>
            <li>Alamat &amp; nama usaha</li>
          </ul>
        </div>
      </section>
    </article>
  );
}
