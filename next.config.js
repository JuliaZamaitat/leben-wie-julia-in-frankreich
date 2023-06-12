/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/posts/02-06-23": {
        page: "/posts/[slug]",
        query: { slug: "02-06-23" },
      },
      "/posts/06-06-23": {
        page: "/posts/[slug]",
        query: { slug: "06-06-23" },
      },
      ...defaultPathMap, // Behalte die vordefinierten Pfade bei
    };
  },
};

module.exports = nextConfig;
