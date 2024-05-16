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
} from "@mui/material";
import "./loginForm.css";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

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

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let usernameErr = "";
    let passwordErr = "";

    if (!username) {
      usernameErr = "Email is required";
    } else if (!emailPattern.test(username)) {
      usernameErr = "Please enter a valid email address";
    }

    if (!password) {
      passwordErr = "Password is required";
    }

    setUsernameError(usernameErr);
    setPasswordError(passwordErr);

    if (!username && !password) {
      setUsernameError("Email is required");
      setPasswordError("Password is required");
      return;
    }

    if (!usernameErr && !passwordErr) {
      // alert("hi");
      console.log('first', username);
      console.log('first', password);

    }
  };

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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="login-btn"
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginForm;
