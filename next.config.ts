import type { NextConfig } from "next";

const [repositoryOwner, repositoryName] =
  process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const basePath =
  process.env.GITHUB_PAGES === "true" &&
  repositoryName &&
  repositoryName.toLowerCase() !== `${repositoryOwner?.toLowerCase()}.github.io`
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
