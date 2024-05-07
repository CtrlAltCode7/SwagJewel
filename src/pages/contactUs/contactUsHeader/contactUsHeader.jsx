import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./contactUsHeader.css";
import CustomSeparator from "../../../components/breadcrumbs";

export default function ContactUsHeader() {
  return (
    <Box
      sx={{
        backgroundImage:
          'linear-gradient(90deg, transparent 0, transparent 20%, #0c0c0c 50%, #0c0c0c), linear-gradient(0deg, hsla(0, 0%, 5%, .3) 0, transparent), url("//meteor.stullercloud.com/das/52699161?fmt=smart-alpha&sharpen")',
        backgroundRepeat: "repeat-y",
        backgroundPosition: "0",
        // backgroundSize: "1307px",
      }}
    >
      <Container maxWidth={"lg"} className="container-div" >
        <div className="breadcrum-container">
          <CustomSeparator breadcrumbsColor={"#fff"} />
          <Typography
            component={"span"}
            sx={{
              fontSize: {
                xs: 30,
                sm: 32,
                md: 34,
                lg: 36,
                xl: 37,
              },
              color: "#fff",
              position: "relative",
              top: "-20px",
              marginLeft: ".5rem",
            }}
          >
            Contact Us
          </Typography>
        </div>
      </Container>
    </Box>
  );
}
