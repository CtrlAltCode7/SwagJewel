import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  TextareaAutosize,
  FormLabel,
  Box,
  InputLabel,
  FormControl,
} from "@mui/material";
import "./contactForm.css";
import CustomInputField from "../../../components/customInputField/customInputField";
import { styled } from "@mui/system";
import ReCAPTCHA from "react-google-recaptcha";

const StyledInputLabel = styled(`InputLabel`)({
  color: "#555",
  fontWeight: "bold",
  fontSize: "14px",
});

export default function ContactForm() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Typography
          sx={{
            fontSize: {
              xs: 20,
              sm: 22,
              md: 24,
              lg: 26,
              xl: 27,
            },
          }}
          className="form-heading"
        >
          We can contact you
        </Typography>
        <form
          action="/contactus/"
          method="post"
          //   onSubmit={handleContactUsFormSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CustomInputField
                label="First Name"
                className="contact-us-form-label"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputField
                label="Last Name"
                className="contact-us-form-label"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInputField
                label="Email"
                className="contact-us-form-label"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInputField
                label="Business Phone"
                className="contact-us-form-label"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInputField
                label="Account Number"
                className="contact-us-form-label"
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                row
                name="PreferredMethodOfContact"
                className="radio-form-container"
              >
                <StyledInputLabel component="legend">
                  Preferred Method of Contact
                </StyledInputLabel>
                <Box>
                  <FormControlLabel
                    value="Email"
                    control={<Radio id="pcEmail" />}
                    label="Email"
                    className="radio-email-field"
                  />
                  <FormControlLabel
                    value="Business Phone"
                    control={<Radio id="pcPhone" />}
                    label="Business Phone"
                  />
                </Box>
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <StyledInputLabel id="inquiry-type-label">Topic</StyledInputLabel>

              <FormControl fullWidth>
                <Select
                  id="InquiryType"
                  name="InquiryType"
                  labelId="inquiry-type-label"
                  fullWidth
                  displayEmpty
                  disableScrollLock={true}
                  MenuProps={{ disableScrollLock: true }}
                  InputLabelProps={{ shrink: false }}
                  slotProps={{
                    root: {
                      sx: {
                        backgroundColor: "#efefef",
                        "& .MuiSelect-outlined": {
                          display: "flex",
                          padding: "10px 14px !important",
                        },
                        ".MuiNativeSelect-icon": {
                          color: "red",
                        },
                        // width: "90%"
                      },
                    },
                  }}
                >
                  <MenuItem value="Product Questions and General Questions"  selected>
                    Product Questions and General Questions
                  </MenuItem>
                  <MenuItem value="Questions about an Existing Order">
                    Questions about an Existing Order
                  </MenuItem>
                  <MenuItem value="Create a Stuller Account">
                    Create a Stuller Account
                  </MenuItem>
                  <MenuItem value="Account Balance Inquiries">
                    Account Balance Inquiries
                  </MenuItem>
                  <MenuItem value="Diamonds and Gemstones">
                    Diamonds and Gemstones
                  </MenuItem>
                  <MenuItem value="Showcase or Ecommerce Solutions">
                    Showcase or Ecommerce Solutions
                  </MenuItem>
                  <MenuItem value="Tools Technician Support">
                    Tools Technician Support
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <StyledInputLabel id="inquiry-type-label2">
                What can we help you with?
              </StyledInputLabel>

              <TextareaAutosize
                id="Comments"
                name="Comments"
                label="What can we help you with?"
                minRows={5}
                fullWidth
                className="form-text-area"
              />
            </Grid>
            <Grid
              sx={{
                paddingLeft: "1rem",
                marginBottom:".5rem"
              }}
            >
              <ReCAPTCHA
                sitekey="6LdR8fMpAAAAAKHLMU3-msWLFoo6EunyKe8KE5qp"
                // onChange={handleCaptchaChange}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit" disabled>
            Send
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
