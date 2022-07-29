import React from "react";

import './App.css';
import BoxList from './BoxList'
import NewBoxForm from './NewBoxForm'

function App() {
  return (
    <div className="App">
      <div className="Container">
        <NewBoxForm />
        <BoxList />
      </div>
    </div>
  );
}

export default App;
