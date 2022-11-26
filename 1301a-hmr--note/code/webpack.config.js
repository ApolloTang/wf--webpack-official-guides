const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    // --- [NOTE] ---
    //    hot and client entry in not necessary.
    //
    // hot: 'webpack/hot/dev-server.js',                                       // Runtime code for hot module replacement
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
    new webpack.HotModuleReplacementPlugin(), // Plugin for hot module replacement
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
