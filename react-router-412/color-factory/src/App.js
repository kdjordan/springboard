import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Color from './pages/colors/Color';
import NewColorForm from './pages/colors/NewColorForm';
import ColorList from './pages/colors/ColorList';
import { useState } from 'react';


function App() {
  let INITIAL_STATE = [
    {
      name: 'test', 
      color: '#ff66aa'
    },
    {
      name: 'test2', 
      color: '#000000'
    }
  ]
  const [colors, setColors] = useState(INITIAL_STATE)

  function addColor(e, { name, color }) {
    let newColor = {name, color}
    setColors(cols => [...cols, newColor])
    console.log('all colors', colors)
  }

  return (
    <div className="App">
        <Nav />
        <div className="main">
          <Routes>
            <Route path='/' element={<ColorList data={colors}/>}></Route>
            <Route path='/colors/*' element={<ColorList data={colors}/>}></Route>
            <Route path='/colors/add' element={<NewColorForm addColor={addColor}/>}></Route>
            <Route path='/colors/:name' element={<Color />}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
