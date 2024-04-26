import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./abc.css";
// import { baseUrl } from "./config";
// config.js
export const baseUrl =
  "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj=metals&obj.recipe=rose&$xlarge$";

export default function ProductDetailSlider() {
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <KeyboardArrowLeftIcon className="arrows" style={{ color: "#000" }} />
      </div>
    );
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <KeyboardArrowRightIcon className="arrows" style={{ color: "#000" }} />
      </div>
    );
  }
  const settings = {
    customPaging: function (i) {
      const isActive = i === this.currentSlide; // Check if the image is currently active
      const borderStyle = isActive ? "1px solid blue" : "1px solid";
      return (
        <a style={{ width: "100px !important", height: "100px !important" }}>
          {" "}
          {/* Adjust width and height here */}
          <img
            src={`${baseUrl}/abstract0${i + 1}.jpg`}
            alt={`Slide ${i + 1}`}
            style={{
              border: borderStyle,
              width: "100% !important",
              height: "100% !important",
              borderRadius: "5px",
              margin: "auto"
            }}
          />
        </a>
      );
    },
    dots: true,
    // dotsClass: "slick-dots slick-thumb",
    // className: "slides",
    dotsStyle: {
      marginBottom: "20px !important",
      width: "200px",
      height: "200px",
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };
  return (
    <div
      className="slider-container"
      style={{
        padding: "2rem",
        // maxWidth: "100%"
      }}
    >
      <Slider className="pp-slider" {...settings}>
        <div
          style={{
            border: "1px solid #000",
          }}
        >
          <img src={`${baseUrl}/abstract01.jpg`} alt="Slide 1" />
        </div>
        <div>
          <img src={`${baseUrl}/abstract02.jpg`} alt="Slide 2" />
        </div>
        <div>
          <img src={`${baseUrl}/abstract03.jpg`} alt="Slide 3" />
        </div>
        <div>
          <img src={`${baseUrl}/abstract04.jpg`} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
}
