import React from 'react'
import { useParams } from 'react-router-dom'
import './ColorDetail.css'

function ColorDetail({colors}) {
    const { color } = useParams()
    const hex = colors.find(c => c.name === color)
    console.log(color)
    let body = document.querySelector('body')
    body.style.backgroundColor = hex.color

    return (
        <div className='ColorDetail'>
            <h2>Fancy <em>{color}</em> ya got here !</h2>
        </div>
    )
}

export default ColorDetail