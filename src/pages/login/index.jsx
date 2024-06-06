import React, { useEffect } from "react";
import Layout from "../../components/layout";
import { Box, Grid, Paper, Typography } from "@mui/material";
import "./index.css";
import LoginForm from "./loginForm/loginForm";
import AccountSection from "../../components/accountSection/accountSection";
import { useLocation } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function Login() {
  const location = useLocation();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const message = location.state?.message;

  useEffect(() => {
    if (message) {
      setOpenSnackbar(true);
    }
  }, [message]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <Layout>
      <div className="parent">
        <div className="child">
          <LoginForm />
        </div>
        <div className="child">
          <AccountSection
            title="Create Account"
            description="Sign up for a new Stuller account."
            buttonText="Create Account"
          />
        </div>
      </div>
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
          severity="success"
          sx={{ bgcolor: "green" }}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </Layout>
  );
}
