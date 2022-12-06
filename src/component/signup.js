function Signup() {
    return (
        <>
        <section className="headerImagesign ">
                <div className="backgroundsign ">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">
                                <main>
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
                                </main></div>
                            
                            <div>
                                <span className="step active"></span>
                                <span className="step"></span>
                                <span className="step"></span>
                                <span className="step"></span>
                            </div>




                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Signup