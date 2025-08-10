// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true }, // sesuai setup kita
  // tambahkan opsi lain kalau perlu, tapi jangan ada fungsi app-mu
};

export default nextConfig;
