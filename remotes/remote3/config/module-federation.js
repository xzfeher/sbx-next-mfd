const { ModuleFederationPlugin } = require("webpack").container;
const {
  NodeFederationPlugin,
  StreamingTargetPlugin,
} = require("@module-federation/node");
const { remoteName, clientLibrary, serverLibrary } = require("./constants");

const remoteFilename = "remoteEntry.js";

const remotes = {};

const exposes = {
  "./banan": "./src/banan",
  "./narancs": "./src/narancs",
};

const shared = {};

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
