import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const EmptyCart = () => {
    return (
        <Box className="cart-menu-container">
            <Box p={2}>
                <Typography variant="body1" align="center" mt={2}>
                    <ShoppingCartIcon fontSize="medium" sx={{ color: 'green', mr: 1, width: 25 }} />
                    Your Cart is empty
                </Typography>
                <Button href="/cart" variant="outlined" sx={{ width: '100%', borderRadius: '5px', mt: 2, minWidth: "155px", padding: "10px 15px" }}>
                    Go To Cart
                </Button>
            </Box>
        </Box>
    );
};

export default EmptyCart;
