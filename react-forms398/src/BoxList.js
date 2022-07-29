import React, { useState } from 'react'
import Box from './Box'
import './BoxList.css'
import { v4 as uuidv4 } from 'uuid';
function BoxList() {
    
    const [boxes, setBoxes] = useState()
    const deleteBox = (e, id) => {
        console.log('delete Box', id)
    }

 return (
    <div className='BoxList'>
        <h2>Currrent Boxes</h2>
        <Box id={uuidv4()} height={100} width={100} color="#0022FF" deleteBox={deleteBox}/>
    </div>
 )

}

export default BoxList