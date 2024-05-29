import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import GroupIcon from "@mui/icons-material/Group";

const StyledSection = styled("section")({
  padding: "50px 0",
  backgroundColor: "#eee",
});

const StyledIcon = styled("div")({
  color: "#6fa8d1!important",
  fontSize: "46px",
  marginBottom: "30px",
});

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      className="business-feature-container"
      textAlign={"center"}
      marginBottom={"1.7rem"}
    >
      <StyledIcon>{icon}</StyledIcon>
      <Typography variant="body2" fontWeight="bold" marginBottom="10px">
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </Grid>
  );
};

export default function BusinessFeatures() {
  return (
    <StyledSection>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <FeatureCard
            icon={<i className="fas fa-group" />}
            title="Join a family of professionals"
            description="We protect our customers by only allowing qualified businesses and students to be account holders."
          />
          <FeatureCard
            icon={<i className="fa fa-check-circle" />}
            title="Integrity and innovation since 1970"
            description="We've been a trusted partner to jewelry retailers, manufacturers, students, and online sellers for decades."
          />
          <FeatureCard
            icon={<i className="fa fa-plane" />}
            title="Broad selection and fast delivery"
            description="Rely on Stuller for just in time delivery of everything you need for your jewelry operations."
          />
        </Grid>
      </Container>
    </StyledSection>
  );
}
