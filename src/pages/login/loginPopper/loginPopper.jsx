import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import EmptyCart from "../../cart/emptyCart/emptyCart";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginContent from "./loginContent/loginContent";

export default function LoginPopper() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const navigate = useNavigate();
  const popperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popperRef.current &&
        !popperRef.current.contains(event.target) &&
        !anchorEl.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [anchorEl]);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

      }}
      onClick={handleClick("bottom")}
    >
      <IconButton sx={{ p: 1 }}>
        <PersonIcon />
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
        User
      </Typography>
      <Popper
        sx={{ zIndex: 1200, minWidth: "25%" }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper ref={popperRef}>
              <LoginContent />
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}
