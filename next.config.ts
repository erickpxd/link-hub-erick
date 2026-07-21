import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  allowedDevOrigins: ["192.168.0.13"],
  images: { unoptimized: true },
};

export default nextConfig;
