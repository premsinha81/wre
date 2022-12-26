function Login() {
    return (
        <>
            <div className="container">
                <div className="row  pad">
                    <div className="col-md-12">
                        <main>
                            <div className="wrappers">
                                <form action="#">
                                    <div className="form-group">
                                        <input className="form-control logininpute" type="text" name="" placeholder="Email Or Mobile" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control logininpute" type="password" name="" placeholder="Email Or Mobile" />
                                            <div className="forgetP"> <a href="#">Forgot password?</a></div>
                                    </div>
                                    <div className="col-md-12 section-h py-4">
                                        <div className="input-box">
                                            <input type="submit" name="submitButton" className="searchBtn" id="submitButton1" value="Log In" />
                                        </div>
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
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login