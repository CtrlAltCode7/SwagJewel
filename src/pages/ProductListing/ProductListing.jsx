import React from "react";
import Layout from "../../components/Layout/Layout";
import CustomSeparator from "../../components/CustomSeparator/CustomSeparator";
import { Box, Grid } from "@mui/material";
import BasicGrid from "../../components/BasicGrid/BasicGrid";

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
        <BasicGrid />
      </Box>
    </Layout>
  );
}
