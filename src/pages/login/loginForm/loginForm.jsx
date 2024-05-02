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

const LoginForm = () => {
  return (
    <Container id="loginFormContainer">
      <Typography
        // variant=""
        sx={{
          float: "left",
          fontSize: {
            xs: 30, // Font size for extra small screens
            sm: 32, // Font size for small screens
            md: 34, // Font size for medium screens
            lg: 36, // Font size for large screens
            xl: 37, // Font size for extra large screens
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
      <form action="/login/" id="login-form" method="post" className="clear">
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
              InputProps={{
                endAdornment: <span className="fa fa-user" id="user-icon" />,
              }}
              disableAnimation={true}

              //   label="Username"
              //   onClick={handleLabelWidth}
              //   labelWidth={labelWidth}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              htmlFor="password"
              shrink
              className="user-password"
              //   id="user-icon"
            >
              Password
            </InputLabel>
            <TextField
              id="password"
              name="password"
              //   label="Password"
              variant="outlined"
              type="password"
              fullWidth
              size="small"
              InputProps={{
                endAdornment: <span className="fa fa-lock" id="user-icon" />,
              }}
              //   inputProps={{
              //     shrink: true,
              //     endAdornment: (
              //       <InputAdornment position="end">
              //         <AccountCircle />
              //       </InputAdornment>
              //     ),
              //   }}
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