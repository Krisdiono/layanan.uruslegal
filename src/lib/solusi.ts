// src/lib/solusi.ts
import type { Svc } from "@/types/service";

const layanan: Svc[] = [
  {
    slug: "pendirian-pt",
    title: "Pendirian PT",
    price: 3500000,
    summary: "Paket lengkap pendirian Perseroan Terbatas.",
    description: "Deskripsi lengkap pendirian PT...",
    detail: {
      inclusions: ["Draft akta", "SK Kemenkumham", "NPWP", "NIB"],
      process: ["Pengumpulan dokumen", "Drafting akta", "Pengesahan"],
    },
    timeline: "7-10 hari kerja",
    category: "Badan Usaha"
  },
  {
    slug: "pendirian-cv",
    title: "Pendirian CV",
    price: 2500000,
    summary: "Layanan pendirian CV cepat & ringkas.",
    description: "Deskripsi lengkap pendirian CV...",
    detail: {
      inclusions: ["Draft akta", "SK Kemenkumham", "NPWP", "NIB"],
      process: ["Pengumpulan dokumen", "Drafting akta", "Pengesahan"],
    },
    timeline: "5-7 hari kerja",
    category: "Badan Usaha"
  },
  {
    slug: "pendaftaran-merek",
    title: "Pendaftaran Merek",
    price: 1800000,
    summary: "Urus merek dagang sampai submit DJKI.",
    description: "Deskripsi lengkap pendaftaran merek...",
    detail: {
      inclusions: ["Pengecekan awal", "Penyusunan dokumen", "Submit DJKI"],
      process: ["Cek ketersediaan", "Pengajuan", "Monitoring"],
    },
    timeline: "2-3 hari kerja",
    category: "Kekayaan Intelektual"
  }
];

export async function listLayanan(): Promise<Svc[]> {
  return layanan;
}

export async function getLayanan(slug: string): Promise<Svc | undefined> {
  return layanan.find(s => s.slug === slug);
}
