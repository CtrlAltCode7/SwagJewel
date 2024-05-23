import { styled } from "@mui/system";
import { Button, TextField, Typography, inputBaseClasses } from "@mui/material";

export const CustomTextField = styled(TextField)(({ theme }) => ({
//   "& .MuiOutlinedInput-root": {
//     padding: "0 !important",
//   },
  "& .MuiInputBase-input": {
    paddingInline: ".5rem",
    paddingBlock: ".5rem",
  },
}));
