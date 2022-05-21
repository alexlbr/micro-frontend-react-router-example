// eslint-disable-next-line @typescript-eslint/no-var-requires
const { HostWebpackPlugin } = require("@leanjs/webpack");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJsonDeps = require("./package.json").dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/react-router-1-sub-pages/:id",
        destination: "/react-router-1-sub-pages?id=:id",
      },
      {
        source: "/react-router-2-sub-pages/:id",
        destination: "/react-router-2-sub-pages?id=:id",
      },
    ];
  },
  webpack: (config) => {
    config.plugins.push(
      new HostWebpackPlugin({
        shared: {
          react: {
            eager: true,
            requiredVersion: packageJsonDeps.react,
          },
          "react-dom": {
            eager: true,
            requiredVersion: packageJsonDeps["react-dom"],
          },
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
