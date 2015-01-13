var React = require('react');
var Demo = React.createFactory(require('./Demo.jsx'));

if (typeof document !== 'undefined') {
  React.render(Demo(), document);
}

module.exports = Demo;
