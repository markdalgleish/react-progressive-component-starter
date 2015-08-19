var pkg = require('./package.json');
var webpack = require('webpack');
var path = require('path');
var mapValues = require('lodash.mapvalues');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var fs = require('fs');

var loaders = [
  { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
  { test: /\.ejs$/, loaders: ['ejs-compiled'] },
  { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[path][name]---[local]---[hash:base64:5]!autoprefixer-loader!less-loader') }
];

module.exports = {
  entry: {
    'main': [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './demo/index.js'
    ],
    'render': [
      './demo/index.js'
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
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new StaticSiteGeneratorPlugin('render', ['/'])
  ]
};
