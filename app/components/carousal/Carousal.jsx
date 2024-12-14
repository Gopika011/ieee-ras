"use client"
import React from "react";
import Slider from "react-slick";
import Event from "./Event";

function Carousal() {
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings}>
        <Event/>
        <Event/>
        <Event/>
        <Event/>
        <Event/>
        <Event/>
      </Slider>
    </div>
  );
}

export default Carousal;
