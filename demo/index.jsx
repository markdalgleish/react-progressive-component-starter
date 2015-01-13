var React = require('react');
var Demo = require('./Demo.jsx');

if (typeof document !== 'undefined') {
  React.render(<Demo />, document);
}

module.exports = Demo;
