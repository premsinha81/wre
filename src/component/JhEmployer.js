import React from 'react';
import LeftTabsExample from "./tabs"
import Resources from "./resources";
import Imagesection2 from '../Image/Group 697.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';

const JhEmployer = () => {
  SwiperCore.use([Autoplay])
  return (
    <div>


      <div className="container">
        <div className="row pad2 ">

          <div className="col-md-6 sec">
            <h1 className="heding1">Explore the Trades Market</h1>
            <div className="">
              <p className="paragraph1 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </p>
              <div className="pad1">
                <h6 className="h6css">Skills in high demand</h6>
                <div className="trendingButton1">
                  <button>Electrician</button>
                  <button>Welder</button>
                  <button>Sterile Technician</button>
                  <button>HVAC</button>
                </div>
                <div className="trendingButton1">
                  <button>Construction</button>
                  <button>Plumber</button>
                  <button>CPS Technician</button>
                </div>
                <div className="trendingButton1">
                  <button>CPS Technician</button>
                  <button>HVAC</button>
                  <button>Welder</button>
                  <button>Electrician</button>
                </div>
              </div>
            </div>
            <p className="paragraph1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </p>
            <div className="btncss1">
              <a className="btn btn-square2 text-white me-2" href="">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <img width="100%" src={Imagesection2} />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h1 className="heding2">Post any Trade Job Requirement</h1>
        <p className="paragraph">Lorem Ipsum is simply dummy text of the printing</p>
        {/* Slider main container */}
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='tradeJobSlider'>
                <Swiper
                  // install Swiper modules
                  modules={[Pagination, EffectFade]}
                  effect="slide"
                  spaceBetween={6}
                  centeredSlides={true}
                  slidesPerView={3}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  // navigationcls
                  pagination={{ clickable: true }}
                  breakpoints={{
                    // when window width is >= 640px
                    320: {
                      slidesPerView: 1,
                    },
                    360: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 1,
                    },
                    1366: {
                      slidesPerView: 3,
                    },
                  }}
                  className='HeroBanner'
                >
                  <SwiperSlide>
                    <div className="content">
                      <div className="swiper-avatar">
                        <img className="img1 " src={Imagesection2} />
                      </div>
                      <p className="cite">Requirement</p>
                      <p className="para">
                        {" "}
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        posuere consectetur est at lobortis. Nullam id dolor id nibh
                        ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                        
                      </p>
                    
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <div className="swiper-avatar">
                        <img className="img1 " src={Imagesection2} />
                      </div>
                      <p className="cite">Requirement</p>
                      <p className="para">
                        {" "}
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        posuere consectetur est at lobortis. Nullam id dolor id nibh
                        ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                        
                      </p>
                     
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <div className="swiper-avatar">
                        <img className="img1 " src={Imagesection2} />
                      </div>
                      <p className="cite">Requirement</p>
                      <p className="para">
                        {" "}
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        posuere consectetur est at lobortis. Nullam id dolor id nibh
                        ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                        
                      </p>
                     
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <div className="swiper-avatar">
                        <img className="img1 " src={Imagesection2} />
                      </div>
                      <p className="cite">Requirement</p>
                      <p className="para">
                        {" "}
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        posuere consectetur est at lobortis. Nullam id dolor id nibh
                        ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                        
                      </p>
                     
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <div className="swiper-avatar">
                        <img className="img1 " src={Imagesection2} />
                      </div>
                      <p className="cite">Requirement</p>
                      <p className="para">
                        {" "}
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        posuere consectetur est at lobortis. Nullam id dolor id nibh
                        ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                        
                      </p>
                    
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
              </div>
              <div className='col-md-4'>
              <div className="btncss1">
              <a className="btn btn-square2 text-white me-2" href="">
              Post a Job
              </a>
            </div>
            </div>
            <div className='col-md-4'>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container">
              <LeftTabsExample></LeftTabsExample>
                    <Resources></Resources>
     
</div>
        
    </div>
  )
}

export default JhEmployer;