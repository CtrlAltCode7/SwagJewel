import React from "react";
import { BoldTypography, CustomButton } from "../shippingAddress/shippingStyle";
import { Box, TextField, Typography } from "@mui/material";
import { CustomTextField } from "./promoCodeAndPOStyle";
import ShippingEstimatedCharges from "../shippingEstimatedCharges/shippingEstimatedCharges";

export default function ProomoCodeAndPO() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <BoldTypography variant="body2">Promo code:</BoldTypography>
        <CustomTextField />
        <CustomButton disabled>Apply</CustomButton>
      </Box>
      <Box
        mt={1}
        sx={{
          backgroundColor: "#ffd1d8",
          p: 0.5,
        }}
      >
        <Typography
          sx={{
            color: "#950032",
          }}
        >
          PO Number is required
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
        mt={1}
      >
        <BoldTypography variant="body2" margin="0 1.3rem 0 0">PO Number:</BoldTypography>
        <CustomTextField fullWidth />
        {/* <CustomButton disabled hidden>Apply</CustomButton> */}
      </Box>
      <ShippingEstimatedCharges />
    </>
  );
}
