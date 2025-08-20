import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

//    images: {
//  domains: [
//       'images.unsplash.com',
//       'cdn.pixabay.com',    //need to add the domain for product images 
//     ],
//  remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "**",
//     },
//   ],

//   },

images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                pathname: '**'
            }
        ]
    }






};

export default nextConfig;
