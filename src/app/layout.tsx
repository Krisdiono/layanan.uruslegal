// src/app/layout.tsx
import "./globals.css";
import ChatDrawer from "@/components/ChatDrawer";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "UrusLegal",
  description: "Layanan legal yang cepat & mudah",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b">
          <div className="max-w-6xl mx-auto p-4 flex items-center gap-6">
            <a href="/" className="font-semibold">UrusLegal</a>
            <nav className="text-sm ml-auto flex gap-4">
              <a href="/">Layanan</a>
              <a href="/tanya">Tanya</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t mt-10">
          <div className="max-w-6xl mx-auto p-4 text-sm text-slate-500">© {new Date().getFullYear()} UrusLegal</div>
        </footer>
      </body>
    </html>
  );
}
