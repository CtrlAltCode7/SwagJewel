import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { dialogTitle } from "./productDetailsDialogTitleStyle";
import ClearIcon from "@mui/icons-material/Clear";
import "./dialogTitle.css"

export default function ProductDetailsDialogTitle({ handleClose }) {
  const styles = dialogTitle;

  return (
    <>
      <Box sx={styles.titleContainer}>
        <Box>
          <Typography className="dialogTitle">14K Rose Anniversary Band Mounting</Typography>
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
