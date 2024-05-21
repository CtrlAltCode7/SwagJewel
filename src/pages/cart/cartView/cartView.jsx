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
} from "@mui/material";
import CartTabs from "../cartTabs/cartTabs";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageCartItemOption from "./manageCartItemOption/manageCartItemOption";

export default function CartView() {
  const [cartCount, setCartCount] = React.useState(0);

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
          <Box sx={{ flexGrow: 1, border: "1px solid" }}>
            <Grid container spacing={2} p={2}>
              <Grid item xs={2} md={2}>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt="Placeholder image"
                  src="https://via.placeholder.com/150"
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      textDecoration: "underline",
                    }}
                  >
                    1 mm Round Faceted AA Natural Amethyst
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      item #:
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        AMETHYST-GEN:216175:G
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      Added on:
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">5/20/2024</Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    margin: "1rem",
                  }}
                >
                  <Typography variant="body2">
                    Match for Size and Color
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">Special Instructions:</Typography>
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
                sx={
                  {
                    // backgroundColor: "red",
                  }
                }
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
                    <Typography> $5.99</Typography>
                    <Typography component={"span"}>In stock</Typography>
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
                      <Typography variant="body2">
                        Ready to Ship{" "}
                        <Typography component={"span"} variant="body1">
                          Today
                        </Typography>
                      </Typography>
                    </Box>
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
                  <Typography variant="body2">Customer Notes:</Typography>

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
            {/* <Box
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
            </Box> */}
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
                sx={{ mt: 2, fontWeight: 100 }}
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
