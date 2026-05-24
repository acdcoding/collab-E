import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevent Clickjacking
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block", // Enable XSS filtering
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Control referrer information
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()", // Disable powerful features if not needed
          },
        ],
      },
    ];
  },
};

export default nextConfig;
