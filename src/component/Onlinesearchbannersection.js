import React from 'react'

const Onlinesearchbannersection = () => {
  return (
    <div>


<section className="headerImage1">
  <div className="background ">
    <div className="container">
      <div className="row  ">
        <div className="col-md-8 section-h">
          <div className="bannerHeading">
            <h1>Online Courses</h1>
          </div>
        </div>
        <div className="col-md-4">
          <main>
            <div className="wrappers">
              <h2>Search Programs</h2>
              <form action="#">
                <div className="form-group">
                  <select name="programs" id className="form-control selectOption">
                    <option value>- Select Program -</option>
                    <option value>Program 1</option>
                    <option value>Program 2</option>
                    <option value>Program 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <select name="programs" id className="form-control selectOption">
                    <option value>- Select Degree -</option>
                    <option value>Degree 1</option>
                    <option value>Degree 2</option>
                    <option value>Degree 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <select name="programs" id className="form-control selectOption">
                    <option value>- Select Duration -</option>
                    <option value>Duration 1</option>
                    <option value>Duration 2</option>
                    <option value>Duration 3</option>
                  </select>
                </div>
                <div className="input-box button">
                  <input type="submit" name="submitButton" className="searchBtn" id="submitButton" defaultValue="Search Now" />
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Onlinesearchbannersection