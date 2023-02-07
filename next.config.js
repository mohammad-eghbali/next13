/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/proxy/clarity/",
        destination: "https://www.clarity.ms/eus2-c/s/0.7.1/clarity.js",
      },
    ];
  },
};

module.exports = nextConfig;
