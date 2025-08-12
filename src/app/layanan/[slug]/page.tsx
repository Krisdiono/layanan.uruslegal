import { getLayanan } from "@/lib/solusi";

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
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">{svc.title}</h1>
      {svc.price && <div className="text-emerald-700 font-semibold">Rp {svc.price.toLocaleString("id-ID")}</div>}
      <p>{svc.description}</p>

      {svc.detail?.inclusions && (
        <>
          <h2 className="font-semibold">Termasuk:</h2>
          <ul className="list-disc pl-6">
            {svc.detail.inclusions.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </>
      )}

      {svc.timeline && (
        <p><strong>Estimasi Waktu:</strong> {svc.timeline}</p>
      )}
    </main>
  );
}
