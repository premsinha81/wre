import React from 'react';
import  './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrier from './component/Carrier';
import Home from './component/Home';
import About from './component/about';
import Login from './component/login';
import Rankingdetails from './component/ranking-details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
      <Route path = "Career" element={<Carrier/>}/>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path='/ranking-details' element={<Rankingdetails />}/>
      </Routes>


    </Router>
  )

}

export default App