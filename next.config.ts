import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['next-mdx-remote'],
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,
};

export default nextConfig;
