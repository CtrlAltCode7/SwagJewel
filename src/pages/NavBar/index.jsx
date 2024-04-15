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

  // const useStyles = makeStyles((theme) => ({
  //   banner: {
  //     marginBottom: 4,
  //   },
  //   itemBanner: {
  //     backgroundColor: "#f0f0f0",
  //     padding: 2,
  //     borderRadius: 1,
  //   },
  //   title: {
  //     fontSize: "1.5rem",
  //     fontWeight: "bold",
  //     marginBottom: 1,
  //   },
  //   description: {
  //     marginBottom: 2,
  //   },
  // }));
  // const classes = useStyles();
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
      <ResponsiveAppBar />
      <SearchAppBar />
      <BasicTabs tabLabels={tabLabels} />
      {/* <div className="image-container">
        <img
          src="https://meteor.stullercloud.com/das/128967869"
          alt="Your Image"
        />
        <Typography
          component={"span"}
          className="overlay-button"
          sx={{ typography: { sm: "body1", xs: "body2", md: "h6", lg: "h6" } }}
        >
          <Typography>
            Discover styles designed to capture every step on the
          </Typography>
          <Typography variant="h6">journey of a lifetime.</Typography>
          <Link to={"home"}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "ActiveBorder",
                color: "ActiveBorder",
                textAlign: "center",
              }}
            >
              Shop now
            </Button>
          </Link>
        </Typography>
      </div> */}
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
          <p style={{
            fontSize: "18px"
          }}>
            Browse best-selling and favorite styles to celebrate a mother's
            love.
          </p>
          <Link to="/menu">
            <button className="banner-shop-now-btn">Shop Now</button>
          </Link>
        </div>
      </div>
      {/* <Box>
        <Button
        fullWidth
          sx={{
            // width: "150px",
            // height: "49px",
            backgroundImage: "linear-gradient(.25turn, #f00, #00f)",
            backgroundPositionX: "80%"
          }}
        >
          Next
        </Button>
      </Box> */}

      {/* <ActionAreaCard
        image="https://example.com/your-image.jpg" // URL of the image
        title="Dynamic Title"
        description="Dynamic Description"
      /> */}
      <Stack
        flexDirection={"row"}
        sx={{
          // p: 20,
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
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
      {/* <Grid2 item lg={6} md={6} sm={12} className={classes.banner}>
        <div className={classes.itemBanner}>
          <div className="inner">
            <div className="banner-content">
              <Typography variant="h6" className="ysera-subtitle">
                TOP STAFF PICK
              </Typography>
              <Typography variant="h4" className={classes.title}>
                Shop Rings
              </Typography>
              <Typography variant="body1" className={classes.description}>
                Proin interdum magna primis id consequat dictum
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className="button btn-shop-now"
              >
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </Grid2> */}
      {/* <Banner /> */}
      <Stack
        flexDirection={"row"}
        sx={{
          display: { sm: "none", md: "flex", lg: "flex" },
          // p: 9,
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          // backgroundColor: "#f6f6f6",
          border: "1px solid #f6f6f6",
          width: "100%",
          "@media (max-width: 600px)": {
            // Media query for smaller screens
            // maxWidth: '100%', // Adjust width for smaller screens
            // backgroundColor: "red",
            // minWidth: "-webkit-fill-available"
            // display: "none !important"
            margin: "0 !important",
          },
        }}
      >
        {cardData?.map((card, index) => (
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
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        {data &&
          data.map((item, index) => (
            <>
              <div
                id="Mutliback1"
                style={{
                  // backgroundImage: uri(
                  //   "c"
                  // ),
                  backgroundImage: `url(${item.backgroundImage})`,
                }}
              >
                <h4 className="ysera-subtitle">{item.subtitle}</h4>
                <h3 className="title">{item.title}</h3>
                <div className="description">{item.description}</div>
                <Link to={item.buttonLink} className="button btn-shop-now">
                  {item.buttonText}
                </Link>
              </div>
            </>
          ))}
      </Box> */}
      {/* <Grid2>
        <Typography></Typography>
      </Grid2> */}

      <DBCarousel />
      {/* <ImageSlider /> */}
      <ListedText />
      <Footer />

      <StickyFooter />
    </>
  );
}

export default Index;
