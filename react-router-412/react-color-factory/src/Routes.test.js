import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Colors from './Colors'


const colors = [{name: 'test color', color: '#ffffff'}]

test('renders inital color', () => {
    const { getByText }= render(
        <MemoryRouter>
            <Colors colors={colors} />
        </MemoryRouter>
    )
    const name = getByText('test color')
    expect(name).toBeInTheDocument()
})

