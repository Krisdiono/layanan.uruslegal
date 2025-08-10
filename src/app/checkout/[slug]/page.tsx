// @ts-nocheck
import Link from "next/link";
import services from "@/data/services.json";
import FormSection from "@/components/checkout/FormSection";
import UploadBox from "@/components/checkout/UploadBox";
import OrderSummary from "@/components/checkout/OrderSummary";

export default async function Checkout({ params }) {
  const gotParams = params?.then ? await params : params; // Next 15 support
  const slug = gotParams.slug;

  const svc = (services || []).find((x) => x.slug === slug);
  if (!svc) return <div className="max-w-3xl mx-auto p-6">Checkout: layanan tidak ditemukan.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-10 grid lg:grid-cols-3 gap-8">
      {/* KIRI: FORM */}
      <div className="lg:col-span-2 space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-gray-900">Checkout — {svc.title}</h1>
          <p className="text-gray-600 mt-1">
            Lengkapi data berikut untuk melanjutkan proses {svc.title}. Dokumen bisa diunggah sekarang atau nanti.
          </p>
        </header>

        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <FormSection />
        </div>

        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Unggah Dokumen Pendukung</h2>
          <p className="text-sm text-gray-600 mb-3">
            File yang umum dibutuhkan: KTP, NPWP (jika ada), dokumen pendukung lain sesuai layanan.
          </p>
          <UploadBox />
          <p className="text-xs text-gray-500 mt-3">
            *Batas maksimal 10MB per file. Format: PDF/JPG/PNG. (Nanti kita simpan ke Azure Blob Storage.)
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Catatan Tambahan</h2>
          <textarea
            className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            rows={4}
            placeholder="Tulis informasi tambahan, preferensi nama, atau detail khusus lainnya..."
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href={`/layanan/${svc.slug}`} className="px-5 py-3 rounded-lg border font-medium hover:bg-gray-50">
            Kembali ke Detail
          </Link>
          <Link
            href={`https://wa.me/6281142677700?text=${encodeURIComponent(
              `Halo UrusLegal, saya ingin tanya tentang: ${svc.title}`
            )}`}
            className="px-5 py-3 rounded-lg border font-medium hover:bg-gray-50"
          >
            Tanya via WhatsApp
          </Link>
        </div>
      </div>

      {/* KANAN: RINGKASAN ORDER */}
      <aside className="lg:col-span-1">
        <OrderSummary svc={svc} />
      </aside>
    </div>
  );
}
