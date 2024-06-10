import { Box, Typography } from "@mui/material";
import React from "react";
import SelectComponent from "../../components/selectComponent";
import ProductDetailTabs from "./productDetailTabs";
import ProductDetailsCustomizeHeaderOption from "./productDetailsCustomizeHeaderOption";
import ProductDetailDropdown from "./productDetailDropdown";
import ProductDetailsDimondsCategory from "./productDetailsDimondsCategory";

export default function ProductDetailContentTabs() {
  return (
    <Box>
      <Box sx={{
        p:2
      }}>
        <ProductDetailsCustomizeHeaderOption
          leftTitle="Quality"
          rightTitle="14 Rose"
        />
      </Box>

      <Box
        sx={{
          padding: ".5rem 1rem",
        }}
      >
        <ProductDetailDropdown />
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
          p: 2,
        }}
      >
        <ProductDetailsCustomizeHeaderOption
          leftTitle="Primary Stone Type"
          rightTitle="Lab-Grown Diamonds"
        />
      </Box>
      <Box
      >
        <ProductDetailTabs
          tabs={[
            {
              label: "Lab-Grown Diamonds",
              content: <ProductDetailsDimondsCategory />,
              showIcon: true,
              iconUrl: "https://meteor.stullercloud.com/das/37618011?hei=20&fmt=smart-alpha"
            },
            {
              label: "Diamonds",
              content: <ProductDetailsDimondsCategory />,
              showIcon: true,
              iconUrl: "https://meteor.stullercloud.com/das/119231635?hei=20"

            },
          ]}
        />
        {/* <ProductDetailsDimondsCategory /> */}
      </Box>
    </Box>
  );
}
