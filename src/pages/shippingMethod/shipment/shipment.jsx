import {
  Box,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Shipment({
  title,
  description,
  checked,
  onChange,
  value,
}) {
  console.log(!description);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          border: "1px solid #cecece",
          marginTop: ".7rem",
          padding: 1,
          borderRadius: 1,
          paddingBlock: !description ? 0.5 : 1.5,
          alignItems: "center",
        }}
      >
        <Box>
          <Radio checked={checked} onChange={onChange} value={value} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="body2" fontWeight={"bold"} color={"#555"}>
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color={"#555"}>
              {description}
            </Typography>
          )}
        </Box>
      </Box>
      <CustomAccordion />
    </>
  );
}

function CustomAccordion() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          padding: 0,
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
          minHeight: "auto",
          backgroundColor: "#e0dee0",
        }}
      >
        <Grid container xs={12} md={12} spacing={2} ml={0}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              "&.MuiGrid-item": {
                paddingLeft: 0,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#636163",
                color: "#fff",
                p: 1,
              }}
            >
              <Typography>Shipment #1</Typography>
              <Typography>Ships Today</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              "&.MuiGrid-item": {
                paddingLeft: 0,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#e0dee0",
              }}
            >
              {/* <AddModeratorIcon
                  fontSize="small"
                  sx={{
                    p: 1,
                  }}
                /> */}
              <Typography
                sx={{
                  background: "#e0dee0",
                  color: "#555",
                  p: 1,
                }}
              >
                UPS next day saver $27.55
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: 0,
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "50%" }}>Shipping Method</TableCell>
                <TableCell>Est Charges</TableCell>
                <TableCell>Est Delivery Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>FedEx</TableCell>
                <TableCell>$20.00</TableCell>
                <TableCell>June 1, 2024</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>UPS</TableCell>
                <TableCell>$25.00</TableCell>
                <TableCell>June 3, 2024</TableCell>
              </TableRow>
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}
