var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js'
  },
  devServer: {},
  plugins: [new HtmlWebpackPlugin()],
}