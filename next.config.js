/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["images.pexels.com"]
    }
};

module.exports = {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "upgrade-insecure-requests"
            }
          ],
        },
      ]
    },
    ...nextConfig
  };
  module.exports = nextConfig;
