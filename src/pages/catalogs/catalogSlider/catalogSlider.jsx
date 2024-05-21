import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "../../../components/carousel/book";
import { useEffect } from "react";
import { useState } from "react";
import "./catalogSlider.css";
import { Box } from "@mui/material";

export const baseUrl =
  "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj=metals&obj.recipe=rose&$xlarge$";

function PreviousNextMethods({ displayData }) {
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
    className: "catalogs-settings",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imageUrls = [
    `${baseUrl}/abstract01.jpg`,
    `${baseUrl}/abstract02.jpg`,
    `${baseUrl}/abstract03.jpg`,
    `${baseUrl}/abstract04.jpg`,
  ];

  const fetchBooks = async () => {
    try {
      const response = await fetch(`/${displayData}.json`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });

      console.log("API response:", response);
      setImageUrlsWithGroupDescription(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect hook to fetch the data from the database
  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line
  }, [displayData]);
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
              // margin: "10px 38px"
            }}
          >
            <img
              src={product.img_src}
              alt={product.title}
              style={{
                margin: "auto",
              }}
            />
            <p
              className="product-description"
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {product.text}
            </p>
            <p
              className="product-description1"
              style={{
                textAlign: "center",
                marginTop: 0,
              }}
            >
              {product.year}
            </p>
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: "center", margin: "2.5rem 1rem .5rem 1.5rem" }}>
        <span className="catalog-button prev-btn" onClick={previous}>
          Prev
        </span>
        <span className="catalog-button nxt-btn" onClick={next}>
          Next
        </span>
      </div>
      <div
        style={{
          borderBottom: "1px solid",
        }}
      ></div>
    </div>
  );
}

export default function CatalogSlider({ title }) {
  const camelCaseTitle = title?.replace(/\s+(.)/g, function(match, group1) {
    return group1.toUpperCase();
  });const lowercaseTitle = camelCaseTitle.charAt(0).toLowerCase() + camelCaseTitle.slice(1);
  console.log('lowercaseTitle', lowercaseTitle)
  return (
    <>
      <Box
        sx={{
          fontSize: {
            xs: 20,
            sm: 22,
            md: 24,
            lg: 26,
            xl: 27,
          },
          fontWeight: 100,
          color: "#555",
          marginTop: ".5rem",
        }}
      >
        {title}
      </Box>
      <PreviousNextMethods displayData={lowercaseTitle} />
    </>
  );
}
