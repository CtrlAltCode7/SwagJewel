import { Box, Typography } from "@mui/material";
import React from "react";
import { Outlet, Link } from 'react-router-dom';

function ListedItems({
  heading,
  body1,
  body2,
  body3,
  body4,
  body5,
  body6,
  body7,
  footer,
  redirect
}) {
  const removeUnderline = {
    textDecoration: "none",
  };
  return (
    <Box
      alignItems="center"
      textAlign={footer ? "center" : "left"}
      sx={{
        textDecoration: "none",
      }}
    >
      <Link to={redirect} style={removeUnderline}>
        <Typography
          variant={footer ? "h6" : "body2"}
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: footer ? "" : "#666",
            ":hover": { color: "#75b0da", cursor: "pointer" },
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
            color: footer ? "" : "#000",
            ":hover": { color: "#75b0da", cursor: "pointer" },
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
            color: footer ? "" : "#000",
            ":hover": { color: "#75b0da", cursor: "pointer" },
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
            color: footer ? "" : "#000",
            ":hover": { color: "#75b0da", cursor: "pointer" },
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
                color: footer ? "" : "#000",
                ":hover": { color: "#75b0da", cursor: "pointer" },
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
                color: footer ? "" : "#000",
                ":hover": { color: "#75b0da", cursor: "pointer" },
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
                color: footer ? "#000" : "#000",
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
                color: footer ? "#000" : "#000",
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
