import React from 'react'
import DataShow from '../showdata'
const Dashboard = () => {
  return (
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
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="container-fluid">
          <div className="mb-npx">
            <div className="row align-items-center">
              <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                {/* Title */}
                <h1 className="h2 mb-0 ls-tight">Dashboard </h1>
              </div>
              {/* Actions */}
              <div className="col-sm-6 col-12 text-sm-end">
                <div className="mx-n1">
                  <a
                    href="#"
                    className="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                  >
                    <span className=" pe-2">
                      <i className="bi bi-pencil" />
                    </span>
                    <span>Edit</span>
                  </a>
                  <a
                    href="#"
                    className="btn d-inline-flex btn-sm btn-primary mx-1"
                  >
                    <span className=" pe-2">
                      <i className="bi bi-plus" />
                    </span>
                    <span>Create</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Nav */}
      <br></br>
          </div>
        </div>
      </header>
      {/* Main */}
      <main className="py-6 bg-surface-secondary">
        <div className="container-fluid">
          {/* Card stats */}
          <div className="row g-6 mb-6">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card shadow1border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                       Totale Employer
                      </span>
                      <span className="h3 font-bold mb-0">20000</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                      <i className="bi bi-people" />
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card shadow1border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        Total User
                      </span>
                      <span className="h3 font-bold mb-0">1300</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                        <i className="bi bi-people" />
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card shadow1border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                       New Employer
                      </span>
                      <span className="h3 font-bold mb-0">300</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                        <i className="bi bi-clock-history" />
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card shadow1border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                       New User
                      </span>
                      <span className="h3 font-bold mb-0">300</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                      <i className="bi bi-people" />
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <DataShow></DataShow>

        </div>
      </main>
    </div>
    </div>
    </div>
  </div>
  
  </div>
  )
}

export default Dashboard