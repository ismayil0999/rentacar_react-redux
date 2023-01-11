import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
export default function Slide() {
  const theme=useSelector((state)=>state.cars.light)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        center:true,
        autoplay: true,
        autoplaySpeed: 2000
      };
  return (
    <div className='homeslide'>
      <Slider {...settings} className="slider" style={{background:theme===true ? "black" : "rgb(243, 243, 243)"}}>
          <div>
           <img src="./images/car6.png" alt=""></img>
          </div>
          <div>
           <img src="./images/car5.png" alt=""></img>
          </div>
          <div>
           <img src="./images/car7.png" alt=""></img>
          </div>
        </Slider>
        <div className='banner'>Lorem</div>
    </div>
  );
}
