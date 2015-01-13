var React = require('react');
var Component = require('../lib');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Demo</h1>
        <Component />
        <script src={ENV.outputFilename} />
      </div>
    );
  }
});
