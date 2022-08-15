import { render, screen } from '@testing-library/react';
import App from './App';
import Nav from './components/Nav';
import DogList from './DogList';
import DogDetail from './DogDetail';
import { BrowserRouter as Router } from 'react-router-dom'
import { dogs } from './App.js'

test('nav link', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText('You Like Dags ?!?');
  expect(linkElement).toBeInTheDocument();
});

test('renders all dogs links', async () => {
  render(<Router><Nav dogs={dogs} /></Router>);
  const names = dogs.map(n => n.name)
  names.forEach(nam => {
    const text =  screen.getByText(nam);
    expect(text).toBeInTheDocument();
  })
});

test('renders dogs in DogList', async () => {
  render(<Router><DogList dogs={dogs} /></Router>);
  const names = dogs.map(n => n.name)
  names.forEach(nam => {
    const text =  screen.getByText(nam);
    expect(text).toBeInTheDocument();
  })
});

test('renders only Whiskey\'s info', () => {
  let whiskey = dogs.filter(d => d.name === 'Whiskey')[0]
  render(<Router><DogDetail doggo={whiskey} /></Router>);
  const text = screen.getByText('Whiskey')
  expect(text).toBeInTheDocument()
});
