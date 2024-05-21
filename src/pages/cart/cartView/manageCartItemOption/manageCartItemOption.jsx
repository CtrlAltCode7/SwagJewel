import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";

export default function ManageCartItemOption({ icon: Icon, text }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#eee",
        padding: theme.spacing(1),
      }}
    >
      <Grid container alignItems="center" justifyContent={isMobile ? "center" : "end"} spacing={1}>
        <Grid item>
          {Icon && <Icon fontSize={isMobile ? "large" : "small"} />}
        </Grid>
        <Grid item>
          <Typography variant={isMobile ? "body1" : "body2"} textAlign={isMobile && "center"}>{text}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
