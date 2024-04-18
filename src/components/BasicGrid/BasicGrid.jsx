import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FooterAccordionForMobile from "../../pages/Footer/FooterAccordionForMobile";
import AccordionExpandIcon from "../Accordion/AccordionExpandIcon";
import { Button, Pagination, Switch, Typography } from "@mui/material";
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
  const label = { inputProps: { "aria-label": "Size switch demo" } };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <Item>
            <AccordionExpandIcon />
          </Item>
        </Grid>
        <Grid xs={12} sm={12} md={9} lg={9}>
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
              paddingTop: "0 1rem",
              overflow: "hidden !important",
              display: "flex",
              justifyContent: "space-evenly !important",
              // flexGrow: 1,
              padding: "1rem 1rem 0",
              "@media (max-width:  768px)": {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#eee",
                flexDirection: "row",
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                // margin: "0 1rem",
                paddingTop: "2rem",
                flexWrap: "wrap",

                "@media (max-width:  768px)": {
                  flexDirection: "column",
                  margin: 0,
                },
              }}
            >
              <SelectComponent title="Finger Size" minWidthSize="200" />
              <SelectComponent title="Primary Stone Count" minWidthSize="200" />
              <SelectComponent title="Primary Stone Shape" minWidthSize="200" />
              <SelectComponent title="Metal Color" minWidthSize="200" />
            </Box>
          </Item>
          <Item
            sx={{
              padding: "0 1.4rem ",
              justifyContent: "space-evenly !important",
              "@media (max-width:  768px)": {
                padding: "0 1rem ",
              },
            }}
          >
            <Box
              sx={{
                background: "#eee",
                textAlignLast: "end",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff", // Set background color
                  color: "#555", // Set text color
                  border: "1px solid #999",
                  fontSize: "12px",
                  margin: ".5rem 1rem 1rem",
                  "&:hover": {
                    backgroundColor: "#999", // Change background color on hover
                    color: "#ffffff", // Change text color on hover
                  },
                }}
              >
                Reset Selections
              </Button>
            </Box>
          </Item>
          <Item
            sx={{
              padding: "0 1.4rem ",
            }}
          >
            <Box
              component={"p"}
              sx={{
                padding: "1.5rem",
                backgroundColor: "#eee",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "flex !important",
                  justifyContent: "center",
                  wordWrap: "break-word",
                  fontWeight: "bold",
                }}
              >
                <Switch {...label} defaultChecked size="small" />
                Ready to Ship
                <Typography variant="body2">
                  - Only show products that have at least one in-stock option
                </Typography>
              </Typography>
            </Box>
          </Item>
          <Item 
            sx={{
              margin: "0 1rem",
              
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // flexDirection: { md: "column", lg: "row"},
                // flexWrap: "wrap"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" mr={1}>
                  Sort by
                </Typography>
                <SelectComponent minWidthSize="50"/>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex", lg: "flex" },
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <Typography>Showing 1 - 36 of 1226</Typography>|
                <Typography>Items per page</Typography>
                <SelectComponent minWidthSize="50"/>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none", lg: "none" },
                  alignItems: "center",
                }}
                md="3"
              >
                <Typography
                  variant="body2"
                  sx={{
                    display: { xs: "flex", md: "none", lg: "none" },
                  }}
                >
                  Items:
                </Typography>

                <SelectComponent minWidthSize="50"/>
              </Box>
            </Box>
          </Item>
          <Item
            sx={{
              margin: "0 1rem",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              color="primary"
              sx={{
                '& .Mui-selected': {
                  backgroundColor: 'blue', // Customize background color of selected button
                  color: 'white', // Customize text color of selected button
                },
                '& button:not(.Mui-selected)': {
                  backgroundColor: 'lightgray', // Customize background color of other buttons
                  color: 'black', // Customize text color of other buttons
        
                },

              }}
              
            />
          </Item>
          <Item sx={{
              margin: "0 2%",

          }}>
            hi
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
