const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(ts|js|tsx|jsx)?$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new CopyPlugin([
      { from : '_redirects' }
    ])
  ],
  devServer: {
    historyApiFallback: true
  }
};