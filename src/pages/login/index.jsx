import React from "react";
import Layout from "../../components/layout";
import { Box, Grid, Paper, Typography } from "@mui/material";
import "./index.css";
import LoginForm from "./loginForm/loginForm";
import AccountSection from "../../components/accountSection/accountSection";

export default function Login() {
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
          <AccountSection
            title="Get Website Login"
            description="Create a login for an existing Stuller account."
            buttonText="Get Login"
          />
        </div>
      </div>
    </Layout>
  );
}
