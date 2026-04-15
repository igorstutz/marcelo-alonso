/** @type {import('next').NextConfig} */
const isGhPages = process.env.GH_PAGES === "true";
const repo = "marcelo-alonso";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "drmarceloalonso.com.br" },
    ],
  },
  basePath: isGhPages ? `/${repo}` : "",
  assetPrefix: isGhPages ? `/${repo}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGhPages ? `/${repo}` : "",
  },
};

export default nextConfig;
