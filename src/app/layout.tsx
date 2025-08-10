import "./globals.css";
export const metadata = { title: "UrusLegal — Layanan", description: "Katalog layanan UrusLegal" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-slate-800">
        <header className="border-b">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-semibold text-xl">UrusLegal</a>
            <nav className="flex gap-4 text-sm">
              <a href="/" className="hover:underline">Layanan</a>
              <a href="https://wa.me/6281142677700" className="hover:underline">Tanya</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t mt-12">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500">
            © {new Date().getFullYear()} UrusLegal
          </div>
        </footer>
      </body>
    </html>
  );
}
