/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "https://erasmus-energy-web-app.vercel.app/"]
  }
}

module.exports = nextConfig
