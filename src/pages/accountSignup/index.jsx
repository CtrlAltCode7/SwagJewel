import React from "react";
import SignUpForm from "./signUpForm/signUpForm";
import BusinessFeatures from "./businessFeatures/businessFeatures";
import AccountCard from "./cards/accountCard";
import LocateJewellery from "./locateJewellery/locateJewellery";

export default function AccountSignUp() {
  return (
    <>
      <SignUpForm />
      <BusinessFeatures />
      <AccountCard />
      <LocateJewellery />
    </>
  );
}
