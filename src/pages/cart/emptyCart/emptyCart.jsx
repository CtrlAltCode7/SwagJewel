import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/cart");
  };
  return (
    <Box className="cart-menu-container">
      <Box p={2}>
        <Typography variant="body1" align="center" mt={2}>
          <ShoppingCartIcon
            fontSize="medium"
            sx={{ color: "green", mr: 1, width: 25 }}
          />
          Your Cart is empty
        </Typography>
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            borderRadius: "5px",
            mt: 2,
            minWidth: "155px",
            padding: "10px 15px",
          }}
          onClick={handleNavigation}
        >
          Go To Cart
        </Button>
      </Box>
    </Box>
  );
};

export default EmptyCart;
