/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/meter",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/currency",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
