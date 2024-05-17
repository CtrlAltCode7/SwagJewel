import * as React from "react";
import { Box, Checkbox, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginContent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleAccountOpen = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    navigate("/");
  };

  const token = localStorage.getItem("token");

  console.log('first', token)

  return (
    <Box className="text-center menu-dropdown-container w-100 u-regular-font-size">
      <form onSubmit={handleSubmit} className="u-relative">
        <Box>
          {/* <div className="form-input-group">
            <TextField
              placeholder="Username..."
              type="text"
              spellCheck="false"
              tabIndex="10"
              data-test="username"
            />
          </div> */}
          {/* <div className="form-input-group">
            <TextField
              placeholder="Password..."
              type="password"
              spellCheck="false"
              autoComplete="false"
              tabIndex="11"
              data-test="password"
            />
          </div> */}
          <div className="mb-4">
              <Button
                type="submit"
                tabIndex="13"
                data-test="log-in"
                variant="contained"
                color="primary"
                fullWidth
                className="u-border-radius-xlarge"
                onClick={handleLogin}
              >
                Log In
              </Button>
           
          </div>
          {/* <div className="form-input-group my-4">
            <Checkbox
              id="remember-me"
              tabIndex="12"
              className="switch"
              style={{ display: "inline", opacity: 0, visibility: "visible" }}
            />
            <label htmlFor="remember-me" style={{ marginLeft: "-15px" }}>
              Keep me signed in on this computer
            </label>
          </div> */}
        </Box>
      </form>
      {/* <Box className="my-3">
        <Typography
          component="a"
          href="/forgot?returnUrl=%2Fbrowse%2Fwedding-and-engagement%2Fengagements%2Fsolitaire%2F%3Fpage%3D1"
          className="primary-link"
        >
          Recover username or password
        </Typography>
      </Box> */}
      <Box className="mt-5 mb-3 pt-3">
          <Button
            // href="/accountsignup/"
            data-test="apply-for-an-account-button"
            variant="contained"
            color="primary"
            fullWidth
            className="u-border-radius-xlarge"
            onClick={handleAccountOpen}
          >
            Apply for an Account
          </Button>
      </Box>
    </Box>
  );
}
