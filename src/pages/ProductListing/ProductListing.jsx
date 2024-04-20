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
        margin: "0 10%",
        "@media (max-width: 1200px)": {
          margin: "0 2%"
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
