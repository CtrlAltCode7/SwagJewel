import React from "react";
import { Grid, Typography, Link, Button } from "@mui/material";
import { styled } from "@mui/system";
import "./accountCard.css";

const CardContainer = styled(Grid)({
  padding: "0 2rem",
});

const Card = styled(Grid)({
  // backgroundSize: "cover",
  // backgroundPosition: "100%",
  border: "none",
  padding: "1rem",
  height: "280px",
  // backgroundPosition: "center !important",
  // backgroundSize: "cover !important",
  backgroundPosition: "100% !important",
  backgroundRepeat: "no-repeat !important",
  backgroundSize: "cover !important",
});

const CardText = styled("div")({
  padding: "20px",
  // background: "red",
  height: "230px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const RootContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  maxWidth: "1250px",
  margin: "3rem auto",
  padding: "0 20px",
  // height: "300px",

  // maxHeight: "300px",
  // height: "auto",
  "@media (max-width: 991px)": {
    // flexDirection: "column !important",
    // height: "auto",
    // margin: "3rem auto",
  },
});

const LeftContent = styled("div")({
  // height: "300px",
  // height: "100%",
  // "@media (max-width: 991px)": {},
});

const RightContent = styled("div")({
  // height: "300px",
  // height: "100%",
  // "@media (max-width: 991px)": {},
});

export default function AccountCard() {
  return (
    <RootContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <LeftContent>
            <Card
              sx={{
                background:
                  "url(https://meteor.stullercloud.com/das/75918658?scl=1&wid=603&hei=270&align=1,1&bgc=%23eeeeee&$sharpenpng$)",
                // backgroundRepeat: "round",
                // height: "300px",
              }}
            >
              <CardText>
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
                  }}
                  className="card-title"
                >
                  Just need tools and supplies?
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  gutterBottom
                  sx={{
                    maxWidth: "60%",
                    // marginBottom: "1%",
                  }}
                  className="card-title"
                >
                  If you are in the <strong>United States</strong> and paying by
                  credit card or COD, no account is required to purchase select
                  tools, equipment, non-watch batteries, and basic packaging.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  href="/categories/9"
                  className="card-btn"
                >
                  Shop Now
                </Button>
              </CardText>
            </Card>
          </LeftContent>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <RightContent>
            <Card
              sx={{
                background:
                  "url(https://meteor.stullercloud.com/das/75918662?scl=1.2&wid=600&hei=200&align=1,0&extend=0,10,50,-10&bgc=%23eeeeee&$sharpenpng$)",
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
                  className="card-title"
                >
                  Need website access for an existing account?
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  gutterBottom
                  sx={{
                    maxWidth: "45%",
                    // height: "85px",
                  }}
                  className="card-title"
                >
                  Take advantage of <strong>convenient online ordering</strong>{" "}
                  by adding a Stuller.com login to your existing Stuller
                  account.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  href="/signup/existingaccount/"
                  className="card-btn"
                >
                  Get Access
                </Button>
              </CardText>
            </Card>
          </RightContent>
        </Grid>
      </Grid>
    </RootContainer>
  );
}
