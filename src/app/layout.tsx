import "./globals.css";
import Link from "next/link";

export const metadata = { title: "UrusLegal — Katalog Layanan", description: "Layanan legal & perizinan" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen">
        <header className="border-b bg-white">
          <nav className="max-w-6xl mx-auto px-4 lg:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold">UrusLegal</Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/">Layanan</Link>
              <Link href="https://wa.me/6281142677700">Tanya</Link>
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-4 lg:px-8 py-10">{children}</main>

        <footer className="mt-16 border-t text-sm text-gray-500">
          <div className="max-w-6xl mx-auto px-4 lg:px-8 h-14 flex items-center">
            © {new Date().getFullYear()} UrusLegal
          </div>
        </footer>
      </body>
    </html>
  );
}
