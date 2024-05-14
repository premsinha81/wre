import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/home';
import About from './component/about';
import Login from './component/login';
import Pathfinder from './component/pathfinder'
import Signup from './component/signup';
import Job from './component/Job';
import JhEmployer from './component/JhEmployer';
import OnlineCounselling from './component/OnlineCounselling.js'
import Onlinecounsellingform from './component/Onlinecounsellingform';
import OnlineCoursesDetail from './component/OnlineCoursesDetail';
import OnlineCoursesSearch from './component/OnlineCoursesSearch';
import BusinessInformation from './component/account/businessInformation';
import AccountInformation from './component/account/accountownerinformation';
import UserProfileposts from './component/UserProfileposts';
import Accountowner from './component/account/accountowner';
import Header from './component/common/header';
import Footer from './component/common/footer';
import Ranking from './component/ranking-details';
import CollgeDetails from './component/CollegeDetails';
import RankingDetail from './component/RankingDetail';
import Testimonial from './component/testimonial';
import UserprofileCommunities from './component/userprofileCommunities';
import Ranking_view from './component/Ranking_view';
import Jobpostform from './component/Jobpostform';
import Showdata from './component/showdata';
import Dashboard from './component/admin/dashboard';
import Jobpost from './component/admin/jobpost';
import Jobedit from './component/admin/jobedit';
import Index from './component/Home/Index';
import User_profile from './component/user_profile/Index';
import Carrier from './component/Carrier'
import Loading from './Context/Loading';
import EmailAPIGET from './component/user_profile/EmailAPIGET';
import Profile from './component/admin/Profile';
import Homepage from './component/home';
import Program from './component/Program';
import JobDetails from './component/JobDetails';
import Studentapplication from './component/Studentapplication';
import Student from './component/student/index.jsx';
import Jobapplicationform from './component/admin/Jobapplicationform.js';
import Loginandsecurity from './component/account/Loginandsecurity.js';
import Needhelp from './component/account/needhelp.js';
function App() {
  
  const logged_token = localStorage.getItem('token');
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} /> 

  // }

  return (
    <>
    
    <Loading>
      <Header/>
    <Router>
   
      <Routes>
 
      
     
        <Route path='/wre/search/:slug' element={<Ranking />} />
        <Route path='/wre/search_Ranking/:id' element={<RankingDetail />} />
        <Route path='/wre/collegeDetails/:id' element={<CollgeDetails />} />
      <Route path='/wre/JobDetails/:user_id/:id' element={<JobDetails />}/>
      </Routes>
      
    { !logged_token ? (
      <Routes>
        <Route path="/wre/login" element={<Login />} />
        <Route path="/wre/home" element={<Homepage />} />
        <Route path="/wre/" element={<Homepage />} />
      </Routes>
    ):(
      <Routes>
           <Route path="/wre/home" element={<Index />} />
           <Route path="/wre/" element={<Index />} />
        <Route path = "/wre/dashboard" element={<Dashboard/>}/>
        <Route path = "/wre/jobpost" element={<Jobpost/>}/>
        <Route path = "/wre/jobedit/:userId/:id" element={<Jobedit/>}/>
        <Route path = "/wre/Jobpostform" element={<Jobpostform/>}/>
        <Route path = "/wre/User_post" element={<User_profile/>}/>
        <Route path = "/wre/Jobapplicationform" element={<Jobapplicationform/>}/>
      </Routes>
    )}
      {/* <Routes>
      <Route path = "/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Routes>
      <Route path = "/jobpost" element={<Jobpost/>}/>
      </Routes>
      <Routes>
      <Route path = "/jobedit/:userId/:id" element={<Jobedit/>}/>
      </Routes>
      // <Routes>
      // <Route path = "/Jobpostform" element={<Jobpostform/>}/>
      // </Routes> */}
      <Routes>
        <Route path="/wre/EmailAPIGET" element={<EmailAPIGET />} />
        <Route path='/wre/signup' element={<Signup />}/>
      </Routes>
      <Routes>
        <Route path="/wre/program" element={<Program />} />
        
      </Routes>
      <Routes> <Route path="/wre/Studentapplication" element={<Studentapplication/>}/>
      </Routes>
   
      <Routes>
        <Route path="/wre/about" element={<About />} />
        
      </Routes>
      <Routes>
        <Route path="/wre/OnlineCounselling" element={<OnlineCounselling />} />
        
      </Routes>
      <Routes>
        <Route path="/wre/testimonial" element={<Testimonial />} />
        
      </Routes>
     
      <Routes>
        <Route path="/wre/Needhelp" element={< Needhelp />} />
        
      </Routes>
      <Routes>
        <Route path="/wre/Profile" element={<Profile />} />
        
      </Routes>

      <Routes>
        <Route path="/wre/student-admin" element={<Student />} />
        
      </Routes>
      <Routes>
      <Route path = "/wre/carrier" element={<Carrier/>}/>
      </Routes>
      
      <Routes>
        <Route path='/wre/BusinessInformation' element={<BusinessInformation />}/>
      </Routes>
      
      <Routes>
        <Route path='/wre/AccountInformation' element={<AccountInformation />}/>
      </Routes>
      <Routes>
        <Route path='/wre/OnlineCoursesDetail' element={<OnlineCoursesDetail />}/>
      </Routes>
      <Routes>
        <Route path='/wre/Accountowner' element={<Accountowner />}/>
      </Routes>
      <Routes>
      <Route path = "/wre/UserProfileposts" element={<UserProfileposts/>}/>
      </Routes>
      <Routes>
      <Route path = "/wre/Loginandsecurity" element={<Loginandsecurity/>}/>
      </Routes>
      <Routes>
        <Route path='/wre/userprofileCommunities' element={<UserprofileCommunities />} />
      </Routes>
      <Routes>
        <Route path='/wre/OnlineCoursesSearch' element={<OnlineCoursesSearch />} />
      </Routes>
     
      <Routes>
        <Route path='/wre/RankingDetail' element={<RankingDetail />} />
      </Routes>
      <Routes>
        <Route path='/wre/Ranking_view' element={<Ranking_view />} />
      </Routes>
      <Routes>
        <Route path='/wre/pathfinder' element={<Pathfinder />} />
      </Routes>
      <Routes>
        <Route path='/wre/Onlinecounsellingform' element={<Onlinecounsellingform />} />
      </Routes>
      <Routes>
        <Route path='/wre/Job' element={<Job />} />
      </Routes>
      <Routes>
        <Route path='/wre/JhEmployer' element={<JhEmployer />} />
      </Routes>
      <Routes>
        <Route path='/wre/showdata' element={<Showdata />} />
      </Routes>
    </Router>
    <Footer/>
    
    </Loading>

    </>

  )
}

export default App;