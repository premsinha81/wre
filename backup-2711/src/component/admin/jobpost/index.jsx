import React from 'react'
import Jobpostform from '../../Jobpostform';
const jobpost = () => {
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
              <a className="nav-link1" href="admin/dashboard/">
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
          <Jobpostform></Jobpostform>

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


   

export default jobpost