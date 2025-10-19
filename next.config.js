/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    allowedDevOrigins: ["http://localhost:3000", "http://192.168.0.30:3000"]
  }
};
module.exports = nextConfig;
