import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav'
import DogList from './DogList'
import DogDetailFilter from './DogDetailFilter'
import NotFound from './pages/NotFound'
import { v4 as uuidv4 } from 'uuid';

function App(props) {
  const { dogs } = props
  return (
    <div className="App">
      <Nav dogs={dogs}/>
      <div className="main">
        <Routes>
          <Route path="/" element={<DogList dogs={dogs}/>}></Route>
          <Route path="/:name" element={<DogDetailFilter dogs={dogs}/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes> 
        </div>
    </div>
  );
}

export const dogs = [
    {
      id: uuidv4(),
      name: "Whiskey",
      age: 5,
      src: './images/whiskey.jpg',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      id: uuidv4(),
      name: "Duke",
      age: 3,
      src: './images/duke.jpg',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      id: uuidv4(),
      name: "Perry",
      age: 4,
      src: './images/perry.jpg',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      id: uuidv4(),
      name: "Tubby",
      age: 4,
      src: './images/tubby.jpg',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]

App.defaultProps = { dogs };

export default App;
