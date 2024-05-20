import React from "react";
import SignUpForm from "./signUpForm/signUpForm";
import BusinessFeatures from "./businessFeatures/businessFeatures";
import LocateJewellery from "./locateJewellery/locateJewellery";
import Layout from "../../components/layout/index";
import AccountCard from "../../components/shopNowCard/shopNowCard";

export default function AccountSignUp() {
  const data = [
    {
      backgroundImage:
        "https://meteor.stullercloud.com/das/75918658?scl=1&wid=603&hei=270&align=1,1&bgc=%23eeeeee&$sharpenpng$",
      title: "Just need tools and supplies?",
      description:
        "If you are in the United States and paying by credit card or COD, no account is required to purchase select tools, equipment, non-watch batteries, and basic packaging.",
      buttonText: "Shop Now",
      buttonLink: "/categories/9",
      right: false,
    },
    {
      backgroundImage:
        "https://meteor.stullercloud.com/das/75918662?scl=1.2&wid=600&hei=200&align=1,0&extend=0,10,50,-10&bgc=%23eeeeee&$sharpenpng$",
      title: "Need website access for an existing account?",
      description:
        "Take advantage of convenient online ordering by adding a Stuller.com login to your existing Stuller account.",
      buttonText: "Get Access",
      buttonLink: "/signup/existingaccount/",
      right: false,
    },
  ];
  return (
    <>
      <Layout>
        <SignUpForm />
        <BusinessFeatures />
        <AccountCard data={data} />
        <LocateJewellery />
      </Layout>
    </>
  );
}
