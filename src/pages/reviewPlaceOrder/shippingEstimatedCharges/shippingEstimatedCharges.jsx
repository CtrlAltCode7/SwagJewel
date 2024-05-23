import { Box, Button, Typography } from "@mui/material";
import React from "react";
import {
  BoldTypography,
  CustomTypography,
} from "../shippingAddress/shippingStyle";
import HelpIcon from "@mui/icons-material/Help";

export default function ShippingEstimatedCharges({ right }) {
  return (
    <Box mt={1} sx={{
      borderBottom: right && "1px solid #cecece"
    }}>
      <BoldTypography pl={right ? 1 : 0} sx={{
        backgroundColor: right ? "#665f63" : "",
        color: right ? "#fff" : "",
        padding: right && 1
      }}>
        Estimated Charges
      </BoldTypography>
      <Box p={2} border={ !right && "1px solid #cecece"} borderRadius={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomTypography>Item Subtotal:</CustomTypography>
          <CustomTypography>$5.99</CustomTypography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomTypography>Shipping:</CustomTypography>
          <CustomTypography>$27.99</CustomTypography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #cecece",
            paddingBottom: 1,
          }}
        >
          <CustomTypography>Sales Tax:</CustomTypography>
          <CustomTypography>$0.00</CustomTypography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          mt={2}
        >
          <BoldTypography variant="body2">Estimated Total:</BoldTypography>
          <BoldTypography variant="body2">$33.98</BoldTypography>
        </Box>
      </Box>
      {!right && (
        <Box
          sx={{
            paddingInline: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBlock: "2rem",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            color="success"
            //   onClick={handleCheckoutPage}
            disabled
          >
            Place order
          </Button>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#555",
              textTransform: "capitalize",
              marginLeft: ".5rem",
            }}
          >
            Eligible items in your cart can ship{" "}
            <Typography
              component={"span"}
              sx={{
                fontWeight: "bold",
              }}
            >
              today
            </Typography>{" "}
            if you checkout in the next
            <Typography
              component={"span"}
              sx={{
                color: "#2596be",
                fontWeight: "bold",
              }}
            >
              {" "}
              10h 9m 43s{" "}
            </Typography>
            <Typography
              component={"span"}
              sx={{
                display: "inline-flex",
                textDecoration: "underline",
              }}
            >
              <HelpIcon />
              Eligible Items
            </Typography>
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="success"
            //   onClick={handleCheckoutPage}
            disabled
          >
            Schedule order
          </Button>
        </Box>
      )}
    </Box>
  );
}
