import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import "./productDetailTabsStyle.css"

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductDetailTabs({ tabs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="product-tab-container"
          TabIndicatorProps={{
            style: { display: "none" },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              disableRipple={true}
              {...a11yProps(index)}
              label={
                <Button
                  variant={value === index ? "contained" : "outlined"}
                  startIcon={tab.showIcon ? <img src={tab.iconUrl} alt="Icon" style={{ borderRadius: 10 }} /> : null} // Conditionally include icon
                  sx={{
                    borderRadius: 20,
                    textTransform: "none",
                    color: value === index ? "#fff" : "#000", // Text color
                    backgroundColor:
                      value === index ? "#547f9e!important" : "transparent", // Background color
                    "&:hover": {
                      backgroundColor: value === index ? "#0056b3" : "#999", // Hover background color
                      color: value === index ? "#fff" : "#fff", // Text color
                    },
                  }}
                  onClick={() => handleChange(null, index)}
                >
                  {tab.label}
                </Button>
              }
              sx={{
                padding: 2,
                paddingRight: 1,
              }}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
