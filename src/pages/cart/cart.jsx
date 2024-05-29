import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { IconButton, Paper, Typography } from "@mui/material";
import EmptyCart from "./emptyCart/emptyCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Cart({ placement1 }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const popperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popperRef.current && !popperRef.current.contains(event.target)) {
        setAnchorEl(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        onClick={handleClick}
      >
        <IconButton sx={{ p: 1 }}>
          <ShoppingCartIcon />
        </IconButton>
        <Typography
          sx={{
            color: "#777",
            fontWeight: "500",
            ":hover": {
              color: "red",
            },
            fontSize: "0.6rem",
            letterSpacing: "0.1rem",
          }}
          variant="caption"
        >
          Cart
        </Typography>
      </Box>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        ref={popperRef}
        sx={{
          overflow: "hidden",
        }}
      >
        <Paper>
          <Box
            sx={{
              border: 1,
              p: 1,
              bgcolor: "background.paper",
              width: "100%",
              "@media (min-width: 1280px)": {
                width: "360px",
              },
            }}
          >
            <EmptyCart />
          </Box>
        </Paper>
      </Popper>
    </div>
  );
}
