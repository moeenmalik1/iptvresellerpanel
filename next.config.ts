import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  experimental: {
    // Force single-worker static generation to bypass Next.js 16.2.6 bug where
    // parallel workers 2 and 3 have uninitialized workAsyncStorage, causing
    // "Expected workStore to be initialized" errors during prerendering.
    cpus: 1,
  },
};

export default nextConfig;
