import React from "react";

import './App.css';
import BoxList from './BoxList'
import NewBoxForm from './NewBoxForm'
import sampleData from './data'
function App() {
 
  
  //all state in here
  return (
    <div className="App">
      <div className="App-container">
        <NewBoxForm />
        <BoxList data={sampleData}/>
      </div>
    </div>
  );
}

export default App;
