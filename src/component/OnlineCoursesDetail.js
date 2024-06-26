import React from 'react';

import LeftTabsExample from "./tabs";

import { ReactDOM } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Accordian from './common/Accordian';
import Tabsystemsection from './Tabsystemsection';

import Resources from "./resources";
const OnlineCoursesDetail = () => {
   return (
      <div>
         <section class="headerImage2">
            <div class="background ">
               <div class="container">
                  <div class="row  ">
                     <div class="col-md-8 section-h">
                        <div class="bannerHeading">
                           <h2 class="courseTitleD">5G Network Installation <br />Electrician Program
                           </h2>
                        </div>
                        <div class="programsContentInfo1">
                           <div class="courseDimg">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Temple_T_logo.svg/1200px-Temple_T_logo.svg.png" alt="" />
                           </div>
                           <h5>Temple University</h5>
                           <i class="fa fa-certificate"></i>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="courseDetailsHeighlight">
                           <p class="pcourse"><i class="fa fa-certificate"></i> Automation and Electrician</p>
                           <p class="pcourse"><i class="fa fa-clock-o"></i> 6 Months</p>
                           <p class="pcourse"><i class="fa fa-location-arrow"></i> Remote/Correspondence</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
 
 <div class="coreModuleSection">
    <div class="container">
       <div class="row">
          <div class="coreModule">
             <h1 class="coreModuleH">Core Modules</h1>
             <div class="row">
                <div class="col-lg-9">
                   <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               <div class="plusCercle pCerclePadding">+</div> Wireless Communication
                            </button>
                         </h2>
                         <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                               <ul class="accourdionCourseBullot">
                                  <li>Concepts and insights behind the development of modern wireless communication technologies. Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                                   <li>Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                               </ul>
                            </div>
                         </div>
                      </div>
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               <div class="plusCercle pCerclePadding">+</div>Probability and Random Processes
                            </button>
                         </h2>
                         <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                               <ul class="accourdionCourseBullot">
                                  <li>Concepts and insights behind the development of modern wireless communication technologies. Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                                   <li>Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                               </ul>
                            </div>
                         </div>
                      </div>
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               <div class="plusCercle pCerclePadding">+</div>Digital Communication Systems
                            </button>
                         </h2>
                         <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                               <ul class="accourdionCourseBullot">
                                  <li>Concepts and insights behind the development of modern wireless communication technologies. Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                                   <li>Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                               </ul>
                            </div>
                         </div>
                      </div>
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                               <div class="plusCercle pCerclePadding">+</div>Detection and Estimation Theory
                            </button>
                         </h2>
                         <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                               <ul class="accourdionCourseBullot">
                                  <li>Concepts and insights behind the development of modern wireless communication technologies. Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                                   <li>Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                               </ul>
                            </div>
                         </div>
                      </div>
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                               <div class="plusCercle pCerclePadding">+</div>Speech and Audio Coding for Communication
                            </button>
                         </h2>
                         <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                               <ul class="accourdionCourseBullot">
                                  <li>Concepts and insights behind the development of modern wireless communication technologies. Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                                   <li>Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                               </ul>
                            </div>
                         </div>
                      </div>
                   </div>
                
                </div>
                <div class="col-lg-3">
                      <div class="coreModuleRight">
                         <h1>Get Industry-Ready With WRE IoT and VLSI Courses</h1>
                         <p>These industry-reviewed courses are designed to impart skills to help you become an in-demand professional. <a href="#">Learn more</a> and <a href="#">enroll</a>.</p>
                      </div>
                </div>
             </div>
          </div>
       </div>
       <div class="space"></div>
       <div class="row">
          <div class="coreModule">
          <h1 class="coreModuleH">Elective Modules</h1>

             <div class="row">
                <div class="col-lg-9">
                  <div class="accordion" id="accordionExample2">
                     
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="headingsix">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapsesix" aria-expanded="true" aria-controls="collapsesix">
                               <div class="plusCercle pCerclePadding">+</div> RF systems for Communication
                            </button>
                         </h2>
                         <div id="collapsesix" class="accordion-collapse collapse show" aria-labelledby="headingsix"
                            data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                               <ul class="accourdionCourseBullot">
                                  <li>Concepts and insights behind the development of modern wireless communication technologies. Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                                   <li>Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                               </ul>
                            </div>
                         </div>
                      </div>
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="headingseven">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                               <div class="plusCercle pCerclePadding">+</div>Advanced Modulation and Multiple Access for Next Generation Wireless Systems
                            </button>
                         </h2>
                         <div id="collapseseven" class="accordion-collapse collapse" aria-labelledby="headingseven"
                            data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                               <ul class="accourdionCourseBullot">
                                  <li>Concepts and insights behind the development of modern wireless communication technologies. Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                                   <li>Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                               </ul>
                            </div>
                         </div>
                      </div>
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="headingeight">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                               <div class="plusCercle pCerclePadding">+</div>MIMO Wireless Communication
                            </button>
                         </h2>
                         <div id="collapseeight" class="accordion-collapse collapse" aria-labelledby="headingeight"
                            data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                               <ul class="accourdionCourseBullot">
                                  <li>Concepts and insights behind the development of modern wireless communication technologies. Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                                   <li>Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                               </ul>
                            </div>
                         </div>
                      </div>
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="headingnine">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                               <div class="plusCercle pCerclePadding">+</div>Deep Learning for Communication
                            </button>
                         </h2>
                         <div id="collapsenine" class="accordion-collapse collapse" aria-labelledby="headingnine"
                            data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                               <ul class="accourdionCourseBullot">
                                  <li>Concepts and insights behind the development of modern wireless communication technologies. Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                                   <li>Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                               </ul>
                            </div>
                         </div>
                      </div>
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="headingten">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                               <div class="plusCercle pCerclePadding">+</div>Detection and Estimation Theory
                            </button>
                         </h2>
                         <div id="collapseten" class="accordion-collapse collapse" aria-labelledby="headingten"
                            data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                               <ul class="accourdionCourseBullot">
                                  <li>Concepts and insights behind the development of modern wireless communication technologies. Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                                   <li>Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                               </ul>
                            </div>
                         </div>
                      </div>
                     
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="headingtwel">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                               data-bs-target="#collapsetwel" aria-expanded="false" aria-controls="collapsetwel">
                               <div class="plusCercle pCerclePadding">+</div>Speech and Audio Coding for Communication
                            </button>
                         </h2>
                         <div id="collapsetwel" class="accordion-collapse collapse" aria-labelledby="headingtwel"
                            data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                               <ul class="accourdionCourseBullot">
                                  <li>Concepts and insights behind the development of modern wireless communication technologies. Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                                   <li>Detailed performance analysis of 4G/ 5G wireless technologies such as OFDM, MIMO, Multi-user MIMO</li>
                               </ul>
                            </div>
                         </div>
                      </div>
                   </div>
                   
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
 
 <div class="outcomeSection">
    <div class="container">
       <div class="row">
          <div class="col-lg-12">
             <div class="outcomeContent">
                <h1>Outcomes</h1>
                <ul>
                   <li>Get eMasters Degree from Temple University</li>
                   <li>Gain in-depth understanding of modern communication systems</li>
                   <li>Learn from the leading research faculty</li>
                   <li> Receive mentorship, career support from Temple University placement cell</li>
                   <li> Incubation support for promising startup initiatives</li>
                   <li>Become a part of Temple University's alumni network</li>
                </ul>
             </div>
          </div>
       </div>
    </div>
 </div>
 <div class="container">
 <LeftTabsExample></LeftTabsExample>
                    <Resources></Resources>
                    </div>

 </div>
  )
}

export default OnlineCoursesDetail