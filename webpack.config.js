const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssExtract = new ExtractTextPlugin('styles.css');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log('this is env var: ', process.env.NODE_ENV);

module.exports = {
  entry: {
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './client/index.jsx',
    ],
    vendor: ['react', 'react-dom', 'react-router'],
  },
  output: { //create output path
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'client', 'public', 'dist'),
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // checks for any files ending in .js or .jsx
        exclude: [/node_modules/], // doesn't include node modules
        use: ['babel-loader'], // uses babel as transpiler
      },
      {
        test: /\.(css|sass|scss)$/, // checks for any files ending in .css, .sass, or .scss
        use: process.env.NODE_ENV === 'production' ?
        cssExtract.extract({
          use: ['css-loader', 'sass-loader']
        }) :
        ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?limit=30000&name=images/[name].[ext]'
      },
    ]
  },
  devServer: {
    contentBase: './client/public',
    publicPath: '/dist/',
    historyApiFallback: true,
    hot: true
  },
  plugins: process.env.NODE_ENV === 'production' ? 
  [
    cssExtract,
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ] : 
  [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
};
