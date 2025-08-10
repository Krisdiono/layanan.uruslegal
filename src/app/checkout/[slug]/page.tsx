// @ts-nocheck
import Link from "next/link";
import services from "@/data/services.json";

/**
 * Halaman Checkout elegan:
 * - Form data pemesan (nama, email, WA)
 * - Upload dokumen (placeholder, nanti kita sambung ke Azure Blob)
 * - Ringkasan pesanan sticky di kanan
 * - CTA Bayar Sekarang (sementara alert; nanti dihubungkan ke Midtrans)
 */

export default async function Checkout({ params }) {
  // Support Next 15: params bisa Promise
  const gotParams = params?.then ? await params : params;
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

/* ===================== CLIENT COMPONENTS ===================== */

function FormSection() {
  "use client";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Data Pemesan</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Nama Lengkap</label>
          <input
            className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Nama sesuai KTP"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Email</label>
          <input
            type="email"
            className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="email@contoh.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Nomor WhatsApp</label>
          <input
            className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="08xxxxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </div>
      </div>
      <p className="text-xs text-gray-500">
        Data ini akan digunakan untuk invoice dan komunikasi status proses.
      </p>
    </div>
  );
}

function UploadBox() {
  "use client";
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="rounded-xl border-2 border-dashed p-6 text-center">
      <input
        id="upload"
        type="file"
        multiple
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        onChange={(e) => {
          const list = Array.from(e.target.files || []);
          setFiles(list);
        }}
      />
      <label htmlFor="upload" className="cursor-pointer inline-block px-4 py-2 rounded-lg border hover:bg-gray-50">
        Pilih File
      </label>
      {files.length > 0 && (
        <ul className="text-sm text-left mt-4 space-y-1">
          {files.map((f, idx) => (
            <li key={idx} className="flex justify-between">
              <span className="truncate">{f.name}</span>
              <span className="text-gray-500">{Math.ceil(f.size / 1024)} KB</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function OrderSummary({ svc }) {
  "use client";
  const router = useRouter();

  const price = typeof svc.price === "number" ? svc.price : 0;
  const fee = Math.round(price * 0.03); // simulasi biaya gateway 3%
  const total = price + fee;

  return (
    <div className="sticky top-20 border rounded-xl p-6 shadow-sm bg-white space-y-4">
      <div>
        <p className="text-sm text-gray-500">Layanan</p>
        <p className="font-semibold">{svc.title}</p>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Harga</span>
          <span>{price > 0 ? `Rp ${price.toLocaleString("id-ID")}` : "-"}</span>
        </div>
        <div className="flex justify-between">
          <span>Biaya Layanan</span>
          <span>{price > 0 ? `Rp ${fee.toLocaleString("id-ID")}` : "-"}</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>{price > 0 ? `Rp ${total.toLocaleString("id-ID")}` : "-"}</span>
        </div>
      </div>

      <button
        className="w-full px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 transition"
        onClick={() => {
          // Placeholder: nanti trigger createTransaction (server) -> redirect Snap / VT-Web
          alert("Next: create transaction → redirect ke Midtrans Snap/VT-Web");
          // router.push("/thanks"); // optional
        }}
      >
        Bayar Sekarang
      </button>

      <p className="text-xs text-gray-500">
        Dengan melanjutkan, Anda menyetujui syarat & ketentuan yang berlaku.
      </p>
    </div>
  );
}

/* React hooks untuk client component */
import { useState } from "react";
import { useRouter } from "next/navigation";
