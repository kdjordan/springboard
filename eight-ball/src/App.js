import React from 'react';
import EightBall from './EightBall'
import data from './EightBallData'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>MAGIC 8-BALL</h1>
      <EightBall answers={data}/>
    </div>
  );
}

export default App;
