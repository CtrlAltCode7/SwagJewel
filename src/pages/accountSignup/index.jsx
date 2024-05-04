import React from "react";
import SignUpForm from "./signUpForm/signUpForm";
import BusinessFeatures from "./businessFeatures/businessFeatures";
import AccountCard from "./cards/accountCard";
import LocateJewellery from "./locateJewellery/locateJewellery";
import Layout from "../../components/layout/index";

export default function AccountSignUp() {
  return (
    <>
      <Layout>
        <SignUpForm />
        <BusinessFeatures />
        <AccountCard />
        <LocateJewellery />
      </Layout>
    </>
  );
}
