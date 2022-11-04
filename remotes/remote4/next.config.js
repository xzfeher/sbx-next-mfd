const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config, options) {
    // const location = options.isServer ? "ssr" : "chunks";
    // const location = options.isServer ? "server" : "client";

    config.plugins.push(
      new NextFederationPlugin({
        name: "remote4",
        // note: why we need this if we are consumers only?
        filename: "static/chunks/remoteEntry.js",

        remotes: {
          //   remote1: `remote1@http://localhost:3001/${location}/remoteEntry.js`,
          //   remote2: `remote2@http://localhost:3002/${location}/remoteEntry.js`,
          //   remote3: `remote3@http://localhost:3003/${location}/remoteEntry.js`,
        },

        exposes: {
          "./Button": "./components/Button",
          "./Message": "./components/Message",
        },

        // note: some stuff shared by default (react, react-dom, ...)
        //  https://github.com/module-federation/nextjs-mf/tree/main/packages/nextjs-mf#whats-shared-by-default
        shared: {},

        // extraOptions: {
        //   automaticAsyncBoundary: true,
        // },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
