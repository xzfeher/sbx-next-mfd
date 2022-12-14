const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config, options) {
    // const location = options.isServer ? "ssr" : "chunks";
    const locationWp = options.isServer ? "server" : "client";
    const locationNext = options.isServer ? "ssr" : "chunks";

    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        // note: why we need this if we are consumers only?
        filename: "static/chunks/remoteEntry.js",

        remotes: {
          remote1: `remote1@http://localhost:3001/${locationWp}/remoteEntry.js`,
          remote2: `remote2@http://localhost:3002/${locationWp}/remoteEntry.js`,
          remote3: `remote3@http://localhost:3003/${locationWp}/remoteEntry.js`,
          remote4: `remote4@http://localhost:3004/static/${locationNext}/remoteEntry.js`,
        },

        // exposes: {},

        // note: some stuff shared by default (react, react-dom, ...)
        //  https://github.com/module-federation/nextjs-mf/tree/main/packages/nextjs-mf#whats-shared-by-default
        // shared: {},

        // extraOptions: {
        //   automaticAsyncBoundary: true,
        // },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
