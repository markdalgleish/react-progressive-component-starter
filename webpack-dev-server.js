var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var devConfig = require('./webpack-dev.config');

new WebpackDevServer(webpack(devConfig), {
  contentBase: 'demo-dist',
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:8080');
});
