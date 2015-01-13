var pkg = require('./package.json');
var webpack = require('webpack');
var mapValues = require('lodash.mapvalues');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

var loaders = [
  { test: /\.jsx$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ }
];

var ENV = {
  isDev: true
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

    entry: {
      'main': [
        './demo/index.jsx'
      ],
      'main-hot': [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './demo/index.jsx'
      ]
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
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({ ENV: JSON.stringify(ENV) }),
      new ReactToHtmlPlugin('index.html', 'main.js')
    ]
  }
];
