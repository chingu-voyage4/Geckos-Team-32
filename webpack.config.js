const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var PUBLIC_DIR = path.resolve(__dirname, 'client/public');
var SRC_DIR = path.resolve(__dirname, 'client');

module.exports = (env) => {
  const productionBuild = env === 'production';
  const cssExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: [
      'react-hot-loader/patch',
      SRC_DIR + '/index.jsx',
    ],
    output: { //create output path
      filename: 'js/bundle.js',
      path: PUBLIC_DIR,
      hotUpdateChunkFilename: 'hot/hot-update.js',
      hotUpdateMainFilename: 'hot/hot-update.json'
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
          use: productionBuild ?
          cssExtract.extract({
            use: ['css-loader', 'sass-loader']
          }) :
          ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          include: SRC_DIR,
          loader: 'url-loader?limit=30000&name=images/[name].[ext]'
        },
      ]
    },
    devServer: {
      contentBase: './client/public',
      historyApiFallback: true,
      hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      cssExtract
    ],
    devtool: productionBuild ? 'source-map' : 'cheap-module-eval-source-map',
  };
};