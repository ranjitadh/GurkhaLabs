import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "192.168.18.197"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "192.168.18.197",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
