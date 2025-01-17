const { merge } = require("webpack-merge");
const common = require("./webpack.common.cjs");

module.exports = [
  merge(common, {
    mode: "production",
    output: {
      filename: "index.cjs",
      libraryTarget: "commonjs2",
    },
  }),
  merge(common, {
    mode: "production",
    output: {
      filename: "index.mjs",
      library: {
        type: "module",
      },
    },
    experiments: {
      outputModule: true,
    },
  }),
];
