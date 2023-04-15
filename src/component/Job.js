import {React,useState,useEffect} from 'react'
import { slice } from 'lodash'
import Imagesection2 from '../Image/1556727.png';
import imgv from '../Image/hian-oliveira-1417174-unsplash.png';
import LeftTabsExample from "./tabs"
import Resources from "./resources";
function Job() {
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
    console.log(index)
    if (index >= post.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

console.log(post);
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
              <div className="wrappers py-5 p_position">
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
      <div className="col-lg-8 col-xl-8 rowpadresponshive">
        <p>Most popular job positions this month</p>
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
      </div>
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
    <br />
    <hr style={{ borderBottom: "1px solid #000 !important" }} />
    <div className="programsSection">
      <div className="container">
        <div className="row">
          {/* Sidebar Start */}
          <div className="col-lg-3 col-xl-3">
            <div className="programsSideBar1">
              <div className="filterArea">
                <button
                  type="button"
                  className="btn btn-primary btnSidebar filterBtn "
                >
                  Filters
                </button>
                <button
                  type="button"
                  className="btn btn-primary btnSidebar sortBtn"
                >
                  Sort By
                </button>
              </div>
              <div className="filterBody">
                <div className="searchRank">
                  <h4>Search Ranking</h4>
                  <div className="searchProgram">
                    <div className="form-group">
                      <select
                        name="programs"
                        id=""
                        className="form-control selectOptionSidebar"
                      >
                        <option value="">Program</option>
                        <option value="">Program 1</option>
                        <option value="">Program 2</option>
                        <option value="">Program 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="checkBox">
                  <input type="checkbox" defaultChecked="" id="myCheck" />
                  <label htmlFor="myCheck">Only remove programs</label>
                </div>
                <div className="radioBox">
                  <p>Sort By</p>
                  <div className="radioBoxDiv">
                    <div className="radioBoxRow">
                      <input
                        type="radio"
                        className="radioBtn"
                        defaultChecked=""
                        id="radioBtn1"
                      />{" "}
                      <label htmlFor="myCheck">Recommended</label>
                    </div>
                    <div className="radioBoxRow">
                      <input type="radio" className="radioBtn" id="radioBtn2" />{" "}
                      <label htmlFor="myCheck">Top Rated</label>
                    </div>
                    <div className="radioBoxRow">
                      <input type="radio" className="radioBtn" id="radioBtn3" />{" "}
                      <label htmlFor="myCheck">Budget</label>
                    </div>
                  </div>
                </div>
                <div className="priceRange">
                  <p>Filter</p>
                  <span className="priceBudget">Budget</span>
                  <div className="price-range-slider">
                    <div
                      id="slider-range"
                      className="range-bar ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                    >
                      <div
                        className="ui-slider-range ui-corner-all ui-widget-header"
                        style={{ left: "0%", width: "56.2059%" }}
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "0%" }}
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "56.2059%" }}
                      />
                    </div>
                    <span className="range-value">
                      <input type="text" id="amount1" readOnly="" />
                      To
                      <input type="text" id="amount2" readOnly="" />
                    </span>
                  </div>
                </div>
                <div className="stateBox">
                  <div className="form-group">
                    <select
                      name="programs"
                      id=""
                      className="form-control selectOptionSidebar"
                    >
                      <option value="">State</option>
                      <option value="">Program 1</option>
                      <option value="">Program 2</option>
                      <option value="">Program 3</option>
                    </select>
                  </div>
                </div>
                <div className="sideBarFooter">
                  <button
                    type="button"
                    className="btn btn-primary btnBSidebar RefilterBtn "
                  >
                    Reset Filters
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btnBSidebar saveBtn"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar End */}
          {/* Program Body Start */}
          <div className="col-lg-9 col-xl-9">
            
            <h6>
              We have 893.817 Jobs waiting for your best talent, Apply Now!
            </h6>
            {initialJob.map((item) => {

return(
            <div className="row commentbox py-5">
              <div className="col-sm-12 col-md-12">
                <div className="d-flex gap-5">
                 
                  <div className="groupName" key={item.user_id}>
                    <div className="jobList">
                      <div className="jobPostion" >
                        <h6 className="groupFollowersjob">{item.job_titile}</h6>
                        <h4 className="gName">{item.job_company}</h4>
                         <p>{item.employer_name}</p> 
                      </div>
                      <div
                        className="unfollow-btn1"
                        style={{ textAlign: "right" }}
                      >
                       <a href='/JhEmployer' > <div className="Apply">Apply</div></a>
                      </div>
                    </div>
                    <p className="mb-2">
                    {item.Course_type}
                    {item.job_description}
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                    <div className="daysAndDetails">
                      <p>2 days ago</p>
                      <p style={{ textAlign: "right" }}>
                        Details{" "}
                        <i className="fa fa-long-arrow-right detailsArrow" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr style={{ borderBottom: "1px solid #000 !important" }} />
            </div>
            
  )

})

}
{isCompleted ? (
<div class="loadBtn">
      <button
        onClick={loadMore}
        type="button"
        
      >
        That's It
      </button>
      </div>
    ) : (
      <div class="loadBtn">
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