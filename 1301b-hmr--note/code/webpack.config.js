const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    // --- [NOTE] ---
    //    hot and client entry is no longer required. See:
    //    https://github.com/webpack/webpack-dev-server/blob/0002ebfbc8f36e92f91013372c9e2bca97022825/migration-v4.md#before-updating
    //
    // hot: 'webpack/hot/dev-server',                                          // Runtime code for hot module replacement
    // client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true', // Dev server client for web socket transport, hot and live reload logic
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './static',
    host: 'localhost',
    port: '9999',
    hot: true, // Dev server client for web socket transport, hot and live reload logic
    client : {
      logging: 'info',
      overlay: { errors: true, warnings: true }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
    // --- [NOTE] ---
    //    "new webpack.HotModuleReplacementPlugin()" is no longer requried. See:
    //    https://github.com/webpack/webpack-dev-server/blob/0002ebfbc8f36e92f91013372c9e2bca97022825/migration-v4.md#before-updating
    //
    // new webpack.HotModuleReplacementPlugin(), // Plugin for hot module replacement
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
