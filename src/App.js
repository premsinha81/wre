import React from 'react';
import  './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrier from './component/Carrier';
import Home from './component/home';
import About from './component/about';
import Login from './component/login';
import Rankingdetails from './component/ranking-details';
import Signup from './component/signup';
import BusinessInformation from './component/account/businessInformation';
import AccountInformation from './component/account/accountownerinformation';
import Ranking from './component/ranking';
import Accountowner from './component/account/accountowner';

function App() {
  return (
    <>
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
      <Routes>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      <Routes>
        <Route path='/business-information' element={<BusinessInformation />}/>
      </Routes>
      <Routes>
        <Route path='/account-information' element={<AccountInformation />}/>
      </Routes>
      <Routes>
        <Route path='/ranking' element={<Ranking />}/>
      </Routes>
      <Routes>
        <Route path='/Account-owner' element={<Accountowner />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App