import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // reactCompiler disabled — babel-plugin-react-compiler incompatible with this setup
  reactCompiler: false,
  
  // Disable source maps in production to eliminate wasted bytes and reduce Lighthouse critical request chains
  productionBrowserSourceMaps: false,
  
  // Enforce consistent non-trailing slash redirection
  trailingSlash: false,
  
  // Optimize package imports for high-performance tree shaking
  experimental: {
    optimizePackageImports: ["next-intl"],
  },
  
  // Strip console statements in production to reduce bundle size
  compiler: {
    removeConsole: true,
  },
};

export default withNextIntl(nextConfig);
