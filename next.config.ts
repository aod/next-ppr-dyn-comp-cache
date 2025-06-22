import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    useCache: true,
    dynamicIO: true,
    // ppr: 'incremental' // Error: `experimental.ppr` can not be `"incremental"` when `experimental.dynamicIO` is `true`. PPR is implicitly enabled when Dynamic IO is enabled.
  },
};

export default nextConfig;
