const path = require('path');
const webpack = require('webpack');

var PUBLIC_DIR = path.resolve(__dirname, 'client/public');
var SRC_DIR = path.resolve(__dirname, 'client');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    SRC_DIR + '/index.jsx',
  ],
  output: { //create output path
    filename: 'js/bundle.js',
    path: PUBLIC_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // checks for any files ending in .js or .jsx
        include: SRC_DIR,
        exclude: [/node_modules/], // doesn't include node modules
        loader: ['babel-loader'], // uses babel as transpiler
      },
      {
        test: /\.(css|sass|scss)$/, // checks for any files ending in .css, .sass, or .scss
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  devServer: {
    contentBase: './client/public',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-module-eval-source-map' // show path in console for debugging
}