import * as React from "react";
import {
  Box,
  Typography,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WebIcon from "@mui/icons-material/Web";
import DiamondIcon from "@mui/icons-material/Diamond";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./locateAJeweler.css";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomAccordion from "./customAccordion/customAccordion";

const storeHours = [
  { day: 'Monday', hours: '9:00 AM - 5:30 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 5:30 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 5:30 PM' },
  { day: 'Thursday', hours: '9:00 AM - 5:30 PM' },
  { day: 'Friday', hours: '7:00 AM - 5:30 PM' },
  { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'N/A' },
];

const services = 'Appraisal or gem identification, Jewelry design not using a computer, Jewelry repair, Clock repair, Watch repair';

function StoreDetails() {
  return (
    <Box>
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
            }}
          >
            Andrews Manufacturing Jewellers
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <Typography variant="body2">(8.4343 miles)</Typography>
            <img src="https://assets.stullercloud.com/web/static/i/locateajeweler/googlemapicons/diamondicon.png" />
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            width: "33%",
            color: "#555",
          }}
        >
          Shop Ag04, Ruisseau Creole, La Mivoie, Black River, Black River 134,
          MU
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <PhoneIcon
              fontSize="small"
              sx={{
                color: "#75b0da",
              }}
            />
            <Typography variant="body2" sx={{ ml: 1, color: "#555" }}>
              59713828
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", mt: 1, color: "#555" }}
          >
            <EmailIcon fontSize="small" />
            <Link
              href="mailto:andrew@andrewsjewellers.mu"
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
            <WebIcon
              fontSize="small"
              sx={{
                color: "#75b0da",
              }}
            />
            <Link
              href="http://www.andrewsjeweller.mu"
              target="_blank"
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
            <DiamondIcon
              fontSize="small"
              sx={{
                color: "#75b0da",
              }}
            />
            <Link
              href="https://andrewsjewellers.jewelershowcase.com"
              target="_blank"
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
          <CustomAccordion title="Store Hours" details={storeHours} />
          <CustomAccordion title="Services" details={services} />
        </div>

      </Box>
    </Box>
  );
}

export default StoreDetails;
