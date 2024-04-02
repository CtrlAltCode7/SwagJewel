import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import SearchAppBar from "./SearchAppBar";
import { Box, Button, Stack, Typography } from "@mui/material";
import ActionAreaCard from "../ActionAreaCard";
import DBCarousel from "../../components/carousel/dbCarousel";
import ListedText from "../ListedText/ListedText";
import img1 from "../../assets/128968694.webp";
import img2 from "../../assets/128968687.webp";
import img3 from "../../assets/128968698.webp";
import Footer from "../Footer/Footer";
import StickyFooter from "../Footer/StickyFooter";
import AppBar from "../Appbar/Appbar";
import TabsComponent from "../Appbar/Tabs";
import BasicTabs from "../Appbar/Tabs";
import { Link } from "react-router-dom";

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
  return (
    <>
      <ResponsiveAppBar />
      {/* <AppBar /> */}
      <SearchAppBar />
      <BasicTabs tabLabels={tabLabels} />
      <div className="image-container">
        <img
          src="https://meteor.stullercloud.com/das/128967869"
          alt="Your Image"
        />
        <Typography
          component={"span"}
          className="overlay-button"
          sx={{
            width: "max-content",
            textAlign: "end",
          }}
        >
          <Typography variant="subtitle1">
            Discover styles designed to capture every step on the
          </Typography>
          <Typography variant="subtitle1">journey of a lifetime.</Typography>
          <Link to={"home"}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "ActiveBorder",
                color: "ActiveBorder",
              }}
            >
              Shop now
            </Button>
          </Link>
        </Typography>
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
        sx={{ p: 2, justifyContent: "space-between" }}
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
        sx={{ p: 2, justifyContent: "space-evenly" }}
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
      <DBCarousel />
      <ListedText />
      <Footer />

      <StickyFooter />
      {/* <div
        style={{
          position: "sticky",
          bottom: 0,
          background: "#000",
          color: "#fff",
        }}
      >
        <h5>Anywhere Fitness, a TT44 Company</h5>
      </div> */}

      {/* <div
        // style={{
        //   position: "relative",
        //   backgroundImage: `url("https://via.placeholder.com/500")`,
        //   backgroundRepeat: 'no-repeat',
        //   width:'250px' 
        // }}
        style={{  
          backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div style={{ position: "absolute" }}>
          <button>hello</button>
        </div>
      </div> */}
      {/* <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
          width: 400,
          height: 200,
          // position: "relative",
          // display: "flex",
          // justifyContent: "end",
          // alignItems: "center",
          display: "grid",
          placeItems: "end"
        }}
      >
        <div
          style={{
            // position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            position: "relative",
            top: "21%",
            paddingRight: "2.1rem",
            gap: "0.25rem",
            textAlignLast: "end"
          }}
        >
          <span>Discover styles designed to capture every step on the</span>
          <span>Hello World!</span>

          
          <span><Button style={{ display: "inline-block"}}>hh</Button></span>
        </div>
      </div> */}
    </>
  );
}

export default Index;
