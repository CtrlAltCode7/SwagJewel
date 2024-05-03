import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./signUpForm.css";
import CustomInputField from "../../../components/customInputField/customInputField";
import AccountTypeSelector from "../accountTypeSelector/accountTypeSelector";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

function SignUpForm() {
  const handleCaptchaChange = () => {
    console.log("recaptcha");
  };
  return (
    <Grid
      container
      spacing={0}
      className="sign-up-container"
      sx={{
        background:
          "url(https://meteor.stullercloud.com/das/75918656?scl=1.1&fmt=png) no-repeat right, linear-gradient(to top, rgba(3, 3, 3, 0.3) 0%, rgba(3, 3, 3, 0) 100%), url(https://meteor.stullercloud.com/das/52699161?scl=1&$sharpenpng$) repeat left",
        backgroundSize: "auto",
        height: "600px",
        margin: "0 auto",
        "@media (max-width: 600px)": {
          height: "auto",
          paddingLeft: "1.5rem",
          background:
            "url(https://meteor.stullercloud.com/das/52699161?scl=1&$sharpenpng$)",
        },
      }}
    >
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={10}>
            <Box className="signup-title-container">
              <Typography
                className="signup-title"
                sx={{
                  fontSize: {
                    xs: 30,
                    sm: 32,
                    md: 34,
                    lg: 36,
                    xl: 37,
                  },
                }}
              >
                Open a Stuller account and open yourself to success
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <div className="custom-field-container">
              <CustomInputField label={"username"} />
            </div>
            <div className="custom-field-container">
              <CustomInputField label={"email"} />
            </div>
            <div className="custom-field-container custom-field-recaptcha account-type-selector">
              <AccountTypeSelector />
            </div>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div className="custom-field-container">
              <CustomInputField label={"Lastname"} />
            </div>
            <div className="custom-field-container">
              <CustomInputField label={"phone"} />
            </div>
            <div className="custom-field-container custom-field-recaptcha account-type-selector1">
              <AccountTypeSelector />
            </div>
            <div className="custom-field-container custom-field-recaptcha">
              <ReCAPTCHA
                sitekey="Your client site key"
                onChange={handleCaptchaChange}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {/* First sub-column */}
          <Grid item xs={12} sm={2}>
            {/* Content for the second part */}
            <div style={{ backgroundColor: "ActiveBorder" }}>
              {/* <h2>Part B</h2> */}
            </div>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Box className="apply-btn-container">
              <Button
                type="submit"
                data-test="apply-now-button"
                form="account-signup-form"
                variant="contained"
                fullWidth
                className="apply-btn"
              >
                Apply Now
              </Button>
            </Box>
            <Box className="privacy-container">
              <Typography variant="body2" className="privacy-title">
                By completing this form you are agreeing to our{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  privacy policy
                </Link>
                . You may also receive emails regarding your SWAG Jewelers
                account.
              </Typography>
            </Box>
          </Grid>
          {/* Second sub-column */}
        </Grid>
      </Grid>

      {/* Second column */}

      {/* Second part */}
      <Grid item xs={12} sm={2} md={4} lg={6}>
        {/* Content for the second part */}
        {/* <div style={{ height: "100px" }}>
          <h2>Part B</h2>
          <p>
            This is the content for Part B. You can add any text, images, or
            other elements here.
          </p>
        </div> */}
      </Grid>
    </Grid>
  );
}

export default SignUpForm;
