import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import SearchAppBar from "./SearchAppBar";
import { Box, Button, Stack, Typography } from "@mui/material";
import ActionAreaCard from "../Actioncardexample";
import DBCarousel from "../../components/carousel/dbCarousel";
import ListedText from "../ListedText/ListedText";
import img1 from "../../assets/128968694.webp";
import img2 from "../../assets/128968687.webp";
import img3 from "../../assets/128968698.webp";
import Footer from "../Footer/Footer";
import StickyFooter from "../Footer/StickyFooter";
import TabsComponent from "../Appbar/Tabs";
import BasicTabs from "../Appbar/Tabs";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { makeStyles } from "@mui/styles";
import { ImageSlider } from "../../components/carousel/ImageSlider";
// import { withTheme } from '@mui/system';
import { styled, alpha } from "@mui/material/styles";
import "../../styles/HomeStyles.css";
import Layout from "../../components/Layout/Layout";

function Index() {
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
    // Add more objects as needed for additional cards
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
      // title: "Equipment & Tools",
      // description: "Take advantage of exclusive pricing.",
    },
    // Add more objects as needed for additional cards
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
      margin: "1.5rem 9rem 0", // Apply margin only at lg screens
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.5rem", // Apply margin only at lg screens
    },
  }));
  // const BannerImg =
  return (
    <>
      <Layout>
        <div
          className="home"
          style={{
            backgroundImage: `url(https://meteor.stullercloud.com/das/129678024)`,
          }}
        >
          <div className="headerContainer">
            <img src="https://meteor.stullercloud.com/das/129679303?fmt=png&hei=120" />
            {/* <h1
            style={{
              textTransform: "uppercase",
              fontStyle: "italic"
            }}
          >
            Celebrate
          </h1>
          <h1>MoM</h1> */}
            <p
              style={{
                fontSize: "18px",
              }}
            >
              Browse best-selling and favorite styles to celebrate a mother's
              love.
            </p>
            <Link to="/menu">
              <button className="banner-shop-now-btn">Shop Now</button>
            </Link>
          </div>
        </div>
        <Stack
          flexDirection={"row"}
          sx={{
            // p: 20,
            justifyContent: "center",
            display: "flex",
            // flexWrap: "wrap",
            gap: "1%",
            margin: ".5% 2% 1% 1% !important",
            "@media (max-width: 1200px) and (min-width:  768px)": {
              flexWrap: "wrap"

            },
          }}
        >
          {cardData1?.map((card, index) => (
            // <Box key={index} sx={{}}>
            <ActionAreaCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
            // </Box>
          ))}
        </Stack>
        <Stack
          flexDirection={"row"}
          sx={{
            display: { sm: "none", md: "flex", lg: "flex" },
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
            border: "1px solid #f6f6f6",
            width: "100%",
            "@media (max-width: 768px)": {
              margin: "0 !important",
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
        <DBCarousel />
      </Layout>
    </>
  );
}

export default Index;
