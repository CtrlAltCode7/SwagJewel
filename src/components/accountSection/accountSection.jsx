import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import "./accountSection.css";

const AccountSection = ({ title, description, buttonText }) => {
  return (
    <Grid container spacing={2} className="create-account--section-container">
      <Grid item xs={12}>
        <Typography className="create-account-typo">{title}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        className="create-account-label-box"
        sx={{
          "&.MuiGrid-item": {
            paddingTop: 0,
          },
        }}
      >
        <Typography variant="body2" className="create-account-label">
          {description}
        </Typography>
      </Grid>
      <Grid item xs={8} xsOffset={2} sm={12} smOffset={0} md={8} lg={5}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          onClick={() => {
            window.location = "/accountsignup/";
          }}
          className="create-account-btn"
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};

export default AccountSection;
