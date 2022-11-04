const { ModuleFederationPlugin } = require("webpack").container;
const {
  NodeFederationPlugin,
  StreamingTargetPlugin,
} = require("@module-federation/node");
const { remoteName, clientLibrary, serverLibrary } = require("./constants");

const remoteFilename = "remoteEntry.js";

const remotes = {};

const exposes = {
  "./Message": "./src/Message",
  "./Button": "./src/Button",
};

const shared = {
  // note: When consuming the remote app within a Next.js environment, we need
  //  to make sure that webpack always selects the host's copy of these modules.
  //  By combining the version: '0' syntax with singleton: true we can guarantee
  //  that this will be the case.
  react: {
    singleton: true,
    version: "0",
    requiredVersion: false,
  },

  // note: did not help with ssr usage in next host
  // "react/": {
  //   singleton: true,
  //   version: "0",
  //   requiredVersion: false,
  // },

  "react-dom": {
    singleton: true,
    version: "0",
    requiredVersion: false,
  },
};

module.exports = {
  client: new ModuleFederationPlugin({
    name: remoteName,
    filename: remoteFilename,
    library: clientLibrary,
    remotes,
    exposes,
    shared,
  }),

  server: [
    // todo: UniversalFederationPlugin over these two?
    new NodeFederationPlugin({
      name: remoteName,
      filename: remoteFilename,
      library: serverLibrary,
      remotes,
      exposes,
      shared,
    }),

    new StreamingTargetPlugin({
      name: remoteName,
      library: serverLibrary,
      remotes,
    }),
  ],
};
