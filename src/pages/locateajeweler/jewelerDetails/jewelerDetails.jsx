import React from "react";
import { Box, Typography, Link, Icon } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WebIcon from "@mui/icons-material/Web";
import DiamondIcon from "@mui/icons-material/LocationOn"; // Assuming DiamondIcon represents location
import CustomAccordion from "../customAccordion/customAccordion"; // Assuming you have a CustomAccordion component

const jewelerData = {
  name: "Andrews Manufacturing Jewellers",
  distance: "8.4343 miles",
  address:
    "Shop Ag04, Ruisseau Creole, La Mivoie, Black River, Black River 134, MU",
  phone: "59713828",
  email: "andrew@andrewsjewellers.mu",
  website: "http://www.andrewsjeweller.mu",
  jewelershowcase: "https://andrewsjewellers.jewelershowcase.com",
  storeHours: [
    { day: "Monday", hours: "9:00 AM - 5:30 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:30 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:30 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:30 PM" },
    { day: "Friday", hours: "7:00 AM - 5:30 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "N/A" },
  ],
  services: [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    // Add more services as needed
  ],
};

const JewelerDetails = () => {
  return (
    <Box sx={{ mb: 4, mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ color: "#555" }}>
          {jewelerData.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            cursor: "pointer",
          }}
        >
          <Typography variant="body2">{jewelerData.distance}</Typography>
          <Icon component={DiamondIcon} />
        </Box>
      </Box>

      <Typography variant="body2" sx={{ width: "33%", color: "#555" }}>
        {jewelerData.address}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <PhoneIcon fontSize="small" sx={{ color: "#75b0da" }} />
          <Typography variant="body2" sx={{ ml: 1, color: "#555" }}>
            {jewelerData.phone}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", mt: 1, color: "#555" }}
        >
          <EmailIcon fontSize="small" />
          <Link
            href={`mailto:${jewelerData.email}`}
            sx={{
              ml: 1,
              color: "#555",
              textDecoration: "none",
              "&:hover": {
                color: "#75b0da",
              },
              cursor: "pointer",
            }}
            variant="body2"
          >
            E-mail
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <WebIcon fontSize="small" sx={{ color: "#75b0da" }} />
          <Link
            href={jewelerData.website}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              ml: 1,
              color: "#555",
              textDecoration: "none",
              "&:hover": {
                color: "#75b0da",
              },
              cursor: "pointer",
            }}
            variant="body2"
          >
            Website
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <DiamondIcon fontSize="small" sx={{ color: "#75b0da" }} />
          <Link
            href={jewelerData.jewelershowcase}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              ml: 1,
              color: "#555",
              textDecoration: "none",
              "&:hover": {
                color: "#75b0da",
              },
              cursor: "pointer",
            }}
            variant="body2"
          >
            Jeweler Showcase
          </Link>
        </Box>
      </Box>

      <div>
        <CustomAccordion title="Store Hours" details={jewelerData.storeHours} />
        <CustomAccordion title="Services" details={jewelerData.services} />
      </div>
    </Box>
  );
};

export default JewelerDetails;
