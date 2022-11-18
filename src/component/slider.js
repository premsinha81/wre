import React from 'react'
import Slidimg1 from '../Image/section1.jpg'
import Slidimg2 from '../Image/section2.jpg'
import Slidimg3 from '../Image/section3.jpg'

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



// Import Swiper styles


const Slider = () => {
  return (
    <div>
      
   
      <Swiper 
  
      
      pagination={{ clickable: true }}

   
    
   
      // install Swiper modules
      
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="bg-color1 swiper-container" >
        <div className="container">
        <h4 class=" related1">Related Top Resources</h4>
          <div className="row">
            <div className="col-md-4 d-flex text-center text-md-left d-md-flex justify-content-md-center flex-md-column ">
            <img className="img-fluid" src={Slidimg1}   alt="" />
            <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
            <div className="col-md-4 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
            <img className="img-fluid" src={Slidimg3}   alt="" />
            <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
            <div className="col-md-4 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
            <img className="img-fluid" src={Slidimg2}   alt="" />
            <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-color2">
        <div className="container">
          <div className="row">
          <div className="col-md-4 d-flex text-center text-md-left d-md-flex justify-content-md-center flex-md-column ">
            <img className="img-fluid" src={Slidimg1}   alt="" />
            <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
            <div className="col-md-4 d-flex text-center text-md-left d-md-flex justify-content-md-center flex-md-column ">
           <img className="img-fluid" src={Slidimg2}   alt="" />
            <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
            <div className="col-md-4 d-flex text-center text-md-left d-md-flex justify-content-md-center flex-md-column ">
             <img className="img-fluid" src={Slidimg2}   alt="" />
            <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-color3">
        <div className="container">
          <div className="row">
          <div className="col-md-4 d-flex text-center text-md-left d-md-flex justify-content-md-center flex-md-column ">
              <img className="img-fluid" src={Slidimg3}   alt="" />
              <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
            <div className="col-md-4 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
            <img className="img-fluid" src={Slidimg2}   alt="" />
            <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
            <div className="col-md-4 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
            <img className="img-fluid" src={Slidimg2}   alt="" />
            <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-color2">
        <div className="container">
          <div className="row">
          <div className="col-md-4 d-flex text-center text-md-left d-md-flex justify-content-md-center flex-md-column ">
            <img className="img-fluid" src={Slidimg1}   alt="" />
            <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
            <div className="col-md-4 d-flex text-center text-md-left d-md-flex justify-content-md-center flex-md-column ">
           <img className="img-fluid" src={Slidimg2}   alt="" />
            <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
            <div className="col-md-4 d-flex text-center text-md-left d-md-flex justify-content-md-center flex-md-column ">
             <img className="img-fluid" src={Slidimg2}   alt="" />
            <div class="border-top related-p">
                              <span> june 14 2022</span>
                              <p>WRE and FORD partner up to raise awareness of Auto Tech Manufacturing in N. Jersey</p>
                           </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
 
</div>
  )
}

export default Slider