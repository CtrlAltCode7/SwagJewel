import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
// import axios from 'axios'; // You may need to install axios using `npm install axios`
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const StickyFooter = () => {
  const [prices, setPrices] = useState({ gold: 0, platinum: 0, silver: 0 });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT_HERE");
        setPrices({
          gold: response.data.gold,
          platinum: response.data.platinum,
          silver: response.data.silver,
        });
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    // fetchPrices();
  }, []);

  const verticalAlignment = {
    verticalAlign: "text-top",
    color: "#a1bdd1!important",
  };

  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#4c5a63",
        padding: "0.5rem",
        color: "#fff",
        zIndex: "1111",
      }}
      id="footer-section"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          "@media (max-width:  768px)": {
            flexDirection: "column",
            alignItems: "center",
            gap: "0.25rem",
          },
        }}
      >
        <div>
          <span
            style={{
              color: "#c7dceb!important",
            }}
          >
            3/21/2024 Market Prices
          </span>
        </div>
        <div>
          <span>Gold </span>
          <span>{prices.gold}</span>
          <span style={verticalAlignment}>
            <ArrowDropUpIcon />
          </span>
        </div>
        <div>
          <span>Platinum </span>
          <span>{prices.platinum}</span>
          <span style={verticalAlignment}>
            <ArrowDropUpIcon />
          </span>
        </div>
        <div>
          <span>Silver </span>
          <span>{prices.silver}</span>
          <span style={{ ...verticalAlignment }}>
            <ArrowDropUpIcon />
          </span>
        </div>
      </Box>
    </footer>
  );
};

export default StickyFooter;
