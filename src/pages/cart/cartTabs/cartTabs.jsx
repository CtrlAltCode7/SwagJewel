import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const CartTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ margin: "10px 0 20px", borderBottom: "1px solid"}}>
      <Tabs value={value} onChange={handleChange} aria-label="cart tabs">
        <Tab
          label={
            <span>
              Your Cart Items
              {/* Add any conditional rendering or additional components here if needed */}
            </span>
          }
          href="/cart/"
        />
      </Tabs>
    </Box>
  );
};

export default CartTabs;
