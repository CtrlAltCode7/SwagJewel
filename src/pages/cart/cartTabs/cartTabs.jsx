import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";
// import CartPage from "../../../pages/cart";
// import SavedCardPage from "../../../pages/cart/savedCartPage/savedCartPage";

const CartTabs = () => {
  const [value, setValue] = React.useState("cart");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ margin: "10px 0 20px", borderBottom: "1px solid" }}>
      <Tabs value={value} onChange={handleChange} aria-label="cart tabs">
        <Tab
          label={
            <span>
              Your Cart Items
            </span>
          }
          href="/cart/"
          component={Link}
          to="/cart"

        />
        <Tab
          label={
            <span>
              Your Saved Items
            </span>
          }
          href="/cart/"
          component={Link}
          to="/savedCart"
        />
      </Tabs>
    </Box>
  );
};

export default CartTabs;
