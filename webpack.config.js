var pkg = require('./package.json');
var FileWebpackPlugin = require('file-webpack-plugin');

var React = require('react');
var Demo = React.createFactory(require('./demo/Demo'));

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
        callback(null, React.renderToString(Demo()));
      }
    })
  ]

};
