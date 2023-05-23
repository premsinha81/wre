import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        const email_phone = email;
        const res = await fetch("https://admin.allnuud.com/api/get/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email_phone, password
            })
        })
        const data = await res.json();
        console.log(data);
        if (data.token) {
            // window.alert("Login Succesfully");
            // console.log("Login Succesfully");
            localStorage.setItem('usr_name',data.user.name);
            localStorage.setItem('usr_id',data.user.id);
            localStorage.setItem('usr_email',data.user.email);
            localStorage.setItem('usr_email',data.user.role);
            localStorage.setItem('token',data.token);
            navigate("/Jobpostform");

        } else if (data.status === "failed") {
            window.alert("Username and Password Incorrect");
            console.log("Username and Password Incorrect");
         
        } else {
            window.alert("Something went wrong please try again!");
            console.log("Something went wrong please try again!");

        }
    }
     
    return (
        <>
            <div className="container">
                <div className="row  pad">
                    <div className="col-md-12">
                        <main>
                            <div className="wrappers">
                                <div >
                                    <div className="form-group">
                                        <input className="form-control logininpute" type="text" placeholder="Email Or Mobile" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control logininpute" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                        <div className="forgetP"> <a href="#">Forgot password?</a></div>
                                    </div>
                                    <div className="col-md-12 section-h py-4">
                                        <div className="input-box">
                                            <button type="submit" className="submitButton" onClick={handleSubmit} >Log In</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 section-h py-4">
                                    <article>
                                        <p className="h11">or</p>
                                    </article>
                                    <div className="input-box">
                                      <a href="signup">  <input type="submit" name="submitButton"  className="searchBtn" id="submitButton2" value="Sign Up" /></a >
                                    </div>
                                    <div className="countryFlag">
                                        <img src="https://cdn.britannica.com/73/4473-050-0D875725/Grand-Union-Flag-January-1-1776.jpg" alt="" />
                                        <i className="fa fa-angle-down"></i>
                                    </div>
                                </div>

                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}