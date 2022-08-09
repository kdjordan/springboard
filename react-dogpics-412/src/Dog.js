import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Dog.css'

function Dog({doggo}) {
    let linkStr

        linkStr = `/${doggo.name}`
    return (
        <div className='Dog'>
            <Link to={linkStr} className='Dog-link'>
                <div className='Dog-header'>
                    <h3>{doggo.name}</h3>
                </div>
                <img src={doggo.src} alt="" />
            </Link>
        </div>
    )
}

export default Dog