import React from "react";
import { Box, Grid, Typography, Link, Button } from "@mui/material";
import "./customerCare.css";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";

const CustomerCare = ({ data }) => {
  return (
    <Box id={data.id} className="customer-care">
      <Box className="customer-care-header">
        <img
          className="customer-care-header-icon"
          src={data.iconSrc}
          alt="Customer Care Icon"
        />
        <Typography
          variant="h5"
          component="h2"
          className="customer-care-title-color"
        >
          {data.title}
        </Typography>
        <Box className="customer-care-times">
          <Box sx={{ paddingBottom: 1, fontSize: "15px", color: "#555" }}>
            {data.schedule}
          </Box>
          <Typography
            variant="caption"
            sx={{ fontStyle: "italic" }}
            className="customer-care-title-color"
          >
            {data.associates}
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
                // xl: 37,
              },
            }}
            className="customer-care-title-color"
          >
            <Link
              href={data.phoneNumberHref}
              underline="none"
              className="customer-care-title-color"
            >
              {data.phoneNumber}
            </Link>
          </Typography>
          <Box
            sx={{ paddingY: 2, display: "flex", gap: ".5rem", color: "#555" }}
          >
            {data.fax && (
              <>
                <Typography
                  component="label"
                  sx={{ fontWeight: "bold", color: "#555" }}
                  className="customer-care-title-color"
                >
                  Fax
                </Typography>
                <Typography className="customer-care-title-color">
                  {data.fax}
                </Typography>
              </>
            )}
            {data.contactMethod && typeof data.contactMethod === "string" && (
              <>
                <Typography
                  component="label"
                  sx={{ fontWeight: "bold" }}
                  className="customer-care-title-color"
                >
                  {data.contactMethodLabel}
                </Typography>
                <Typography className="customer-care-title-color">
                  {data.contactMethod}
                </Typography>
              </>
            )}
            {data.contactMethod && typeof data.contactMethod === "object" && (
              <>
                {Object.entries(data.contactMethod).map(([key, value]) => (
                  <div key={key} style={{ display: "flex", gap: "1rem" }}>
                    <Typography
                      component="label"
                      sx={{ fontWeight: "bold" }}
                      className="customer-care-title-color"
                    >
                      {key.toUpperCase()}
                    </Typography>
                    <Typography className="customer-care-title-color">
                      {value}
                    </Typography>
                  </div>
                ))}
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={7} className="customer-care-info-sections">
          {data?.location?.address && (
            <Box sx={{ marginBottom: 1, display: "flex" }}>
              <div className="customer-care-icon">
                {/* <i className="fa fa-map-marker"></i> */}
                <PlaceIcon
                  fontSize="medium"
                  sx={{
                    color: "#6fa8d1",
                  }}
                />
              </div>

              <div className="customer-care-info customer-care-info-with-button">
                <div>
                  <Typography
                    component="label"
                    sx={{ fontWeight: "bold" }}
                    className="customer-care-title-color"
                  >
                    Location
                  </Typography>
                  <Typography>{data.location.address}</Typography>
                  <Typography className="customer-care-title-color">
                    {data.location.city}, {data.location.state}{" "}
                    {data.location.zip}
                  </Typography>
                </div>
                <Box id="contact-us-map" className="customer-care-info-button">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      fontSize: "12px",
                      backgroundColor: "#fff",
                      border: "1px solid #000",
                      color: "#555",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "#999",
                        color: "#ffffff",
                        border: "1px solid #999",
                      },
                    }}
                  >
                    View on Map
                  </Button>
                </Box>
              </div>
            </Box>
          )}

          <Box sx={{ marginBottom: 1, marginTop: 2, display: "flex" }}>
            <div className="customer-care-icon">
              {/* <i className="fa fa-envelope"></i> */}
              <EmailIcon
                fontSize="medium"
                sx={{
                  color: "#6fa8d1",
                }}
              />
            </div>
            <div className="customer-care-info">
              <Typography
                component="label"
                sx={{ fontWeight: "bold" }}
                className="customer-care-title-color"
              >
                Mailing Address
              </Typography>
              <Typography className="customer-care-title-color" variant="body2">
                {data.mailingAddress}
              </Typography>
              <Typography className="customer-care-title-color" variant="body2">
                {data.mailingCity}, {data.mailingState} {data.mailingZip}
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerCare;
