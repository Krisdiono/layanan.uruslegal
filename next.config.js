/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        '**/.uploads/**',
        '**/examples/**',
        '**/scripts/**',
        '**/tools/**',
        '**/*.log',
        'build.log',
        'tsc.log'
      ]
    }
  },
  // (opsional) kalau kamu memang sengaja skip cek di CI:
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};

module.exports = nextConfig;
