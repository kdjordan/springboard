import React from 'react';
import ReactDOM from 'react-dom';
import BoxList from './BoxList';

it('renders without crashing', function() {
  const div = document.createElement('div');
  ReactDOM.render(<BoxList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
