/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: "production",
  entry: ["babel-polyfill", "./index"],
  output: {
    filename: "bundle.js",
    chunkFilename: '[name].bundle.js',
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      { from: './dist/sunmail.ico' }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        EMAIL: JSON.stringify("bulluffalo@gmail.com")
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: "html-loader!markdown-loader?gfm=false"
      },
      {
        test: /\.mdx$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: require.resolve("./loader.js") }
        ]
      },
      {
        test: /\.pdf$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=8192"
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};
