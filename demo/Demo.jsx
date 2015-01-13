var React = require('react');
var Component = require('../lib');

module.exports = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Demo</title>
        </head>
        <body>
          <h1>Demo</h1>
          <Component />
          <script src={ENV.outputFilename} />
        </body>
      </html>
    );
  }
});
