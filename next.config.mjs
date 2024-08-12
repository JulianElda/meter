/** @type {import('next').NextConfig} */
const nextConfig = {
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
