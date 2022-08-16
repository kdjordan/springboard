import React from 'react'
import DogDetail from './DogDetail'
import './DogList.css'

function DogList({dogs}) {
    return (
        <div className='DogList'>
            {dogs.map(d => (
                <DogDetail key={d.name} dog={d} />
            ))}

        </div>
    )
}

export default DogList