import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./productSlider.css";
// import { baseUrl } from "./config";
// config.js
export const baseUrl =
  "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj=metals&obj.recipe=rose&$xlarge$";

const imageUrls = [
  `${baseUrl}/abstract01.jpg`,
  `${baseUrl}/abstract02.jpg`,
  `${baseUrl}/abstract03.jpg`,
  `${baseUrl}/abstract04.jpg`,
];
export default function ProductDetailSlider({ handleClick, activeClass }) {
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

  const dotClasses = activeClass ? "abc" : ""
  const sliderBorder = activeClass ? "applyBorder" : ""
  const settings = {
    customPaging: function (i) {
      const isActive = i === this.currentSlide; // Check if the image is currently active
      const borderStyle = isActive ? "0 0 0 3px #547f9e" : "0 0 0 1px #bbbbbb";
      return (
        <a>
          <img
            src={`${baseUrl}/abstract0${i + 1}.jpg`}
            alt={`Slide ${i + 1}`}
            style={{
              boxShadow: borderStyle,
              borderRadius: "5px",
              margin: "auto",
            }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: `slick-dots slick-thumb ${dotClasses}`,
    // className: "slides",
    dotsStyle: {
      marginBottom: "20px !important",
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
      className={`slider-container ${sliderBorder}`}
      style={{
        // padding: "2rem"
        // maxWidth: "100%"
      }}
    >
      <Slider className="product-slider" {...settings}>
        {imageUrls.map((url, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #000",
              background: "red",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="big-img-slider"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
