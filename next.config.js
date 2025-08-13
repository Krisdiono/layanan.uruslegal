/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        '**/.uploads/**',   // ini biang paling sering
        '**/*.log'
      ]
    }
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};
module.exports = nextConfig;
