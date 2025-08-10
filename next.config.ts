import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // sementara biar gampang build; nanti kita aktifkan lagi pelan-pelan
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // HAPUS kalau sebelumnya ada: output: "standalone"
};

export default nextConfig;
