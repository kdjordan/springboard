import React from 'react'
import './Box.css'


function Box({color,height, width, id, deleteBox}) {
    const boxData = [
        {
            id: id,
            height: height,
            width: width,
            color: color
        }
    ]
 return (
    <div className='BoxWrapper'>
    <div className='Box' style={{height:boxData[0].height,  width:boxData[0].width, backgroundColor:boxData[0].color }}></div>
        <button className='BoxButton' onClick={e => deleteBox(e, boxData[0].id)}>X</button>
    </div>
 )

}

export default Box