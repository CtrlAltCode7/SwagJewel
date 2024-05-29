import { Box, Typography } from "@mui/material";
import React from "react";

export default function ProductDetailsCustomizeHeaderOption({
  leftTitle,
  rightTitle,
  paddingValue
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
            padding: parseInt(paddingValue),
          //   marginTop: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: "bold",
          }}
        >
          {leftTitle}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#7f7164",
          }}
        >
          {rightTitle}
        </Typography>
      </Box>
    </>
  );
}
