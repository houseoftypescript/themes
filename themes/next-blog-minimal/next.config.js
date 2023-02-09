/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/themes/next-blog-minimal/' : '/',
  images: { unoptimized: true },
};

module.exports = nextConfig;
