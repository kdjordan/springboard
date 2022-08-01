import React, { useState } from "react";

import './App.css';
import BoxList from './BoxList'
import NewBoxForm from './NewBoxForm'
import { v4 as uuidv4 } from 'uuid';

function App() {
  //state for holding all of our boxes in 1 array
  //init it to empty array
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
    <div className="App">
      <div className="App-container">
        <NewBoxForm addBox={addBox} />
        <BoxList data={allBoxes} removeBox={removeBox}/>
      </div>
    </div>
  );
}

export default App;
