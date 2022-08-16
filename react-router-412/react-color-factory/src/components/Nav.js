import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav({dogs}) {
    return (
        <div className='Nav'>
            <div className="Nav-left">
                <NavLink to="/" >
                    YOU LIKE DAGS ??
                </NavLink>
            </div>
            <div className="Nav-right">
            {dogs.map(d => (
                <NavLink key={d.name} to={`/dogs/${d.name.toLowerCase()}`} >
                    {d.name}
                </NavLink>
            ))}
            </div>
        </div>
    )
}

export default Nav