import React from 'react';
import Demo from './Demo';

if (typeof document !== 'undefined') {
  React.render(<Demo />, document.getElementById('outlet'));
}

export default Demo;
