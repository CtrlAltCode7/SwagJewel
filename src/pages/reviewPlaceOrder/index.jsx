import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function ReviewPlaceOrder() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} xs={12} md={12} mt={2}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            // background: "red",
            border: "1px solid red",
          }}
        >
          <Box>
            <Box sx={{
                borderBottom: "1px solid #cecece",
                marginRight: "1rem"
            }}>
              <Typography
                gutterBottom
                sx={{
                  fontSize: {
                    xs: 20,
                    sm: 22,
                    md: 24,
                    lg: 26,
                    xl: 27,
                  },
                  fontWeight: 100,
                }}
              >
                Review and Place Order
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                sx={{
                  color: "#555",
                  fontWeight: "bold",
                }}
              >
                Please review your order carefully and click either "Place
                Order" or "Schedule Order" when done.
              </Typography>
            </Box>
            <Box mt={4}>
                hiii
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            // background: "green",
            border: "1px solid"
          }}
        >
          gggg
        </Grid>
      </Grid>
    </Container>
  );
}
