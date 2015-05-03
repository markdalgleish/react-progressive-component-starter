var pkg = require('./package.json');
var webpack = require('webpack');
var path = require('path');
var mapValues = require('lodash.mapvalues');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');
var fs = require('fs');
var ejs = require('ejs');

var loaders = [
  { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
  { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[hash:base64:5]!autoprefixer-loader!less-loader') }
];

module.exports = {
  entry: {
    'main': [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './demo/index.js'
    ],
    'component-for-html': [
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
    new ReactToHtmlPlugin('index.html', 'component-for-html.js', {
      template: ejs.compile(fs.readFileSync(__dirname + '/demo/template.ejs', 'utf-8'))
    })
  ]
};
