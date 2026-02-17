import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["chowmein.localhost"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
