import React from 'react'
import LeftTabsExample from "./tabs"
import Resources from "./resources";

import Rankingright_component from "./Rankingright_component";
import Homepage_leftcomponent from "./Homepage_leftcomponent";

import Tabsystemsection from './Tabsystemsection';
const RankingDetail = () => {
  return (
    <div>
      
        <>
     
  <section className="headerImage1">
    <div className="background ">
      <div className="container">
        <div className="row  ">
          <div className="col-md-8 section-h">
            <div className="bannerHeading">
              <h1>WRE's Trade Educatoion Rankings</h1>
            </div>
          </div>
          <div className="col-md-4">
            
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Programs Section Start*/}
  <div className="programsSection py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8 col-sm-12 test-design1  py-4">
        <Rankingright_component></Rankingright_component>
          </div>
       
        <div className="col-lg-4 cpl-md-12 col-sm-12 ">
       <Homepage_leftcomponent></Homepage_leftcomponent>
        </div>
      </div>
      {/* Programs Section End*/}
    </div>
    
  </div>
</>
<div className="container">
<LeftTabsExample></LeftTabsExample>
                    <Resources></Resources>
     
</div>
        

    </div>
  )
}

export default RankingDetail