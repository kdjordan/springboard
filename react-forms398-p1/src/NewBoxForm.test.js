import React from 'react';
import ReactDOM from 'react-dom';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', function() {
  const div = document.createElement('div');
  ReactDOM.render(<NewBoxForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
