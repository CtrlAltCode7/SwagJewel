import React from "react";
import {
  BoldTypography,
  CustomButton,
  CustomTypography,
} from "./shippingStyle";
import { Box, Button, Typography } from "@mui/material";

export default function ShippingAddress({ boldText, customText, disableBtn }) {
  return (
    <>
      <Box>
        <BoldTypography>{boldText}</BoldTypography>
        {customText?.map((item, index) => (
          <CustomTypography key={index} variant="body2">
            {item.text}
          </CustomTypography>
        ))}
        {!disableBtn ? (
          <CustomButton>Change</CustomButton>
        ) : (
          <Box
            sx={{
              // borderBottom: "1px solid",
            }}
          ></Box>
        )}
      </Box>
    </>
  );
}
