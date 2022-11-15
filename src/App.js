import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/home';
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