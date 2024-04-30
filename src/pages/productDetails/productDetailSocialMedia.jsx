import React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { shareStyles } from "./productDetailSocialMediaStyles";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';

export default function ProductDetailSocialMedia() {
  const theme = useTheme();
  const styles = shareStyles;

  const buttonData = [
    { icon: <EmailIcon />, title: "Email" },
    { icon: <ContentCopyIcon />, title: "Copy Link" },
    { icon: <FacebookIcon />, title: "Facebook" },
    { icon: <PinterestIcon />, title: "Pintrest" },
    { icon: <XIcon />, title: "Twitter" },
  ];
  return (
    <Grid container spacing={2} style={{ maxWidth: "250px" }}>
      {buttonData.map((button, index) => (
        <Grid item xs={6} key={index}>
          <Typography sx={styles.shareContainer} component="div" align="center">
            {button.icon}
            {button.title || ""}
          </Typography>
        </Grid>
      ))}
      {/* Add other buttons here */}
    </Grid>
  );
}
