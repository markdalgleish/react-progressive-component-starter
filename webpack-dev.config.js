var webpack = require('webpack');
var first = require('lodash.first');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

var prodConfig = require('./webpack.config');
var prodDemoConfig = first(prodConfig, function(config) {
  return config.name === 'demo';
});

module.exports = {
  entry: {
    'main': [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './demo/index.jsx'
    ],
    'component-for-html': [
      './demo/index.jsx'
    ]
  },

  output: prodDemoConfig.output,

  module: prodDemoConfig.module,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ReactToHtmlPlugin('index.html', 'component-for-html.js')
  ]
};
