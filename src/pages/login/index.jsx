import React from "react";
import Layout from "../../components/layout";
import { Box, Grid, Paper, Typography } from "@mui/material";
import "./index.css";
import LoginForm from "./loginForm/loginForm";
import CreateAccountSection from "../../components/createAccountTextandButton/createAccountSection";

export default function Login() {
  return (
    <Layout>
      {/* <Grid
        container
        spacing={0}
        justifyContent="space-between"
        className="login-container"
      >
        <Grid item xs={"none"} sm={1} className="login-first-section">
        </Grid>

        <Grid item xs={12} sm={6} elevation={3}>
          <LoginForm />
        </Grid>

        <Grid item xs={12} sm={5} className="create-account-container">
          <CreateAccountSection
            title="Create Account"
            description="Sign up for a new Stuller account."
            buttonText="Create Account"
          />
          <CreateAccountSection
            title="Create Account"
            description="Sign up for a new Stuller account."
            buttonText="Create Account"
          />
            <Box className="help-container">
              <Typography className="help-text">Need Help?</Typography>
              <Typography className="help-description">
                Call 877-619-2174 for website technical support Mon-Fri,
                8:00am-6:00pm CST.
              </Typography>
            </Box>
        </Grid>
      </Grid> */}
      {/* <div
        style={{
          background: "red",
          width: "1230px",
          height: "350px",
          // margin: "0 auto",
          position: "relative",
          margin: "6rem auto"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          hi
        </div>
        <div
          style={{
            position: "absolute",
            top: "-70px",
            left: "5%",
            height: "510px",
            width: "50%",
            backgroundColor: "#FFF",
            border: "1px solid #BBB",
            padding: "30px 50px",
            borderRadius: "5px",
          }}
        >
          Hello
        </div>
      </div> */}

      {/* <div
        style={{
          background: "red",
          maxWidth: "1230px",
          height: "350px",
          // margin: "0 auto",
          position: "relative",
          margin: "6rem auto"
        }}
      >
        <div
          style={{
            // display: "flex",
            // justifyContent: "flex-end",
            position: "absolute",
            background: "blue",
            width: "50%",

            

          }}
        >
          hi
        </div>
        <div
          style={{
            position: "absolute",
            // top: "-70px",
            // left: "5%",
            // height: "510px",
            // width: "50%",
            backgroundColor: "#FFF",
            // border: "1px solid #BBB",
            // padding: "30px 50px",
            // borderRadius: "5px",
          }}
        >
          Hello
        </div>
      </div> */}
      <div className="parent">
        <div className="child">hi</div>
        <div className="child">hello</div>
      </div>

    </Layout>
  );
}
