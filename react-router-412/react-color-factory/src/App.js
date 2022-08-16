import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Routes from "./Routes";
import Nav from "./components/Nav";




function App() {
  let body = document.querySelector('body')
  body.style.backgroundColor = 'lightgray'
  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
