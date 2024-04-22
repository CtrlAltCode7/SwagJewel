import React from "react";
import Layout from "../../components/Layout/Layout";
import CustomSeparator from "../../components/CustomSeparator/CustomSeparator";
import { Box, Grid } from "@mui/material";
import BasicGidCopy from "../../components/BasicGrid/BasicGidCopy";
// import ProductCard from "../../components/BasicGrid/ProductCard";
import ProductCardDetails from "../../components/BasicGrid/ProductCardDetails"

export default function ProductListing() {

  return (
    <Layout>
      <Box sx={{
        margin: "0% 2% 2% 4%",
        "@media (min-width: 1250px)": {
          margin: "0 5%"
        },
        "@media (min-width: 1350px)": {
          margin: "0 8%"
        },
        "@media (min-width: 1450px)": {
          margin: "0 10%"
        },
      }}>
        {/* breadcrumb */}
        <CustomSeparator />
        <BasicGidCopy />
        {/* <ProductCard product={products}/> */}
      </Box>
    </Layout>
  );
}
