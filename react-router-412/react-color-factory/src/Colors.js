import React from 'react'
import { Link } from 'react-router-dom'
import './Colors.css'

function Colors({colors}) {
    
    return (
        <div className='Colors'>
            {colors.map((c, i) => (
                <div className='Colors-item' key={i}>
                    <Link to={`/colors/${c.name}`} style={{color: `${c.color}`}}>
                        {c.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Colors