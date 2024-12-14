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
    speed: 5000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
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
