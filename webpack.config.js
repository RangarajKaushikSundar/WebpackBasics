var path = require('path');

module.exports = {
  entry: "./js/actions.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js"
  }
}