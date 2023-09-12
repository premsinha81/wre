import {React,useState,useEffect} from 'react'
import { slice } from 'lodash'
import Imagesection2 from '../Image/1556727.png';
import imgv from '../Image/hian-oliveira-1417174-unsplash.png';
import LeftTabsExample from "./tabs"
import Resources from "./resources";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useParams } from 'react-router-dom';
function Job() {
  const {user_id, id } = useParams();
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
 
  <section className="">
    <div className=" mobileCssBG">

      <div className="slider1 slider">
        <div className="gradient"></div>
        <div className="container">
          <div className=" posRelative search_engine">
            <div className="searchPanel job">
            <h2 className="text-white"> SEARCH FOR A JOB</h2>
              <div className="position-relative">
              
              <Autocomplete
                id="combo-box-demo"
                className="rounded-pill"
                
                renderInput={(params) => (
                  <TextField
                    {...params}
                    type="text"
                    labal="SEARCH FOR A JOB"
                    className="p-0 w-100"
                  />
                )}
              />
              <button
                className="btn btn-primary button btnSearch"
               
              >
                <i class="fa fa-search"></i>
              </button>
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
        <h2>Most popular job positions this month</h2>
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

    <hr style={{ borderBottom: "1px solid #000 !important" }} />
    <div className="programsSection">
      <div className="container">
        <div className="row">
          {/* Sidebar Start */}
          <div className="col-lg-3 col-xl-3 ps-0">
          <div className="leftsectionset bg-lgrey my-lg-5 mt-3 mb-0 rounded pp">
  <div className="bg-white pb-lg-3">
    <div className="d-flex">
      <button
        type="button"
        className="btn d-none d-md-block  btn-primary rounded  btnSidebar fw-bold mt-0 mb-0 mb-md-2 mb-lg-0 bg-blue  text-white "
      >
        Filters{" "}
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  r-45  css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ArrowDropUpIcon"
        >
          <path d="m7 14 5-5 5 5z" />
        </svg>
      </button>
      <button
        type="button"
        className="btn  d-md-none btn-primary rounded  btnSidebar fw-bold mt-0 mb-0 mb-md-2 mb-lg-0 bg-lgrey  text-dark "
      >
        Filters{" "}
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  r-90  css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ArrowDropUpIcon"
        >
          <path d="m7 14 5-5 5 5z" />
        </svg>
      </button>
    </div>
  </div>
  <div className="d-none d-md-block trade_search leftSection postGroups1 bg-lgrey p-3 ">
    <h4 className="fw-bold text-center mb-0">Search by Job</h4>
    <div className="divider mt-0 mb-3" />
    <div className="searchRank">
      <div className="searchProgram m-0">
        <div className="App">
          <div>
            <input
              className="form-control"
              id="filter"
              placeholder="By Trade"
              name="filter"
              type="text"
              defaultValue=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="scrollview m-0 ">
      <div className="scrollview1">
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check110"
            defaultValue="Welding Technology Post"
          />
          <label htmlFor="myCheck10">Welding Technology Post</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check111"
            defaultValue="Welding Technology and Training"
          />
          <label htmlFor="myCheck11">Welding Technology and Training</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check112"
            defaultValue="Welding Technology and Training Program"
          />
          <label htmlFor="myCheck12">
            Welding Technology and Training Program
          </label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check113"
            defaultValue="Welding Technology Technician Program"
          />
          <label htmlFor="myCheck13">
            Welding Technology Technician Program
          </label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check114"
            defaultValue="Welding student"
          />
          <label htmlFor="myCheck14">Welding student</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check115"
            defaultValue="Manufacturing and Automation"
          />
          <label htmlFor="myCheck15">Manufacturing and Automation</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check116"
            defaultValue="Manufacturing"
          />
          <label htmlFor="myCheck16">Manufacturing</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check118"
            defaultValue="hellodf"
          />
          <label htmlFor="myCheck18">hellodf</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check119"
            defaultValue="Welding Technology Post"
          />
          <label htmlFor="myCheck19">Welding Technology Post</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check120"
            defaultValue="Welding Technology Post"
          />
          <label htmlFor="myCheck20">Welding Technology Post</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check121"
            defaultValue="Welding Technology and Training Program"
          />
          <label htmlFor="myCheck21">
            Welding Technology and Training Program
          </label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check122"
            defaultValue="Welding Technology and Training Program"
          />
          <label htmlFor="myCheck22">
            Welding Technology and Training Program
          </label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check123"
            defaultValue="Welding Technology Technician Program"
          />
          <label htmlFor="myCheck23">
            Welding Technology Technician Program
          </label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check124"
            defaultValue="Welding Technology Technician Program"
          />
          <label htmlFor="myCheck24">
            Welding Technology Technician Program
          </label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check125"
            defaultValue="Welding student"
          />
          <label htmlFor="myCheck25">Welding student</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check126"
            defaultValue="Welding student"
          />
          <label htmlFor="myCheck26">Welding student</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check127"
            defaultValue="PTT - Manufacturing and Automation"
          />
          <label htmlFor="myCheck27">PTT - Manufacturing and Automation</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check128"
            defaultValue="PTT - Manufacturing and Automation"
          />
          <label htmlFor="myCheck28">PTT - Manufacturing and Automation</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check129"
            defaultValue="Manufacturing"
          />
          <label htmlFor="myCheck29">Manufacturing</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check130"
            defaultValue="Manufacturing"
          />
          <label htmlFor="myCheck30">Manufacturing</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check131"
            defaultValue="hellodf"
          />
          <label htmlFor="myCheck31">hellodf</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check132"
            defaultValue="hellodf"
          />
          <label htmlFor="myCheck32">hellodf</label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check133"
            defaultValue="PTT - PTT - Manufacturing and Automation"
          />
          <label htmlFor="myCheck33">
            PTT - PTT - Manufacturing and Automation
          </label>
        </div>
        <div className="checkBox">
          <input
            type="radio"
            name="myCheck"
            id="check134"
            defaultValue="PTT - Manufacturing and Automation"
          />
          <label htmlFor="myCheck34">PTT - Manufacturing and Automation</label>
        </div>
      </div>
    </div>
    <div className="searchRank m-0">
      <div className="searchProgram">
        <div className="App">
          <div>
            <input
              className="form-control"
              id="filters"
              placeholder="By Cities"
              name="filters"
              type="text"
              defaultValue=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="scrollview m-0">
      <div className="scrollview2">
        <div className="checkBox">
          <input type="radio" name="myCheck1" id="check22" defaultValue="NA" />
          <label htmlFor="myCheck12">NA</label>
        </div>
        <div className="checkBox">
          <input type="radio" name="myCheck1" id="check23" defaultValue="CA" />
          <label htmlFor="myCheck13">CA</label>
        </div>
        <div className="checkBox">
          <input type="radio" name="myCheck1" id="check24" defaultValue="DA" />
          <label htmlFor="myCheck14">DA</label>
        </div>
        <div className="checkBox">
          <input type="radio" name="myCheck1" id="check25" defaultValue="MA" />
          <label htmlFor="myCheck15">MA</label>
        </div>
      </div>
    </div>
    <div className="stateBox m-0">
      <div className="form-group">
        <select
          name="programs"
          id=""
          className="form-control selectOptionSidebar"
        >
          <option value="">By Rating</option>
        </select>
      </div>
      <div className="scrollview">
        <div className="scrollview2">
          <div className="checkBox">
            <input type="radio" name="myCheck" id="check24" defaultValue={4} />
            <label htmlFor="myCheck14">4 Star</label>
          </div>
          <div className="checkBox">
            <input type="radio" name="myCheck" id="check25" defaultValue={5} />
            <label htmlFor="myCheck15">5 Star</label>
          </div>
          <div className="checkBox">
            <input type="radio" name="myCheck" id="check23" defaultValue={3} />
            <label htmlFor="myCheck13">3 Star</label>
          </div>
          <div className="checkBox">
            <input type="radio" name="myCheck" id="check22" defaultValue={2} />
            <label htmlFor="myCheck12">2 Star</label>
          </div>
        </div>
      </div>
    </div>
    <div className="stateBox m-0">
      <div className="form-group">
        <select
          name="programs"
          id=""
          className="form-control selectOptionSidebar"
        >
          <option value="">By Program Type</option>
        </select>
      </div>
      <div className="scrollview">
        <div className="scrollview">
          <div className="checkBox">
            <input
              type="radio"
              name="myCheck"
              id="check1Hybrid"
              defaultValue="Hybrid"
            />
            <label htmlFor="RatingHybrid">Hybrid Star</label>
          </div>
          <div className="checkBox">
            <input
              type="radio"
              name="myCheck"
              id="check1Offline"
              defaultValue="Offline"
            />
            <label htmlFor="RatingOffline">Offline Star</label>
          </div>
          <div className="checkBox">
            <input
              type="radio"
              name="myCheck"
              id="check1Online"
              defaultValue="Online"
            />
            <label htmlFor="RatingOnline">Online Star</label>
          </div>
        </div>
      </div>
    </div>
    <div className="sideBarFooter m-0">
      <button
        type="button"
        className="btn btn-primary btnBSidebar RefilterBtn mt-3"
      >
        Reset Filters
      </button>
    </div>
  </div>
</div>

          </div>
          {/* Sidebar End */}
          {/* Program Body Start */}
          <div className="col-lg-9 col-xl-9 ps-0">
            
            <h6 className='fs-20 fw-bold mb-4 mt-3 mt-lg-0 mb-lg-0'>
              We have 893.817 Jobs waiting for your best talent, Apply Now!
            </h6>
            {initialJob.map((item) => {

          return(
            <div className="row commentbox py-lg-5">
              <div className="col-sm-12 col-md-12 ps-0">
                <div className="d-flex gap-5">
                 
                  <div className="groupName" key={item.user_id}>
                    <div className="jobList">
                      <div className="jobPostion" >
                        <h6 className="groupFollowersjob">{item.job_titile}</h6>
                        <h4 className="gName fw-500">{item.job_company}</h4>
                         <p>{item.employer_name}</p> 
                      </div>
                      <div
                        className="unfollow-btn1"
                        style={{ textAlign: "right" }}
                      >
                       <a href='/Signup' > <div className="Apply">Apply</div></a>
                      </div>
                    </div>
                    <p className="mb-2">
                    {item.Course_type}
                    {item.job_description}
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                    <div className="daysAndDetails">
                      <p>{item.created_at}</p>
                   
                      <p style={{ textAlign: "right" }}><a href={"JobDetails/"+ item.user_id + "/" + item.id} >Details </a>
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
  <div className='row'>
    <div className='col-md-12'>
    <Resources></Resources>
    </div>
  </div>
                   
                    </div>
        </div>
  )
}

export default Job;