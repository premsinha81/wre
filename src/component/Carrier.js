import React from 'react'
import Header from "./common/header";
import Footer from "./common/footer";
import Imagesection1 from '../Image/man-avatar-reading-student-education-book store.svg'
import Imagesection2 from '../Image/Group 500.svg'

const Carrier = () => {
   return (
      <div>
         <Header />
         <section className="headerImagecoun headerImagecoun1">
            <div className="backgroundcoun ">
               <div className="container">
                  <div className="row  ">
                     <div className="col-md-12 section-h">
                        <div className="bannerHeadingcoun">
                           <center>
                              <h1><strong>WRE Pathfinder</strong></h1>
                           </center>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </section>
         <div className="futureSection ">

            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-xl-12 ">
                     <div className="border1">
                        <div className="onlinecousectin">
                           <div className="row">
                              <div className="col-md-2">
                              </div>
                              <div className="col-md-4 futurecolor">
                                 <h1>I am a future</h1>
                              </div>
                              <div className="col-md-3">
                                 <div className="futureBox">
                                    <select name="programs" id="" className=" programTitle1">
                                       <option value="">Electrician </option>
                                       <option value="">Electrician </option>
                                       <option value="">Electrician </option>
                                    </select>
                                 </div>

                              </div>
                              <div className="col-md-2">

                              </div>
                           </div>
                        </div>
                        <div className="onlinecousectinp">
                           <div className="container">
                              <div className="row">

                                 <div className="col-lg-3 loccss">
                                    <h3>Location</h3>
                                    <select name="programs" id="" className=" programTitle2">
                                       <option value="">PA</option>
                                       <option value="">Degree 1</option>
                                       <option value="">Degree 2</option>
                                       <option value="">Degree 3</option>
                                    </select>

                                 </div>
                                 <div className="col-lg-3 loccss">
                                    <h3>Program Type</h3>
                                    <select name="programs" id="" className=" programTitle2">
                                       <option value="">Remote</option>
                                       <option value="">Remote 1</option>
                                       <option value="">Remote 2</option>
                                       <option value="">Remote 3</option>
                                    </select>
                                 </div>
                                 <div className="col-lg-3 loccss">
                                    <h3>Certification</h3>
                                    <select name="programs" id="" className=" programTitle2">
                                       <option value="">Diploma</option>
                                       <option value="">Degree 1</option>
                                       <option value="">Degree 2</option>
                                       <option value="">Degree 3</option>
                                    </select>
                                 </div>
                                 <div className="col-lg-3 loccss">
                                    <h3>Program Duration</h3>
                                    <select name="programs" id="" className=" programTitle2">
                                       <option value="">6 Months</option>
                                       <option value="">Degree 1</option>
                                       <option value="">Degree 2</option>
                                       <option value="">Degree 3</option>
                                    </select>

                                 </div>
                              </div>
                           </div>
                           <div className="programsSection1">
                              <center> <button type="button"
                                 className="btn btn-primary btnSidebar sortBtn btnFuture">SUBMIT</button> </center>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="programsSection">
            <div className="container">
               <div className="row ">

                  <div className="col-lg-6 col-xl-6 mtb25">
                     <div className="onlinecousectinstu1">
                        <center> <img src={Imagesection2} /></center>
                        <h3>Instructor</h3>
                     </div>

                  </div>
                  <div className='col-lg-6 col-xl-6 mtb25'>
                     <div className="onlinecousectinstu">
                        <center> <img src={Imagesection1} /></center>
                        <h3>Student</h3>
                     </div>
                  </div>

                  <div className='col-lg-6 col-xl-6 mtb25'>
                     <div className="onlinecousectinstu counpro">
                        <h6>CAREER COUNSELLING PROGRAMS</h6>
                        <p> <span>Stream & Subject Selection </span></p>
                        <p>Advanced assessment & personalised guidance to help you select the perfect stream and subjects that
                           align you to the right careers.</p>
                        <div className="counpro">
                           <center> <a href="">View Program Details</a></center>
                        </div>
                     </div>
                  </div>

                  <div className='col-lg-6 col-xs-6 mtb25'>
                     <div className="onlinecousectinstu counpro">
                        <h6>CAREER COUNSELLING PROGRAMS</h6>
                        <p> <span>Overseas Application</span></p>
                        <p> End-to-end overseas admissions guidance to help you build the perfect applications for your
                           target universities.</p>
                        <div className="counpro">
                           <center> <a href="">View Program Details</a></center>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6 col-xl-6 mtb25">

                     <div className="onlinecousectinstu counpro">
                        <h6>EXPERIENTIAL CAREER PROGRAMS</h6>
                        <p> Virtual Internship Program </p>
                        <p> Experiential, immersive self-paced program that helps students experience different careers
                           and gives them practical exposure to these careers.</p>
                        <div className="counpro">
                           <center> <a href="">View Program Details</a></center>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6 col-xl-6 mtb25">

                     <div className="onlinecousectinstu counpro">
                        <h6>EXPERIENTIAL CAREER PROGRAMS</h6>
                        <p> Virtual Internship Program </p>
                        <p> Experiential, immersive self-paced program that helps students experience different careers
                           and gives them practical exposure to these careers.</p>
                        <div className="counpro">
                           <center> <a href="">View Program Details</a></center>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6 col-xl-6 mtb25">

                     <div className="onlinecousectinstu counpro">
                        <h6>COLLEGE APPLICATION PROGRAMS</h6>
                        <p>Career Selection & Planning</p>
                        <p> Expert guidance & 5-dimensional assessment to help you discover your perfect career and
                           choose the right course and college.</p>
                        <div className="counpro">
                           <center> <a href="">View Program Details</a></center>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6 col-xl-6 mtb25">

                     <div className="onlinecousectinstu counpro">
                        <h6>COLLEGE APPLICATION PROGRAMS</h6>
                        <p>Career Selection & Planning</p>
                        <p> Expert guidance & 5-dimensional assessment to help you discover your perfect career and
                           choose the right course and college.</p>
                        <div className="counpro">
                           <center> <a href="">View Program Details</a></center>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>


         
         <div className="programsSection padding45">
            <section className="headerImagecoun ">
               <div className="backgroundcoun ">
                  <div className="container">
                     <div className="row  ">
                        <div className="col-md-12 section-h">
                           <div className="bannerHeadingcoun">
                              <center>
                                 <h1><strong>WRE Pathfinder Quiz</strong></h1>
                              </center>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </section>
         </div>
         <div className="programsSection3">
            <div className="container">
               <div className="row ">

                  <div className="col-lg-12 col-xl-12 ">

                     <div className=" counpro1">
                        <h3>Take the Pathfinder Quiz</h3>
                        <p> Advanced Assessment & Best-Fit Matches</p>
                        <p> 5-D psychometric career assessment: Orientation Style, Interest, Personality, Aptitude and
                           EQ 34 page in-depth career report with personalised development plans. View Sample Report Get
                           your best-fit career recommendations based on 56 evaluation parameters</p>
                        <div className="counpro1">
                           <div className="programsSection1">
                              <center> <button type="button" className="btn btn-primary btnSidebar sortBtn">Take Free
                                 Demo</button> </center>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="programsSection">
                  <div className="row ">

                     <div className="col-lg-12 col-xl-12 ">

                        <div className=" counpro1">
                           <h3>Take the Pathfinder Quiz</h3>
                           <p> Advanced Assessment & Best-Fit Matches</p>
                           <p> 5-D psychometric career assessment: Orientation Style, Interest, Personality, Aptitude
                              and EQ 34 page in-depth career report with personalised development plans. View Sample
                              Report Get your best-fit career recommendations based on 56 evaluation parameters</p>
                           <div className="counpro1">
                              <div className="programsSection1">
                                 <center> <button type="button" className="btn btn-primary btnSidebar sortBtn">Take Free
                                    Demo</button> </center>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="programsSection3 padding25">
            <section className="headerImagecoun headerImagecoun2 ">
               <div className="backgroundcoun ">
                  <div className="container">
                     <div className="row  ">
                        <div className="col-md-12 section-h">
                           <div className="bannerHeadingcoun">
                              <center>
                                 <h1><strong>Personalised Expert Guidance</strong></h1>
                              </center>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </section>
         </div>
         <div className="programsSection">
            <div className="row ">

               <div className="col-lg-12 col-xl-12 ">

                  <div className=" counpro1">
                     <p>Plan your career, stream/ subject combinations, course, college and more through expert guidance</p>
                     <p>All our career coaches are International Certified who have mentored over 2.5 million students</p>
                     <p> Make the right choice with personalised career counselling and all-round support for all your queries
                     </p>

                  </div>
               </div>
            </div>
         </div>

         <div className="programsSection3">
            <div className="container">
               <div className="row">
                  <div className="col-md-4 col-lg-4">
                     <div className="programBox1">
                        <div className="programTitle">
                           <center>
                              <h1>About Our Team</h1>
                           </center>
                        </div>
                        <div className="programContent pp">
                           <p>These industry-reviewed courses are designed to impart skills to help you become an
                              in-demand professional. <a href=""> Learn more</a> and <a href=""> enroll.</a></p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                     <div className="programBox1">
                        <div className="programTitle">
                           <center>
                              <h1>Career Roadmap Planner</h1>
                           </center>
                        </div>
                        <div className="programContent pp">
                           <p>These industry-reviewed courses are designed to impart skills to help you become an
                              in-demand professional. <a href=""> Learn more</a> and <a href=""> enroll.</a></p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                     <div className="programBox1">
                        <div className="programTitle">
                           <center>
                              <h1>Extensive Support & Resources</h1>
                           </center>
                        </div>
                        <div className="programContent pp">
                           <p>These industry-reviewed courses are designed to impart skills to help you become an
                              in-demand professional. <a href=""> Learn more</a> and <a href=""> enroll.</a></p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
         <div className="counpro1">
            <div className="programsSection1">
               <center> <button type="button" className="btn btn-primary btnSidebar sortBtn">Take Free
                  Demo</button> </center>
            </div>
         </div>
         <div className='container'>
            <slider/>
         </div>
         <slider/>
         <Footer />
      </div>
   )
}

export default Carrier