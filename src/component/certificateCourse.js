import React from 'react';
import tradeMarketImg from '../img/group676.png';
import tradeCommunityImg from '../img/trade-community.jpg';
const certificateCourse = () => {
  return (
    <div>
       <div className='certificateCourse'>
            <div className='container textUpOverlay'>
                <small className='colorWhite'>WRE Courses</small>
                <h2 className='colorWhite'>Do an accredited Distance Certification Course</h2>
                <a className="btn btn-outline-primary" href="/">APPLY</a>
            </div>
            <div className='overlayBlack'></div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <h2 className='colorBlue'>Explore the Trades Market</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <div className='tags'>
                <ul>
                  <li><a href="#">Electrician</a></li><li><a href="#">Weldor</a></li><li><a href="#">HVAXC</a></li>
                  <li><a href="#">Construction</a></li><li><a href="#">Palumber</a></li><li><a href="#">CPC Construction</a></li>
                  <li><a href="#">Construction</a></li><li><a href="#">Palumber</a></li><li><a href="#">CPC Construction</a></li>
                  <li><a href="#">Construction</a></li><li><a href="#">Palumber</a></li><li><a href="#">CPC Construction</a></li>
                  <li><a href="#">Construction</a></li><li><a href="#">Palumber</a></li><li><a href="#">CPC Construction</a></li>
                </ul>
              </div>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <a href="#" className='btn btn-primary'>GET STARTED</a>
            </div>
            <div className='col-lg-5'>
              <img src={tradeMarketImg} className='img-fluid' />
            </div>
          </div>
        </div>
        <div className='certificateCourse careerPath'>
            <div className='container textUpOverlay'>
                <small className='colorWhite'>Connect with every Trade Community in the World</small>
                <h2 className='colorWhite'>Check out the best career paths</h2>
                <a className="btn btn-outline-primary" href="/">EXPLORE</a>
            </div>
            <div className='overlayBlack'></div>
        </div>
        <div className='container tradeCommunity'>
          <div className='row'>
            <div className='col-lg-6 p5'>
              <h2 className='colorBlue'>Connect with every <br />Trade Community in<br />the World</h2>
              <small className='p15'>Connect For the absolute Career Impact</small>
              <div className='clearfix'></div>
              <a href="#" className='btn btn-primary m5'>GET STARTED</a>
            </div>
            <div className='col-lg-6'>
              <img src={tradeCommunityImg} className='img-fluid center-block' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default certificateCourse;