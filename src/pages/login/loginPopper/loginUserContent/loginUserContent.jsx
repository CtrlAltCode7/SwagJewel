import React from 'react';
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, SvgIcon, Typography } from '@mui/material';
import { AccountCircle, CardGiftcard, Favorite, Redeem, ShoppingCart, Star, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function CustomIcon({ path }) {
    return (
        <SvgIcon>
            <path d={path} />
        </SvgIcon>
    );
}

export default function CustomComponent({handleLogout}) {
    const navigate = useNavigate()
    const hanldeUserProfile = () => {
        navigate("/user-profile")

    }
    return (
        <Box className="LzvKun">
            {/* <Box className="_97cpYY">
                <Box className="SVYC+b">
                    <Typography>New customer?</Typography>
                    <Button className="yFCbwN">Sign Up</Button>
                </Box>
            </Box> */}
            <List>
                <ListItem sx={{ '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' }, cursor: "pointer" }} onClick={hanldeUserProfile}>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" />
                </ListItem>
                <ListItem sx={{ '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' }, cursor: "pointer" }} onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                </ListItem>

                {/* <ListItem className="XGZdnG"  component="a" href="/account/orders?link=home_orders">
                    <ListItemIcon>
                        <ShoppingCart />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                </ListItem> */}
                {/* <ListItem className="XGZdnG"  component="a" href="/wishlist?link=home_wishlist">
                    <ListItemIcon>
                        <Favorite />
                    </ListItemIcon>
                    <ListItemText primary="Wishlist" />
                </ListItem> */}
                {/* <ListItem className="XGZdnG"  component="a" href="/account/rewards?link=home_rewards">
                    <ListItemIcon>
                        <Redeem />
                    </ListItemIcon>
                    <ListItemText primary="Rewards" />
                </ListItem> */}
                {/* <ListItem className="XGZdnG"  component="a" href="/the-gift-card-store?link=home_giftcard">
                    <ListItemIcon>
                        <CardGiftcard />
                    </ListItemIcon>
                    <ListItemText primary="Gift Cards" />
                </ListItem> */}
            </List>
        </Box>
    );
}
