import React, { useState } from 'react'
import Box from './Box'
import './BoxList.css'
import { v4 as uuidv4 } from 'uuid';

function BoxList({data}) {
    console.log(data)
    const [boxes, setBoxes] = useState()
    const deleteBox = (e, id) => {
        console.log('delete Box', id)
    }

 return (
    <div className='BoxList'>
        <h2>Currrent Boxes</h2>
        <div className="BoxList-container">
            { data.map(box =>  {
                return (
                    <Box id={uuidv4()} height={box.height} width={box.width} color={box.color} deleteBox={deleteBox}/>
                )
        })}
        </div>
    </div>
 )

}

export default BoxList