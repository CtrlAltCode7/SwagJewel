import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import "./createAccountSection.css"

const CreateAccountSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography className="create-account-typo">Create Account</Typography>
      </Grid>
      <Grid item xs={12} className="create-account-label-box" sx={{
        "&.MuiGrid-item":{
            paddingTop: 0
        }
      }}>
        <Typography variant="body2" className="create-account-label" >Sign up for a new Stuller account.</Typography>
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
        >
          Create Account
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateAccountSection;
