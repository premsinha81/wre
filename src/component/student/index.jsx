import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './student.css';

const Index = () => {
 
    
        const [status, setStatus] = useState('');
        const [post, setPost] = useState([])
        
        // console.log(status);
        const getData = () => {
            return fetch("https://admin.allnuud.com/api/job_application")
                  .then((response) => response.json())
                  .then((data) => setPost(data.data[0]));
          }
        
        useEffect(() => {
            getData();
          },[])
    console.log("ppp",post);
        // const handleDelete = (id, user_id) => {
        //     const user =  id+ " " + user_id;
        //     fetch('https://admin.allnuud.com/api/delete_job_post/'+id+'/'+user_id)
        //         .then((res) => res.json())
        //         .then((json) => setStatus(json.data))
        //         .catch((e) => console.log(e))
            
        // }
  return (
    <div>
   
   <div className="main">
  <div className="left">
    <ul>
      <li className="menu-heading">Dashboards</li>
      
     
     
    
     
      <li className="menu-heading">Pages</li>
      <li className="active">
        <a data-toggle="tab" href="#user-profile">
          <i className="fa fa-street-view fa-lg" /> User Profile
        </a>
      </li>
      <li>
        <a data-toggle="tab" href="#candidates">
          <i className="fa fa-users fa-lg" /> Candidates
        </a>
      </li>
     
     
      
    </ul>
  </div>
  <div className="right">
    <div className="tab-content">
      {/* Overview */}
      <div id="overview" className="tab-pane fade">
        <div className="header">
          <h4>Account</h4>
          <ul className="pull-right">
            <li>
              <div className="btn-group dropleft dropdown-user">
                <i
                  className="fa fa-user-o dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></i>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <img
                          src="https://bit.ly/2KkoqCO"
                          className="img-circle img-responvie"
                        />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <img
                          src="https://bit.ly/2MH8Wue"
                          className="img-circle img-responvie"
                        />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <img
                          src="https://bit.ly/2Km1kf6"
                          className="img-circle img-responvie"
                        />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="btn-group dropleft dropdown-alert">
                <i
                  className="fa fa-bell-o dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></i>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <i className="fa fa-check-circle fa-2x" />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <i className="fa fa-calendar fa-2x" />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <i className="fa fa-info-circle fa-2x" />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="btn-group dropleft dropdown-avatar">
                <img
                  src="https://bit.ly/2Km1kf6"
                  className="img-circle img-responvie"
                />
                <i
                  className="fa fa-angle-down dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Edit Profile</a>
                  </li>
                  <li>
                    <a href="#">View Activity</a>
                  </li>
                  <li>
                    <a href="#">Manage Roles</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="row graph-cards">
            <div className="col-sm-4">
              <div>
                <h4>
                  Next Payout <br />
                  <small>Activity from 4 Jan 2017 to 10 Jan 2017</small>
                </h4>
                <h2>
                  $2,190 <br />
                  <small>You’ve made $230 Today</small>
                </h2>
                <img
                  src="https://bit.ly/2YWQpwi"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div>
                <h4>
                  Total Earnings <br />
                  <small>In 15 Months</small>
                </h4>
                <h2>
                  $23,580 <br />
                  <small>Last Month you’ve made $2,980</small>
                </h2>
                <img
                  src="https://bit.ly/33iEQmJ"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div>
                <h4>
                  All Tasks Overview <br />
                  <small>Next 4 Weeks</small>
                </h4>
                {/* <h2>$2,190 <br><small>You’ve made $230 Today</small></h2> */}
                <img src="https://bit.ly/31zdsPL" alt="" />
              </div>
            </div>
          </div>
          <div className="row project-cards">
            <div className="col-sm-3">
              <div className="card">
                <img src="https://bit.ly/2OXtcKC" alt="" />
                <h5>
                  Magazine Images <br />{" "}
                  <small>Kinfolk | Last Update: 21 Dec 2016</small>
                </h5>
                <div className="row">
                  <div className="col-sm-6">
                    <h6>
                      4,870 USD <br />
                      <small>Budget / Salary</small>
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h6>
                      Early Dec 2017 <br />
                      <small className="text-red">10 Days Remaining</small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <img src="https://bit.ly/2Ku2zc1" alt="" />
                <h5>
                  Design Competition 2018 <br />{" "}
                  <small>Gourmet| Last Update: 29 Dec 2017</small>
                </h5>
                <div className="row">
                  <div className="col-sm-6">
                    <h6>
                      9,680 USD <br />
                      <small>Budget / Salary</small>
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h6>
                      Late January <br />
                      <small className="text-red">Deadline</small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <img src="https://bit.ly/2ySk1Ai" alt="" />
                <h5>
                  New Dashboard <br />{" "}
                  <small>Tapdaq | Last Update: 28 Nov 2017</small>
                </h5>
                <div className="row">
                  <div className="col-sm-6">
                    <h6>
                      4,870 USD <br />
                      <small>Budget / Salary</small>
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h6>
                      Early Dec 2017 <br />
                      <small className="text-red">10 Days Remaining</small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <img src="https://bit.ly/2MkaTNZ" alt="" />
                <h5>
                  Mobile App <br />{" "}
                  <small>Cofee &amp; Co. | Last Update: 1 Dec 2016</small>
                </h5>
                <div className="row">
                  <div className="col-sm-6">
                    <h6>
                      8,760 USD <br />
                      <small>Budget / Salary</small>
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h6>
                      Early Dec 2017 <br />
                      <small className="text-red">6 Days Remaining</small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row invoice-task">
            <div className="col-sm-6">
              <div className="invoice">
                <div className="table-responsive">
                  <h5>
                    Invoicing{" "}
                    <small className="pull-right">
                      <a href="#">View all invoices</a>
                    </small>
                  </h5>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>00450</td>
                        <td>Design Works</td>
                        <td>Carlson Limited</td>
                        <td>
                          <button className="btn btn-red btn-sm pull-right">
                            DELAYED
                          </button>
                        </td>
                        <td>$2,580</td>
                      </tr>
                      <tr>
                        <td>00569</td>
                        <td>New Illustrations</td>
                        <td>Twitter</td>
                        <td>
                          <button className="btn btn-warning btn-sm pull-right">
                            PENDING INVOICE
                          </button>
                        </td>
                        <td>$3,130</td>
                      </tr>
                      <tr>
                        <td>01875</td>
                        <td>UX Study</td>
                        <td>Re-Research</td>
                        <td>
                          <button className="btn btn-success btn-sm pull-right">
                            PAID TODAY
                          </button>
                        </td>
                        <td>$2,580</td>
                      </tr>
                      <tr>
                        <td>00369</td>
                        <td>Landing Page</td>
                        <td>Travelsimo</td>
                        <td>
                          <button className="btn btn-grayblue btn-sm pull-right">
                            PAID TODAY
                          </button>
                        </td>
                        <td>$3,130</td>
                      </tr>
                      <tr>
                        <td>00689</td>
                        <td>iOS App Design</td>
                        <td>Silingo</td>
                        <td>
                          <button className="btn btn-grayblue btn-sm pull-right">
                            PAID TODAY
                          </button>
                        </td>
                        <td>$3,130</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="tasks">
                <div className="table-responsive">
                  <h5>
                    Tasks{" "}
                    <small className="pull-right">
                      <a href="#">View all tasks</a>
                    </small>
                  </h5>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="checkbox" id="check">
                            <label>
                              <input type="checkbox" /> Create new prototype for
                              the landing page
                            </label>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-red btn-sm pull-right">
                            DUE TODAY
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> Add new Google Analytics
                              code to all main files
                            </label>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-grayblue btn-sm pull-right">
                            DUE IN 2 DAYS{" "}
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> Finish Dashboard UI Kit
                              update
                            </label>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-grayblue btn-sm pull-right">
                            DUE IN 3 DAYS{" "}
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> Update parallax scroll
                              on team page
                            </label>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-grayblue btn-sm pull-right">
                            DUE IN 5 DAYS{" "}
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> Finish Dashboard UI Kit
                              update
                            </label>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-grayblue btn-sm pull-right">
                            DUE IN 1 WEEK{" "}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div id="user-profile" className="tab-pane fade in active">
        <div className="header">
          <h4>Student Profile</h4>
          <ul className="pull-right">
            <li>
              <div className="btn-group dropleft dropdown-user">
                <i
                  className="fa fa-user-o dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></i>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <img
                          src="https://bit.ly/2KkoqCO"
                          className="img-circle img-responvie"
                        />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <img
                          src="https://bit.ly/2MH8Wue"
                          className="img-circle img-responvie"
                        />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <img
                          src="https://bit.ly/2Km1kf6"
                          className="img-circle img-responvie"
                        />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="btn-group dropleft dropdown-alert">
                <i
                  className="fa fa-bell-o dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></i>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <i className="fa fa-check-circle fa-2x" />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <i className="fa fa-calendar fa-2x" />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="alert-card">
                        <i className="fa fa-info-circle fa-2x" />
                        <p className="pull-right">
                          Someone mentioned you <br />
                          <small>
                            You have recieved a mention on twitter, check it
                            out!
                          </small>
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="btn-group dropleft dropdown-avatar">
                <img
                  src="https://bit.ly/2Km1kf6"
                  className="img-circle img-responvie"
                />
                <i
                  className="fa fa-angle-down dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Edit Profile</a>
                  </li>
                  <li>
                    <a href="#">View Activity</a>
                  </li>
                  <li>
                    <a href="#">Manage Roles</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card-7">
                {/* Nav tabs */}
               
                {/* Tab panes */}
                <div className="tab-content">
                  <div
                    role="tabpanel"
                    className="tab-pane active"
                    id="activity"
                  >
               
                  
                    <ul>
                      <small className="title">Details</small>
                      <li>
                        <h6>
                        
                          <br />
                          <div className="container table-responsive py-5">
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">DOB</th>
          <th scope="col">EMAIL</th>
          <th scope="col">MOBILE</th>
          <th scope="col">JOB ROLE</th>
          <th scope="col">EXP</th>
          <th scope="col">Address</th>
          <th scope="col">CITY</th>
          <th scope="col">PINCODE</th>
          <th scope="col">CV</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{post.id}</td>
          <td>{post.name}</td>
          <td>{post.dob}</td>
          <td>{post.email}</td>
          <td>{post.mobile}</td>
          <td>{post.job_role}</td>
          <td>{post.job_exp}</td>
          <td>{post.address}</td>
          <td>{post.city}</td>
          <td>{post.pincode}</td>
          <td><a target='_blank' href={`https://admin.allnuud.com/public/uploads/jobAplication/cv/${post.cv}`}>View CV</a></td> 
        </tr>
      </tbody>
    </table>
  </div>
  
                       
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="blockedusers">
                    <h4>Blocked users</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Et quidem modi atque at aliquid expedita nemo incidunt
                      exercitationem nihil sit. Laudantium suscipit id amet
                      saepe ratione, accusamus. Voluptatum in, nam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A voluptate nobis tenetur mollitia incidunt quod, est
                      veniam, earum nemo! Alias rerum saepe aut sapiente minus
                      sunt doloribus tempora corrupti in!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ea distinctio nostrum molestias assumenda, repudiandae
                      consequuntur quae pariatur aut incidunt placeat doloremque
                      doloribus! Recusandae nostrum dolore repudiandae libero
                      mollitia, rem eveniet.
                    </p>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="nda">
                    <h4>NDA</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Et quidem modi atque at aliquid expedita nemo incidunt
                      exercitationem nihil sit. Laudantium suscipit id amet
                      saepe ratione, accusamus. Voluptatum in, nam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A voluptate nobis tenetur mollitia incidunt quod, est
                      veniam, earum nemo! Alias rerum saepe aut sapiente minus
                      sunt doloribus tempora corrupti in!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ea distinctio nostrum molestias assumenda, repudiandae
                      consequuntur quae pariatur aut incidunt placeat doloremque
                      doloribus! Recusandae nostrum dolore repudiandae libero
                      mollitia, rem eveniet.
                    </p>
                  </div>
                  <div
                    role="tabpanel"
                    className="tab-pane"
                    id="customerinvoices"
                  >
                    <h4>Customer Invoices</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Et quidem modi atque at aliquid expedita nemo incidunt
                      exercitationem nihil sit. Laudantium suscipit id amet
                      saepe ratione, accusamus. Voluptatum in, nam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A voluptate nobis tenetur mollitia incidunt quod, est
                      veniam, earum nemo! Alias rerum saepe aut sapiente minus
                      sunt doloribus tempora corrupti in!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ea distinctio nostrum molestias assumenda, repudiandae
                      consequuntur quae pariatur aut incidunt placeat doloremque
                      doloribus! Recusandae nostrum dolore repudiandae libero
                      mollitia, rem eveniet.
                    </p>
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



    </div>
  )
}


export default Index