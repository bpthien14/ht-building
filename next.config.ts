import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.htbuilding.info',
      },
    ],
  },
};

export default nextConfig;
