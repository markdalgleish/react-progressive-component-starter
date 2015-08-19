import React from 'react';
import Demo from './Demo';

import template from './template.ejs';

if (typeof document !== 'undefined') {
  React.render(<Demo />, document.getElementById('outlet'));
}

export default function render(locals, callback) {
  const html = template({
    html: React.renderToString(<Demo />),
    assets: locals.assets
  });
  callback(null, html);
};
