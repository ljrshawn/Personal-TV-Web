/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.etsystatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
