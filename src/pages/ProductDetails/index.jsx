import React from "react";
import Layout from "../../components/Layout/Layout";
import CustomSeparator from "../../components/CustomSeparator/CustomSeparator";
import { Box, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CopyToClipboardText from "./CopyToClipboardText";
import ShareSocialMedia from "./ShareSocialMedia";

export default function ProductDetails() {
  return (
    <Layout>
      <CustomSeparator />
      <Box
        sx={{
          padding: "0 1.875rem",
        }}
      >
        <Typography
          sx={{
            color: "#555",
            wordSpacing: "0.06em",
            fontWeight: "100 !important",
            fontSize: ["1.4rem", "1.6rem", "1.8rem", "2.313rem", "2.813rem"],
          }}
        >
          14K Rose 1/2 CTW Natural Diamond Anniversary Band
        </Typography>
        {/* <Typography></Typography> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
            padding: "10px 0"
          }}
        >
          <CopyToClipboardText />
          <ShareSocialMedia />
        </Box>
      </Box>
    </Layout>
  );
}
