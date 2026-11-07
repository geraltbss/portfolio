import type { NextConfig } from "next";
import { getBasePath } from "./src/lib/site";

const nextConfig: NextConfig = {
  output: "export",
  basePath: getBasePath(),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
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
