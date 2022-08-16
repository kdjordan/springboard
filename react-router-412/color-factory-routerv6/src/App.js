import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Color from './pages/colors/Color';
import NewColorForm from './pages/colors/NewColorForm';
import { useState } from 'react';


function App() {
  const [colors, setColors] = useState()

  function addColor(e, form) {
    console.log(form)
    // const {name, color} = form
    // setColors(f => ({
    //   ...colors,
    //   name,
    //   color
    // }))
  }

  return (
    <div className="App">
        <Nav />
        {colors}
        <div className="main">
          <Routes>
            <Route path='/colors/add' element={<NewColorForm addColor={addColor}/>}></Route>
            <Route path='/colors/:name' element={<Color />}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
