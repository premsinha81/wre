import React from 'react';
import  './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrier from './component/Carrier';
import Home from './component/Home';
import About from './component/about';
import OnlineCoursesDetail from './component/OnlineCoursesDetail';

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
        <Route path = "OnlineCoursesDetail" element={<OnlineCoursesDetail/>}/>
</Routes>
    </Router>
  )

}

export default App