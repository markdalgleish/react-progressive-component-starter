var pkg = require('./package.json');
var webpack = require('webpack');
var mapValues = require('lodash.mapvalues');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var fs = require('fs');

var loaders = [
  { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
  { test: /\.ejs$/, loaders: ['ejs-compiled'] },
  { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[hash:base64:5]!autoprefixer-loader!less-loader') }
];

module.exports = [
  {
    name: 'component',

    entry: './src/index.js',

    output: {
      filename: 'index.js',
      path: 'lib',
      libraryTarget: 'commonjs2'
    },

    externals: mapValues(pkg.dependencies, function(version, packageName) {
      return packageName;
    }),

    module: {
      loaders: loaders
    }
  },
  {
    name: 'demo',

    entry: {
      'demo': './demo/index.js'
    },

    output: {
      filename: 'main.js',
      path: 'demo-dist',
      library: 'component',
      libraryTarget: 'umd'
    },

    module: {
      loaders: loaders
    },

    plugins: [
      new ExtractTextPlugin('style.css', { allChunks: true }),
      new StaticSiteGeneratorPlugin('demo', ['/'])
    ]
  }
];
