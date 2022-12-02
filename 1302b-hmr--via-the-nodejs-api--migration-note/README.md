```js
webpackConfig = {
  ...
  entry: [
    // --- [NOTE] ---
    //    hot and client entry is no longer required. See:
    //    https://github.com/webpack/webpack-dev-server/blob/0002ebfbc8f36e92f91013372c9e2bca97022825/migration-v4.md#before-updating
    //
    // 'webpack/hot/dev-server.js',                                    // Runtime code for hot module replacement
    // 'webpack-dev-server/client/index.js?hot=true&live-reload=true', // Dev server client for web socket transport, hot and live reload logic
    './src/index.js', // Your entry
  ],
  ...
  
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
}


const devServerConfig = {
  ...
  hot: true, // Dev server client for web socket transport, hot and live reload logic
  client : {
    logging: 'info',
    overlay: { errors: true, warnings: true }
  }
}
```

see [migration note](https://github.com/webpack/webpack-dev-server/blob/0002ebfbc8f36e92f91013372c9e2bca97022825/migration-v4.md#before-updating)

