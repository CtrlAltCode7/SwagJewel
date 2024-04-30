import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProductDetailSlider from "./productDetailSlider";
import ProductDetailCustomizeOptions from "./productDetailCustomizeOptions";
import ProductDetailTabs from "./productDetailTabs";
import ProductDetailContentTabs from "./productDetailContentTabs";
import ProductDetailsCustomizeHeaderOption from "./productDetailsCustomizeHeaderOption";
import ScrollDialog from "./productDetailsDialogBox";

export default function ProductDetailSection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid container spacing={2} mt={0.5}>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 6}>
          <Paper elevation={3} style={{ padding: 2 }}>
            {/* <ProductDetailSlider /> */}
            <ScrollDialog />
          </Paper>
        </Grid>

        {/* Third Portion */}
        <Grid item xs={12} sm={isSmallScreen ? 12 : 6}>
          <Grid container spacing={2}>
            {/* First half of the Third Portion */}
            <Grid
              item
              xs={isSmallScreen ? 12 : 7}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Paper elevation={3} style={{ padding: 0 }}>
                {/* <Typography variant="h6">Third Portion - First Half</Typography> */}
                {/* <Typography>
                  This is the content for the first half of the third portion.
                  Add your content or components here.
                </Typography> */}
                <ProductDetailCustomizeOptions />
              </Paper>
              <Grid gap={1}>
                <Paper elevation={3}>
                  <ProductDetailsCustomizeHeaderOption
                    leftTitle="Product"
                    rightTitle="Anniversary Band"
                    paddingValue="2"
                  />
                  <ProductDetailsCustomizeHeaderOption
                    leftTitle="Jewelry State"
                    rightTitle="Set"
                    paddingValue="2"
                  />
                  {/* <ProductDetailTabs /> */}
                  <ProductDetailTabs
                    tabs={[
                      {
                        label: "Set",
                        content: <ProductDetailContentTabs />,
                      },
                      {
                        label: "Unset",
                        content: <ProductDetailContentTabs />,
                      },
                    ]}
                  />
                </Paper>
              </Grid>
            </Grid>

            {/* Second half of the Third Portion (conditionally rendered based on screen size) */}
            {!isSmallScreen && (
              <Grid
                item
                xs={5}
                style={{
                  position: "sticky",
                  top: 0,
                  height: "100vh",
                  overflowY: "auto",
                }}
              >
                <Paper elevation={3} style={{ padding: 20 }}>
                  {/* <Typography variant="h6">
                    Third Portion - Second Half
                  </Typography>
                  <Typography>
                    This is the content for the second half of the third
                    portion. Customize it as per your requirements.
                  </Typography> */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "#75b0da",
                    }}
                  >
                    Log In For Pricing
                  </Button>
                  <Typography textAlign={"center"} m={1}>
                    OR
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#4d4a49",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: ".7rem .5rem",
                    }}
                  >
                    <Button>
                      <img
                        src="https://meteor.stullercloud.com/das/56489807?hei=200&fmt=smart-alpha"
                        width={125}
                      />
                    </Button>
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      Find a Retailer near you
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      marginTop: "1rem",
                      background: "#547f9e",
                    }}
                  >
                    Made To Order
                  </Button>
                </Paper>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
