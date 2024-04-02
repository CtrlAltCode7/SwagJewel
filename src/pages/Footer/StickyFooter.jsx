import React, { useState, useEffect } from "react";
// import axios from 'axios'; // You may need to install axios using `npm install axios`

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

    fetchPrices();
  }, []);

  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#4c5a63",
        padding: "0.5rem",
        color: "#fff",
        zIndex: "1111"
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem"}}>
        <div>
            <span>3/21/2024 Market Prices</span>
        </div>
        <div>
          <span>Gold </span>
          <span>{prices.gold}</span>
        </div>
        <div>
          <span>Platinum </span>
          <span>{prices.platinum}</span>
        </div>
        <div>
          <span>Silver </span>
          <span>{prices.silver}</span>
        </div>
      </div>
      {/* <div style={{ textAlign: 'center' }}>
        <img src="arrow.png" alt="Arrow" style={{ width: '50px', height: 'auto' }} />
      </div> */}
    </footer>
  );
};

export default StickyFooter;
