import React from 'react'
import Header from "./common/header";
import Filtersection from './Filtersection';

import Online from './Online';
import Onlinesearchbannersection from './Onlinesearchbannersection';
import Footer from "./common/footer";
import Slider from './Slider';
import Tabsystemsection from './Tabsystemsection';

const OnlineCoursesSearch = () => {
  return (
    <div> 
         <Header/>
         <Onlinesearchbannersection/>
         <div class="programsSection">
    <div class="container">
       <div class="row">

          <div class="col-lg-3 col-xl-3">
      <Filtersection/>
          </div>
      
          <div class="col-lg-9 col-xl-9">
          <Online/>
             <div class="row">
                <div class="col-12">
                   <div class="loadBtn">
                      <button type="button">Load More</button>
                   </div>
                </div>
             </div>
          </div>
       
       </div>
    </div>
 </div>
         <Tabsystemsection/>
         <Slider/>
         <Footer/>

    </div>
  )
}

export default OnlineCoursesSearch