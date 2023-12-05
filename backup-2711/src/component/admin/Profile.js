import DataShow from '../showdata'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [user, setUser] = useState({
        name: "", email: "", mob: "", password: "", role:"user"
    })
    let name, value
    const handleInputChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = async (e) => {
        const { name, email, mob, password, role } = user;
        setPopupVisible(true);

        const res = await fetch("https://admin.allnuud.com/api/get/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name, email, mob, password,role
            })
            
            
        })
        const data = await res.json();
        console.log(data);
        if (data.status === "Succes") {
            window.alert("Registration Successfully");
            console.log("Registration Successfully");
            navigate("/login");

        } else if (data.status === "Failed") {
            window.alert("User Already Exist");
            console.log("User Already Exist");

        } else {
            window.alert("Something went wrong please try again!");
            console.log("Something went wrong please try again!");

        }
    }
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
                <h1 className="h2 mb-0 ls-tight">Profile </h1>
              </div>
              {/* Actions */}
              <div className="col-sm-6 col-12 text-sm-end">
                <div className="mx-n1">
                  
                  <a
                    href="#"
                    className="btn d-inline-flex btn-sm btn-primary mx-1"
                  >
                   
                    <span>User Profile</span>
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
             
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
             
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
             
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              
            </div>
          </div>
        
          <main>
                                    <div className="wrappers">
                                        <div>
                                        <input
                          type="hidden"
                          className="form-control placeholder-style" 
                          name="role"
                          value={user.role}
                          onChange={handleInputChange}
                           
                          />
                                            <div className="form-group">
                                                <input className="form-control logininpute" type="text" name="name" value={user.name} onChange={handleInputChange} id="Name" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control logininpute" type="text" name="email" value={user.email} onChange={handleInputChange} id="Email" placeholder="Email" />

                                            </div>
                                            <div className="form-group">
                                                <input className="form-control logininpute" type="password" name="password" value={user.password} onChange={handleInputChange} id="Password" placeholder="Password" />

                                            </div>
                                            <div className="form-group">
                                                <input className="form-control logininpute" type="text" name="mob" value={user.mob} onChange={handleInputChange} id="Mobile" placeholder="Mobile" />

                                            </div>
                                            <div className="form-group">
                                                <input className="form-control logininpute" type="file" id="myfile" name="myfile"  />
                                            </div>
                                            <div className="form-group">
                                            <center>

                                                <img src='http://localhost:3000/static/media/iconG.2339d6c37238be26094f951432b1ad61.svg' />
                                            </center>
                                            </div>
                                            <div className="col-md-12 section-h py-4">
                                                <div className="input-box">
                                                    <button type="submit" onClick={() => handleSubmit()} className="submitButton" >Update Profile </button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </main>

        </div>
      </main>
    </div>
    </div>
    </div>
  </div>
  
  </div>
  )
}

export default Profile;


