import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? "/myPortfolio" : "",
  assetPrefix: isGithubPages ? "/myPortfolio" : "",
  output: isGithubPages ? "export" : undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      { hostname: "cdn.hashnode.com" },
      { hostname: "media.graphassets.com" },
      { hostname: "ap-south-1.graphassets.com" },
      { hostname: "via.placeholder.com" },
      { hostname: "cdn.simpleicons.org" },
      { hostname: "api.iconify.design" },
      { hostname: "share.google.com" },
      { hostname: "logo.clearbit.com" },
      { hostname: "www.headstarter.ai" },
      { hostname: "headstarter.ai" },
      { hostname: "www.blackrock.com" },
      { hostname: "blackrock.com" },
    ],
    dangerouslyAllowSVG: true,
  },
  // Headers are not supported in static export, so we skip them for GitHub Pages
};

export default nextConfig;
