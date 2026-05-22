import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // reactCompiler disabled — babel-plugin-react-compiler incompatible with this setup
  reactCompiler: false,
};

export default withNextIntl(nextConfig);
