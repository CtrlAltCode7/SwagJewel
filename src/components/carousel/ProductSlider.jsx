import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";
import BookCard from "./book";
import { useState } from "react";
import { useEffect } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { getImageUrlsWithGroupDescription } from "../../helpers/CommonFuntions";
import { useSelector } from "react-redux";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <KeyboardArrowLeftIcon class="arrows" style={{color:"white"}}/>
    </div>
  )
  }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <KeyboardArrowRightIcon class="arrows" style={{color:"white"}} />
    </div>
  )
}

function ProductSlider({ products }) {
  const [imageUrlsWithGroupDescription, setImageUrlsWithGroupDescription] = useState([]);
  const [cards, setCards] = useState([]);
  const apiData = useSelector((state) => state.api.data);
  console.log('apiData', apiData)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    className:"slides",
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
    initialSlide: 0,
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

  const fetchBooks = async () => {
    try {
      const response = await fetch(`/book.json`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });

      // console.log("API response:", response);
      setCards(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect hook to fetch the data from the database
  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line
  }, []);



  useEffect(() => {
    if (apiData) {
      const data = getImageUrlsWithGroupDescription(apiData).filter(Boolean);
      setImageUrlsWithGroupDescription(data);
      console.log("first", data);
    }
  }, [apiData]);
  
  console.log("imageUrls- productListing", imageUrlsWithGroupDescription);

  return (
    <div
      className="slider-container"
      style={{
        padding: "3% 10%",
      }}
    >
      <Slider {...settings}>
        {/* {products.map((product, index) => (
          <div key={index} className="slide-content">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        ))} */}
        {imageUrlsWithGroupDescription?.map((bookItem, index) => (
          <BookCard book={bookItem} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
