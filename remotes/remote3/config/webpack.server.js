const path = require("path");
const { merge } = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");
const { serverLibrary } = require("./constants");

module.exports = merge(sharedWebpackConfig, {
  name: "server",
  target: false,

  output: {
    path: path.resolve(__dirname, "../dist/server"),
    library: serverLibrary,
  },

  plugins: [...moduleFederationPlugin.server],
});
