import React from "react";
import Layout from "../../components/layout/index";
import CustomSeparator from "../../components/breadcrumbs/index";
import { Box, Grid } from "@mui/material";
import BasicGrid from "../../components/basicGrid/index";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
// import ProductCard from "../../components/BasicGrid/ProductCard";
// import ProductCardDetails from "../../components/BasicGrid/ProductCardDetails"

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
        <BasicGrid />
        {/* <ProductCard product={products}/> */}
      </Box>
    </Layout>
  );
}
