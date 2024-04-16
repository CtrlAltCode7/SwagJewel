import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FooterAccordionForMobile from "../../pages/Footer/FooterAccordionForMobile";
import AccordionExpandIcon from "../Accordion/AccordionExpandIcon";
import { Typography } from "@mui/material";
import SelectComponent from "../SelectComponent/SelectComponent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  // boxShadow: 'none',
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <AccordionExpandIcon />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "sans-serif",
                textAlign: "justify",
              }}
            >
              Anniversary & Eternity Bands
            </Typography>
          </Item>
          <Item>
            <img
              src="https://meteor.stullercloud.com/das/130123378"
              style={{
                height: "19vh",
                objectFit: "fill",
              }}
            />
          </Item>
          <Item
            sx={{
              paddingTop: "1rem",
              overflow: "hidden !important",
              display: "flex",
              flexGrow: 1
            }}
          >

              <SelectComponent />

              <SelectComponent />
              <SelectComponent />

              <SelectComponent />

          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
