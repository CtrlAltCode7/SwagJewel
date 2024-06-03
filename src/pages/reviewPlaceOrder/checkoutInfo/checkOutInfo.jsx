import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import ShippingAddress from "../shippingAddress/shippingAddress";
import ShippingEstimatedCharges from "../shippingEstimatedCharges/shippingEstimatedCharges";
const addressData = [
  { text: "123568-000001" },
  { text: "4301 MARTINIQUE CIR" },
  { text: "STE 81" },
  { text: "COCONUT CREEK, FL 33066-1486" },
  { text: "US" },
];

const paymentMethod = [{ text: "Stuller Line of Credit" }];

const shippingData = [
  { text: "Shipment #1" },
  { text: "UPS Next Day Saver" },
  { text: "Est. Charge: $27.99" },
  { text: "Est. Delivery Date: Tue May 21, 2024" },
];
export default function CheckOutInfo({ shippingMethod }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          // flexDirection: "column"
          borderBottom: "1px solid",
        }}
        pt={1}
      >
        <Avatar
          sx={{
            width: 24,
            height: 24,
            fontSize: "14px",
            margin: "0 .5rem",
          }}
        >
          1
        </Avatar>
        <ShippingAddress
          customText={addressData}
          boldText={"Shipping Address"}
          disableBtn={true}
        />
      </Box>
      <Box
        mt={1}
        sx={{
          display: "flex",
          // flexDirection: "column"
          borderBottom: "1px solid",
        }}
      >
        <Avatar
          sx={{
            width: 24,
            height: 24,
            fontSize: "14px",
            margin: "0 .5rem",
          }}
        >
          2
        </Avatar>
        <ShippingAddress
          customText={paymentMethod}
          boldText={"Payment Method"}
          disableBtn={true}
        />
      </Box>
      <Box
        mt={!shippingMethod ? 1 : 0}
        pt = {!shippingMethod ? 0 : 1}
        sx={{
          display: "flex",
          // flexDirection: "column"
          borderBottom: "1px solid",
          backgroundColor: !shippingMethod ? "" : "#665f63",

          
        }}
      >
        <Avatar
          sx={{
            width: 24,
            height: 24,
            fontSize: "14px",
            margin: "0 .5rem",
            color: !shippingMethod ? "" : "#fff",
            backgroundColor: !shippingMethod ? "" : "#5d86a8",
            fontWeight: !shippingMethod ? "" : "bold",
          }}
        >
          3
        </Avatar>
        <ShippingAddress
          customText={shippingData}
          boldText={"Shipping Method"}
          disableBtn={true}
          shippingMethod={shippingMethod}
        />
      </Box>
      <Box
        mt={0}
        sx={{
          display: "flex",
          // flexDirection: "column"
          //   borderBottom: "1px solid",
          backgroundColor: !shippingMethod ? "#665f63" :"",
          paddingBlock: "1rem",
        }}
      >
        <Avatar
          sx={{
            width: 24,
            height: 24,
            fontSize: "14px",
            margin: "0 .5rem",
            color: !shippingMethod ?  "#fff":"",
            backgroundColor: !shippingMethod ? "#5d86a8" : "",
            fontWeight: !shippingMethod ? "bold" : "",
          }}
        >
          4
        </Avatar>
        <Box
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color:  !shippingMethod ? "#fff" :"#555",
            }}
          >
            Review and Place Order
          </Typography>
        </Box>
      </Box>
      <ShippingEstimatedCharges right={true} />
    </>
  );
}
