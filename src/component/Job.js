
import { slice } from 'lodash'
import Imagesection2 from '../Image/1556727.png';
import React, { useEffect, useState } from 'react';
import imgv from '../Image/hian-oliveira-1417174-unsplash.png';
import LeftTabsExample from "./tabs"

import Resources from "./resources";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useParams } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import { Swiper, SwiperSlide } from 'swiper/react';
import Jobsfillters from './Jobsfillters'
// Import Swiper styles
import 'swiper/css';
function Job() {


  const [jobLocations, setJobLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [Jobtype, setJobtype] = useState([]);
  const [selectedJobtype, setSelectedJobtype] = useState('');
  const [Jobcompanys, setJobcompanys] = useState([]);
  const [selectedJobcompany, setSelectedJobcompany] = useState('');
  const [post, setPost] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(2)
  const initialJob = slice(post, 0, index)
  const getData = () => {
    fetch('https://admin.allnuud.com/api/job_list_all')
      .then((res) => res.json())
      .then((json) => setPost(json.data))
      .catch((e) => console.log(e))
  }
  const loadMore = () => {
    setIndex(index + 2)
    // console.log(index)
    if (index >= post.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  // console.log(post);
  useEffect(() => {
    const fetchJobLocations = async () => {
      try {
        const response = await fetch('https://admin.allnuud.com/api/job_location');
        const data = await response.json();
        setJobLocations(data.data || []); // Assuming the array is in a property called "data"
      } catch (error) {
        console.error('Error fetching job locations:', error);
      }
    };

    fetchJobLocations();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const handleSelectChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  // console.log("riya", jobLocations);
  useEffect(() => {
    const fetchJobtype = async () => {
      try {
        const response = await fetch('https://admin.allnuud.com/api/job_type');
        const data = await response.json();
        setJobtype(data.data || []); // Assuming the array is in a property called "data"
      } catch (error) {
        console.error('Error fetching job Type:', error);
      }
    };

    fetchJobtype();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const handleSelectChangejobtype = (event) => {
    setSelectedJobtype(event.target.value);
  };
  // console.log("riya", Jobtype);
  useEffect(() => {
    const fetchJobcompanys = async () => {
      try {
        const response = await fetch('https://admin.allnuud.com/api/job_company');
        const data = await response.json();
        setJobcompanys(data.data || []); // Assuming the array is in a property called "data"
      } catch (error) {
        console.error('Error fetching job Type:', error);
      }
    };
    fetchJobcompanys();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts


  const handleSelectChangecompany = (event) => {
    setSelectedJobcompany(event.target.value);
  };
  const searchNow = (e) => {
    fetch(`https://admin.allnuud.com/api/search_jobs?job_type=${selectedJobtype}&job_location=${selectedLocation}&job_company=${selectedJobcompany}`)
       .then((res) => res.json())
       .then((json) => setPost(json.data))
       .catch((e) => console.log(e))
  }
  // console.log("riya", Jobcompanys);

  // const searchNow = () => {
  //   alert('hi');
  //   fetch(`https://admin.allnuud.com/api/search_jobs?job_type=${selectedJobtype}&job_location=${selectedLocation}&job_company=${selectedJobcompany}`)
  //     .then((res) => res.json())
  //     .then((json) => console.log('ahjjh',json.data))
  //     .catch((e) => console.log(e))
  // }
  return (
    <div>

      <section className="headerImageuesr">
        <div className="background1 mobileCssBG">
          <div className="container">
            <div className="row  ">
              <div className="col-md-8 section-h">
                <div className="bannerHeadingjob">
                  <h1>
                    Find a high earning
                    <br /> Trade Job with WRE
                  </h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className="programSearch">
                  <div className="wrappers  p_position">
                    <h2>SEARCH TRADE JOBS</h2>
                    <form action="#">
                      <div className="form-group">
                        <select className="form-control selectOption" id="jobcompany" value={selectedJobcompany} onChange={handleSelectChangecompany}>
                          <option value="">Enter job position, company, etc</option>
                          {Jobcompanys.map((job_company, index) => (
                            <option key={index} value={job_company}>
                              {job_company}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* <div className="form-group">
                    <input placeholder='Enter job position, company, etc'
                      name="programs"
                      id=""
                      className="form-control selectOption selected"
                    >
                     
                    </input>
                  </div> */}
                      <div className="form-group">
                        <select className="form-control selectOption" id="jobLocations" value={selectedLocation} onChange={handleSelectChange}>
                          <option value="">- location -</option>
                          {jobLocations.map((location, index) => (
                            <option key={index} value={location}>
                              {location}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <select className="form-control selectOption" id="jobtype" value={selectedJobtype} onChange={handleSelectChangejobtype}>
                          <option value="">- Job Type -</option>
                          {Jobtype.map((jobtypes, index) => (
                            <option key={index} value={jobtypes}>
                              {jobtypes}
                            </option>
                          ))}
                        </select>
                      </div>

                      <center>  <button
                      type='button'
                        className="searchBtn "
                        id="submitButton"
                        onClick={searchNow}
                      >Search Now</button>
                      </center>
                    </form>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Programs Section Start*/}
      <div className="container sectontop ">
        <div className="row ">
          {/* Sidebar Start */}
          <div className="col-lg-7 col-xl-7 rowpadresponshive">
            <p className='heading'>Most popular job positions this month</p>

            <div className="row rowpadingsp">
              <div className="col-md-3 col-sm-6">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
            </div>
            <div className="row rowpadingsp ">
              <div className="col-md-3 col-sm-6">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
            </div>
            <div className="row rowpadingsp">

              <div className="col-md-3">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="programTitleuser">
                  <h1>Arc Welder</h1>
                  <hr />
                  <p>
                    <i className="fa fa-facebook" /> 1.428.942 Searches
                  </p>
                </div>
              </div>
            </div>
            <center>  <div className="tags job"><ul><li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
              <li><a href="#">Arc Welder</a></li>
            </ul></div></center>
          </div>
          <div className="col-lg-1 col-xl-1 "></div>
          <div className="col-lg-4 col-xl-4 ">
            <div className="content1">
              <div className="video-gallery ">
                <div className="gallery-item">
                  <img
                    src={imgv}
                    alt="North Cascades National Park"
                  />
                  <div className="gallery-item-caption">
                    <h2>
                      WRE Guide
                      <br /> to Success{" "}
                    </h2>
                    <p className="d-flex">
                      {" "}
                      <img style={{ width: "20%" }} src={Imagesection2} />{" "}
                      <span>Play video</span>
                    </p>
                    <a className="vimeo-popup" href="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderBottom: "1px solid #000 !important" }} />
        <div className="programsSection_job">
          <div className="container">
            <div className="row">
              {/* Sidebar Start */}
              <div className="col-lg-3 col-xl-3">
                <Jobsfillters ></Jobsfillters>
              </div>
              {/* Sidebar End */}
              {/* Program Body Start */}
              <div className="col-lg-9 col-xl-9 mt-4">

                <h6 className='jobsearch mt-4'>
                  We have 893.817 Jobs waiting for your best talent, Apply Now!
                </h6>
                {initialJob.map((item, indexke) => {

                  return (
                    <div className="row commentbox mt-4" key={indexke}>
                      <div className="col-sm-12 col-md-12 mt-4">
                        <div className="d-flex gap-5">
                          <div className="groupIcon">
                            <img src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg" />
                          </div>
                          <div className="groupName">
                            <div className="jobList">
                              <div className="jobPostion" >
                                <h6 className="groupFollowersjob">{item.job_titile}</h6>
                                <h4 className="gName">{item.job_company}</h4>
                                <p>{item.job_location}</p>
                              </div>
                              <div
                                className="unfollow-btn1"
                                style={{ textAlign: "right" }}
                              >
                                <a href='/Studentapplication' > <div className="Apply">Apply</div></a>
                              </div>
                            </div>
                            <p className="mb-2">
                              {item.Course_type}
                              <div className='des'>
                                {item.job_description}
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                              </div>
                            </p>
                            <div className="daysAndDetails">
                              <p>2 days ago</p>
                              <a href={`JobDetails/${item.user_id}/${item.id}`}>
                                <p style={{ textAlign: "right" }}>
                                  Details{" "}
                                  <i className="fa fa-long-arrow-right detailsArrow" />
                                </p>
                              </a>

                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className='jobborder' style={{ borderBottom: "1px solid #000 !important" }} />
                    </div>

                  )

                })

                }
                {isCompleted ? (
                  <div className="loadBtn">
                    <button
                      onClick={loadMore}
                      type="button"

                    >
                      That's It
                    </button>
                  </div>
                ) : (
                  <div className="loadBtn">
                    <button onClick={loadMore} type="button" >
                      Load More +
                    </button>
                  </div>
                )}





              </div>
              {/* Program Body End */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <LeftTabsExample></LeftTabsExample>
        <Resources></Resources>
      </div>
    </div>
  )
}

export default Job;