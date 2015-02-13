var http = require('http');
var React = require('react');
var Demo = React.createFactory(require('./Demo'));

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(React.renderToString(Demo()));
}).listen(3000);

console.log('Listening on port 3000...');
