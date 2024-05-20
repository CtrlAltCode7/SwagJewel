import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "../../../components/carousel/book";
import { useEffect } from "react";
import { useState } from "react";

export const baseUrl =
  "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj=metals&obj.recipe=rose&$xlarge$";

function PreviousNextMethods() {
  const [imageUrlsWithGroupDescription, setImageUrlsWithGroupDescription] =
    useState([]);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const imageUrls = [
    `${baseUrl}/abstract01.jpg`,
    `${baseUrl}/abstract02.jpg`,
    `${baseUrl}/abstract03.jpg`,
    `${baseUrl}/abstract04.jpg`,
  ];

  const fetchBooks = async () => {
    try {
      const response = await fetch(`/productsListing.json`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });

      // console.log("API response:", response);
      setImageUrlsWithGroupDescription(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect hook to fetch the data from the database
  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {/* {imageUrlsWithGroupDescription?.map((bookItem, index) => (
          <BookCard book={bookItem} key={index} />
        ))} */}
        {imageUrlsWithGroupDescription.map((product, index) => (
          <div
            key={index}
            className="slide-content"
            style={{
              textAlign: "center !important",
              // margin: "10px 38px "
            }}
          >
            <img
              src={product.urls[0]}
              alt={product.title}
              style={{
                margin: "auto",
              }}
            />
            <p
              className="product-description"
              style={{
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              {product.groupDescription}
            </p>
            <p
              className="product-description1"
              style={{
                textAlign: "center",
                marginTop: 0
              }}
            >
              {product.publish}
            </p>
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}

export default function CatalogSlider() {
  return PreviousNextMethods();
}
