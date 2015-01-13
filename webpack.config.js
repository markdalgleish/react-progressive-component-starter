var pkg = require('./package.json');
var webpack = require('webpack')
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

var ENV = {
  outputFilename: 'main.js'
};

module.exports = {
  entry: './demo',

  output: {
    filename: ENV.outputFilename,
    path: 'demo-dist',
    library: 'component',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(ENV)
    }),
    new ReactToHtmlPlugin('index.html', ENV.outputFilename)
  ]

};
