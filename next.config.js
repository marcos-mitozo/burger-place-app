/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    experimental: {
        swcPlugins: [['@swc-jotai/react-refresh', {}]],
      }
}

module.exports = nextConfig
