import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/auth/:path*",
        destination: `${process.env.NEXT_CONFIG_AUTH_URL}/:path*`,
      },
      {
        source: "/dashboard/:path*",
        destination: `${process.env.NEXT_CONFIG_DASHBOARD_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
