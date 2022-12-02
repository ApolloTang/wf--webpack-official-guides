const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

webpackConfig = {
  mode: 'development',
  entry: [
    // --- [NOTE] ---
    //    hot and client entry is no longer required. See:
    //    https://github.com/webpack/webpack-dev-server/blob/0002ebfbc8f36e92f91013372c9e2bca97022825/migration-v4.md#before-updating
    //
    // 'webpack/hot/dev-server.js',                                    // Runtime code for hot module replacement
    // 'webpack-dev-server/client/index.js?hot=true&live-reload=true', // Dev server client for web socket transport, hot and live reload logic
    './src/index.js', // Your entry
  ],
  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
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

const compiler = webpack(webpackConfig);

const devServerConfig = {
  static: './static',
  host: 'localhost',
  port: '9999',

  hot: true, // Dev server client for web socket transport, hot and live reload logic
  client : {
    logging: 'info',
    overlay: { errors: true, warnings: true }
  }
}

const server = new webpackDevServer( devServerConfig, compiler);

(async () => {
  await server.start();
  console.log('dev server is running');
})()

