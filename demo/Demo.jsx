var React = require('react');
var Component = require('../src/index.jsx');

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
          <script src="main.js" />
        </body>
      </html>
    );
  }
});
