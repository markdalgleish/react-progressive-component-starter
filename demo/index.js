var React = require('react');
var Demo = React.createFactory(require('./Demo.jsx'));

if (typeof document !== 'undefined') {
  React.render(Demo(), document.body);
}

module.exports = Demo;
