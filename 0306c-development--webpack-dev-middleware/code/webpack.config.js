const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './static',
    host: 'localhost',
    port: '9999',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: '/',  // <---- to make sure files are served correctly on http://localhost:<PORT>
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
