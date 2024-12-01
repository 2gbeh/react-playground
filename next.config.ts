import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "template68211.motopreview.com",
        port: "",
        pathname: "/mt-demo/**",
      },
    ],
  },
};

export default nextConfig;
