import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/auth/:path*",
        destination: "http://localhost:3001/:path*",
      },
      {
        source: "/dashboard/:path*",
        destination: "http://localhost:3002/:path*",
      },
    ];
  },
};

export default nextConfig;
