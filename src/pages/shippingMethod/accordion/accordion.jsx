import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShippingTable from "../shippingTable/shippingTable";

export default function AccordionShipment() {
  return <CustomAccordion />;
}

function CustomAccordion() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          padding: 0,
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
          minHeight: "auto",
          backgroundColor: "#e0dee0",
          mt: ".7rem",
        }}
      >
        <Grid container xs={12} md={12} spacing={2} ml={0}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              "&.MuiGrid-item": {
                paddingLeft: 0,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#636163",
                color: "#fff",
                p: 1,
              }}
            >
              <Typography>Shipment #1</Typography>
              <Typography>Ships Today</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              "&.MuiGrid-item": {
                paddingLeft: 0,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#e0dee0",
              }}
            >
              {/* <AddModeratorIcon
                    fontSize="small"
                    sx={{
                      p: 1,
                    }}
                  /> */}
              <Typography
                sx={{
                  background: "#e0dee0",
                  color: "#555",
                  p: 1,
                }}
              >
                UPS next day saver $27.55
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: 0,
        }}
      >
        <ShippingTable />
        <Box sx={{ flexGrow: 1, border: "1px solid #cecece" }}>
          <Grid container spacing={2} p={2} xs={12} md={12}>
            <Grid
              xs={12}
              md={2}
              alignSelf={"center"}
              justifyContent={"center"}
              sx={{
                display: "flex",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "50%",
                  height: "auto",
                  justifyContent: "center",
                  display: "flex",
                }}
                alt="Placeholder image"
                src="https://meteor.stullercloud.com/das/2174033?&$xlarge$&$sharpen$"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                    color: "#555",
                  }}
                >
                  1 mm Round Faceted AA Natural Amethyst
                </Typography>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      fontWeight: "bold",
                      color: "#555",
                    }}
                  >
                    item #:
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#555",
                        textAlign: "end",
                      }}
                    >
                      AMETHYST-GEN:216175:G
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  margin: "1rem",
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
              </Box>
              <Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Stack
                    direction="row"
                    spacing={0}
                    alignItems="center"
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="outlined"
                      size="small"
                      // sx={{
                      //   width: "100px",
                      //   "& .MuiOutlinedInput-root": {
                      //     height: "40px",
                      //     borderRadius: "0px",
                      //   },
                      // }}
                      // defaultValue={1}
                      // value={productQuantity}
                      // onChange={(e) => setProductQuantity(e.target.value)}
                    >
                      1
                    </Typography>
                    <Typography
                      // variant="contained"
                      sx={{
                        marginLeft: 1,
                      }}
                    >
                      Each
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6} textAlign={"end"} alignSelf={"center"}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#555",
                    }}
                  >
                    {" "}
                    $5.99
                  </Typography>
                  <Typography
                    component={"span"}
                    sx={{
                      color: "#555",
                    }}
                  >
                    In stock
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                spacing={1}
                sx={{
                  margin: ".77rem",
                }}
              >
                <Grid item xs={6}></Grid>
                <Grid item xs={6} sx={{}}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignSelf: "end",
                      justifyContent: "end",
                      gap: 1,
                    }}
                  >
                    <Typography variant="body2"></Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
