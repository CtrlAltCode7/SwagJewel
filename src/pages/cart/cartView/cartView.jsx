import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Link,
  Paper,
  TextField,
  Stack,
  Checkbox,
  Tooltip,
} from "@mui/material";
import CartTabs from "../cartTabs/cartTabs";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageCartItemOption from "./manageCartItemOption/manageCartItemOption";
import HelpIcon from "@mui/icons-material/Help";
import { useState } from "react";

export default function CartView() {
  const [cartCount, setCartCount] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const handleStartShopping = () => {
    window.location = "/browse/";
  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <CartTabs />
        </Grid>
        <Grid item xs={12} lg={10}>
          <Box>
            <Typography
              variant=""
              sx={{
                fontSize: {
                  xs: 30,
                  sm: 32,
                  md: 34,
                  lg: 36,
                  xl: 37,
                },
                fontWeight: 100,
                color: "#555",
                margin: "1rem",
              }}
            >
              Your Shopping Cart
            </Typography>
          </Box>

          <Box id="cart">
            {cartCount === 0 ? (
              <Box
                id="cartItems"
                sx={{
                  textAlign: "center",
                  mt: 2,
                  p: 2,
                  border: "1px solid",
                  borderColor: "grey.300",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "18px",
                    color: "#555",
                    marginBottom: "1rem",
                  }}
                >
                  Your Shopping Cart is Empty.
                </Typography>
                <Typography variant="body2">
                  You can search for items to add to your cart by browsing our{" "}
                  <Link
                    href=""
                    style={{
                      color: "#555",
                      textDecoration: "underline",
                    }}
                  >
                    Products
                  </Link>
                  .
                </Typography>
                <Typography variant="body2">
                  If you already know the item you would like,{" "}
                  <Link
                    href=""
                    style={{
                      color: "#555",
                      textDecoration: "underline",
                    }}
                  >
                    Quick Order
                  </Link>{" "}
                  provides the fastest way to add it to your cart.
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    // color="primary"
                    // size="large"
                    onClick={handleStartShopping}
                    sx={{
                      backgroundColor: "#75b0da",
                      color: "#fff",
                    }}
                  >
                    Start Shopping
                  </Button>
                </Box>
              </Box>
            ) : (
              // Render cart items if cartCount > 0
              <div>Your cart items will be displayed here.</div>
            )}
          </Box>

          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              mt: 4,
              mb: 2,
            }}
          >
            <Paper sx={{ p: 2, backgroundColor: "#eee" }}>
              <Typography variant="h6" gutterBottom>
                Return Policy
              </Typography>
              <Typography variant="body2">
                Returns of Diamonds with Grading Report and Notable Gems™ must
                be received by Stuller within 10 days of the invoice date.
                Finished Jewelry, Tools, Supplies and Packaging, and Fabricated
                Metals must be returned within 15 days of invoice date. All
                other returns must be received within 30 days of the invoice
                date. Items special ordered, altered, cut, or manufactured to
                your specifications, cannot be accepted for credit or exchange.{" "}
                <Link
                  href=""
                  style={{
                    color: "#555",
                    textDecoration: "underline",
                  }}
                >
                  View Cancellation and Returns details
                </Link>
              </Typography>
              <Typography sx={{ mt: 2 }} variant="body2">
                For items that cannot be returned within the specifications of
                our return policy guidelines, you may still be eligible for
                account credit through our Clean Scrap program. Fabricated
                metals that have been specially ordered or manufactured to your
                specifications, altered, cut, annealed, etc. cannot be returned
                or exchanged. Any items received outside of the associated time
                frame may incur a 15% restocking fee.{" "}
                <Link
                  href="/"
                  style={{
                    color: "#555",
                    textDecoration: "underline",
                  }}
                >
                  Learn More
                </Link>
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Availability
              </Typography>
              <Typography variant="body2">
                Product availability is updated hourly.
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Pricing Notice
              </Typography>
              <Typography variant="body2">
                All prices are approximate and are subject to change without
                notice. Quoted prices for items sold by weight are based on
                average weight. You will be invoiced for these items based on
                the actual total weight of the item(s) shipped and the market
                rates in effect at the time of shipping.
              </Typography>
            </Paper>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
              marginBottom: "2rem"
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                // backgroundColor: "red",
              }}
            >
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  // backgroundColor: "blue",
                }}
              >
                <Typography
                  sx={{
                    color: "#555",
                    fontWeight: "bold",
                    textAlign: { xs: "center", md: "left" },
                  }}
                  variant="body2"
                >
                  {/* ITEM DESCRIPTION */}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  // backgroundColor: "green",
                }}
              >
                {/* Additional content can be added here if needed */}
              </Grid>
              <Grid container item spacing={2} xs={12} md={5}>
                <Grid item spacing={2} xs={12} md={2}></Grid>

                <Grid item spacing={2} xs={12} md={10}>
                  <Button fullWidth variant="contained" color="success">
                    Proceed to Secure Checkout
                  </Button>
                </Grid>
                <Grid
              item
              xs={12}
              lg={8}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "end",
                color: "#555",
                fontWeight: "bold",

                // padding: '4px'
              }}
            >
              Estimated Total:
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                // background: "red",
                display: "flex",
                justifyContent: "flex-end",
                color: "#555",
                fontWeight: "bold",

                // padding: '4px'
              }}
            >
              $228.27
            </Grid>

                {/* <Grid item xs={6} md={2}>
                  <Typography
                    sx={{
                      color: "#555",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                    variant="body2"
                  >
                    QUANTITY
                  </Typography>
                </Grid> */}
                {/* <Grid item xs={6} md={10}> */}
                {/* <Grid
                    item
                    // xs={12}
                    // lg={10}
                    sx={{
                      // background: "red",
                      display: "flex",
                      justifyContent: "flex-end",
                      textTransform: "uppercase",

                      // padding: '4px'
                    }}
                    mt={2}
                  > */}

                {/* </Grid> */}
                {/* </Grid> */}
              </Grid>
              <Grid></Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <Typography
                  sx={{
                    color: "#555",
                    fontWeight: "bold",
                    textAlign: { xs: "center", md: "left" },
                  }}
                  variant="body2"
                >
                  ITEM DESCRIPTION
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                {/* Additional content can be added here if needed */}
              </Grid>
              <Grid item container spacing={2} xs={12} md={5}>
                <Grid item xs={6} md={6}>
                  <Typography
                    sx={{
                      color: "#555",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                    variant="body2"
                  >
                    QUANTITY
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Typography
                    sx={{
                      color: "#555",
                      fontWeight: "bold",
                      textAlign: "end",
                      md: {
                        textAlign: "end",
                      },
                    }}
                    variant="body2"
                  >
                    EST. PRICE
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, border: "1px solid #cecece" }}>
            <Grid container spacing={2} p={2}>
              <Grid item xs={12} md={2}>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
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
                      xs={6}
                      sx={{
                        fontWeight: "bold",
                        color: "#555",
                      }}
                    >
                      item #:
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                        }}
                      >
                        AMETHYST-GEN:216175:G
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
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
                </Box>
                <Box
                  sx={{
                    margin: "1rem",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Checkbox defaultChecked size="small" />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    Match for Size and Color
                  </Typography>
                </Box>
                <Box>
                  <Typography
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
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Reviewed Prior to Shipping"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        height: "40px",
                      },
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  // backgroundColor: "red",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Stack direction="row" spacing={0} alignItems="center">
                      <TextField
                        variant="outlined"
                        size="small"
                        sx={{
                          width: "100px",
                          "& .MuiOutlinedInput-root": {
                            height: "40px",
                            borderRadius: "0px",
                          },
                        }}
                        defaultValue={1}
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                      />
                      <Button
                        variant="contained"
                        sx={{
                          height: "40px",
                          borderRadius: "0px",
                          backgroundColor: "#eee",
                          color: "#555",
                          border: "1px solid #555",
                          textTransform: "capitalize",
                        }}
                      >
                        Each
                      </Button>
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

                <Grid container spacing={1} mt={0.1}>
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
                      <LocalShippingIcon fontSize="small" />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                        }}
                      >
                        Ready to Ship{" "}
                        <Typography
                          component={"span"}
                          variant="body2"
                          sx={{
                            fontWeight: "bold",
                            color: "#555",
                          }}
                        >
                          Today
                        </Typography>
                      </Typography>
                    </Box>
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
                      <LocalShippingIcon
                        fontSize="small"
                        sx={{
                          visibility: "hidden",
                        }}
                      />
                      <Typography variant="body2"></Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      fontWeight: "bold",
                    }}
                  >
                    Customer Notes:
                    <Tooltip title="Additional information about customer notes">
                      <HelpIcon fontSize="small" />
                    </Tooltip>
                  </Typography>

                  <TextField
                    fullWidth
                    placeholder="For Personal Use"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        height: "40px",
                      },
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
              </Grid>
            </Grid>
            {/* <Box
              sx={{
                backgroundColor: "#eee",
                display: "flex",
                justifyContent: "end",
                alignItems: "center"
              }}
              p={1}
            >
              <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 1
              }}>
                <FavoriteBorderIcon fontSize="small"/>
                <Typography>Move To Favorites</Typography>
              </Box>
            </Box> */}
            <Box
              sx={{
                backgroundColor: "#eee",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <ManageCartItemOption
                icon={FavoriteBorderIcon}
                text="Move To Favorites"
              />
              <ManageCartItemOption icon={SaveAltIcon} text="Save For Later" />
              <ManageCartItemOption icon={DeleteIcon} text="Remove Item" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={2}>
          <Box id="policyInformation">
            <Paper sx={{ textAlign: "center", p: 2, mt: 6 }}>
              <Box
                sx={{
                  display: { xs: "block", lg: "none" },
                }}
              >
                <img
                  src="//meteor.stullercloud.com/das/42410453?scl=1&amp;$sharpen$"
                  alt="Schedule Order"
                  className="img-responsive scheduleImg"
                  style={{ maxWidth: "100%" }}
                />
              </Box>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ mt: 2, fontWeight: 100, color: "#555" }}
              >
                You Schedule.
                <br />
                We Ship.
              </Typography>
              <Typography className="Archer">
                Take advantage of Stuller’s convenient order scheduling.
                Throughout the day, place items in your cart to reserve the
                inventory. At cutoff time, your order will process and ship.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  // color="primary"
                  // size="large"
                  onClick={handleStartShopping}
                  sx={{
                    backgroundColor: "#75b0da",
                    color: "#fff",
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
