var pkg = require('./package.json');
var webpack = require('webpack');
var path = require('path');
var mapValues = require('lodash.mapvalues');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');
var fs = require('fs');
var ejs = require('ejs');

var loaders = [
  { test: /\.jsx$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ }
];

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

  output: {
    filename: '[name].js',
    path: path.resolve('./demo-dist'),
    library: 'component',
    libraryTarget: 'umd'
  },

  module: {
    loaders: loaders
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ReactToHtmlPlugin('index.html', 'component-for-html.js', {
      template: ejs.compile(fs.readFileSync(__dirname + '/demo/template.ejs', 'utf-8'))
    })
  ]
};
