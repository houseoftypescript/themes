/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/themes/next-store-minimal/' : '/',
  images: { unoptimized: true },
};

module.exports = nextConfig;
