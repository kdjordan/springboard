import React, { useState } from "react";

import './App.css';
import BoxList from './BoxList'
import NewBoxForm from './NewBoxForm'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [allBoxes, setAllBoxes] = useState([])

  const addBox = (e, {height, width, color}) => {
    if(!color) {
      color = '#000000'
    }
    let newBox = {
      id: uuidv4(),
      height: `${Number(height)}px`,
      width: `${Number(width)}px`,
      color
    }
    console.log('now' ,newBox)
    setAllBoxes(boxes => [...boxes, newBox])
    console.log('all', allBoxes)
  }

  const removeBox = (e, boxId) => {
    setAllBoxes(boxes => {
      return boxes.filter(b => {
        return b.id !== boxId
      })
    })
  }
 
  //all state in here
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
