import React from 'react'
import Box from './Box'
import './BoxList.css'

function BoxList(props) {
    console.log('gettint ', props)
    const deleteBox = (e, boxId) => {
        props.removeBox(() => e, boxId)
    }

 return (
    <div className='BoxList'>
        <h2>Currrent Boxes</h2>
        <div className="BoxList-container">
            { props.data.map(box =>  {
                return (
                    <Box id={box.id} height={box.height} width={box.width} color={box.color} deleteBox={deleteBox}/>
                )
        })}
        </div>
    </div>
 )

}

export default BoxList