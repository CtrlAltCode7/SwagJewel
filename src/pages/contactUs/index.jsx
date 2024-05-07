import React from "react";
import Layout from "../../components/layout";
import { Container, Typography } from "@mui/material";
import ContactUsHeader from "./contactUsHeader/contactUsHeader";
import ContactUsContainer from "./contactUsContainer/contactUsContainer";

export default function contactUs() {
  return (
    <Layout>
      <ContactUsHeader />
      <ContactUsContainer />
    </Layout>
  );
}
