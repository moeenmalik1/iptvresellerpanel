import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactCompiler disabled — babel-plugin-react-compiler incompatible with this setup
  reactCompiler: false,
};

export default nextConfig;
