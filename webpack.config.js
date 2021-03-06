/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: [
    "babel-polyfill",
    'webpack-hot-middleware/client',
    "react-hot-loader/patch",
    "./index"
  ],
  output: {
    filename: "bundle.js",
    chunkFilename: '[name].bundle.js',
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new Dotenv()
  ],
  module: {
    rules: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false",
    },
    {
      test: /\.mdx$/,
      exclude: /node_modules/,
      use: [
        { loader: "babel-loader" },
        { loader: require.resolve('./loader.js') }]
    },
    {
      test: /\.pdf$/,
      loader: 'url-loader?limit=8192'
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: __dirname
    }, {
      test: /\.css$/,
      loaders: ["style-loader", "raw-loader"],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.gif$/,
      loader: "url-loader?mimetype=image/gif",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
      include: path.join(__dirname, "assets")
    }]
  }
};
