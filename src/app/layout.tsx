import "./globals.css";
import Script from "next/script";
import Link from "next/link";

export const metadata = { title: "UrusLegal" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900">
        <header className="border-b bg-white">
          <nav className="max-w-6xl mx-auto p-4 flex items-center justify-between">
            <Link href="/" className="text-emerald-700 font-semibold">UrusLegal</Link>
            <div className="flex gap-6 text-sm">
              <Link href="/layanan" className="hover:text-emerald-700">Layanan</Link>
              <a href="https://wa.me/6281142677700" className="hover:text-emerald-700">Tanya</a>
            </div>
          </nav>
        </header>

        <main className="min-h-[70vh]">{children}</main>

        <footer className="border-t bg-white">
          <div className="max-w-6xl mx-auto p-6 text-sm text-slate-500">
            © {new Date().getFullYear()} UrusLegal
          </div>
        </footer>

        <Script
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
