var path = require('path');

module.exports = {
  entry: "./js/actions.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
    publicPath: "/"
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader', // Loaders are loaded in reverse order. So CSS Loader is loaded first followed by style. Reversing the order will break.
        'css-loader'
      ]
    }]
  }
}