import React from 'react';
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

         <div class="courseOverviewSection">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="borderOutline">
                        <div class="overViewBg">
                           <div class="row">
                              <div class="col-lg-9">
                                 <div class="overViewContent">
                                    <h1>Course Overview</h1>
                                    <p>The new course in Communication Systems would arm working professionals with a
                                       comprehensive appreciation and knowledge of modern digital communications systems. The
                                       program will address the need for trained professionals given the rapid developments in
                                       the field of communications with 5G, 6G and Edge Computing being introduced in the
                                       country. Our comprehensive program in Communication Systems will train you in equipment
                                       and devices technology that aid in delivering expertise in voice, data, and multimedia
                                       information. You will learn to design, operate, install and practice communications
                                       systems to meet the needs of the industry. Prepare yourself to successfully navigate
                                       the world of technology disruption.</p>
                                 </div>
                              </div>
                              <div class="col-lg-3">
                                 <div class="courseDetalsPrice">
                                    <h3>Course Price</h3>
                                    <h4 class="crossMrp">$149.99</h4>
                                    <h1 class="coursePrice">$49.99</h1>
                                    <button>ENROLL</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="EligibilityorSkills">
                           <div class="row">
                              <div class="col-lg-8">
                                 <div class="eligibilityContnet">
                                    <h1>Eligibility</h1>
                                    <ul class="eligibitlyBullot">
                                       <li>Bachelor's Degree (4 years program) or a Masters Degree in the relevant discipline
                                       </li>
                                       <li>(Electrical/Electronics/Allied Engineering/Sciences disciplines with relevant
                                          background in signal processing and communications engineering) with at least 55%
                                          marks or 5.5/10 CPI.</li>
                                       <li> Minimum of 2 years of work experience (You need not be currently employed to be
                                          eligible).</li>
                                       <li>Candidates with relevant experience will be preferred.</li>
                                    </ul>
                                 </div>
                              </div>
                              <div class="col-lg-4">
                                 <div class="courseSkills">
                                    <h1>Skills You'll Gain</h1>
                                    <div class="skillsTag">
                                       <a >Debugging</a>
                                       <a>Customer Support</a>
                                       <a >Troubleshooting</a>
                                       <a >MIMO</a>
                                       <a>Ipv4</a>
                                       <a >Network Model</a>
                                       <a >OFDM</a>
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



         <div class="coreModuleSection">
            <div class="container">
               <div class="row">
                  <div class="coreModule">
                     <h1 class="coreModuleH">Core Modules</h1>
                     <div class="row">
                        <div class="col-lg-9">
                           <React.StrictMode>
                              <StyledEngineProvider injectFirst>
                                 <Accordian />
                              </StyledEngineProvider>
                           </React.StrictMode>


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

               <Tabsystemsection> </Tabsystemsection>
               <Resources></Resources>


            </div>
         </div>


      </div>
   )
}

export default OnlineCoursesDetail