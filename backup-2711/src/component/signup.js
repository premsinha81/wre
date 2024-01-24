
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
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
        <>
            <section className="headerImagesign ">
                <div className="backgroundsign ">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">

                                {/* <main>
                                    <div className="wrappers SignUpForm">

                                        <form id="regForm" action="">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="formTitle">
                                                        <h6>Join WRE today for free.</h6>
                                                        <p>Get started by choosing your account type below</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab"> <div className="ss">
                                                <div className="row">
                                                <div className="col-md-12">
                                                    <div className="radioBoxRowsign">
                                                        <input type="radio" className="radioBtn" checked="" name="accountType" id="radioBtn1" />
                                                            <label for="radioBtn1">
                                                                <h6 className="accoTypeTitle">Student Account</h6>
                                                                <span className="accouDes">All in One Driver Commerce Services</span>
                                                                <ul className="accountTypeDetals">
                                                                    <li>Find Education &amp; Jobs</li>
                                                                    <li>Get Online Counselling</li>
                                                                    <li>Access to Community Forum</li>
                                                                    <li>Many more…</li>
                                                                </ul>
                                                            </label>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                                <br />
                                                <div className="ss">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="radioBoxRowsign">
                                                                <input type="radio" className="radioBtn" name="accountType" id="radioBtn1" />
                                                                    <label for="radioBtn1">
                                                                        <h6 className="accoTypeTitle">Business Account</h6>
                                                                        <span className="accouDes">Manage Education Services</span>
                                                                        <ul className="accountTypeDetals">
                                                                            <li>Create Jobs &amp; Courses•</li>
                                                                            <li>Create Digital Term Sheets</li>
                                                                            <li>Access to Students Information</li>
                                                                            <li>No set-up/maintenance fees</li>
                                                                        </ul>
                                                                    </label>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                          

                                            <center>
                                              <button type="button" className="btn text-white buttonsignUp sortBtn" id="nextBtn" onclick="nextPrev(1)">Next</button>
                                            </center>
                                        </form></div>
                                </main></div> */}

                                {/* <div>
                                <span className="step active"></span>
                                <span className="step"></span>
                                <span className="step"></span>
                                <span className="step"></span>
                            </div> */}


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
                                            <div className="col-md-12 section-h py-4">
                                                <div className="input-box">
                                                    <button type="submit" onClick={() => handleSubmit()} className="submitButton" >Sign Up</button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </main>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}


export default Signup