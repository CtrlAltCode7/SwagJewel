import React from "react";
import Layout from "../../components/layout";
import { Container, Typography } from "@mui/material";
import ContactUsHeader from "./contactUsHeader/contactUsHeader";
import ContactUsContainer from "./contactUsContainer/contactUsContainer";
import AccountCard from "../../components/shopNowCard/shopNowCard";
import LocateJewellery from "../../components/locateJewellery/locateJewellery";
import OtherLocation from "../otherLocation/otherLocation";

export default function contactUs() {
  const data = [
    {
      backgroundImage:
        "https://meteor.stullercloud.com/das/61872856?scl=1&$sharpenpng$",
      title: "Just need tools and supplies?",
      description:
        "If you are in the United States and paying by credit card or COD, no account is required to purchase select tools, equipment, non-watch batteries, and basic packaging.",
      buttonText: "Shop Now",
      buttonLink: "/categories/9",
      right: false,
      className: "card-title-white",
    },
    {
      backgroundImage:
        "https://meteor.stullercloud.com/das/61872863?scl=1&$sharpenpng$",
      title: "Need website access for an existing account?",
      description:
        "Take advantage of convenient online ordering by adding a Stuller.com login to your existing Stuller account.",
      buttonText: "Get Started",
      buttonLink: "/signup/existingaccount/",
      right: true,
      className: "card-title-white",
    },
  ];

  const data1 = {
    title: "Stuller serves qualified members of the jewelry trade only.",
    message: "If you are not a jewelry professional, you can",
    link: "/locateajeweler",
    linkText: "locate a jeweler",
    subtitle: " near you to purchase Stuller products.",
    imageSrc: "//meteor.stullercloud.com/das/56392816?scl=3.4",
    imageAlt: "Locate a Jeweler",
    description: "Stuller uses a third-party service provider to verify the accuracy and validity of the information submitted for establishing a Stuller account. Such verification is not a credit check.",
    question: "Want to know more about how Stuller can help your business succeed?",
    answer: "Our New Account specialists can answer any of your questions",
    phoneNumber: "800-877-7777",
    extension: "500"
  };
  return (
    <Layout>
      <ContactUsHeader />
      <ContactUsContainer />
      <AccountCard data={data} />
      <LocateJewellery data={data1} />
      <OtherLocation />

    </Layout>
  );
}
