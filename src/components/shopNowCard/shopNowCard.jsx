import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
// import data from "./data.json";
import "./shopNowCard.css";

const CardContainer = styled(Grid)({
  padding: "0 2rem",
});

const Card = styled(Grid)({
  border: "none",
  padding: "1rem",
  height: "280px",
  backgroundPosition: "100% !important",
  backgroundRepeat: "no-repeat !important",
  backgroundSize: "cover !important",
});

const CardText = styled("div")({
  padding: "20px",
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
  "@media (max-width: 991px)": {},
});

const AccountCard = ({ data }) => {
  return (
    <RootContainer>
      <Grid container spacing={3}>
      {data?.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <Card
              sx={{
                background: `url(${item.backgroundImage})`,
              }}
            >
              <CardText
                sx={{
                  alignItems: item.right ? "flex-end" : "flex-start",
                  textAlign: item.right ? "end" : "start",
                }}
              >
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
                  className={`card-title ${item.className}`}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  gutterBottom
                  sx={{
                    maxWidth: "60%",
                  }}
                  className={`card-title ${item.className}`}
                >
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  href={item.buttonLink}
                  className="card-btn"
                  sx={{
                    alignSelf: item.right ? "flex-end" : "flex-start",
                  }}
                >
                  {item.buttonText}
                </Button>
              </CardText>
            </Card>
          </Grid>
        ))}
      </Grid>
    </RootContainer>
  );
};

export default AccountCard;
