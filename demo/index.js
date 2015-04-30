var React = require('react');
var Demo = require('./Demo');

if (typeof document !== 'undefined') {
  React.render(<Demo />, document.getElementById('outlet'));
}

module.exports = Demo;
