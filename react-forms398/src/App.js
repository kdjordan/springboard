import React from "react";

import './App.css';
import BoxList from './BoxList'
import NewBoxForm from './NewBoxForm'
import sampleData from './data'
function App() {

  const addBox = (e, boxData) => {
    console.log('add Box in app', boxData)
}
 
  
  //all state in here
  return (
    <div className="App">
      <div className="App-container">
        <NewBoxForm addBox={addBox} />
        <BoxList data={sampleData} />
      </div>
    </div>
  );
}

export default App;
