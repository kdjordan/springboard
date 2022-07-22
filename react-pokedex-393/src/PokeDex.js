import React from 'react'
import PokeCard from './PokeCard.js'


const PokeDex = ({items}) => {
    return (
        <div>
            {items.map(i => (
                <PokeCard 
                    id={i.id} 
                    name={i.name} 
                    type={i.type}
                    base_exp={i.base_experience}
            />
            ))}
        </div>
    )
}

export default PokeDex