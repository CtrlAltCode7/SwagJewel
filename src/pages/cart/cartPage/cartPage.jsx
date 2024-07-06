import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import HelpIcon from "@mui/icons-material/Help";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate("/cart");
    };
    return (
        <Box>
            <Box p={2}>
                <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                    <span>
                        <LocalShippingIcon
                            fontSize="small"
                            sx={{ color: "#75b0da", mr: 1, width: 25, verticalAlign: 'middle' }} />
                        <span>
                            Eligible items in your cart can ship <b>today</b> if you checkout in the <b style={{ color: "#75b0da" }}>8h 39m 33s</b>
                        </span>
                    </span>
                </Box>

                <Box display="flex" alignItems="center" mt={2}>
                    <HelpIcon />
                    <Link variant="body1">Eligible Items</Link>
                </Box>
                <Button
                    variant="outlined"
                    sx={{
                        width: "100%",
                        background: "green",
                        borderRadius: "20px",
                        mt: 2,
                        minWidth: "155px",
                        padding: "10px 15px",
                        color: "white"
                    }}
                >
                    Checkout now
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        width: "100%",
                        borderRadius: "20px",
                        mt: 2,
                        minWidth: "155px",
                        padding: "10px 15px",
                    }}
                    onClick={handleNavigation}
                >
                    Go To Cart
                </Button>
                <Box display="flex" alignItems="center" mt={2}>
                    <Typography>Estimated Subtotal</Typography>
                    <Typography sx={{ ml: "auto", fontWeight: "bold" }}>$67.00</Typography>
                </Box>
                <Box sx={{ flexGrow: 1, border: "1px solid #cecece", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    <Box sx={{ display: "flex" }} container spacing={2} p={2}>
                        <Box
                            component="img"
                            sx={{
                                width: "20%",
                                height: "auto",
                            }}
                            alt="Placeholder image"
                            src="https://meteor.stullercloud.com/das/2174033?&$xlarge$&$sharpen$"
                        />
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
                    </Box>
                    <Box >
                        <Box>
                            <Typography> $67.00</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                    <Box sx={{ display: "flex", gap: "5px" }}>
                        <DeleteIcon />
                        <Typography>REMOVE</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "5px" }}>
                        <AddIcon />
                        <Typography>SAVE FOR LATER </Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};
export default CartPage;



