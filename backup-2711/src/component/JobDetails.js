import React from 'react'
import LeftTabsExample from "./tabs"
import Resources from "./resources";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
const JobDetails = () => {
  const [jobs, setJobs] = useState([])
 //rout dekhao
  const {user_id, id} = useParams();
//   useEffect(() => {
//     axios.get(`https://admin.allnuud.com/api/job_list_by_employer/${user_id}/${id}`)
//     .then(function (data) {
//       console.log(data.data[0], 'Rinki')
//       if (data.status.status_code == 200) {
//         setJobs(data.data[0])
//           console.log(data.data[0])
//           // setJobs(data.data[0])
//       } else {
//         setJobs('')
//       }
//         })
// }, [])
const fetchData = () => {
  return fetch(`https://admin.allnuud.com/api/job_list_by_employer/${user_id}/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if(data.status.status_code == '200') {
            setJobs(data.data[0])
          }else{
            setJobs('')
          }
        });
}
console.log(jobs)
useEffect(() => {
  fetchData();
},[])
  return (
    <div>
      <section className="headerImage1">
    <div className="background ">
      <div className="container">
        <div className="row  ">
          <div className="col-md-8 section-h">
            <div className="bannerHeading">
              <br></br>
              <h1>Job Details</h1>
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
    <div className="jobList">
                      <div className="jobPostion" >
                        <h6 className="groupFollowersjob">{jobs.job_titile}</h6>
                        <h4 className="gName fw-500">{jobs.job_company}</h4>
                         <p>{jobs.employer_name}</p> 
                      </div>
                      <div
                        className="unfollow-btn1"
                        style={{ textAlign: "right" }}
                      >
                       <a href='/Signup' > <div className="Apply">Apply</div></a>
                      </div>
                    </div>
      {/* Programs Section End*/}
    </div>
    
  </div>

<div className="container">
<div className="programsSection mt0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 test-design">
                        <h3 className='text-black' >{jobs.job_titile}</h3>
                           
                                    
                            <p className='m25' dangerouslySetInnerHTML={{__html:jobs.job_description}}>
                                 
                    </p>
                        </div>
                    </div>
                    <div className="programsSection py-4">
    <div className="container">
    <div className="jobList">
                      <div className="jobPostion" >
                        <h6 className="groupFollowersjob">About Company</h6>
                        
                         <p>{jobs.job_hear_about}</p> 
                      </div>
                      <div
                        className="unfollow-btn1"
                        style={{ textAlign: "right" }}
                      >
                       <a href='/Signup' > <div className="Apply">Apply</div></a>
                      </div>
                    </div>
      {/* Programs Section End*/}
    </div>
    
  </div>
                </div>
                <div className="programsSection">
                    <div className="container">
                    <LeftTabsExample></LeftTabsExample>
                        <Resources></Resources>
                    </div>
                </div>
            </div>
        
</div>
</div>
 
  )
}

export default JobDetails;