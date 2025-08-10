import Link from "next/link";
import services from "@/data/services.json";

type Params = { slug: string };
type Service = { slug: string; title: string; summary?: string; price?: number };

export default async function Detail(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;

  const list = services as Service[];
  const svc = list.find((x) => x.slug === slug);
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
        <
