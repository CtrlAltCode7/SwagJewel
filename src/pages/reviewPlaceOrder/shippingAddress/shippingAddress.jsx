import React from "react";
import {
  BoldTypography,
  CustomButton,
  CustomTypography,
} from "./shippingStyle";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ShippingAddress({ boldText, customText, disableBtn, handleShippingMethod,shippingMethod }) {

  return (
    <>
      <Box>
        <BoldTypography sx={{
          color: !shippingMethod ? "" : "#fff"
        }}>{boldText}</BoldTypography>
        {customText?.map((item, index) => (
          <CustomTypography key={index} variant="body2" sx={{
            color: !shippingMethod ? "" : "#fff"
          }}>
            {item.text}
          </CustomTypography>
        ))}
        {!disableBtn ? (
          <CustomButton onClick={handleShippingMethod && handleShippingMethod}>Change</CustomButton>
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
