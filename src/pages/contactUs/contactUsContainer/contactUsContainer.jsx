import React from "react";
import "./contactUsContainer.css";
import { Box, Grid, Typography } from "@mui/material";
import ContactForm from "../contactForm/contactForm";
import CustomerCare from "../customerCare/customerCare";

export default function ContactUsContainer() {
  const customerData = [
    {
      iconSrc: "//assets.stullercloud.com/das/61889037.svg",
      title: "U.S. Customer Care",
      schedule: "Monday - Friday 8:00 a.m. - 7:00 p.m. Central",
      associates: "English-speaking and Spanish-speaking associates",
      phoneNumber: "800-877-7777",
      phoneNumberHref: "tel:+18008777777",
      fax: "800-444-4741", // Fax number
      // contactMethod: {
      //     whatsapp: '9999999', // Generic contact method as an object
      // },
      contactMethodLabel: "Fax", // Dynamic label for contact method
      location: {
        address: "302 Rue Louis XIV",
        city: "Lafayette",
        state: "LA",
        zip: "70508",
      },
      mailingAddress: "P.O. Box 87777",
      mailingCity: "Lafayette",
      mailingState: "LA",
      mailingZip: "70508",
    },
    {
      iconSrc: "//assets.stullercloud.com/das/61906763.svg",
      title: "Canadian Customer Care",
      schedule: "Monday - Friday 8:00 a.m. - 7:00 p.m. Central",
      associates: "English-speaking and Spanish-speaking associates",
      phoneNumber: "800-877-7777",
      phoneNumberHref: "tel:+18008777777",
      // fax: "800-444-4741",
      contactMethod: {
          whatsapp: '9999999',
      },
      contactMethodLabel: "Fax", // Dynamic label for contact method
      location: {
        address: "302 Rue Louis XIV",
        city: "Lafayette",
        state: "LA",
        zip: "70508",
      },
      mailingAddress: "P.O. Box 87777",
      mailingCity: "Lafayette",
      mailingState: "LA",
      mailingZip: "70508",
    },
    {
      iconSrc: "//meteor.stullercloud.com/das/79495966?hei=20&$sharpen$",
      title: "Mexican Customer Care",
      schedule: "Monday - Friday 8:00 a.m. - 7:00 p.m. Central",
      associates: "English-speaking and Spanish-speaking associates",
      phoneNumber: "800-877-7777",
      phoneNumberHref: "tel:+18008777777",
      fax: "800-444-4741", // Fax number
      // contactMethod: {
      //     whatsapp: '9999999', // Generic contact method as an object
      // },
      contactMethodLabel: "Fax", // Dynamic label for contact method
      // location: {
      //   address: "302 Rue Louis XIV",
      //   city: "Lafayette",
      //   state: "LA",
      //   zip: "70508",
      // },
      mailingAddress: "P.O. Box 87777",
      mailingCity: "Lafayette",
      mailingState: "LA",
      mailingZip: "70508",
    },
    {
      iconSrc: "//meteor.stullercloud.com/das/69692378?hei=20&$sharpen$",
      title: "European Customer Care",
      schedule: "Monday - Friday 8:00 a.m. - 7:00 p.m. Central",
      associates: "English-speaking and Spanish-speaking associates",
      phoneNumber: "800-877-7777",
      phoneNumberHref: "tel:+18008777777",
      fax: "800-444-4741", // Fax number
      // contactMethod: {
      //     whatsapp: '9999999', // Generic contact method as an object
      // },
      contactMethodLabel: "Fax", // Dynamic label for contact method
      // location: {
      //   address: "302 Rue Louis XIV",
      //   city: "Lafayette",
      //   state: "LA",
      //   zip: "70508",
      // },
      mailingAddress: "P.O. Box 87777",
      mailingCity: "Lafayette",
      mailingState: "LA",
      mailingZip: "70508",
    },
  ];

  // Render the component

  return (
    <Grid
      container
      maxWidth={"1260px"}
      margin={"0 auto"}
      breakpoints={{ values: { xs: 0, sm: 768, md: 960, lg: 1280, xl: 1920 } }}
    >
      <Grid item xs={12} sm={12} md={6} lg={8}>
        <Box sx={{
          marginBottom: "3rem"
        }}>
          {customerData?.map((custData, index) => (
            <CustomerCare data={custData} key={index} />
          ))}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={4}
        sx={{
          padding: "95px 15px 0",
        }}
      >
        <ContactForm />
      </Grid>
    </Grid>
  );
}
