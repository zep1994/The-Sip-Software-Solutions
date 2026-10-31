/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { minimumCacheTTL: 2592000 },
  poweredByHeader: false,
  output: "standalone",
};

export default nextConfig;
