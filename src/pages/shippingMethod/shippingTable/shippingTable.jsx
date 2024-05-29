import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Radio,
  Box,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";

const shippingData = [
  { method: "FedEx", charges: "$20.00", deliveryDate: "Tue June 1, 2024" },
  { method: "UPS", charges: "$25.00", deliveryDate: "Thu June 3, 2024" },
  { method: "FedEx", charges: "$20.00", deliveryDate: "Fri June 1, 2024" },
  { method: "UPS", charges: "$25.00", deliveryDate: "Sat June 3, 2024" },
  { method: "FedEx", charges: "$20.00", deliveryDate: "Mon June 1, 2024" },
  { method: "UPS", charges: "$25.00", deliveryDate: "Wed June 3, 2024" },
  { method: "FedEx", charges: "$20.00", deliveryDate: "Fri June 1, 2024" },
  { method: "UPS", charges: "$25.00", deliveryDate: "Thu June 3, 2024" },
  { method: "FedEx", charges: "$20.00", deliveryDate: "Sat June 1, 2024" },
  { method: "UPS", charges: "$25.00", deliveryDate: "Tue June 3, 2024" },
  // Add more data as needed
];

export default function ShippingTable() {
  const StyledTableRow = styled(TableRow)(({ theme, isFifthRow }) => ({
    "&:hover": {
      backgroundColor: "#cecece",
    },
    borderBottom: isFifthRow ? "2px solid #cecece" : "none",
  }));
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "50%" }}>Shipping Method</TableCell>
            <TableCell>Est Charges</TableCell>
            <TableCell sx={{ textAlign: "end" }}>Est Delivery Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shippingData.map((row, index) => (
            <StyledTableRow key={index} isFifthRow={(index + 1) % 5 === 0}>
              <TableCell>
                <Radio checked={true} />
                {row.method}
              </TableCell>
              <TableCell>{row.charges}</TableCell>
              <TableCell sx={{ textAlign: "end" }}>
                {row.deliveryDate}
              </TableCell>
            </StyledTableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
