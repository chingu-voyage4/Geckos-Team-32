const path = require('path');

const SRC = path.resolve(__dirname, './client');
const PUBLIC = path.resolve(__dirname, './client/public');

module.exports = {
  entry: path.resolve(SRC, 'index.js'),
  output: { //create output path
    filename: 'bundle.js',
    path: PUBLIC
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // checks for any files ending in .js or .jsx
        exclude: [/node_modules/], // doesn't include node modules
        loader: 'babel-loader', // uses babel as transpiler
      },
      {
        test: /\.(css|sass|scss)$/, // checks for any files ending in .css, .sass, or .scss
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map' // show path in console for debugging
}