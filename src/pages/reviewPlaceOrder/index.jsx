import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import ShippingAddress from "./shippingAddress/shippingAddress";
import ProomoCodeAndPO from "./promoCodeAndPO/proomoCodeAndPO";
import CheckOutInfo from "./checkoutInfo/checkOutInfo";
import swagLogo from "../../assets/swag-logo.png";
import { CustomButton } from "./shippingAddress/shippingStyle";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Icon from "@mui/material/Icon";
import AddModeratorIcon from "@mui/icons-material/AddModerator";

const addressData = [
  { text: "123568-000001" },
  { text: "4301 MARTINIQUE CIR" },
  { text: "STE 81" },
  { text: "COCONUT CREEK, FL 33066-1486" },
  { text: "US" },
];

const paymentMethod = [{ text: "Stuller Line of Credit" }];

const shippingData = [
  { text: "Shipment #1" },
  { text: "UPS Next Day Saver" },
  { text: "Est. Charge: $27.99" },
  { text: "Est. Delivery Date: Tue May 21, 2024" },
];

export default function ReviewPlaceOrder() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleShippingMethod = () => {
    navigate("/shipping-method")
  }
  return (
    <>
      <Box marginBlock={3} sx={{
        borderBottom: "1px solid"
      }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={swagLogo} width={"30%"} />
          </Box>
          <Box
            sx={{
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                textDecoration: "underline",
                color: "#555",
              }}
            >
              78787878787
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textDecoration: "underline",
                color: "#555",
              }}
            >
              Keep shopping
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          marginBottom: "1rem",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center" // Center the items horizontally
          mt={2}
          sx={{
            width: { xs: "calc(100% + 0px)" },
            my: { xs: 0 },
            ml: { xs: 0 },
          }}
        >
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              border: "1px solid #cecece",
              mx: { xs: 0, md: 0 },
              width: { xs: "calc(100% + 0px)" },
              my: { xs: 0 },
              ml: { xs: 0 },
              maxWidth: { xs: "90%", md: "100%" },
            }}
          >
            <Box>
              <Box
                sx={{
                  borderBottom: "1px solid #cecece",
                  marginRight: { md: "1rem" },
                  paddingBottom: "1rem",
                }}
              >
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: 20,
                      sm: 22,
                      md: 24,
                      lg: 26,
                      xl: 27,
                    },
                    fontWeight: 100,
                  }}
                >
                  Review and Place Order
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    color: "#555",
                    fontWeight: "bold",
                  }}
                >
                  Please review your order carefully and click either "Place
                  Order" or "Schedule Order" when done.
                </Typography>
              </Box>
              <Box mt={4}>
                <Grid container spacing={2} xs={12} md={12}>
                  <Grid
                    item
                    xs={12}
                    md={5}
                    sx={
                      {
                        // backgroundColor: "red",
                        // display: "flex",
                        // flexDirection: "column",
                        // gap:1
                      }
                    }
                  >
                    <Box mt={3}>
                      <ShippingAddress
                        customText={addressData}
                        boldText={"Shipping Address"}
                      />
                    </Box>
                    <Box mt={3}>
                      <ShippingAddress
                        customText={paymentMethod}
                        boldText={"Payment Method"}
                      />
                    </Box>
                    <Box mt={3}>
                      <ShippingAddress
                        customText={shippingData}
                        boldText={"Shipping Method"}
                        handleShippingMethod={handleShippingMethod}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={7}
                    sx={
                      {
                        // backgroundColor: "red"
                      }
                    }
                  >
                    <ProomoCodeAndPO />
                  </Grid>
                  <Grid
                    // item
                    xs={12}
                    md={12}
                    sx={{
                      backgroundColor: "#ecebf0",
                      padding: 1,
                    }}
                  >
                    {/* <ProomoCodeAndPO /> */}
                    <Button
                      variant="contained"
                      startIcon={<ArrowBackIcon />} // Add icon to the start of the button
                      sx={{
                        backgroundColor: "#fff", // Background color
                        color: "#999699", // Text color
                        "&:hover": {
                          backgroundColor: "#666666", // Hover background color
                          color: "#e0e0e0", // Hover text color
                        },
                        paddingInlineStart: 3,
                      }}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid
            // item
            xs={12}
            md={4}
            sx={{
              border: "1px solid #cecece",
              mx: { xs: 0, md: 0 },
              width: { xs: "calc(100% + 0px)" },
              my: { xs: 0 },
              ml: { xs: 0 },
              maxWidth: { xs: "90%", md: "100%" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CheckOutInfo />
          </Grid>
        </Grid>
      </Container>
      <Box mb={3}>
        <Container maxWidth="lg">
          <Grid
            container
            xs={12}
            md={12}
            spacing={2}
            sx={{
              width: { xs: "calc(100% + 0px)" },
              my: { xs: 0 },
              ml: { xs: 0 },
            }}
          >
            <Grid
              xs={12}
              md={8}
              border={"1px solid "}
              sx={{
                border: "1px solid #cecece",
                mx: { xs: 0, md: 0 },
                width: { xs: "calc(100% + 0px)" },
                my: { xs: 0 },
                ml: { xs: 0 },
                maxWidth: { xs: "90%", md: "100%" },
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
                    <AddModeratorIcon
                      fontSize="small"
                      sx={{
                        p: 1,
                      }}
                    />

                    <Typography
                      sx={{
                        background: "#e0dee0",
                        color: "#555",
                        p: 1,
                      }}
                      // startAdornment={
                      // }
                    >
                      UPS next day saver $27.55
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              {/* <Grid container xs={12} md={12} spacing={2}>
                <Grid item xs={12} md={7}>
                  <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <Typography>Shipment #1</Typography>
                    <Typography>Ships Today</Typography>

                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Typography>UPS next day saver</Typography>
                </Grid>
              </Grid> */}

              <Box sx={{ flexGrow: 1, border: "0px solid #cecece" }}>
                <Grid container spacing={2} p={2}>
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
                    {/* <Box>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        fontWeight: "bold",
                        color: "#555",
                      }}
                    >
                      Added on:
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                        }}
                      >
                        5/20/2024
                      </Typography>
                    </Grid>
                  </Grid>
                </Box> */}
                    <Box
                      sx={{
                        margin: "1rem",
                        display: "flex",
                        // justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* <Checkbox defaultChecked size="small" /> */}
                      {/* <Typography
                    variant="subtitle2"
                    sx={{
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    Match for Size and Color
                  </Typography> */}
                    </Box>
                    <Box>
                      {/* <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      fontWeight: "bold",
                    }}
                  >
                    Special Instructions:
                    <Tooltip title="Additional information about customer notes">
                      <HelpIcon fontSize="small" />
                    </Tooltip>
                  </Typography> */}
                      {/* <TextField
                    fullWidth
                    placeholder="Reviewed Prior to Shipping"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        height: "40px",
                      },
                    }}
                    InputLabelProps={{ shrink: true }}
                  /> */}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={5}
                    sx={
                      {
                        // backgroundColor: "red",
                      }
                    }
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
                              // height: "40px",
                              // borderRadius: "0px",
                              // backgroundColor: "#eee",
                              // color: "#555",
                              // border: "1px solid #555",
                              // textTransform: "capitalize",
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
                          {/* <LocalShippingIcon
                        fontSize="small"
                        sx={{
                          visibility: "hidden",
                        }}
                      /> */}
                          <Typography variant="body2"></Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              // sx={{
              //   border: "1px solid #cecece",
              //   mx: { xs: 0, md: 0 },
              //   width: { xs: "calc(100% + 0px)" },
              //   my: { xs: 0 },
              //   ml: { xs: 0 },
              //   maxWidth: { xs: "90%", md: "100%" },
              // }}
              mb={3}
            >
              {/* dd */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
