import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Routes from './Routes';
import { dogs } from './App';

test('renders all dogs', () => {
    const { getByText }= render(
        <MemoryRouter>
            <Routes dogs={dogs} />
        </MemoryRouter>
    )
    const names = dogs.map(d => d.name)
    names.forEach(nam => {
        const name = getByText(nam)
        expect(name).toBeInTheDocument()
    })
})

test('only shows whiskey info', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/dogs/whiskey']}>  
            <Routes dogs={dogs} />
        </MemoryRouter>
    )
    const whiskeyName = getByText('Whiskey')
    expect(whiskeyName).toBeInTheDocument()
    expect(screen.queryByText('Duke')).toBeNull()
})

test('renders home on bad route', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/badroute']}>
            <Routes dogs={dogs} />
        </MemoryRouter>
    )
    const names = dogs.map(d => d.name)
    names.forEach(nam => {
        const name = getByText(nam)
        expect(name).toBeInTheDocument()
    })
    
})