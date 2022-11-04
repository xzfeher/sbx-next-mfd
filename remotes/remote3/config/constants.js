const remoteName = "remote3";

exports.remoteName = remoteName;

exports.clientLibrary = { type: "var", name: remoteName };

// todo: commonjs-static? assigns to exports
// note: commonjs2 seems the same as commonjs-module
exports.serverLibrary = { type: "commonjs-module" };
