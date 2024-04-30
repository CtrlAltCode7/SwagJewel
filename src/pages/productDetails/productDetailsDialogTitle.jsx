import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { dialogTitle } from "./productDetailsDialogTitleStyle";
import ClearIcon from "@mui/icons-material/Clear";

export default function ProductDetailsDialogTitle({ handleClose }) {
  const styles = dialogTitle;

  return (
    <>
      <Box sx={styles.titleContainer}>
        <Box>
          <Typography sx={styles.dialogTitleBox}>14K Rose Anniversary Band Mounting</Typography>
        </Box>
        <Box>
          <IconButton onClick={handleClose}>
            <ClearIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
