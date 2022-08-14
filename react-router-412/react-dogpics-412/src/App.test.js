import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

test('nav link', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText('You Like Dags ?!?');
  expect(linkElement).toBeInTheDocument();
});

test('renders dogs links', () => {
  render(<Router><App /></Router>);
  const text = screen.getByText('Whiskey');
  expect(text).toBeInTheDocument();
});
