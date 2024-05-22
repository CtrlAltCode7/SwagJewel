import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HelpIcon from "@mui/icons-material/Help";

export default function EstimateSummary() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} mt={1}>
        <Grid container spacing={2} item xs={12} lg={10}>
          <Grid item xs={12} lg={5}>
            <Button variant="outlined" color="error">
              Remove All From My Cart
            </Button>
          </Grid>

          <Grid item xs={12} lg={2}></Grid>
          <Grid container spacing={0.5} item xs={12} lg={5}>
            <Grid
              item
              xs={12}
              lg={8}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "end",
                color: "#555",
              }}
            >
              Subtotal:
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "flex-end",
                color: "#555",
              }}
            >
              $228.27
            </Grid>
            <Grid
              item
              xs={12}
              lg={8}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "end",
                color: "#555",
              }}
            >
              Est. Shipping:
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "flex-end",
                color: "#555",
              }}
            >
              $228.27
            </Grid>
            <Grid
              item
              xs={12}
              lg={8}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "end",
                // padding: '4px'
                borderBottom: "1px solid",
                color: "#555",
              }}
            >
              Estimated Sales Tax
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "flex-end",
                borderBottom: "1px solid",
                color: "#555",

                // padding: '4px'
              }}
            >
              $228.27
            </Grid>
            <Grid
              item
              xs={12}
              lg={8}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "end",
                color: "#555",
                fontWeight: "bold",

                // padding: '4px'
              }}
            >
              Estimated Total:
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "flex-end",
                color: "#555",
                fontWeight: "bold",

                // padding: '4px'
              }}
            >
              $228.27
            </Grid>
            <Grid
              item
              xs={12}
              lg={2}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "end",
                // padding: '4px'
              }}
              mt={2}
            >
              {/* Estimated Total: */}
            </Grid>
            <Grid
              item
              xs={12}
              lg={10}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "flex-end",
                textTransform: "uppercase",

                // padding: '4px'
              }}
              mt={2}
            >
              <Button fullWidth variant="contained" color="success">
                Proceed to Secure Checkout
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              lg={2}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "end",
                // padding: '4px'
              }}
              mt={2}
            >
              {/* Estimated Total: */}
            </Grid>
            <Grid
              item
              xs={12}
              lg={10}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "flex-end",
                textTransform: "uppercase",

                // padding: '4px'
              }}
              mt={2}
            >
              <LocalShippingIcon
                fontSize="small"
                color="#2596be"
                sx={{
                  color: "#2596be",
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#555",
                  textTransform: "capitalize",
                  marginLeft: ".5rem",
                }}
              >
                Eligible items in your cart can ship{" "}
                <Typography
                  component={"span"}
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  today
                </Typography>{" "}
                if you checkout in the next
                <Typography
                  component={"span"}
                  sx={{
                    color: "#2596be",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  10h 9m 43s{" "}
                </Typography>
                <Typography
                  component={"span"}
                  sx={{
                    display: "inline-flex",
                    textDecoration: "underline",
                  }}
                >
                  <HelpIcon />
                  Eligible Items
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={
            {
              // backgroundColor: "red",
            }
          }
        ></Grid>
      </Grid>
    </Container>
  );
}
