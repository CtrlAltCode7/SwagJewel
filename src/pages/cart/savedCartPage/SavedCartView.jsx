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
import ManageCartItemOption from "../cartView/manageCartItemOption/manageCartItemOption";
import HelpIcon from "@mui/icons-material/Help";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SavedCartView() {
    const [cartCount, setCartCount] = useState(0);
    const [productQuantity, setProductQuantity] = useState(1);

    const handleStartShopping = () => {
        window.location = "/browse/";
    };

    const navigate = useNavigate()
    const handleCheckoutPage = () => {
        navigate("/review")
    }
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
                                    <Box display="flex"  mt={2}>

                                        <LocalShippingIcon
                                            fontSize="medium"
                                            sx={{ color: "#75b0da", mr: 1, width: 25 }}
                                        />
                                        <span style={{ color: "#555" }}>
                                            Eligible items in your cart can ship <b>today</b> if you checkout in the <b style={{ color: "#75b0da" }}>8h 39m 33s</b>
                                        </span>
                                        {/* <Typography variant="body1">
                                            Eligible items in your cart can ship <b>today</b> if you checkout in the <b style={{ color: "#75b0da" }}>8h 39m 33s</b>
                                        </Typography> */}
                                    </Box>
                                    <Box display="flex" alignItems="center" mt={2}>
                                        <HelpIcon />
                                        <Link variant="body1">Eligible Items</Link>
                                    </Box>
                                    <Button sx={{ mt: 2 }} fullWidth variant="contained" color="success" onClick={handleCheckoutPage}>
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
