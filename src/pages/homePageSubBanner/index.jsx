import { Box } from "@mui/material";
import React from "react";

export default function HomePageSubBanner() {
  const GridItem = ({ src, alt, fullWidth }) => (
    <Box
      className={fullWidth ? "grid-item full-width" : "grid-item"}
      sx={{
        width: "100%",
        "& img": {
          width: "100%",
          height: "auto",
        },
        display: { sm: "none",md: "block"}
      }}
    >
      <img src={src} alt={alt} />
    </Box>
  );
  return (
    <Box
      className="grid-container"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: "1rem",
        padding: "1rem 1rem 0",
        "@media (max-width: 1200px)": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        "@media (max-width: 768px)": {
          gridTemplateColumns: "1fr",
        },
        "@media (max-width: 1200px) and (min-width: 768px)": {
          "& .full-width": {
            gridColumn: "1 / 3",
          },
        },
      }}
    >
      <GridItem
        src="https://meteor.stullercloud.com/das/129678578"
        alt="Image 4"
      />
      <GridItem
        src="https://meteor.stullercloud.com/das/129678578"
        alt="Image 5"
      />
      <GridItem
        src="https://meteor.stullercloud.com/das/129678578"
        alt="Image 6"
        fullWidth
      />
    </Box>
  );
}
