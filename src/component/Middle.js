import React from 'react'
import Filtersection from './Filtersection'
import Homebanner from './Homebanner.Js'
import Online from './Online'
import Slider from './Slider'
import Tabsystemsection from './Tabsystemsection'

const Middle = () => {
  return (
    <div>
        <section class="headerImage"> 
          <Homebanner/>
          </section>
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
   
   </div>
  )
}

export default Middle