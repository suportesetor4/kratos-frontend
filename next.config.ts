import type { NextConfig } from "next";

// desativar o async headers na produção real. estamos utilizando isso pelo erro de mixed content entre o ambiente de produção next e desenvolvimento backend

// async headers() {
//   return [
//     {
//       source: '/(.*)',
//       headers: [
//         {
//           key: 'Content-Security-Policy',
//           value: 'upgrade-insecure-requests',
//         },
//       ],
//     },
//   ];
// },

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
