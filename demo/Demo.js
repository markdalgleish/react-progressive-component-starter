require('./Demo.less');

import React from 'react';
import Component from '../src';

export default class Demo extends React.Component {

  render() {
    return (
      <div className="Demo">
        <h1>Demo</h1>
        <h2>This is my component:</h2>
        <Component />
      </div>
    );
  }

};
