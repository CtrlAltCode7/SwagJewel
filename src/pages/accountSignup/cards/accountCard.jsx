import React from "react";
import { Grid, Typography, Link, Button } from "@mui/material";
import { styled } from "@mui/system";

const CardContainer = styled(Grid)({
    padding: "0 2rem", // Add padding from left and right
  });
  
  const Card = styled(Grid)({
    backgroundSize: "cover",
    backgroundPosition: "100%",
    border: "none",
    padding: "1rem", // Add padding to create gap between cards
  });

const CardText = styled("div")({
  padding: "20px",
});

export default function AccountCard() {
  return (
    <CardContainer
      container
      spacing={3}
      sx={{
        // padding: "4rem 6rem",
      }}
    >
      <Card
        item
        xs={12}
        md={6}
        sx={{
          background:
            "url(https://meteor.stullercloud.com/das/75918658?scl=1&wid=603&hei=270&align=1,1&bgc=%23eeeeee&$sharpenpng$)",
          backgroundRepeat: "round",
          // margin: "1rem .5rem"
        }}
      >
        <CardText>
          <Typography
            // component="h2"
            gutterBottom
            sx={{
              fontSize: {
                xs: 20,
                sm: 22,
                md: 24,
                lg: 26,
                xl: 27,
              },
            }}
          >
            Just need tools and supplies?
          </Typography>
          <Typography
            variant="body1"
            component="p"
            gutterBottom
            sx={{
              maxWidth: "60%",
            }}
          >
            If you are in the <strong>United States</strong> and paying by
            credit card or COD, no account is required to purchase select tools,
            equipment, non-watch batteries, and basic packaging.
          </Typography>
          <Button variant="contained" color="secondary" href="/categories/9">
            Shop Now
          </Button>
        </CardText>
      </Card>
      <Card
        item
        xs={12}
        md={6}
        sx={{
          background:
            "url(https://meteor.stullercloud.com/das/75918662?scl=1.2&wid=600&hei=200&align=1,0&extend=0,10,50,-10&bgc=%23eeeeee&$sharpenpng$)",
          backgroundRepeat: "round",
        }}
      >
        <CardText>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontSize: {
                xs: 20,
                sm: 22,
                md: 24,
                lg: 26,
                xl: 27,
              },
            }}
          >
            Need website access for an existing account?
          </Typography>
          <Typography
            variant="body1"
            component="p"
            gutterBottom
            sx={{
              maxWidth: "60%",
            }}
          >
            Take advantage of <strong>convenient online ordering</strong> by
            adding a Stuller.com login to your existing Stuller account.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href="/signup/existingaccount/"
          >
            Get Access
          </Button>
        </CardText>
      </Card>
    </CardContainer>
  );
}
