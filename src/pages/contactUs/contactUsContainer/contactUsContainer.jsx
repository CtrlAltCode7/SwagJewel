import React from "react";
import "./contactUsContainer.css";
import { Grid, Typography } from "@mui/material";
import ContactForm from "../contactForm/contactForm";

export default function ContactUsContainer() {
  return (
    <Grid container maxWidth={"1260px"} margin={"0 auto"}>
      <Grid item xs={12} sm={6} md={8}>
        <Typography>hi</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{
        background: "#fff"
      }}>
        <ContactForm />
      </Grid>
    </Grid>
  );
}
