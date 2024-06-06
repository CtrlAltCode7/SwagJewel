import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Switch,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import "./loginForm.css";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Email validation regex pattern
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   // Validation logic
  //   if (!username) {
  //     setUsernameError("Email is required");
  //     return;
  //   }
  //   if (!emailPattern.test(username)) {
  //     setUsernameError("Please enter a valid email address");
  //     return;
  //   }
  //   if (!password) {
  //     setPasswordError("Password is required");
  //     return;
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailPattern = /^[a-zA-Z0-9]+$/;

    let usernameErr = "";
    let passwordErr = "";

    if (!username) {
      usernameErr = "Username is required";
    } else if (!emailPattern.test(username)) {
      usernameErr = "Please enter a valid Username";
    }

    if (!password) {
      passwordErr = "Password is required";
    }

    setUsernameError(usernameErr);
    setPasswordError(passwordErr);

    if (!username && !password) {
      setUsernameError("Username is required");
      setPasswordError("Password is required");
      return;
    }

    if (!usernameErr && !passwordErr) {
      // alert("hi");
      setLoading(true);
      setNotification("");
      console.log("first", username);
      console.log("first", password);

      let data = JSON.stringify({
        userName: username,
        password: password,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://api.swagjewelers.com/api/user/authenticate",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          if (response.status == 200 && response.data.message == "Success") {
           
           
            navigate("/verifyOTP", { state: { message: response.data } });
          }
       
        })
        .catch((error) => {
          const message = error.response.data.message;
          setNotification(message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (notification && notification.trim().length > 0) {
      setOpenSnackbar(true);
    }
  }, [notification]);

  return (
    <Container id="loginFormContainer">
      <Typography
        // variant=""
        sx={{
          float: "left",
          fontSize: {
            xs: 30,
            sm: 32,
            md: 34,
            lg: 36,
            xl: 37,
          },
        }}
        className="loginTitle"
      >
        Log In
      </Typography>
      <div style={{ float: "right" }}>
        <a
          target="_blank"
          title="View TrustedSite Certification"
          href="https://www.trustedsite.com/verify?host=stuller.com"
        >
          <img
            border="0"
            height="50"
            width="120"
            src="https://cdn.ywxi.net/meter/stuller.com/213.svg"
            alt="TrustedSite Certification"
          />
        </a>
      </div>
      <form onSubmit={handleSubmit} id="login-form" method="post" className="">
        <input id="returnUrl" name="returnUrl" type="hidden" value="" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel htmlFor="loginid" shrink className="user-label">
              Username
            </InputLabel>
            <TextField
              id="loginid"
              name="userName"
              fullWidth
              size="small"
              value={username}
              onChange={handleUsernameChange}
              helperText={usernameError}
              error={Boolean(usernameError)}
              InputProps={{
                endAdornment: <span className="fa fa-user" id="user-icon" />,
              }}
              disableAnimation={true}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="password" shrink className="user-password">
              Password
            </InputLabel>
            <TextField
              id="password"
              name="password"
              variant="outlined"
              type="password"
              fullWidth
              size="small"
              value={password}
              onChange={handlePasswordChange}
              helperText={passwordError}
              error={Boolean(passwordError)}
              InputProps={{
                endAdornment: <span className="fa fa-lock" id="user-icon" />,
              }}
              disableAnimation={true}
            />
          </Grid>
          <Grid item xs={12} className="recover-box">
            <Link href="/forgot/">Recover username or password</Link>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch id="remember" size="small" />}
              label="Keep me signed in on this computer"
              className="signed-in"
            />
            <input id="rememberMe" type="hidden" name="rememberMe" />
          </Grid>
          <Grid item xs={12} className="login-btn-container">
            {loading ? (
              <CircularProgress size={24} color="primary" />
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="login-btn"
              >
                Log In
              </Button>
            )}
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
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
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginForm;
