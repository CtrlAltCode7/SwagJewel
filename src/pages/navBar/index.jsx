import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ActionAreaCard from "../actioncardexample";
import img1 from "../../assets/128968694.webp";
import img2 from "../../assets/128968687.webp";
import img3 from "../../assets/128968698.webp";
import Banner from "../banner";
import { styled } from "@mui/material/styles";
import "../../styles/homeStyles.css";
import Layout from "../../components/layout/index";
import ProductSlider from "../../components/carousel/index";
import HomePageSubBanner from "../homePageSubBanner/index";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../slices/apiSlice";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Index() {
  const [imageUrlsWithGroupDescription, setImageUrlsWithGroupDescription] =
    useState([]);
  const location = useLocation();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const message = location?.data?.state?.message;

  useEffect(() => {
    if (message) {
      setOpenSnackbar(true);
    }
  }, [message]);

  const cardData = [
    {
      image: "https://meteor.stullercloud.com/das/128969798",
      title: "Lab-Grown Diamond Jewelry",
      description: "Browse jewelry styles with brilliant shine.",
    },
    {
      image: "https://meteor.stullercloud.com/das/128969968",
      title: "Religious Jewelry",
      description: "Browse designs made to express devotion.",
    },
    {
      image: "https://meteor.stullercloud.com/das/128969793?&border=1",
      title: "Equipment & Tools",
      description: "Take advantage of exclusive pricing.",
    },
  ];
  const cardData1 = [
    {
      image: `${img1}`,
      // title: "Lab-Grown Diamond Jewelry",
      // description: "Browse jewelry styles with brilliant shine.",
    },
    {
      image: `${img2}`,
      // title: "Religious Jewelry",
      // description: "Browse designs made to express devotion.",
    },
    {
      image: `${img3}`,
    },
  ];
  const tabLabels = ["Engagement Rings", "Item Two", "Item Three"];

  const data = [
    {
      subtitle: "TOP STAFF PICK",
      title: "Shop Rings",
      description: "Proin interdum magna primis id consequat dictum",
      buttonText: "Shop now",
      buttonLink: "home",
      backgroundImage:
        "https://dreamingtheme.kiendaotac.com/html/ysera/assets/images/banner-home-2.jpg",
    },
    {
      subtitle: "TOP STAFF PICK",
      title: "Shop Rings",
      description: "Proin interdum magna primis id consequat dictum",
      buttonText: "Shop now",
      buttonLink: "home",
      backgroundImage:
        "https://dreamingtheme.kiendaotac.com/html/ysera/assets/images/slider-thumb5.jpg",
    },
    {
      subtitle: "TOP STAFF PICK",
      title: "Shop Rings",
      description: "Proin interdum magna primis id consequat dictum",
      buttonText: "Shop now",
      buttonLink: "home",
      backgroundImage:
        "https://dreamingtheme.kiendaotac.com/html/ysera/assets/images/banner-home-5.jpg",
    },
  ];

  const StyledPopularBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#547f9e",
    border: "1px solid #547f9e",
    padding: "0.8rem",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      margin: "1.5rem 9rem 0",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.5rem",
    },
  }));
  const products = [
    {
      title: "Product 1",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 2",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 3",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 4",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 5",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 6",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 3",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 3",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 3",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 3",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 3",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 3",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },
    {
      title: "Product 3",
      image: "https://meteor.stullercloud.com/das/348685?$list$",
    },

  ];

  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.api.data);
  console.log("data1", data1);
  const status = useSelector((state) => state.api.status);
  const error = useSelector((state) => state.api.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      setOpenSnackbar(true);
    }
  }, [message]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Layout>
        <Banner />
        <HomePageSubBanner />
        <Stack
          flexDirection={"row"}
          sx={{
            display: { sm: "flex", md: "flex", lg: "flex" },
            justifyContent: "center",
            padding: "0 1rem",
            gap: "1.7rem",
            border: "1px solid #f6f6f6",
            marginTop: ".4rem",
            // width: "100%",
            "@media (max-width: 768px)": {
              margin: "0 !important",
              flexWrap: "wrap",
              gap: "1rem !important",
            },
          }}
        >
          {cardData?.map((card, index) => (
            <ActionAreaCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </Stack>
        <StyledPopularBox>
          <Typography
            variant="body1"
            sx={{
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            Popular products
          </Typography>
          <Box
            sx={{
              content: '""',
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "13px solid transparent",
              borderRight: "13px solid transparent",
              borderTop: "11px solid #547f9e",
            }}
          />
        </StyledPopularBox>
        <ProductSlider />
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ bgcolor: "green" }}
          >
            {message}
          </MuiAlert>
        </Snackbar>
      </Layout>
    </>
  );
}

export default Index;
