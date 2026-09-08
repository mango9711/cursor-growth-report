import type { NextConfig } from "next"

const isGitHubPages = process.env.GITHUB_PAGES === "true"

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  images: { unoptimized: true },
  trailingSlash: isGitHubPages,
  basePath: isGitHubPages ? "/cursor-growth-report" : undefined,
  assetPrefix: isGitHubPages ? "/cursor-growth-report" : undefined,
}

export default nextConfig
