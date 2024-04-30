import * as React from "react";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import ProductDetailSocialMedia from "./productDetailSocialMedia";

export default function ShareSocialMedia() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return (
    <Box sx={{ width: 500 }}>
      <Popper
        // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Box
                sx={{
                  padding: "1rem",
                }}
              >
                <Box sx={{ p: 2 }}>
                  <ProductDetailSocialMedia />
                  
                </Box>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>

      <Grid container>
        <Grid item>
          {/* <Button onClick={handleClick("bottom")}>bottom</Button> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.2rem",
            }}
            onClick={handleClick("bottom")}
          >
            <IosShareIcon fontSize="small" />
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: "14px",
                //   color: hovered ? "#888" : "#555", // Change text color based on hover state
                transition: "color 0.3s", // Added transition effect
              }}
            >
              Share
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
