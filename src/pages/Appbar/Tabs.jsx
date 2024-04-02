import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppbarNavigation from "./AppbarNavigation";
import VerticalTabs from "./VerticalTabs";
import { Button } from "@mui/material";
import jewelleryCategories from "../../../public/jewelleryCategories.json";
import customJewellery from "../../../public/customJewelleryData.json";
import eventsAndTraining from "../../../public/EventsAndTraing.json";
import weddingbandsCategories from "../../../public/weddingbands.json";
import chainAndCord from "../../../public/chainAndCord.json";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        backgroundColor: "royalblue",
      }}
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

export default function BasicTabs() {
  const [value, setValue] = useState(false);
  const [mouseOverTabs, setMouseOverTabs] = useState(false);
  const boxRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMouseEnter = (event, index) => {
    setMouseOverTabs(true);
    // Handle mouse enter event
    console.log(`Mouse entered tab ${index}`);
    setValue(index);
  };

  const handleMouseLeave = (event, index) => {
    setMouseOverTabs(false);
    // Handle mouse leave event
    console.log(`Mouse left tab ${index}`);
    setValue(false);
  };

  const handleCheckBoxPresence = () => {
    const boxElement = boxRef.current;
    if (boxElement) {
      console.log("Box component is present in the given box.");
    } else {
      console.log("Box component is not present in the given box.");
    }
  };
  const handleCheckBoxNotPresence = () => {
    const boxElement = boxRef.current;
    if (boxElement) {
      handleMouseLeave();
      console.log("Box componen nott is present in the given box.");
    } else {
      console.log("Box component is not present in the given box.");
    }
  };

  const commanTabStyle = {
    color: "#fff",
  };

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

  const tabLabels = [
    "Products",
    "Services",
    "Customization",
    "Events & Training",
    "Educational Resources",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "none", sm: "none", md: "block", lg: "block" },
      }}
      onMouseEnter={handleCheckBoxPresence}
      onMouseLeave={handleCheckBoxNotPresence}
    >
      <Box
        ref={boxRef}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#4C5A63",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            backgroundColor: "#4C5A63",
            // "& .MuiTab-root.Mui-selected": {
            //   color: 'red'
            // }
          }}
          textColor="#fff"
          indicatorColor="red"
          TabIndicatorProps={{ style: { background: "#fff" } }}
          // #3C474F
        >
          {/* <Tab
            label="Products"
            {...a11yProps(0)}
            onMouseEnter={(e) => handleMouseEnter(e, 0)}
            sx={commanTabStyle}
          />
          <Tab
            label="Services"
            {...a11yProps(1)}
            onMouseEnter={(e) => handleMouseEnter(e, 1)}
            sx={commanTabStyle}

          />
          <Tab
            label="Customization"
            {...a11yProps(2)}
            onMouseEnter={(e) => handleMouseEnter(e, 2)}
            sx={commanTabStyle}

          />
          <Tab
            label="Events & Training"
            {...a11yProps(3)}
            onMouseEnter={(e) => handleMouseEnter(e, 3)}
            sx={commanTabStyle}

          />
          <Tab
            label="Education Resources"
            {...a11yProps(4)}
            onMouseEnter={(e) => handleMouseEnter(e, 4)}
            sx={commanTabStyle}

          /> */}
          {tabLabels?.map((label, index) => (
            <Tab
              key={index}
              label={label}
              {...a11yProps(index)}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              sx={commanTabStyle}
            />
          ))}
        </Tabs>
        <Box>
          <Button
            sx={{
              color: "#fff",
              ":hover": {
                color: "#75b0da",
              },
            }}
          >
            Quick Order
          </Button>
          <Button
            sx={{
              color: "#fff",
              ":hover": {
                color: "#75b0da",
              },
            }}
          >
            Quick Shops
          </Button>
          <Button
            sx={{
              color: "#fff",
              ":hover": {
                color: "#75b0da",
              },
            }}
          >
            Deals
          </Button>
        </Box>
      </Box>
      {mouseOverTabs && (
        <>
          <CustomTabPanel
            value={value}
            index={0}
            onMouseLeave={(e) => handleMouseLeave(e, 0)}
          >
            {/* <AppbarNavigation /> */}
            <VerticalTabs tabData={tabData} />
          </CustomTabPanel>
          <CustomTabPanel
            value={value}
            index={1}
            onMouseLeave={(e) => handleMouseLeave(e, 1)}
            sx={{
              height: "100vh",
            }}
          >
            <AppbarNavigation categories={jewelleryCategories} />
          </CustomTabPanel>
          <CustomTabPanel
            value={value}
            index={2}
            onMouseLeave={(e) => handleMouseLeave(e, 2)}
          >
            <AppbarNavigation categories={customJewellery} />
          </CustomTabPanel>
          <CustomTabPanel
            value={value}
            index={3}
            onMouseLeave={(e) => handleMouseLeave(e, 3)}
          >
            <AppbarNavigation categories={eventsAndTraining} />
          </CustomTabPanel>
          <CustomTabPanel
            value={value}
            index={4}
            onMouseLeave={(e) => handleMouseLeave(e, 4)}
          >
            <AppbarNavigation categories={customJewellery} />
          </CustomTabPanel>
        </>
      )}
    </Box>
  );
}
