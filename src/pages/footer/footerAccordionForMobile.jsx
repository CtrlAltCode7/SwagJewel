import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";

const accordionData = [
  {
    heading: "Account + Orders",
    body1: "My Account",
    body2: "Check Order Status",
    body3: "Return a Product",
    body4: "Return Policies",
    body5: "Shipping Carrier Information",
    body6: "Order Cutoff Information",
    redirect: "home",
  },
  {
    heading: "Marketing Resources",
    body1: "Catalogs + Brochures",
    body2: "Marketing Images",
    body3: "SWAG Jewelers Companies",
  },
  {
    heading: "SWAG Jewelers Companies",
    body1: "Gemvision",
    body2: "B&D Lasers",
  },
  {
    heading: "About SWAG Jewelers",
    body1: "About Us",
    body2: "SWAG Jewelers First®",
    body3: "Corporate Responsibility",
    body4: "Press Center",
    body5: "International Enquiries",
    body6: "Contact Us",
  },
];

export default function FooterAccordionForMobile() {
  return (
    <Box
      sx={{
        marginBottom: "2rem",
      }}
    >
      {accordionData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography>{item.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              gap: "1rem",
            }}
          >
            <Typography>{item.body1}</Typography>
            <Typography>{item.body2}</Typography>
            <Typography>{item.body3}</Typography>
            <Typography>{item.body4}</Typography>
            <Typography>{item.body5}</Typography>
            <Typography>{item.body6}</Typography>
            <Typography>{item.body7}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
