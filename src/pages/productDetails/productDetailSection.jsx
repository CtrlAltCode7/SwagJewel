import React, { useState ,useRef} from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  Tooltip,
  TextField, Stack
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import ProductDetailSlider from "./productDetailSlider";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ProductDetailCustomizeOptions from "./productDetailCustomizeOptions";
import ProductDetailTabs from "./productDetailTabs";
import ProductDetailContentTabs from "./productDetailContentTabs";
import ProductDetailsCustomizeHeaderOption from "./productDetailsCustomizeHeaderOption";
import ScrollDialog from "./productDetailsDialogBox";
import CartMassage from "../cart/cartMassage/CartMassage";
export default function ProductDetailSection() {
  // const [token, settoken] = useState(true);
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [showCartMsg, setShowCartMsg] = useState(false);
  const anchorRef = useRef(null);


  const handleAddToCart = () => {
    setShowCartMsg(true);
  };

  return (
    <>
      <Grid container spacing={2} mt={0.5}>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 6}>
          <Paper elevation={3} style={{ padding: 2 }}>
            {/* <ProductDetailSlider /> */}
            <ScrollDialog />
          </Paper>
        </Grid>

        {/* Third Portion */}
        <Grid item xs={12} sm={isSmallScreen ? 12 : 6}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={isSmallScreen ? 12 : 7}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Paper elevation={3} style={{ padding: 0 }}>
                <ProductDetailCustomizeOptions />
              </Paper>
              <Grid gap={1}>
                <Paper elevation={3}>
                  <ProductDetailsCustomizeHeaderOption
                    leftTitle="Product"
                    rightTitle="Anniversary Band"
                    paddingValue="2"
                  />
                  <ProductDetailsCustomizeHeaderOption
                    leftTitle="Jewelry State"
                    rightTitle="Set"
                    paddingValue="2"
                  />
                  {/* <ProductDetailTabs /> */}
                  <ProductDetailTabs
                    tabs={[
                      {
                        label: "Set",
                        content: <ProductDetailContentTabs />,
                      },
                      {
                        label: "Unset",
                        content: <ProductDetailContentTabs />,
                      },
                    ]}
                  />
                </Paper>
              </Grid>
            </Grid>
            {/* {showCartMsg && <CartMassage showCartMsg={showCartMsg} setShowCartMsg={setShowCartMsg} />} */}
            {/* Second half of the Third Portion (conditionally rendered based on screen size) */}
            {token ?
              <Grid
                item
                xs={5}
                style={{
                  position: "sticky",
                  top: 0,
                  Minheight: "100vh",
                  overflowY: "auto",
                }}
              >
                <Paper elevation={3} style={{ padding: 20 }}>
                  <Typography variant="h6" textAlign={"center"}>
                    $67.00
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "#547f9e",
                      height: "20px",

                    }}
                  >
                    In Stock
                  </Button>
                  <Grid
                    item
                    xs={12}
                    lg={10}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      textTransform: "uppercase",

                    }}
                    mt={2}
                  >
                    <LocalShippingIcon
                      fontSize="small"
                      color="#2596be"
                      sx={{
                        color: "#2596be",
                      }}
                    />
                    <Typography
                      // variant="subtitle2"
                      sx={{
                        color: "#555",
                        textTransform: "capitalize",
                        marginLeft: ".5rem",
                      }}
                    >
                      <Typography
                        component={"span"}
                        fontSize="small"
                        sx={{
                          color: "#2596be",
                          fontWeight: "bold",
                        }}>
                        Ready to ship today
                      </Typography>

                      <Typography fontSize="small">
                        if you buy in the next
                      </Typography>
                      <Typography
                        component={"span"}
                        fontSize="small"
                        sx={{
                          color: "#2596be",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        10h 9m 43s{" "}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Box>
                    <Typography sx={{ marginLeft: "160px" }}>QTY</Typography>
                    <Box sx={{ display: "flex" }}>
                      <TextField
                        variant="outlined"
                        size="small"
                        sx={{
                          width: "150px",
                          "& .MuiOutlinedInput-root": {
                            height: "25px",
                            borderRadius: "0px",
                          },
                        }}
                        defaultValue={1}
                      // value={productQuantity}
                      // onChange={(e) => setProductQuantity(e.target.value)}
                      />
                      <Button
                        variant="contained"
                        sx={{
                          width: "60px",
                          height: "25px",
                          borderRadius: "0px",
                          backgroundColor: "#eee",
                          color: "#555",
                          border: "1px solid #555",
                          textTransform: "capitalize",
                        }}
                      >
                        Each
                      </Button>
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
                            height: "25px",
                          },
                        }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                          fontWeight: "bold",
                        }}
                      >
                        Costomer Notes:
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
                            height: "25px",
                          },
                        }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      marginTop: ".5rem",
                      background: "green",
                      fontSize: "11px",
                      fontWeight: "bold",
                    }}
                    onClick={handleAddToCart}
                  >
                    ADD TO CART
                  </Button>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      marginTop: ".5rem",
                      background: "#f5d45e",
                      fontSize: "11px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <AutorenewIcon sx={{ color: "black" }} size="small" /> Audio Refresher
                  </Button>
                  <Button
                    // variant="contained"
                    fullWidth
                    sx={{
                      marginTop: ".5rem",
                      fontSize: "11px",
                      background: "white",
                      color: "black",
                      fontWeight: "bold",

                    }}
                  >
                    <FavoriteBorderIcon sx={{ color: "black" }} size="small" /> Add to favorite
                  </Button>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      marginTop: ".5rem",
                      background: "#377254",
                      fontSize: "11px",
                      fontWeight: "bold",
                      p: "5px",
                    }}
                  >
                    Showcase Pricing Summary
                  </Button>
                </Paper>
              </Grid>
              :
              (!isSmallScreen && (
                <Grid
                  item
                  xs={5}
                  style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    overflowY: "auto",
                  }}
                >
                  <Paper elevation={3} style={{ padding: 20 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        background: "#75b0da",
                      }}
                    >
                      Log In For Pricing
                    </Button>
                    <Typography textAlign={"center"} m={1}>
                      OR
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#4d4a49",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: ".7rem .5rem",
                      }}
                    >
                      <Button>
                        <img
                          src="https://meteor.stullercloud.com/das/56489807?hei=200&fmt=smart-alpha"
                          width={125}
                        />
                      </Button>
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "#fff",
                        }}
                      >
                        Find a Retailer near you
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        marginTop: "1rem",
                        background: "#547f9e",
                      }}
                    >
                      Made To Order
                    </Button>
                  </Paper>
                </Grid>

              ))}
            {showCartMsg && <CartMassage showCartMsg={showCartMsg} setShowCartMsg={setShowCartMsg} anchorEl={anchorRef.current}
              placement="left" />}
          </Grid>

        </Grid>
      </Grid>
    </>
  );
}
