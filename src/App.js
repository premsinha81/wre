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
import Header from './component/common/header';
import Footer from './component/common/footer';
import UserProfileposts from './component/userProfile';
import UserProfileCommunities from './component/userprofileCommunities';
import OnlineCoursesDetail from './component/OnlineCoursesDetail';
import OnlineCounselling from './component/OnlineCounselling';

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
      <Routes>
        <Route path='/user-profile-post' element={<UserProfileposts />}/>
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
    <Footer/>
    </>
  )
}

export default App