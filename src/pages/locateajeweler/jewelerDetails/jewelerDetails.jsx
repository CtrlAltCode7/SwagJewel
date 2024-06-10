import React from "react";
import { Box, Typography, Link, Icon } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WebIcon from "@mui/icons-material/Web";
import DiamondIcon from "@mui/icons-material/LocationOn";
import CustomAccordion from "../customAccordion/customAccordion";

const JewelerDetails = ({ jeweler }) => {
  console.log("jeweler", jeweler);
  return (
    <Box sx={{ mb: 4, mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#555",
            fontSize: {
              xs: 14,
              sm: 14,
              md: 16,
              lg: 18,
              xl: 20,
            },
          }}
        >
          {jeweler.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            cursor: "pointer",
          }}
        >
          <Typography variant="body2">{jeweler.distance}</Typography>
          <Icon component={DiamondIcon} />
        </Box>
      </Box>

      <Typography variant="body2" sx={{ width: "33%", color: "#555" }}>
        {jeweler.address}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <PhoneIcon fontSize="small" sx={{ color: "#75b0da" }} />
          <Typography variant="body2" sx={{ ml: 1, color: "#555" }}>
            {jeweler.phone}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", mt: 1, color: "#555" }}
        >
          <EmailIcon fontSize="small" />
          <Link
            href={`mailto:${jeweler.email}`}
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
            href={jeweler.website}
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
            href={jeweler.jewelershowcase}
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

      <Box sx={{ display: "flex", flexDirection: "column",}}>
        <CustomAccordion title="Store Hours" details={jeweler.storeHours} />
        <CustomAccordion title="Services" details={jeweler.services} />
      </Box>
    </Box>
  );
};

export default JewelerDetails;
