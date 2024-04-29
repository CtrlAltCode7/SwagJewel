import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function ProductDetailCustomizeOptions() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#eee",
          textAlign: "center",
          padding: "1rem"
        }}
      >
        <Typography variant="body2">
          There are no in-stock options for this style
        </Typography>
      </Box>
    </>
  );
}
