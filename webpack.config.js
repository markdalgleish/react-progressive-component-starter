var pkg = require('./package.json');
var FileWebpackPlugin = require('file-webpack-plugin');

var React = require('react');
var requireWithoutCache = require('require-without-cache');

module.exports = {
  entry: './demo',

  output: {
    filename: 'main.js',
    path: 'demo-dist'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new FileWebpackPlugin({
      'index.html': function(callback) {
        var Demo = React.createFactory(requireWithoutCache('./demo/Demo', require));
        callback(null, React.renderToString(Demo()));
      }
    })
  ]

};
