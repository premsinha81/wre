import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
const JobEdit = () => {
  const {userId, id} = useParams();
  const navigate = useNavigate();
  // const [jobData, setJobData] = useState({
  //   job_titile: "",
  //   job_company: "",
  //   job_workplace_type: "",
  //   job_location: "",
  //   job_description: "",
  //   job_hear_about: "",
  //   job_type: ""
  // });
  const [job_titile, setJob_titile] = useState("");
  const [job_company, setJob_company] = useState("");
  const [job_workplace_type, setJob_workplace_type] = useState("");
  const [job_location, setJob_location] = useState("");
  const [job_description, setJob_description] = useState("");
  const [job_hear_about, setJob_hear_about] = useState("");
  const [job_type, setJob_type] = useState("");

  
  useEffect(() => {
    LoadJobData();
  },[])
  const LoadJobData = async () => {
    const result = await axios.get(`https://admin.allnuud.com/api/job_list_by_employer/${userId}/${id}`)
    setJob_titile(result.data.data[0].job_titile);
    setJob_company(result.data.data[0].job_company);
    setJob_workplace_type(result.data.data[0].job_workplace_type);
    setJob_location(result.data.data[0].job_location);
    setJob_description(result.data.data[0].job_description);
    setJob_hear_about(result.data.data[0].job_hear_about);
    setJob_type(result.data.data[0].job_type);
  }

  const handleSubmit = async (e) => {
    const res = await fetch(`https://admin.allnuud.com/api/update_job_post/${id}/${userId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          job_titile, job_company, job_workplace_type, job_location, job_description, job_hear_about, job_type 
        })
    })
    const data = await res.json();
    console.log(data);
    if (data.status === "Success") {
        window.alert(data.messege);
        navigate("/dashboard");

    } else {
        window.alert("Something went wrong please try again!");
        console.log("Something went wrong please try again!");

    }
}
  
  return (
    <div>


      <div><div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {/* Vertical Navbar */}
        <div className='row'>
          <div className='col-md-2'>
            <div className="collapse1 navbar-collapse1" id="sidebarCollapse1">
              {/* Navigation */}
              <ul className="navbar-nav1">
                <li className="nav-item1 ">
                  <a className="nav-link1" href="#">
                    <i className="bi bi-house" /> Dashboard
                  </a>
                </li>
                <li className="nav-item1 ">
                  <a className="nav-link" href="#">
                    <i className="bi bi-bar-chart" /> Analitycs
                  </a>
                </li>
                <li className="nav-item1 ">
                  <a className="nav-link" href="#">
                    <i className="bi bi-chat" /> Messages
                    <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                      6
                    </span>
                  </a>
                </li>

                <li className="nav-item1 ">
                  <a className="nav-link" href="#">
                    <i className="bi bi-people" /> Users
                  </a>
                </li>
                <li className="nav-item1 ">
                  <a className="nav-link" href="#">
                    <i className="bi bi-people" /> Employer
                  </a>
                </li>
                <li className="nav-item1 ">
                  <a className="nav-link" href="#">
                    <i className="bi bi-person-square" /> Account
                  </a>
                </li>
                <li className="nav-item1 ">
                  <a className="nav-link" href="#">
                    <i className="bi bi-box-arrow-left" /> Logout
                  </a>
                </li>

              </ul>
              {/* Divider */}

              {/* Navigation */}

              {/* Push content down */}
              <div className="mt-auto" />
              {/* User (md) */}

            </div>
          </div>
          <div className='col-md-10'>
            <div className=" flex-grow-1 ">
              {/* Header */}

              {/* Main */}
              <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                  {/* Card stats */}

                  {/* <DataShow></DataShow> */}
                  <div className="container ">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="jobSection">
                          <div className="programTitlejob ">
                            <div className="row">
                              <div className="col-md-7">
                                <h1 className="htext">Edit Job</h1>
                              </div>
                              <div className="col-md-5">
                                <p className="ptext">2 of 2 : Receive qualified applicants</p>
                              </div>
                            </div>
                          </div>
                          <div className="postContent jobcontent">
                            <div className="jobTitle">
                              <h1>Applicant collection</h1>
                            </div>
                            <div className="container">
                              <form action="#">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Job Title</label>
                                      <input
                                        className="form-control jobinpute"
                                        type="text"
                                        name=""
                                        placeholder="Job Title"
                                        value={job_titile}
                                        onChange={(e) => setJob_titile(e.target.value)}
                                      />

                                    </div>
                                    <div className="form-group">
                                      <label>Job Workplace Type</label>
                                      <input
                                        className="form-control jobinpute"
                                        type="text"
                                        name=""
                                        placeholder="Job Workplace Type"
                                        value={job_workplace_type}
                                        onChange={(e) => setJob_workplace_type(e.target.value)}
                                      />

                                    </div>
                                    <div className="form-group">
                                      <label>Job Location</label>
                                      <input
                                        className="form-control jobinpute"
                                        type="text"
                                        name=""
                                        placeholder="Job Location"
                                        value={job_location}
                                        onChange={(e) => setJob_location(e.target.value)}
                                      />

                                    </div>
                                    <div className="form-group">
                                      <label>Job Type</label>
                                      <input
                                        className="form-control jobinpute"
                                        type="text"
                                        name=""
                                        placeholder="Job Type"
                                        value={job_type}
                                        onChange={(e) => setJob_type(e.target.value)}
                                      />

                                    </div>
                                    <div className="jobTitle">
                                      <h1> Screening questions</h1>
                                      <p>
                                        We recommend adding 3 or more questions. Applicants must
                                        answer each question.
                                      </p>
                                    </div>
                                    <div className="row">
                                      <label>
                                        How many years of work experience do you have with
                                        [Skill]?
                                      </label>
                                      <div className="col-md-7">
                                        <div className="form-group">
                                          <input
                                            className="form-control jobinpute"
                                            type="text"
                                            name=""
                                            placeholder="Skill*"
                                            // value={job_skill1}
                                            // onChange={(e) => onInputChange(e)}
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            className="form-control jobinpute"
                                            type="text"
                                            name=""
                                            placeholder="Skill*"
                                            // value={job_skill2}
                                            // onChange={(e) => setJob_skill2(e.target.value)}
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            className="form-control jobinpute"
                                            type="text"
                                            name=""
                                            placeholder="Skill*"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            className="form-control jobinpute"
                                            type="text"
                                            name=""
                                            placeholder="Skill*"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-5">
                                        <div className="form-group">
                                          <select
                                            name="programs"
                                            id=""
                                            className="form-control jobinpute dropdown"
                                          >
                                            <option value="">Ideal answer (minimum):</option>
                                            <option value="">Program 2</option>
                                            <option value="">Program 3</option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <select
                                            name="programs"
                                            id=""
                                            className="form-control jobinpute dropdown"
                                          >
                                            <option value="">Ideal answer (minimum):</option>
                                            <option value="">Program 2</option>
                                            <option value="">Program 3</option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <select
                                            name="programs"
                                            id=""
                                            className="form-control jobinpute dropdown"
                                          >
                                            <option value="">By email</option>
                                            <option value="">Program 2</option>
                                            <option value="">Program 3</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div>
                                      <label>Job Company</label>
                                      <div className="form-group">
                                        <input
                                          className="form-control jobinpute"
                                          type="text"
                                          name=""
                                          placeholder="Job Company"
                                          value={job_company}
                                          onChange={(e) => setJob_company(e.target.value)}
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <label>Job Description</label>
                                      <div className="form-group">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                          value={job_description}
                                          onChange={(e) => setJob_description(e.target.value)}
                                        ></textarea>

                                      </div>
                                    </div>
                                    <div>
                                      <label>Job Hear About</label>
                                      <div className="form-group">
                                        <input
                                          className="form-control jobinpute"
                                          type="text"
                                          name=""
                                          placeholder="Email Or Mobile"
                                          value={job_hear_about}
                                          onChange={(e) => setJob_hear_about(e.target.value)}
                                        />
                                      </div>
                                    </div>
                                    <div className="space30" />
                                    <div className="space30" />
                                    <div className="space30" />
                                    <div className="form-group ">
                                      <label>Add screening questions</label>
                                    </div>
                                    <div className="form-group">
                                      <input
                                        className="form-control jobinpute"
                                        type="text"
                                        name=""
                                        placeholder="Screening question"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <input
                                        className="form-control jobinpute"
                                        type="text"
                                        name=""
                                        placeholder="Ideal answer"
                                      />
                                    </div>
                                    <label>Screening Questions Categories</label>
                                    <p>Screening Questions Categories</p>
                                    <div className="trendingButton1">
                                      <button>Background Check</button>
                                      <button>Driver's License</button>
                                      <button>Drug Test</button>
                                      <button>Education</button>
                                      <button>Education</button>
                                    </div>
                                    <div className="trendingButton1">
                                      <button>Hybrid Work</button>
                                      <button>Industry Experience</button>
                                      <button>Language</button>
                                      <button>Location</button>
                                      <button>Urgent Hiring</button>
                                    </div>
                                    <div className="trendingButton1">
                                      <button>VISA Status</button>
                                      <button>Work Authorization</button>
                                      <button className="trendingBG1">+ Custom Question</button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                              <div className="space30" />
                              <div className="jobinpute ">
                                <div className="row ">
                                  <div className="col-md-12 ">
                                    <div className="jobcontent">
                                      <i className="fa fa-map-marker"> </i>
                                      <div className="jobcontent11">
                                        <label> Why use screening questions? </label>
                                        <p>
                                          {" "}
                                          Your job post is targeted to people who match your
                                          requirements, and you’ll be notified of applicants who
                                          pass your screening questions.
                                        </p>
                                        <label> Will my network know that I’m hiring? </label>
                                        <p>
                                          {" "}
                                          When you post your job, we’ll notify your network that
                                          you’re hiring to help increase your job post’s
                                          visibility. Your network can choose to share your job
                                          post to help you reach qualified candidates.
                                        </p>
                                        <label>
                                          {" "}
                                          What information can applicants see about me and my
                                          job?{" "}
                                        </label>
                                        <p>
                                          When you post your job, you agree to share details
                                          about your job such as company size and location, as
                                          well as information around when you created your WRE
                                          profile.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="space30" />
                              <hr />
                              <div className="space30" />
                              <div className="viewShowProfile ">
                                <div className="postProfileLeft">

                                </div>
                                <div className="postProfileRight">
                                  <button className="jobbutton1" onClick={handleSubmit}>Submit</button>

                                </div>
                              </div>
                              <div className="space30" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}




export default JobEdit