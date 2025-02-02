import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Register from './Components/Login';  // You can replace with your actual Register component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
