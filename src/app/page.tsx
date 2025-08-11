// /src/app/page.tsx
import Link from "next/link";
import { safeFetchServices } from "@/lib/fetcher";

export const revalidate = 300; // ISR 5 menit

export default async function Page() {
  const services = await safeFetchServices();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Daftar Layanan</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((svc) => (
          <Link key={svc.id} href={`/${svc.slug}`} className="rounded-2xl border p-5 hover:shadow-md transition">
            <h2 className="font-medium mb-2">{svc.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-3">{svc.summary ?? ""}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
