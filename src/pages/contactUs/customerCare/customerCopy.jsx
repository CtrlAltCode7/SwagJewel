import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import "./customerCare.css";

const CustomerCare = () => {
  return (
    <Box id="usCustomerCare" className="customer-care">
      <Box className="customer-care-header">
        <img
          className="customer-care-header-icon"
          src="//assets.stullercloud.com/das/61889037.svg"
          alt="Customer Care Icon"
        />
        <Typography variant="h5" component="h2" sx={{ paddingBottom: 0 }}>
          U.S. Customer Care
        </Typography>
        <Box className="customer-care-times">
          <Box sx={{ paddingBottom: 1, fontSize: "15px" }}>
            Monday - Friday 8:00 a.m. - 7:00 p.m. Central
          </Box>
          <Typography variant="caption" sx={{ fontStyle: "italic" }}>
            English-speaking and Spanish-speaking associates
          </Typography>
        </Box>
      </Box>
      <Grid container>
        <Grid item xs={12} md={5}>
          <Typography
            variant=""
            sx={{
              marginBottom: 1,
              fontSize: {
                xs: 30,
                sm: 32,
                md: 34,
                lg: 36,
                xl: 37,
              },
            }}
          >
            <Link href="tel:+18008777777" underline="none">
              800-877-7777
            </Link>
          </Typography>
          <Box sx={{ paddingY: 2, display: "flex", gap: ".5rem" }}>
            <Typography component="label" sx={{ fontWeight: "bold" }}>
              Fax
            </Typography>
            <Typography>800-444-4741</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} className="customer-care-info-sections">
          <Box sx={{ marginBottom: 1, display: "flex" }}>
            <div className="customer-care-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="customer-care-info customer-care-info-with-button">
              <div>
                <Typography component="label" sx={{ fontWeight: "bold" }}>
                  Location
                </Typography>
                <Typography>302 Rue Louis XIV</Typography>
                <Typography>Lafayette, LA 70508</Typography>
              </div>
              <Box id="contact-us-map" className="customer-care-info-button">
                <a
                  className="sbtn sbtn-secondary sbtn-micro"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); /* Handle map modal opening */
                  }}
                >
                  View on Map
                </a>
              </Box>
            </div>
          </Box>
          <Box sx={{ marginBottom: 1, marginTop: 2, display: "flex" }}>
            <div className="customer-care-icon">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="customer-care-info">
              <Typography component="label" sx={{ fontWeight: "bold" }}>
                Mailing Address
              </Typography>
              <Typography>P.O. Box 87777</Typography>
              <Typography>Lafayette, LA 70508</Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerCare;
