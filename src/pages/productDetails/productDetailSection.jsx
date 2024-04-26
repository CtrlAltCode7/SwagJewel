import React from "react";
// import { Grid, Paper, Typography } from "@mui/material";
import {
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProductDetailSlider from "./productDetailSlider";
import ProductDetailCustomizeOptions from "./productDetailCustomizeOptions";

export default function ProductDetailSection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid container spacing={2} mt={.5}>
        {/* First Portion */}
        <Grid item xs={12} sm={isSmallScreen ? 12 : 6}>
          <Paper elevation={3} style={{ padding: 2 }}>
            {/* <Typography variant="h6">First Portion</Typography>
          <Typography>
            This is the content for the first portion. It can include any
            information or components you want to display.
          </Typography> */}
            <ProductDetailSlider />
          </Paper>
        </Grid>

        {/* Third Portion */}
        <Grid item xs={12} sm={isSmallScreen ? 12 : 6}>
          <Grid container spacing={2}>
            {/* First half of the Third Portion */}
            <Grid item xs={6}>
              <Paper elevation={3} style={{ padding: 20 }}>
                {/* <Typography variant="h6">Third Portion - First Half</Typography> */}
                {/* <Typography>
                  This is the content for the first half of the third portion.
                  Add your content or components here.
                </Typography> */}
                <ProductDetailCustomizeOptions />
              </Paper>
              <Grid>
                
              </Grid>
            </Grid>

            {/* Second half of the Third Portion (conditionally rendered based on screen size) */}
            {!isSmallScreen && (
              <Grid item xs={6}>
                <Paper elevation={3} style={{ padding: 20 }}>
                  <Typography variant="h6">
                    Third Portion - Second Half
                  </Typography>
                  <Typography>
                    This is the content for the second half of the third
                    portion. Customize it as per your requirements.
                  </Typography>
                </Paper>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
