/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
distDir: "build",
  eslint: {
 ignoreDuringBuilds: true,
}
, images:{unoptimized:true}}

module.exports = nextConfig
