import React, { useState } from 'react';
import './App.css';
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
<<<<<<< HEAD

import UserprofileCommunities from './component/userprofileCommunities';
=======
import UserProfileposts from './component/userProfile';
import UserProfileCommunities from './component/userprofileCommunities';
import OnlineCoursesDetail from './component/OnlineCoursesDetail';
import OnlineCounselling from './component/OnlineCounselling';
import Dashboard from './component/Dashboard';
import useToken from './component/app/useToken';
import Slider from './component/slider';
>>>>>>> 729e89b2a17e7266028f969810bf54c5462f68f4


function App() {

  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <>
<<<<<<< HEAD
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/:slug' element={<Rankingdetails />} /> */}
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
=======
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path='/:slug' element={<Rankingdetails />} />
        </Routes>
        <Routes>
          <Route path="Career" element={<Carrier />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          if(!token) {
            <Route path="/login" element={<Login setToken={setToken} />} />
          }
          if(token){
            <Route path="/dashboard" element={<Dashboard />} />
          }

        </Routes>
        <Routes>
          <Route path='/ranking-details' element={<Rankingdetails />} />
        </Routes>
        <Routes>
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Routes>
          <Route path='/business-information' element={<BusinessInformation />} />
        </Routes>
        <Routes>
          <Route path='/account-information' element={<AccountInformation />} />
        </Routes>
        <Routes>
          <Route path='/ranking' element={<Ranking />} />
        </Routes>
        <Routes>
          <Route path='/Account-owner' element={<Accountowner />} />
        </Routes>
        <Routes>
          <Route path='/user-profile-post' element={<UserProfileposts />} />
        </Routes>
        <Routes>
          <Route path='/user-profile-communities' element={<UserProfileCommunities />} />
        </Routes>
        <Routes>
          <Route path='/online-course-details' element={<OnlineCoursesDetail />} />
        </Routes>
        <Routes>
          <Route path='/online-counselling' element={<OnlineCounselling />} />
        </Routes>

      </Router>
      <Footer />
>>>>>>> 729e89b2a17e7266028f969810bf54c5462f68f4
    </>
  )
}

export default App;