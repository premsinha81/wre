import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import loginBanner from "../../assets/images/login-banner.png";
import config from "config";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { alphaNumericPattern, emailrgx } from "../../assets/constant";
import Header from "../header";
import Footer from "../footer";
import { setcookie } from "../../../Helper/Cookie";
import { loginaction } from "../../../API/login";
import { setlocalstroage } from "../../../Helper/localstorage";

const LoginContainer = (props) => {
  const history = useHistory();

  const [phone, setphone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
   
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);
 
  const handleSubmit = async (e) => {
   loginaction(phone,password).then((data)=>{
    console.log(data,"rinkiii");
   if(data.token || data.user){
    alert(data.token)
    alert(data.user)
    setcookie('login',data.token)
    setlocalstroage('login',data.user)
    history.push("/doctor/doctor-dashboard");
   }
   })
   
    const res = await fetch("https://jeevan.studiomyraa.com/api/login_action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
      phone:email, password
      })
    })
    const data = await res.json();
    console.log(data,"datadli detail");
    console.log(data);
    if (data.role === "user") {
      window.alert("Login Succesfully");
      console.log("Login Succesfully");
     
      history.push("/patient/dashboard");

    } else if (data.user.role === "doctor") {
      
      window.alert("Login Succesfully");
      console.log("Login Succesfully");
     if(data.token){
      setcookie('login',data.token)
     }
     
      history.push("/doctor/doctor-dashboard");

    } else {
      window.alert("Something went wrong please try again!");
      console.log("Something went wrong please try again!");

    }
  }

  return (
    <>
      <Header {...props} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>JeevanHeal</span>
                      </h3>
                    </div>
                    <form>
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating"
                          value={phone} onChange={e => setphone(e.target.value)}
                        />

                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          value={password} onChange={e => setPassword(e.target.value)}
                        />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-end">
                        <Link to="/forgot-password" className="forgot-link">
                          Forgot Password ?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Login
                      </button>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <a href="#0" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1"></i>Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#0" className="btn btn-google w-100">
                            <i className="fab fa-google me-1"></i>Login
                          </a>
                        </div>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account?
                        <Link to="/register"> Register</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default LoginContainer;
