import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Skittles from './pages/Skittles';
import Soda from './pages/Soda';
import Chips from './pages/Chips';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <React.StrictMode>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="skittles" element={<Skittles />} />
      <Route path="soda" element={<Soda />} />
      <Route path="chips" element={<Chips />} />
    </Routes>
  </React.StrictMode>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
