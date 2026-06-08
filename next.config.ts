import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactCompiler: true,
 turbopack: {
  rules: {
   "*.svg": {
    loaders: [
     {
      loader: "@svgr/webpack",
      options: {
       svgo: true,
       svgoConfig: {
        plugins: [
         {
          name: "preset-default",
          params: {
           overrides: {
            removeViewBox: false, // keeps viewBox — essential for scaling via CSS/props
           },
          },
         },
         "removeDimensions", // removes hardcoded width/height attributes so CSS/props control size
        ],
       },
       typescript: true, // generates typed components
       dimensions: false, // don't add width/height props by default
      },
     },
    ],
    as: "*.tsx",
   },
  },
 },
};

export default nextConfig;
