import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Blog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component />, div);
  ReactDOM.unmountComponentAtNode(div);
});
