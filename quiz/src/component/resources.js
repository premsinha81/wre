import React from 'react';
import './resources.css';
import Slider from 'react-slick';
import Img1 from '../img/section1.jpg';
import Img2 from '../img/section2.jpg';
import Img3 from '../img/section3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='banneerSection'>
      <h4 className=" related">Related Top Resources</h4>
      <Slider {...settings}>
        <div>
          <img className="img-fluid w-100" src={Img1} />
          <div className="border-top related-p">
            <span> June 14 2022</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
          </div>
        </div>
        <div>
          <img className="img-fluid w-100" src={Img2} />
          <div className="border-top related-p">
            <span> June 14 2022</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
          </div>
        </div>
        <div>
          <img className="img-fluid w-100" src={Img3} />
          <div className="border-top related-p">
            <span> June 14 2022</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
          </div>
        </div>
        <div>
          <img className="img-fluid w-100" src={Img2} />
          <div className="border-top related-p">
            <span> June 14 2022</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
          </div>
        </div>
      </Slider>



    </section>
  )
}
