const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? "/meter" : "",
  assetPrefix: isProd ? "/meter/" : "",
  trailingSlash: true,
};

export default nextConfig;
