var React = require('react');
var Component = require('../src/index.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>This is my component:</h2>
        <Component />
      </div>
    );
  }
});
