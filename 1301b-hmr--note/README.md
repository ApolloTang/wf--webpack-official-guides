```js
module.exports = {
  ...
  entry: {
    index: './src/index.js',
    // --- [NOTE] ---
    //    hot and client entry in not necessary.
    //
    // hot: 'webpack/hot/dev-server.js',                                       // Runtime code for hot module replacement
    // client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true', // Dev server client for web socket transport, hot and live reload logic
  }
  ...
}

```

It appears that `'webpack-dev-server/client/index.js?hot=true&live-reload=true'` and `'webpack/hot/dev-server.js'` is not longer needed.  I am unable to find any documentation on them.

