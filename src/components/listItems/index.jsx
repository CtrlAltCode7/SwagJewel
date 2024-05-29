import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function ListedItems({
  heading,
  body1,
  body2,
  body3,
  body4,
  body5,
  body6,
  body7,
  footer = false,
  redirect,
}) {
  const removeUnderline = {
    textDecoration: "none",
  };
  const [smallScreenActivated, SetSmallScreenActivated] = useState(false);
  return (
    <Box
      alignItems="center"
      textAlign={footer ? "center" : "left"}
      sx={{
        textDecoration: "none",
        flexWrap: "wrap",
        "@media (max-width:  768px)": {
          // Media query for smaller screens
          marginBottom: "10%",
        },
      }}
    >
      <Link to={redirect} style={removeUnderline}>
        <Typography
          variant={footer ? "h6" : "body2"}
          gutterBottom
          sx={{
            fontWeight: "100",
            color: footer ? "#555 !important" : "#666",
            ":hover": { color: "#75b0da !important", cursor: "pointer" },
            marginBottom: footer ? "0.6rem" : "0.4rem",
            fontSize: footer ? "1.7rem" : "1rem",
            fontFamily: "sans-serif",
          }}
        >
          {heading}
        </Typography>
      </Link>
      <Link to={redirect} style={removeUnderline}>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontWeight: 400,
            color: footer ? "#555 !important" : "#000",
            ":hover": { color: "#75b0da !important", cursor: "pointer" },
          }}
        >
          {body1}
        </Typography>
      </Link>
      <Link to={redirect} style={removeUnderline}>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontWeight: 400,
            color: footer ? "#555 !important" : "#000",
            ":hover": { color: "#75b0da !important", cursor: "pointer" },
          }}
        >
          {body2}
        </Typography>
      </Link>
      <Link to={redirect} style={removeUnderline}>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontWeight: 400,
            color: footer ? "#555 !important" : "#000",
            ":hover": { color: "#75b0da !important", cursor: "pointer" },
          }}
        >
          {body3}
        </Typography>
      </Link>
      {body4 && (
        <>
          <Link to={redirect} style={removeUnderline}>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                fontWeight: 400,
                color: footer ? "#555 !important" : "#000",
                ":hover": { color: "#75b0da !important", cursor: "pointer" },
              }}
            >
              {body4}
            </Typography>
          </Link>
        </>
      )}
      {body5 && (
        <>
          <Link to={redirect} style={removeUnderline}>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                fontWeight: 400,
                color: footer ? "#555 !important" : "#000",
                ":hover": { color: "#75b0da !important", cursor: "pointer" },
              }}
            >
              {body5}
            </Typography>
          </Link>
        </>
      )}
      {body6 && (
        <>
          <Link to={redirect} style={removeUnderline}>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                fontWeight: 400,
                color: footer ? "#555 !important" : "#000",
                ":hover": { color: "#75b0da", cursor: "pointer" },
              }}
            >
              {body6}
            </Typography>
          </Link>
        </>
      )}
      {body7 && (
        <>
          <Link to={redirect} style={removeUnderline}>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                fontWeight: 400,
                color: footer ? "#555 !important" : "#000",
                ":hover": { color: "#75b0da", cursor: "pointer" },
              }}
            >
              {body7}
            </Typography>
          </Link>
        </>
      )}
    </Box>
  );
}

export default ListedItems;
