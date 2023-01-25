import React from 'react';
 import Filtersection from './Filtersection';
import LeftTabsExample from "./tabs";
import Resources from "./resources";
import Online from './Online';
import Onlinesearchbannersection from './Onlinesearchbannersection';


const OnlineCoursesSearch = () => {
  return (
    <div> 

         <Onlinesearchbannersection/>
         <div class="programsSection">
    <div class="container">
       <div class="row">

          <div class="col-lg-3 col-xl-3">
      <Filtersection/>
          </div>
      
          <div class="col-lg-9 col-xl-9">
          <Online/>
             
            
  

</div>
          </div>
       
    
       
       <LeftTabsExample></LeftTabsExample>
                    <Resources></Resources>
    </div>
    </div>
 </div>
 

   
  )
}

export default OnlineCoursesSearch