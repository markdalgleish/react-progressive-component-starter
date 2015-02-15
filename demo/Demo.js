var React = require('react');
var Component = React.createFactory(require('../lib'));

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
