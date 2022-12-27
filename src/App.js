import React from 'react';
import  './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrier from './component/Carrier';
import Home from './component/home';
import About from './component/about';
import Login from './component/login';
import Rankingdetails from './component/Rankingdetails';
import Signup from './component/signup';
import OnlineCoursesDetail from './component/OnlineCoursesDetail';
import BusinessInformation from './component/account/businessInformation';
import AccountInformation from './component/account/accountownerinformation';
import UserProfileposts from './component/UserProfileposts';
import Accountowner from './component/account/accountowner';
import Header from './component/common/header';
import Footer from './component/common/footer';

import UserprofileCommunities from './component/userprofileCommunities';


function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:slug' element={<Rankingdetails />} />
      </Routes>
      <Routes>
      <Route path = "/Career" element={<Carrier/>}/>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path='/Rankingdetails' element={<Rankingdetails/>}/>
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      <Routes>
        <Route path='/BusinessInformation' element={<BusinessInformation />}/>
      </Routes>
      <Routes>
        <Route path='/AccountInformation' element={<AccountInformation />}/>
      </Routes>
      <Routes>
        <Route path='/OnlineCoursesDetail' element={<OnlineCoursesDetail />}/>
      </Routes>
      <Routes>
        <Route path='/Accountowner' element={<Accountowner />}/>
      </Routes>
      <Routes>
      <Route path = "/UserProfileposts" element={<UserProfileposts/>}/>
      </Routes>
      
      <Routes>
        <Route path='/userprofileCommunities' element={<UserprofileCommunities />} />
      </Routes>
     
    </Router>
    <Footer/>
    </>
  )
}

export default App;