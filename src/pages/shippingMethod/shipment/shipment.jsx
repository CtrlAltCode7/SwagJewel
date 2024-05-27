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
      {/* <CustomAccordion /> */}
    </>
  );
}


