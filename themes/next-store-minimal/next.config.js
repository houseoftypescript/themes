/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/themes/next-store-minimal/' : '/',
  images: { unoptimized: true },
};

module.exports = nextConfig;
