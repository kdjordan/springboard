import React, { useState } from 'react'
import Box from './Box'
import './BoxList.css'
import { v4 as uuidv4 } from 'uuid';
function BoxList(props) {
    let {data} = props
    console.log(data)
    const [boxes, setBoxes] = useState()
    const deleteBox = (e, id) => {
        console.log('delete Box', id)
    }

 return (
    <div className='BoxList'>
        <h2>Currrent Boxes</h2>
        <div class="BoxList-container">
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