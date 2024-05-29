import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CustomAccordion = ({ title, details }) => {
  return (
    <Accordion
      elevation={0}
      sx={{
        mt: 0,
        "& .MuiPaper-root-MuiAccordion-root": {
          position: "inherit",
        },
      }}
      style={{ boxShadow: "none", background: "none" }}
    >
      <AccordionSummary
        sx={{
          "& .MuiAccordionSummary-content": {
            margin: 0,
            alignItems: "center",
            gap: 1,
            marginTop: "1rem"
          },
          minHeight: 0,
          padding: 0,
        }}
      >
        <AddCircleOutlineIcon fontSize="small" />
        <Typography variant="subtitle2" sx={{
          color: "#555"
        }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {Array.isArray(details) ? (
          details.length > 0 && typeof details[0] === "object" ? (
            <Table>
              <TableBody>
                {details.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.day}</TableCell>
                    <TableCell>{row.hours}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <ul>
              {details.map((item, index) => (
                <li key={index}>
                  <Typography variant="body2">{item}</Typography>
                </li>
              ))}
            </ul>
          )
        ) : (
          <Typography variant="body2">{details}</Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
