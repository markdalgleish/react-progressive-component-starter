var pkg = require('./package.json');
var webpack = require('webpack');
var mapValues = require('lodash.mapvalues');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');
var fs = require('fs');
var ejs = require('ejs');

var loaders = [
  { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
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

    entry: './demo/index.js',

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
      new ReactToHtmlPlugin('index.html', 'main.js', {
        template: ejs.compile(fs.readFileSync(__dirname + '/demo/template.ejs', 'utf-8'))
      })
    ]
  }
];
