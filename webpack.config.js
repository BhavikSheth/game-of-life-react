const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './src/App.js',
  ],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 5000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './dist/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
