import React from 'react';
import './App.css';
import PokeDex from './PokeDex';
import pokedata from './pokedata.js'

function App() {
  return (
    <div className="App">
      <PokeDex items={pokedata} />
    </div>
  );
}

export default App;
