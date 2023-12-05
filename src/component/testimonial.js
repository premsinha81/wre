import React from 'react'
// Import Swiper styles

// import Swiper core and required modules
import { Navigation, Autoplay, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

const testimonial = () => {





  return (
    <div>
        <div className="container">   
    <Swiper
    initialSlide="1"
   
    
    className="mySwiper"
    spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation,A11y]}
       
      
         slidesPerView={3}   
 
   
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       
      <SwiperSlide>
      <div className="container">
      <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="container">
      <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  </div>
      </SwiperSlide>
      <SwiperSlide> 
      <div className="container">
        <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  </div>
                  </SwiperSlide>
      <SwiperSlide>
      <div className="container">
         <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                </div>
                  </SwiperSlide>

      <SwiperSlide> 
      <div className="container">
        <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide> 
      <div className="container">
        <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide> 
      <div className="container">
        <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide> 
      <div className="container">
        <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  </div>
                  </SwiperSlide>

    </Swiper>
    </div>

  
    </div>
  )
}

export default testimonial;