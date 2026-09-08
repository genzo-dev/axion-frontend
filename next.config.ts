import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  async rewrites() {
    return [
      {
        source: "/pictures/:path*",
        destination: `${process.env.API_URL}/pictures/:path*`,
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    localPatterns: [
      {
        pathname: "/pictures/**",
      },
      {
        pathname: "/images/**",
      },
    ],
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          //TODO: Refletir melhor sobre o cache control global. Possibilidade de remoção
          key: "Cache-Control",
          value: "public, max-age=3600, stale-while-revalidate=86400",
        },
      ],
    },
  ],
};
export default nextConfig;
