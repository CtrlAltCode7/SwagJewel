import { Box, Typography } from "@mui/material";
import React from "react";

export default function ProductDetailCustomizeOptions() {
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#eee",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          There are no in-stock options for this style
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 2
        }}
      >
        <Typography variant="body2">Product</Typography>
        <Typography variant="body2">Anniversary Band</Typography>
      </Box>
    </>
  );
}
