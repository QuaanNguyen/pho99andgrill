import path from "node:path";
import type { NextConfig } from "next";

const repoName = "pho99andgrill";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath,

  env: {
    // Exposed to the client so unoptimized <Image> can prefix paths manually
    // (Next 16 only auto-prefixes basePath for navigation + _next/static, not
    // for `<Image unoptimized>` src attrs).
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

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
