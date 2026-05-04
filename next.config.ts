import path from "node:path";
import type { NextConfig } from "next";

const repoName = "pho99andgrill";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/pho99andgrill" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,

  assetPrefix: isGithubPages ? `/${basePath}/` : "",

  turbopack: {
    root: path.join(__dirname),
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;