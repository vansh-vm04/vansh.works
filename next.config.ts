import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:"res.cloudinary.com"
      },
      {
        hostname:"cdn.simpleicons.org"
      },
      {
        hostname:"skillicons.dev"
      },
      {
        hostname:"cdn.jsdelivr.net"
      }
    ],

    qualities: [50, 70, 100],
  }
  /* config options here */
};

export default nextConfig;
