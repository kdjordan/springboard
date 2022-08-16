import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav({dogs}) {
    return (
        <div className='Nav'>
            <div className="Nav-left">
                <NavLink to="/" >
                    Fun With Colors !
                </NavLink>
            </div>
            <div className="Nav-right">
            <NavLink to='/colors/new'>
                ADD COLOR
            </NavLink>
            </div>
        </div>
    )
}

export default Nav