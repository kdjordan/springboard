import React from 'react'
import './DogDetail.css'

function DogDetail({dog}) {
    return (
        <div className='DogDetail'>
            <h2>{dog.name}</h2>
            <h2>{dog.age} years old</h2>
            <img src={dog.src} alt={dog.name} />
            <ul className='DogDetail-facts'>
                {dog.facts.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>
        </div>
    )
}

export default DogDetail