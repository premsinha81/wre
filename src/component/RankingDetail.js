import React from 'react'
import Header from "./common/header";
import logo1 from '../Image/logo1.jpg';
import logo2 from '../Image/Group 512.svg';
import Footer from "./common/footer";
import Slider from './Slider'
import Tabsystemsection from './Tabsystemsection';
const RankingDetail = () => {
  return (
    <div>
        <Header/>
        <>
     
  <section className="headerImage">
    <div className="background ">
      <div className="container">
        <div className="row  ">
          <div className="col-md-8 section-h">
            <div className="bannerHeading">
              <h1>WRE's Trade Educatoion Rankings</h1>
            </div>
          </div>
          <div className="col-md-4">
            <main>
              <div className="wrappers">
                <h2>Search Programs</h2>
                <form action="#">
                  <div className="form-group">
                    <select
                      name="programs"
                      id=""
                      className="form-control selectOption"
                    >
                      <option value="">- Select Program -</option>
                      <option value="">Program 1</option>
                      <option value="">Program 2</option>
                      <option value="">Program 3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      name="programs"
                      id=""
                      className="form-control selectOption"
                    >
                      <option value="">- Select Degree -</option>
                      <option value="">Degree 1</option>
                      <option value="">Degree 2</option>
                      <option value="">Degree 3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      name="programs"
                      id=""
                      className="form-control selectOption"
                    >
                      <option value="">- Select Duration -</option>
                      <option value="">Duration 1</option>
                      <option value="">Duration 2</option>
                      <option value="">Duration 3</option>
                    </select>
                  </div>
                  <div className="input-box button">
                    <input
                      type="submit"
                      name="submitButton"
                      className="searchBtn"
                      id="submitButton"
                      defaultValue="Search Now"
                    />
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Programs Section Start*/}
  <div className="programsSection py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-8 test-design1  py-4">
          <h1>Top 10 Carpentry Schools in New Jersey</h1>
          <h2 className="py-3">
            Graduates with a degree in health may find employment opportunities
            for healthcare professionals across the U.S. as physical therapy
            assistants, occupational therapy assistants, or a medical
            administrative
          </h2>
          <p>
            An associate degree in healthcare is a two-year degree that students
            may complete on campus, online, or in a combination of on-campus and
            online learning. Healthcare is a major part of the US economy, and
            an associate in health, health information management, health
            services management, or a healthcare administration program can open
            many paths to employment opportunities in the healthcare industry.
            Population changes drive much of the growth of healthcare in the US,
            while national policies have increased levels of health insurance
            available and the need for workers in healthcare support jobs to
            maintain healthcare records.
            <br /> <br />
            Jobs in health represent the largest projected increase among
            occupational groups in the US for the next several years. There may
            be up to 1.9 million new jobs created in the sector in that time.
            <br /> <br />
            An associate degree is an entry-level degree and students can use
            this to move into jobs in the healthcare industry or as a foundation
            for further education if they want to make it into healthcare
            management or healthcare administration as an associate degree
            program may not be enough to gain a
          </p>
          <div className="row">
            <div className="col">
              <div className="accordion py-5" id="accordionExample2 ">
                <div className="accordioniteli">
                  <div className="rr borederlio">
                    <div className="borederlio2">
                    
                      <img width="100%" src={logo1} alt="" />
                    </div>
                    <div className="tradeTitle">
                      <h2>Lincolntech Trade School</h2>
                    </div>
                    <div className="borederlio1">
                  
                      <img width="100%" src={logo2} alt="" />
                      <span>1</span>
                    </div>
                  </div>
                  <div>
                    <div className="accordion-body">
                      <ul className="accourdionCourseBullot1">
                        <li>
                          Concepts and insights behind the development of modern
                          wireless communication technologies. Detailed
                          performance analysis of 4G/ 5G wireless technologies
                          such as OFDM, MIMO, Multi-user MIMO{" "}
                        </li>
                        <li>
                          Detailed performance analysis of 4G/ 5G wireless
                          technologies such as OFDM, MIMO, Multi-user MIMO
                        </li>
                        <li>
                          Concepts and insights behind the development of modern
                          wireless communication technologies. Detailed
                          performance analysis of 4G/ 5G wireless technologies
                          such as OFDM, MIMO, Multi-user MIMO
                        </li>
                        <li>
                          Detailed performance analysis of 4G/ 5G wireless
                          technologies such as OFDM, MIMO, Multi-user MIMO
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion py-3" id="accordionExample2 ">
                <div className="accordioniteli">
                  <div className="rr borederlio">
                    <div className="borederlio2">
                      {" "}
                      <img width="100%" src={logo1} alt="" />
                    </div>
                    <div className="tradeTitle">
                      <h2>WCTC Kansas</h2>
                    </div>
                    <div className="borederlio1">
                      {" "}
                      <img width="100%" src={logo2} alt="" />
                      <span>2</span>
                    </div>
                  </div>
                  <div>
                    <div className="accordion-body">
                      <ul className="accourdionCourseBullot1">
                        <li>
                          Concepts and insights behind the development of modern
                          wireless communication technologies. Detailed
                          performance analysis of 4G/ 5G wireless technologies
                          such as OFDM, MIMO, Multi-user MIMO{" "}
                        </li>
                        <li>
                          Detailed performance analysis of 4G/ 5G wireless
                          technologies such as OFDM, MIMO, Multi-user MIMO
                        </li>
                        <li>
                          Concepts and insights behind the development of modern
                          wireless communication technologies. Detailed
                          performance analysis of 4G/ 5G wireless technologies
                          such as OFDM, MIMO, Multi-user MIMO
                        </li>
                        <li>
                          Detailed performance analysis of 4G/ 5G wireless
                          technologies such as OFDM, MIMO, Multi-user MIMO
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion py-5" id="accordionExample2 ">
                <div className="accordioniteli">
                  <div className="rr borederlio">
                    <div className="borederlio2">
                      {" "}
                      <img width="100%" src={logo1} alt="" />
                    </div>
                    <div className="tradeTitle">
                      <h2>Lincolntech Trade School</h2>
                    </div>
                    <div className="borederlio1">
                      {" "}
                      <img width="100%" src={logo2} alt="" />
                      <span>3</span>
                    </div>
                  </div>
                  <div>
                    <div className="accordion-body">
                      <ul className="accourdionCourseBullot1">
                        <li>
                          Concepts and insights behind the development of modern
                          wireless communication technologies. Detailed
                          performance analysis of 4G/ 5G wireless technologies
                          such as OFDM, MIMO, Multi-user MIMO{" "}
                        </li>
                        <li>
                          Detailed performance analysis of 4G/ 5G wireless
                          technologies such as OFDM, MIMO, Multi-user MIMO
                        </li>
                        <li>
                          Concepts and insights behind the development of modern
                          wireless communication technologies. Detailed
                          performance analysis of 4G/ 5G wireless technologies
                          such as OFDM, MIMO, Multi-user MIMO
                        </li>
                        <li>
                          Detailed performance analysis of 4G/ 5G wireless
                          technologies such as OFDM, MIMO, Multi-user MIMO
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion  py-5 " id="accordionExample2 ">
                  <div className="accordioniteli ">
                    <div className="rr borederlio">
                      <div className="borederlio2">
                        {" "}
                        <img width="100%" src={logo1} alt="" />
                      </div>
                      <div className="tradeTitle ">
                        <h2>WCTC Kansas</h2>
                      </div>
                      <div className="borederlio1">
                        {" "}
                        <img width="100%" src={logo2} alt="" />
                        <span>4</span>
                      </div>
                    </div>
                    <div>
                      <div className="accordion-body">
                        <ul className="accourdionCourseBullot1">
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO{" "}
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion py-3" id="accordionExample2 ">
                  <div className="accordioniteli">
                    <div className="rr borederlio">
                      <div className="borederlio2">
                        {" "}
                        <img width="100%" src={logo1} alt="" />
                      </div>
                      <div className="tradeTitle">
                        <h2>Lincolntech Trade School</h2>
                      </div>
                      <div className="borederlio1">
                        {" "}
                        <img width="100%" src={logo2} alt="" />
                        <span>5</span>
                      </div>
                    </div>
                    <div>
                      <div className="accordion-body">
                        <ul className="accourdionCourseBullot1">
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO{" "}
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion py-5" id="accordionExample2 ">
                  <div className="accordioniteli">
                    <div className="rr borederlio">
                      <div className="borederlio2">
                        {" "}
                        <img width="100%" src={logo1} alt="" />
                      </div>
                      <div className="tradeTitle">
                        <h2>WCTC Kansas</h2>
                      </div>
                      <div className="borederlio1">
                        {" "}
                        <img width="100%" src={logo2} alt="" />
                        <span>6</span>
                      </div>
                    </div>
                    <div>
                      <div className="accordion-body">
                        <ul className="accourdionCourseBullot1">
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO{" "}
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion py-3" id="accordionExample2 ">
                  <div className="accordioniteli">
                    <div className="rr borederlio">
                      <div className="borederlio2">
                        {" "}
                        <img width="100%" src={logo1} alt="" />
                      </div>
                      <div className="tradeTitle">
                        <h2>Lincolntech Trade School</h2>
                      </div>
                      <div className="borederlio1">
                        {" "}
                        <img width="100%" src={logo2} alt="" />
                        <span>7</span>
                      </div>
                    </div>
                    <div>
                      <div className="accordion-body">
                        <ul className="accourdionCourseBullot1">
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO{" "}
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion py-5" id="accordionExample2 ">
                  <div className="accordioniteli">
                    <div className="rr borederlio">
                      <div className="borederlio2">
                        {" "}
                        <img width="100%" src={logo1} alt="" />
                      </div>
                      <div className="tradeTitle">
                        <h2>WCTC Kansas</h2>
                      </div>
                      <div className="borederlio1">
                        {" "}
                        <img width="100%" src={logo2} alt="" />
                        <span>8</span>
                      </div>
                    </div>
                    <div>
                      <div className="accordion-body">
                        <ul className="accourdionCourseBullot1">
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO{" "}
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion py-3" id="accordionExample2 ">
                  <div className="accordioniteli">
                    <div className="rr borederlio">
                      <div className="borederlio2">
                        {" "}
                        <img width="100%" src={logo1} alt="" />
                      </div>
                      <div className="tradeTitle">
                        <h2>Lincolntech Trade School</h2>
                      </div>
                      <div className="borederlio1">
                        {" "}
                        <img width="100%" src={logo2} alt="" />
                        <span>9</span>
                      </div>
                    </div>
                    <div>
                      <div className="accordion-body">
                        <ul className="accourdionCourseBullot1">
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO{" "}
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion py-5" id="accordionExample2 ">
                  <div className="accordioniteli">
                    <div className="rr borederlio">
                      <div className="borederlio2">
                        {" "}
                        <img width="100%" src={logo1} alt="" />
                      </div>
                      <div className="tradeTitle">
                        <h2>WCTC Kansas</h2>
                      </div>
                      <div className="borederlio1">
                        {" "}
                        <img width="100%" src="img/Group 512.svg" />
                        <span>10</span>
                      </div>
                    </div>
                    <div>
                      <div className="accordion-body">
                        <ul className="accourdionCourseBullot1">
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO{" "}
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Concepts and insights behind the development of
                            modern wireless communication technologies. Detailed
                            performance analysis of 4G/ 5G wireless technologies
                            such as OFDM, MIMO, Multi-user MIMO
                          </li>
                          <li>
                            Detailed performance analysis of 4G/ 5G wireless
                            technologies such as OFDM, MIMO, Multi-user MIMO
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <span>
                  An associate degree in healthcare is a two-year degree that
                  students may complete on campus, online, or in a combination
                  of on-campus and online learning. Healthcare is a major part
                  of the US economy, and an associate in health, health
                  information management, health services management, or a
                  healthcare administration program can open many paths to
                  employment opportunities in the healthcare industry.
                  Population changes drive much of the growth of healthcare in
                  the US, while national policies have increased levels of
                  health insurance available and the need for workers in
                  healthcare support jobs to maintain healthcare records.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="postSidebar">
            <div className="postGroups1">
              <div className="row">
                <div className="col-12">
                  <div className="sideBarTitle">
                    <h1>Recommended Groups</h1>
                  </div>
                  <div className="divider" />
                </div>
                <div className="col-12">
                  <div className="groupSection1">
                    <div className="groupIcon">
                      <img
                        src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg"
                        alt=""
                      />
                    </div>
                    <div className="groupName">
                      <h4 className="gName">Top 10 Welding Trade Schools</h4>
                      <p className="groupFollowers">Pennsylvania</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="groupSection1">
                    <div className="groupIcon">
                      <img
                        src="https://i.pinimg.com/236x/86/9b/cf/869bcfea3080797cdbf733451fe312a8.jpg"
                        alt=""
                      />
                    </div>
                    <div className="groupName">
                      <h4 className="gName">Top 10 Welding Trade Schools</h4>
                      <p className="groupFollowers">Pennsylvania</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="groupSection1">
                    <div className="groupIcon">
                      <img src="img/g3.png" alt="" />
                    </div>
                    <div className="groupName">
                      <h4 className="gName">Top 10 Welding Trade Schools</h4>
                      <p className="groupFollowers">Pennsylvania</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="groupSection1">
                    <div className="groupIcon">
                      <img
                        src="https://tr.rbxcdn.com/63f683e1d9cd1d4eab0361ad13b4eaa9/420/420/Image/Png"
                        alt=""
                      />
                    </div>
                    <div className="groupName">
                      <h4 className="gName">Top 10 Welding Trade Schools</h4>
                      <p className="groupFollowers">Pennsylvania</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="groupSection1">
                    <div className="groupIcon">
                      <img
                        src="https://i5.walmartimages.com/asr/411e603d-f8d2-4fb9-b319-456f35f66a66.5649795a8484e5183652b0b237088ceb.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="groupName">
                      <h4 className="gName">Top 10 Welding Trade Schools</h4>
                      <p className="groupFollowers">Pennsylvania</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="groupSection1">
                    <div className="groupIcon">
                      <img
                        src="https://m.media-amazon.com/images/I/71Z1k-VOy+L._AC_SY450_.jpg"
                        alt=""
                      />
                    </div>
                    <div className="groupName">
                      <h4 className="gName">Top 10 Welding Trade Schools</h4>
                      <p className="groupFollowers">Pennsylvania</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="groupSection1">
                    <div className="groupIcon">
                      <img src="img/profile.jpg" alt="" />
                    </div>
                    <div className="groupName">
                      <h4 className="gName">Top 10 Welding Trade Schools</h4>
                      <p className="groupFollowers">Pennsylvania</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space30" />
            <div className="space30" />
          </div>
        </div>
      </div>
      {/* Programs Section End*/}
    </div>
  </div>
</>


        <Tabsystemsection/>
        <Slider/>
        
    <Footer/>
    </div>
  )
}

export default RankingDetail