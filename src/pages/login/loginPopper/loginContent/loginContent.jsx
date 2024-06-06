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
    localStorage.removeItem("token");
    navigate("/home");
  };

  const token = localStorage.getItem("token");

  const message = token ? "Logout" : "Login";
  // console.log(">>>>>>>>>", message);

  return (
    <Box
      className="text-center menu-dropdown-container w-100 u-regular-font-size"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        paddingBlock: 4,
        paddingInline: 2,
      }}
    >
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
          {token ? (
            <div className="mb-4">
              <Button
                type="submit"
                tabIndex="13"
                data-test="log-in"
                variant="contained"
                color="primary"
                // fullWidth
                className="u-border-radius-xlarge"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </div>
          ) : (
            <div className="mb-4">
              <Button
                type="submit"
                tabIndex="13"
                data-test="log-in"
                variant="contained"
                color="primary"
                // fullWidth
                className="u-border-radius-xlarge"
                onClick={handleLogin}
              >
                Log In
              </Button>
            </div>
          )}

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
      {!token && (
        <Box className="mt-5 mb-3 pt-3">
          <Button
            // href="/accountsignup/"
            data-test="apply-for-an-account-button"
            variant="contained"
            color="primary"
            // fullWidth
            className="u-border-radius-xlarge"
            onClick={handleAccountOpen}
          >
            Apply for an Account
          </Button>
        </Box>
      )}
    </Box>
  );
}
