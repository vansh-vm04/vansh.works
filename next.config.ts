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
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
