const path = require("path");
const { merge } = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");

module.exports = merge(sharedWebpackConfig, {
  name: "client",
  // target => Defaults to 'browserslist' or to 'web' when no browserslist configuration was found.

  output: {
    path: path.resolve(__dirname, "../dist/client"),
  },

  plugins: [moduleFederationPlugin.client],
});
