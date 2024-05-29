import React from "react";
import {
  Box,
  Container,
  FormControlLabel,
  Grid,
  Radio,
  Typography,
} from "@mui/material";
import swagLogo from "../../assets/swag-logo.png";
import Shipment from "./shipment/shipment";
import { useState } from "react";
import ShippingTable from "./shippingTable/shippingTable";
import AccordionShipment from "./accordion/accordion";
import ShippingEstimatedCharges from "../reviewPlaceOrder/shippingEstimatedCharges/shippingEstimatedCharges";
import CheckOutInfo from "../reviewPlaceOrder/checkoutInfo/checkOutInfo";

export default function ShippingMethod() {
  const [selectedShipment, setSelectedShipment] = useState("one");

  const handleShipmentChange = (event) => {
    setSelectedShipment(event.target.value);
  };
  return (
    <div>
      <Box
        marginBlock={3}
        sx={{
          borderBottom: "1px solid #cecece",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={swagLogo} width={"30%"} />
          </Box>
          <Box
            sx={{
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                textDecoration: "underline",
                color: "#555",
              }}
            >
              78787878787
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textDecoration: "underline",
                color: "#555",
              }}
            >
              Keep shopping
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Grid container xs={12} md={12}>
            <Grid xs={12} md={8}>
              <Box
                sx={{
                  border: "1px solid #cecece",
                  padding: 2,
                  borderRadius: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #cecece",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 20,
                        sm: 22,
                        md: 24,
                        lg: 26,
                        xl: 27,
                      },
                      color: "#555",
                      fontWeight: "100",
                    }}
                  >
                    Shipping Method
                  </Typography>
                  <Typography
                    sx={{
                      color: "#8e9bac",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Change default
                  </Typography>
                </Box>
                <Shipment
                  title="One Shipment"
                  description="Ship when everything is available"
                  checked={selectedShipment === "one"}
                  onChange={handleShipmentChange}
                  value="one"
                />
                <Shipment
                  title="Two Shipments"
                  description="Ship in-stock items today and all other items when they become available"
                  checked={selectedShipment === "multiple"}
                  onChange={handleShipmentChange}
                  value="multiple"
                />
                <Shipment
                  title="Ship each item as they become available"
                  // description="Ship in-stock items today and all other items when they become available"
                  checked={selectedShipment === "three"}
                  onChange={handleShipmentChange}
                  value="three"
                />
                <Shipment
                  title="Choose shipping method for each individual item"
                  // description="Ship in-stock items today and all other items when they become available"
                  checked={selectedShipment === "four"}
                  onChange={handleShipmentChange}
                  value="four"
                />
                <AccordionShipment />
              </Box>
            </Grid>
            <Grid xs={12} md={4} pl={3}>
              <Box
                sx={{
                  border: "1px solid",
                }}
              >
                <CheckOutInfo shippingMethod={true} />
                {/* <ShippingEstimatedCharges right={true} /> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
