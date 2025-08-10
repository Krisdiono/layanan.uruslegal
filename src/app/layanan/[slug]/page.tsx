// @ts-nocheck
import Link from "next/link";
import services from "@/data/services.json";

export default async function Detail({ params }) {
  const got = params?.then ? await params : params;
  const slug = got.slug;

  const svc = (services || []).find((x) => x.slug === slug);
  if (!svc) return <div>Layanan tidak ditemukan.</div>;

  const wa = `https://wa.me/6281142677700?text=${encodeURIComponent(
    `Halo UrusLegal, saya ingin tanya tentang: ${svc.title}`
  )}`;
  const tpl = process.env.CHECKOUT_URL_TEMPLATE || "https://solusi.uruslegal.id/checkout?service={slug}";
  const checkoutUrl = tpl.replace("{slug}", svc.slug);

  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
      {/* Kiri */}
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

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-6">
          <Badge title="Legalitas Resmi" desc="Sesuai peraturan berlaku." />
          <Badge title="Proses Transparan" desc="Update status tiap tahap." />
          <Badge title="Dokumen Rapi" desc="Format dan arsip yang jelas." />
        </div>

        {/* Detail sections */}
        <section className="space-y-6">
          <div className="border rounded-xl p-6 bg-white shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Informasi</h2>
            <p className="text-sm text-gray-700">
              Detail lengkap mengenai {svc.title}. (Nanti konten otomatis dari panduan.uruslegal.)
            </p>
          </div>
          <div className="border rounded-xl p-6 bg-white shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Persyaratan</h2>
            <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
              <li>KTP/Paspor pemilik</li>
              <li>NPWP (jika ada)</li>
              <li>Alamat & nama usaha</li>
            </ul>
          </div>
          <div className="border rounded-xl p-6 bg-white shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Timeline</h2>
            <p className="text-sm text-gray-700">
              Estimasi proses 3–5 hari kerja setelah persyaratan lengkap.
            </p>
          </div>
        </section>

        {/* FAQ mini */}
        <section className="border rounded-xl p-6 bg-white shadow-sm">
          <h2 className="font-semibold text-lg mb-4">FAQ</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-medium">Apakah harga sudah termasuk biaya resmi?</p>
              <p>Ya, kecuali dinyatakan lain pada rincian layanan.</p>
            </div>
            <div>
              <p className="font-medium">Bagaimana proses pembayarannya?</p>
              <p>Untuk saat ini diarahkan ke solusi.uruslegal untuk checkout aman & cepat.</p>
            </div>
            <div>
              <p className="font-medium">Apakah bisa konsultasi dulu?</p>
              <p>Tentu, klik “Tanya via WhatsApp” untuk konsultasi tanpa biaya.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="sticky top-20 border rounded-xl p-6 bg-white shadow-sm space-y-4">
          <p className="text-lg font-semibold">Mulai proses sekarang</p>
          {typeof svc.price === "number" && (
            <p className="text-emerald-700 font-bold text-2xl">
              Rp {svc.price.toLocaleString("id-ID")}
            </p>
          )}
          <Link href={checkoutUrl} prefetch={false} className="block w-full text-center px-6 py-3 rounded-lg text-white font-medium shadow bg-[var(--brand)] hover:bg-[var(--brand-2)]">
            Ajukan Proses
          </Link>
          <Link href={wa} className="block w-full text-center px-6 py-3 rounded-lg border font-medium hover:bg-gray-50">
            Tanya via WhatsApp
          </Link>
          <ul className="text-xs text-gray-500 space-y-1 pt-2">
            <li>• Pembayaran aman.</li>
            <li>• Dokumen terarsip rapi.</li>
            <li>• Support responsif.</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

function Badge({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">✓</div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
