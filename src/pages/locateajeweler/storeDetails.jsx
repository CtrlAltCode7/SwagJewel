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

function StoreDetails() {
  return (
    <Box>
      {/* Andrews Manufacturing Jewellers */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5">Andrews Manufacturing Jewellers</Typography>
        <Typography variant="body1">
          Shop Ag04, Ruisseau Creole, La Mivoie, Black River, Black River 134,
          MU
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <PhoneIcon />
          <Typography variant="body2" sx={{ ml: 1 }}>
            59713828
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <EmailIcon />
          <Link href="mailto:andrew@andrewsjewellers.mu" sx={{ ml: 1 }}>
            E-mail
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <WebIcon />
          <Link
            href="http://www.andrewsjeweller.mu"
            target="_blank"
            sx={{ ml: 1 }}
          >
            Website
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <DiamondIcon />
          <Link
            href="https://andrewsjewellers.jewelershowcase.com"
            target="_blank"
            sx={{ ml: 1 }}
          >
            Jeweler Showcase
          </Link>
        </Box>
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Store Hours</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Monday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tuesday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wednesday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Thursday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Friday:</TableCell>
                  <TableCell>7:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Saturday:</TableCell>
                  <TableCell>9:00 AM - 2:00 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sunday:</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Appraisal or gem identification, Jewelry design not using a
              computer, Jewelry repair, Clock repair, Watch repair
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Cantrell's Fine Jewelry (Coffeyville) */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5">
          Cantrell's Fine Jewelry (Coffeyville)
        </Typography>
        <Typography variant="body1">
          1312 W 11th St, Coffeyville, KS 67337
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <PhoneIcon />
          <Typography variant="body2" sx={{ ml: 1 }}>
            (620) 251-3530
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <EmailIcon />
          <Link href="mailto:james@cantrellsjewelry.com" sx={{ ml: 1 }}>
            E-mail
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <WebIcon />
          <Link
            href="http://cantrellsjewelry.com"
            target="_blank"
            sx={{ ml: 1 }}
          >
            Website
          </Link>
        </Box>
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Store Hours</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Monday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tuesday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wednesday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Thursday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Friday:</TableCell>
                  <TableCell>7:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Saturday:</TableCell>
                  <TableCell>9:00 AM - 2:00 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sunday:</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Appraisal or gem identification, Jewelry design not using a
              computer, Jewelry repair, Clock repair, Watch repair
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Wall's Inc. DBA Eiseles Diamonds & Fine Jewelry */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5">
          Wall's Inc. DBA Eiseles Diamonds & Fine Jewelry
        </Typography>
        <Typography variant="body1">
          124 W 8th St, P.O. Box #624, Coffeyville, KS 67337
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <PhoneIcon />
          <Typography variant="body2" sx={{ ml: 1 }}>
            (620) 251-7740
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <EmailIcon />
          <Link href="mailto:eiseles@sbcglobal.net" sx={{ ml: 1 }}>
            E-mail
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <WebIcon />
          <Link href="http://eiseles.com" target="_blank" sx={{ ml: 1 }}>
            Website
          </Link>
        </Box>
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Store Hours</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Monday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tuesday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wednesday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Thursday:</TableCell>
                  <TableCell>9:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Friday:</TableCell>
                  <TableCell>7:00 AM - 5:30 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Saturday:</TableCell>
                  <TableCell>9:00 AM - 2:00 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sunday:</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Appraisal or gem identification, Jewelry design not using a
              computer, Jewelry repair, Clock repair, Watch repair
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default StoreDetails;
