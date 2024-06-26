import {
  Box,
  Button,
  CircularProgress,
  Grid,
  InputLabel,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./signUpForm.css";
import CustomInputField from "../../../components/customInputField/customInputField";
import AccountTypeSelector from "../accountTypeSelector/accountTypeSelector";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { postData } from "../../../helpers";
import axios from "axios";
import MuiAlert from '@mui/material/Alert';

function SignUpForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedRadioValue, setSelectedRadioValue] = useState("professional");
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [notification, setNotification] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (event) => {
    setSelectedRadioValue(event.target.value);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (notification) {
      setOpenSnackbar(true);
    }
  }, [notification]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name, value);
    if (name === "username") setUsername(value);
    else if (name === "email") setEmail(value);
    else if (name === "lastname") setLastname(value);
    else if (name === "password") setPassword(value);
    else if (name === "firstname") setFirstName(value);
    else if (name === "Confirm Password") setConfirmPassword(value);
    else if (name === "phone") setPhone(value);

    // else if (name === "password") setPhone(value);
  };

  // const validateForm = () => {
  //   const errors = {};
  //   if (!username.trim()) errors.username = "Username is required";
  //   if (!email.trim()) errors.email = "Email is required";
  //   if (!lastname.trim()) errors.lastname = "Lastname is required";
  //   if (!password.trim()) errors.password = "Phone is required";
  //   // You can add more validations as needed
  //   return errors;
  // };

  const validateForm = () => {
    const errors = {};
    const nameRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!username.trim()) {
      errors.username = "Username is required";
    } else if (!nameRegex.test(username.trim())) {
      errors.username = "Username should be alphanumeric";
    }

    if (!firstname.trim()) {
      errors.firstname = "Firstname is required";
    } else if (!nameRegex.test(firstname.trim())) {
      errors.firstname = "Firstname should be alphanumeric";
    }

    if (!lastname.trim()) {
      errors.lastname = "Lastname is required";
    } else if (!nameRegex.test(lastname.trim())) {
      errors.lastname = "Lastname should be alphanumeric";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email.trim())) {
      errors.email = "Invalid email format";
    }

    if (!phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!phoneRegex.test(phone.trim())) {
      errors.phone = "Phone should be 10 digits";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    }

    if (!confirmPassword.trim()) {
      errors.confirmpassword = "Confirm Password is required";
    }

    if (password.trim() !== confirmPassword.trim()) {
      errors.confirmpassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setLoading(true);
      setNotification("");
      try {
        const payload = JSON.stringify({});
        const phoneNumberWithCountryCode = phone ? countryCode + phone : "";
        setLoading(true);
        const response = await axios.post(
          "https://api.swagjewelers.com/api/user/register",
          {
            userName: username,
            email: email,
            phone: phoneNumberWithCountryCode,
            firstName: firstname,
            lastName: lastname,
            password: password,
            accountOption: selectedRadioValue,
            RoleId: 1,
          }
        );
        if (response.status == 200) {
          const message = response.data.message;
          // setNotification(message);
          navigate("/login", { state: { message: message } });
        }
      } catch (error) {
        // Handle errors here
        console.error("Error:", error.message);
        const message = error.response.data.message;
        // alert(message);
        setNotification(message);
      } finally {
        setLoading(false);
      }

    }
  };

  const handlePostRequest = async () => {

  };

  const handleApplyButtonClick = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Proceed with form submission
      setErrors({});
      // Your form submission logic here
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
        // height: "600px",
        margin: "0 auto",
        paddingTop: "2rem",
        paddingBlock: "2rem",
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
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={5}>
              <div className="custom-field-container">
                <CustomInputField
                  label={"firstname"}
                  value={firstname}
                  onChange={handleInputChange}
                  error={errors.firstname}
                />
              </div>
              <div className="custom-field-container">
                <CustomInputField
                  label={"username"}
                  value={username}
                  onChange={handleInputChange}
                  error={errors.username}
                />
              </div>
              <div className="custom-field-container">
                <CustomInputField
                  label={"phone"}
                  value={phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                  countryCode={countryCode}
                  setCountryCode={setCountryCode}
                  // selectedRadioValue
                />
              </div>
              <div className="custom-field-container custom-field-recaptcha account-type-selector">
                <AccountTypeSelector
                  selectedRadioValue={selectedRadioValue}
                  handleChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className="custom-field-container">
                <CustomInputField
                  label={"lastname"}
                  value={lastname}
                  onChange={handleInputChange}
                  error={errors.lastname}
                />
              </div>
              <div className="custom-field-container">
                <CustomInputField
                  label={"email"}
                  value={email}
                  onChange={handleInputChange}
                  error={errors.email}
                  // selectedRadioValue
                />
              </div>
              <div className="custom-field-container">
                <CustomInputField
                  label={"password"}
                  value={password}
                  onChange={handleInputChange}
                  error={errors.password}
                />
              </div>
              <div className="custom-field-container">
                <CustomInputField
                  label={"Confirm Password"}
                  value={confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmpassword}
                />
              </div>
              <div className="custom-field-container custom-field-recaptcha account-type-selector1">
                <AccountTypeSelector />
              </div>
              <div className="custom-field-container custom-field-recaptcha">
                <ReCAPTCHA sitekey="Your client site key" />
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
                {/* <Button
                  type="submit"
                  data-test="apply-now-button"
                  form="account-signup-form"
                  variant="contained"
                  fullWidth
                  className="apply-btn"
                >
                  Apply Now
                </Button> */}
                {/* <button type="submit">Now</button> */}
                {loading ? (
                  <CircularProgress size={24} color="primary" />
                ) : (
                  <Button
                    type="submit"
                    data-test="apply-now-button"
                    form="account-signup-form"
                    variant="contained"
                    fullWidth
                    className="apply-btn"
                    onClick={handleSubmit}
                  >
                    Apply Now
                  </Button>
                )}
                <Snackbar
                  open={openSnackbar}
                  autoHideDuration={3000}
                  onClose={handleCloseSnackbar}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}

                >
                  <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleCloseSnackbar}
                    severity="error"
                  >
                    {notification}
                  </MuiAlert>
                </Snackbar>
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
        </form>
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
