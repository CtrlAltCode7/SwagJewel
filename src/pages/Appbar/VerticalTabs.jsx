import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppbarNavigation from "./AppbarNavigation";
import MySvgComponent from "../../components/svg/MySvgComponent";
import jewelleryCategories from "../../../public/jewelleryCategories.json";
import customJewellery from "../../../public/customJewelleryData.json";
import eventsAndTraining from "../../../public/EventsAndTraing.json";
import weddingbandsCategories from "../../../public/weddingbands.json";
import chainAndCord from "../../../public/chainAndCord.json";
import { Link, useNavigate } from "react-router-dom";

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

export default function VerticalTabs({ tabData1 }) {
  // console.log('tabs data', tabData)
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

  const navigate = useNavigate(); 
  const tabData = [
    {
      label: "Engagement Rings",
      content: <AppbarNavigation categories={jewelleryCategories} />,
    },
    {
      label: "Wedding Bands",
      content: <AppbarNavigation categories={weddingbandsCategories} />,
    },
    {
      label: "Chain & Cord",
      content: <AppbarNavigation categories={chainAndCord} />,
    },
    {
      label: "Jewelry",
      content: <AppbarNavigation categories={chainAndCord} />,
    },
    {
      label: "Mountings",
      content: <AppbarNavigation categories={chainAndCord} />,
    },
    {
      label: "Findings",
      content: <AppbarNavigation categories={chainAndCord} />,
    },
    {
      label: "Diamonds",
      content: <AppbarNavigation categories={chainAndCord} />,
    },
    {
      label: "Lab Grown Diamonds",
      content: <AppbarNavigation categories={chainAndCord} />,
    },
    {
      label: "Gemstone",
      content: <AppbarNavigation categories={chainAndCord} />,
    },
    {
      label: "Metals",
      content: <AppbarNavigation categories={chainAndCord} />,
    },
    {
      label: "Tools & Supplier",
      content: <AppbarNavigation categories={chainAndCord} />,
    },

    // Add more tab data as needed
  ];
  const handleTabClick = () => {
    // Redirect to another page
    navigate('/productlisting');
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        width: "100%",
        // height: , 
        // backgroundColor: "red",
        // overflowY: "scroll !important", // or "scroll" for always visible scrollbar
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
        scrollButtons
        allowScrollButtonsMobile
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
              overflowY: "auto",
              alignItems: "flex-start",
            }}
            onClick={handleTabClick}
          />
        ))}
      </Tabs>
      {tabData?.map((tab, index) => (
        <TabPanel
          key={index}
          value={value}
          index={index}
          sx={{
            // backgroundColor: "red",
            overflowY: "auto",
          }}
        >
          {tab.content}
        </TabPanel>
      ))}
      {/* <MySvgComponent /> */}
    </Box>
  );
}
