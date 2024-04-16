import React from "react";
import Layout from "../../components/Layout/Layout";
import CustomSeparator from "../../components/CustomSeparator/CustomSeparator";
import { Box, Grid } from "@mui/material";
import BasicGrid from "../../components/BasicGrid/BasicGrid";

export default function ProductListing() {
  return (
    <Layout>
      <Box sx={{
        margin: "0 10%"
      }}>
        {/* breadcrumb */}
        <CustomSeparator />
        <BasicGrid />
      </Box>
    </Layout>
  );
}
