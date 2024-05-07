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
} from "@mui/material";
import "./contactForm.css";
import CustomInputField from "../../../components/customInputField/customInputField";

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
              <CustomInputField label="First Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputField label="Last Name" />
            </Grid>
            <Grid item xs={12}>
              <CustomInputField label="Email" />
            </Grid>
            <Grid item xs={12}>
              <CustomInputField label="usiness Phone" />
            </Grid>
            <Grid item xs={12}>
              <CustomInputField label="Account Number" />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                row
                name="PreferredMethodOfContact"
                className="radio-form-container"
              >
                <FormLabel component="legend">
                  Preferred Method of Contact
                </FormLabel>
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
              <Select
                id="InquiryType"
                name="InquiryType"
                label="Topic"
                fullWidth
              >
                <MenuItem value="Product Questions and General Questions">
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
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                id="Comments"
                name="Comments"
                label="What can we help you with?"
                minRows={5}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
