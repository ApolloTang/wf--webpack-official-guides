const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    //
    // The SplitChunksPlugin allows us to extract common dependencies
    // into an existing entry chunk or an entirely new chunk.
    //
    // Doc: https://webpack.js.org/plugins/split-chunks-plugin/
    //
    splitChunks: {
      // Providing all can be particularly powerful, because it
      // means that chunks can be shared even between async and
      // non-async chunks.
      // Ref: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks
      chunks: 'all',
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      generateStatsFile:  true
    })
  ]
};


