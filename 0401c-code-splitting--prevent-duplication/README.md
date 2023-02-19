```js
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
    //
    // If we're going to use multiple entry points on a single
    // HTML page, optimization.runtimeChunk: 'single' is needed
    // Otherwise you will get problem mention here:
    //
    //   https://bundlers.tooling.report/code-splitting/multi-entry/
    //
    // The document of the above link said `runtimeChunk: single`
    // moves Webpack's runtime module loader into its own bundle
    // rather than being inlined into each entry. It creates a
    // global registry allowing code-splitted modules to behared
    // between entries. This doesn't prevent Webpack from copying
    // module code between entry points, but it prevents it creating
    // two instances of the same module at runtime, while reducing
    // the number of HTTP requests needed to load modules for
    // a given page.
    //
    runtimeChunk: 'single',
  },
};
```

