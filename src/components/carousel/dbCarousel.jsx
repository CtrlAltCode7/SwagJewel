import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import BookCard from "./book";
import { Link } from "react-router-dom";
// import axios from "axios";

export const Book = {
  asin: "",
  author: "",
  image_url: "",
  rating: "",
  title: "",
  url: "",
  catagories: "",
  ISBN10: "",
};

function DBCarousel() {
  // setting the state variables
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

  // Function to calculate cardsPerPage based on screen width
  function getCardsPerPage() {
    const screenWidth = window.innerWidth;
    console.log("screenWidth", screenWidth);
    if (screenWidth < 750) {
      return 1; // For smaller screens, display 1 card per page
    } else if (screenWidth < 1000) {
      return 2; // For medium-sized screens, display 2 cards per page
    } else if (screenWidth > 1600) {
      return 5; // For medium-sized screens, display 2 cards per page
    } else if (screenWidth > 1200) {
      return 4; // For larger screens, display 3 cards per page
    } else {
      return 3; // For larger screens, display 3 cards per page
    }
  }

  // useEffect hook to fetch the data from the database
  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line
  }, []);

  // useEffect hook to update cardsPerPage on window resize
  useEffect(() => {
    function handleResize() {
      setCardsPerPage(getCardsPerPage());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fetch books data from API
  const fetchBooks = async () => {
    try {
      const response = await fetch(`/book.json`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });

      console.log("API response:", response);
      setCards(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Function to handle next page button click
  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page button click
  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Width of container based on cards per page
  const containerWidth = cardsPerPage * 250; // Assuming 250px per card

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        // width: "95%",
        marginTop: "40px",
        flexWrap: "wrap",
        overflow: "hidden",
        // backgroundColor: "red"
        boxShadow: "none !important",
        border: 0,
        "& .MuiPaper-root": {
          borderRadius: 0,
          boxShadow: "0 0 0 0 rgba(0,0,0,0)",
          border: 0,
        },
      }}
    >
      <IconButton
        onClick={handlePrevPage}
        sx={{
          margin: 5,
          "@media (max-width:  768px)": {
            // Media query for smaller screens
            // width: '50%', // Adjust width for smaller screens
            margin: 0,
            padding: 0

          },
        }}
        disabled={currentPage === 0}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <Box sx={{ width: `${containerWidth}px`, height: "100%" }}>
        {cards?.map((card, index) => (
          <Box
            key={`card-${index}`}
            sx={{
              width: "100%",
              height: "100%",
              display: currentPage === index ? "block" : "none",
            }}
          >
            <Slide
              direction={slideDirection}
              in={currentPage === index}
              timeout={{ enter: 900, exit: 900 }} // Adjust transition duration
              mountOnEnter
              unmountOnExit
            >
              <Stack
                spacing={2}
                direction="row"
                alignContent="center"
                justifyContent="center"
                sx={{ width: "100%", height: "100%" }}
              >
                {cards
                  .slice(
                    index * cardsPerPage,
                    index * cardsPerPage + cardsPerPage
                  )
                  .map((book, index) => (
                    <Box key={book.asin}>
                      <BookCard book={book} />
                    </Box>
                  ))}
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handleNextPage}
        sx={{
          margin: 5,
          "@media (max-width:  768px)": {
            // Media query for smaller screens
            // width: '50%', // Adjust width for smaller screens
            margin: 0,
            padding: 0
          },
        }}
        disabled={
          currentPage >= Math.ceil((cards?.length || 0) / cardsPerPage) - 1
        }
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
}

export default DBCarousel;
