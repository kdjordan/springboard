import React, {useState} from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

import './BoxList.css'
import { v4 as uuidv4 } from 'uuid';

function BoxList() {
    const [allBoxes, setAllBoxes] = useState([])

    const addBox = (e, { height, width, color }) => {
        //set default color if nothing is passed
        if(!color) {
        color = '#000000'
        }
        //enforce max height and width
        if(Number(height) > 200) {
        height = '200'
        }
        if(Number(width) > 200) {
        height = '200'
        }
        //create newBox object
        //add in random id
        let newBox = {
            id: uuidv4(),
            height: `${Number(height)}px`,
            width: `${Number(width)}px`,
            color
        }
        //update state with new Box
        setAllBoxes(boxes => [...boxes, newBox])
    }
  //use filter to revome box by ID
  const removeBox = (e, boxId) => {
    setAllBoxes(boxes => {
      return boxes.filter(b => {
        return b.id !== boxId
      })
    })
    }

 return (
    <div className='BoxesList'>
        <NewBoxForm addBox={addBox} />
        <h2>Currrent Boxes</h2>
        <div className="BoxList-container" data-testid='boxlist-container'>
            { allBoxes.map(box =>  {
                return (
                    <Box 
                    key={box.id}
                    id={box.id} 
                    height={box.height} 
                    width={box.width} 
                    color={box.color} 
                    handleDelete={removeBox}
                    />
                )
            })}
        </div>
    </div>
 )

}

export default BoxList