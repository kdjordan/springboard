import React from 'react'
import { NavLink } from 'react-router-dom'
import resetBackground from '../resetBackground'
import './Nav.css'

function Nav() {
    return (
        <div className='Nav'>
            <div className="Nav-left" onClick={resetBackground}>
                <NavLink to="/" >
                    Fun With Colors !
                </NavLink>
            </div>
            <div className="Nav-right">
            <NavLink to='/colors/new' onClick={resetBackground}>
                ADD COLOR
            </NavLink>
            </div>
        </div>
    )
}

export default Nav