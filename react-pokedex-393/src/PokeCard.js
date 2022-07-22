import React from 'react'
import './poke.css';

const PokeCard = (props) => {
    return (
        <div class="poke-card">
            <h2 class="poke-name">{props.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.name} class='poke-img'/>
            <div class='poke-type'>Type: {props.type}</div>
            <div class='poke-exp'>EXP: {props.base_exp}</div>
        </div>
    )
}

export default PokeCard