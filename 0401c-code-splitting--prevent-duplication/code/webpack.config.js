const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',   // see: https://webpack.js.org/configuration/entry-context/#dependencies
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    // If we're going to use multiple entry points on a single
    // HTML page, optimization.runtimeChunk: 'single' is needed
    // Otherwise you will get problem mention here:
    //   https://bundlers.tooling.report/code-splitting/multi-entry/
    runtimeChunk: 'single',
  },
};


