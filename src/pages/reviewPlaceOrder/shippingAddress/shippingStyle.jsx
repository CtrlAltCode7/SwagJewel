import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const BoldTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#555",
  textWrap: "nowrap"
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
  color: "#555",
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  background: "#999699",
  color: "#fff",
  paddingInline: "1.3rem",
}));
