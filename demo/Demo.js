var React = require('react');
var Component = React.createFactory(require('../index.js'));

module.exports = React.createClass({
  render: function() {
    return (
      React.DOM.div({},
        React.DOM.h1({}, 'Demo'),
        Component()
      )
    );
  }
});
