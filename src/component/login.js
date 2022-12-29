import React, { useState } from "react"
import PropTyes from 'prop-types'

async function loginUser(credentials) {
    // return fetch('http://localhost:8080/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(credentials)
    // })
    //   .then(
    //     data => data.json()
    //     )

    return 'abc';
   }

export default function Login({ setToken }) {
    const [username, setUsername] = useState();
    const [password, SetPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

    return (
        <>
            <div className="container">
                <div className="row  pad">
                    <div className="col-md-12">
                        <main>
                            <div className="wrappers">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input className="form-control logininpute" type="text" placeholder="Email Or Mobile" onChange={e => setUsername(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control logininpute" type="password" placeholder="Password" onChange={e => SetPassword(e.target.value)} />
                                        <div className="forgetP"> <a href="#">Forgot password?</a></div>
                                    </div>
                                    <div className="col-md-12 section-h py-4">
                                        <div className="input-box">
                                            <button type="submit" className="searchBtn">Log In</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="col-md-12 section-h py-4">
                                    <article>
                                        <p className="h11">or</p>
                                    </article>
                                    <div className="input-box">
                                        <input type="submit" name="submitButton" className="searchBtn" id="submitButton2" value="Sign Up" />
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

Login.prototype = {
    setToken: PropTyes.func.isRequired
}
