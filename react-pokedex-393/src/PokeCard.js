import React from 'react'
import './poke.css';

const PokeCard = (props) => {
    return (
        <div className="poke-card">
            <h2 className="poke-name">{props.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.name} className='poke-img'/>
            <div className='poke-type'>Type: {props.type}</div>
            <div className='poke-exp'>EXP: {props.base_exp}</div>
        </div>
    )
}
export default PokeCard