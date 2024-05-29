import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(https://meteor.stullercloud.com/das/129678024)`,
      }}
    >
      <div className="headerContainer">
        <img src="https://meteor.stullercloud.com/das/129679303?fmt=png&hei=120" />
        <p
          style={{
            fontSize: "18px",
          }}
        >
          Browse best-selling and favorite styles to celebrate a mother's love.
        </p>
        <Link to="/menu">
          <button className="banner-shop-now-btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
