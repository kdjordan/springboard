import React from 'react'
import './Box.css'


function Box({color,height, width, id, handleDelete}) {
    const boxData = 
        {
            id,
            height,
            width,
            color
        }
 return (
    <div className='BoxWrapper'>
        <div className='Box'  style={{height:boxData.height,  width:boxData.width, backgroundColor:boxData.color }}>
        </div>
        <div>
            <button className='BoxButton' onClick={e => handleDelete(e, boxData.id)}>X</button>
        </div>
    </div>
    
 )

}

export default Box