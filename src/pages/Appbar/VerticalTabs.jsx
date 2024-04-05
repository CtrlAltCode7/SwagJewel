import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppbarNavigation from "./AppbarNavigation";
import MySvgComponent from "../../components/svg/MySvgComponent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
        backgroundColor: "#4C5A63",
        width: "-webkit-fill-available",
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({ tabData }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log("Changed tab:", newValue);
    setValue(newValue);
  };

  const handleMouseEnter = (event, newValue) => {
    // Your onMouseEnter logic here
    console.log("Mouse entered tab:", newValue);
    setValue(newValue);
  };

  const handleMouseLeave = (event, newValue) => {
    // Your onMouseLeave logic here
    console.log("Mouse left tab:", newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        width: "100%",
        // height: "100vh",
        // backgroundColor: "red",
        overflowY: "scroll !important", // or "scroll" for always visible scrollbar
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        onMouseLeave={(event) => handleMouseLeave(event, value)}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: "fit-content",
          backgroundColor: "#697780",
          alignItems: "flex-start",

          "& .MuiTab-root.Mui-selected": {
            color: "#fff",
            backgroundColor: "#4C5A63",
          },
        }}
        TabIndicatorProps={{ style: { background: "#fff" } }}
      >
        {tabData?.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            {...a11yProps(index)}
            onMouseEnter={(event) => handleMouseEnter(event, index)}
            sx={{
              color: "#fff",
              textAlign: "end",
              overflowY: 'auto',
              alignItems: "flex-start",

            }}
          />
        ))}
      </Tabs>
      {tabData?.map((tab, index) => (
        <TabPanel
          key={index}
          value={value}
          index={index}
          sx={
            {
              // backgroundColor: "red",
              overflowY: 'auto',

            }
          }
        >
          {tab.content}
        </TabPanel>
      ))}
      <MySvgComponent />
    </Box>
  );
}
