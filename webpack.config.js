var pkg = require('./package.json');
var webpack = require('webpack');
var mapValues = require('lodash.mapvalues');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

var loaders = [
  { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
];

var ENV = {
  outputFilename: 'main.js'
};

module.exports = [
  {
    name: 'component',

    entry: './src/index.jsx',

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

    entry: './demo/index.jsx',

    output: {
      filename: ENV.outputFilename,
      path: 'demo-dist',
      library: 'component',
      libraryTarget: 'umd'
    },

    module: {
      loaders: loaders
    },

    plugins: [
      new webpack.DefinePlugin({
        ENV: JSON.stringify(ENV)
      }),
      new ReactToHtmlPlugin('index.html', ENV.outputFilename)
    ]
  }
];
