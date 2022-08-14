import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Color from './pages/colors/Color';
import NewColorForm from './pages/colors/NewColorForm';


function App() {
  
  return (
    <div className="App">
        <Nav />
        <div className="main">
          <Routes>
            <Route path='/colors/add' element={<NewColorForm />}></Route>
            <Route path='/colors/:name' element={<Color />}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
