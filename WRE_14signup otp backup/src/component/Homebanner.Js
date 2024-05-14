import React from 'react'
import Homeform from './Homeform'

const Homebanner = () => {
  return (
    <>     
    <div class="background mobileCssBG">
       <div class="container">
          <div class="row  ">
             <div class="col-md-8 section-h">
                <div class="bannerHeading">
                   <h1>WRE's Trade Educatoion Rankings</h1>
                </div>
             </div>
             <div class="col-md-4">
              <Homeform/>
             </div>
          </div>
       </div>
    </div>
</>
  )
}

export default Homebanner