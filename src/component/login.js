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
            localStorage.setItem('token',data.token);
            navigate("/");

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
                                        <div className="forgetP"> <small><a href="#">Forgot password?</a></small></div>
                                    </div>
                                    <div className="col-md-12 section-h py-4">
                                        <div className="input-box">
                                            <button type="submit" className="submitButton" onClick={handleSubmit} >Log In</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 section-h py-4">
                                    <div className="orPosition">
                                        <p className="h11">OR</p>
                                    </div>
                                    <div className="input-box">
                                        <small>New User</small> <input type="submit" name="submitButton"  className="btn btn-outline-primary" id="submitButton2" value="Sign Up" />
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