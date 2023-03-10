import React from 'react'

import { quiz } from './quiz';
const pathfinder = () => {
  
  return (
    <div>
     <section className="headerImagecoun headerImagecoun1">
    <div className="backgroundcoun ">
      <div className="container">
        <div className="row  ">
          <div className="col-md-12 section-h">
            <div className="bannerHeadingcoun">
              <center>
                <h1>WRE Pathfinder</h1>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Pathfinder Quiz Start */}
  <div className="pathFinder">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="quizTitle">Pathfinder Quiz</h1>
        </div>
        <div className="col-lg-12">
          <div className="pathFinderQuizBody">
            <div className="quizHeader" />
            <main>
              <article>
                {/* partial:index.partial.html */}
                <div className="container d-flex justify-content-center pt-2"></div>
                <div className="col-12 p-3 collapse" id="collapseExample">
                  <div className="card">
                    <div className="card-header font-weight-bold">
                      Available features
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>
                          Multi step form using Bootstrap 5, Jquery and CSS
                        </li>
                        <li>
                          Automatically percentage calculation of the progress
                          bar
                        </li>
                        <li>
                          <b>Step 1:</b> Add new user / Search existing user
                        </li>
                        <ul>
                          <li>Option "Add new user"</li>
                          <ul>
                            <li>Abilty to click on Next button</li>
                          </ul>
                          <li>Option Search existing user</li>
                          <ul>
                            <li>Display input field, which is searchable</li>
                            <li>
                              Next button is disabled until a available option
                              is selected from the searchlist.
                            </li>
                            <li>
                              Next button will be deactivated when the selected
                              value is being altered.
                            </li>
                            <li>
                              When a user is selected the step 2 form will be
                              filled with all available data.
                            </li>
                          </ul>
                        </ul>
                        <li>
                          <b>Step 2:</b> User information
                        </li>
                        <ul>
                          <li>
                            Input field "first name" and "last name" are
                            required to advance to step 3.
                          </li>
                          <li>
                            When first and/or last name is empty an invalid
                            warning will be displayed.
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="container d-flex justify-content-center"
                  style={{ minWidth: "720px!important" }}
                >
                  <div className="col-11 col-offset-2">
                    <div className="card mt-3">
                      <div className="card-header font-weight-bold">
                        {" "}
                        <div className="progress" style={{ height: 30 }}>
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            style={{ fontWeight: "bold", fontSize: 15 }}
                            role="progressbar"
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="card-body p-4 step">
                        <div className="container pad">
                          <div className="col-md-12">
                            <section className=" mt-3">
                              <h5>
                                1. What are you looking to gain from PTTI?
                              </h5>
                              <ul className="prorfolio">
                                <li>
                                  <label>
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                      defaultValue=""
                                    />
                                    <span className="" />
                                    <span className="">Portfolio building</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                      defaultValue=""
                                    />
                                    <span className="" />
                                    <span className="">A steady career</span>
                                  </label>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </div>
                      </div>
                      <div
                        id="userinfo"
                        className="card-body p-4 step"
                        style={{ display: "none" }}
                      >
                        <div className="container pad">
                          <div className="col-md-12">
                            <section className=" mt-3">
                              <h5>
                                1. What are you looking to gain from PTTI?
                              </h5>
                              <ul className="prorfolio">
                                <li>
                                  <label>
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                      defaultValue=""
                                    />
                                    <span className="" />
                                    <span className="">Portfolio building</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                      defaultValue=""
                                    />
                                    <span className="" />
                                    <span className="">A steady career</span>
                                  </label>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body p-5 step"
                        style={{ display: "none" }}
                      >
                        {" "}
                        <div className="container pad">
                          <div className="col-md-12">
                            <section className=" mt-3">
                              <h5>
                                1. What are you looking to gain from PTTI?
                              </h5>
                              <ul className="prorfolio">
                                <li>
                                  <label>
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                      defaultValue=""
                                    />
                                    <span className="" />
                                    <span className="">Portfolio building</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                      defaultValue=""
                                    />
                                    <span className="" />
                                    <span className="">A steady career</span>
                                  </label>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body p-5 step"
                        style={{ display: "none" }}
                      >
                        <div className="text-center">
                          <h5 className="card-title font-weight-bold pb-2">
                            User information
                          </h5>
                        </div>
                        <div className="form-group row">
                          <div className="col-2" />
                          <div className="col-4">
                            <label htmlFor="fname">
                              First Name<b style={{ color: "#dc3545" }}>*</b>
                            </label>
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="fname"
                              required=""
                            />
                            <div className="invalid-feedback">
                              This field is required
                            </div>
                          </div>
                          <div className="col-4">
                            <label htmlFor="lname">
                              Last Name<b style={{ color: "#dc3545" }}>*</b>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="lname"
                              required=""
                            />
                            <div className="invalid-feedback">
                              This field is required
                            </div>
                          </div>
                        </div>
                        <div className="form-group row pt-2">
                          <label
                            htmlFor="team"
                            className="col-2 text-end control-label col-form-label"
                          >
                            Email Id
                          </label>
                          <div className="col-8">
                            <input
                              type="email"
                              className="form-control"
                              id="team"
                            />
                          </div>
                        </div>
                        <div className="form-group row pt-2">
                          <label
                            htmlFor="address"
                            className="col-2 text-end control-label col-form-label"
                          >
                            Phone
                          </label>
                          <div className="col-8">
                            <input
                              type="Phone"
                              className="form-control"
                              id="address"
                            />
                          </div>
                        </div>
                        <div className="form-group row pt-2">
                          <label
                            htmlFor="tel"
                            className="col-2 text-end control-label col-form-label"
                          >
                            Address
                          </label>
                          <div className="col-8">
                            <input
                              type="text"
                              className="form-control"
                              id="tel"
                            />
                          </div>
                        </div>
                        <div className="text-center text-muted">
                          <b style={{ color: "#dc3545" }}>*</b> required fields
                        </div>
                      </div>
                      <div
                        className="card-body p-5 step"
                        style={{ display: "none" }}
                      >
                        {" "}
                        <div className="container pad">
                          <div className="col-md-12">
                            <section className=" mt-3">
                              <h5>
                                1. What are you looking to gain from PTTI?
                              </h5>
                              <ul className="prorfolio">
                                <li>
                                  <label>
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                      defaultValue=""
                                    />
                                    <span className="" />
                                    <span className="">Portfolio building</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                      defaultValue=""
                                    />
                                    <span className="" />
                                    <span className="">A steady career</span>
                                  </label>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <button
                          type="submit"
                          className="postButton next float-end"
                        >
                          <i className="fa fa-paper-plane postSendBtn" />
                          <span className="postSendText">Next</span>
                        </button>
                        <button
                          type="submit"
                          className="postButton back "
                          style={{ display: "none" }}
                        >
                          <i className="fa fa-paper-plane postSendBtn" />
                          <span className="postSendText">Previous</span>
                        </button>
                        <p>
                          <span />
                          <span>Or</span>
                          <span />
                        </p>
                        <button
                          className="action submit btn btn-sm btn-outline-success float-end"
                          style={{ display: "none" }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* partial */}
              </article>
            </main>
          </div>
        </div>
      </div>
      {/* Pathfinder Quiz End */}
    </div>
  </div>
  
      </div>
      
  )
}

export default pathfinder