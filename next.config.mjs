/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/portfolio", destination: "/work", permanent: true }];
  },
};

export default nextConfig;
