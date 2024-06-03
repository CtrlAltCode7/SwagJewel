import * as React from "react";
import { Box, Checkbox, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginContent() {
  const handleSubmit = (event) => {
    event.preventDefault();
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
        </Box>
      </form>
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
