var pkg = require('./package.json');
var webpack = require('webpack');
var mapValues = require('lodash.mapvalues');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

var loaders = [
  { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
];

module.exports = [
  {
    name: 'component',

    entry: {
      'index': './src/index.jsx'
    },

    output: {
      filename: '[name].js',
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
      'main': './demo/index.jsx'
    },

    output: {
      filename: '[name].js',
      path: 'demo-dist',
      library: 'component',
      libraryTarget: 'umd'
    },

    module: {
      loaders: loaders
    },

    plugins: [
      new ReactToHtmlPlugin('index.html', 'main.js')
    ]
  }
];
