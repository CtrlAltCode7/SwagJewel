import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppbarNavigation from "./AppbarNavigation";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

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
        height: "100vh",
        backgroundColor: "red"
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        onMouseLeave={(event) => handleMouseLeave(event, value)}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider",minWidth: "fit-content",backgroundColor: "#4C5A63" }}
      >
        <Tab
          label="Engagements rings"
          {...a11yProps(0)}
          onMouseEnter={(event) => handleMouseEnter(event, 0)}
        />
        <Tab
          label="Item Two"
          {...a11yProps(1)}
          onMouseEnter={(event) => handleMouseEnter(event, 1)}
        />
        <Tab
          label="Item Three"
          {...a11yProps(2)}
          onMouseEnter={(event) => handleMouseEnter(event, 2)}
        />
        <Tab
          label="Item Four"
          {...a11yProps(3)}
          onMouseEnter={(event) => handleMouseEnter(event, 3)}
        />
        <Tab
          label="Item Five"
          {...a11yProps(4)}
          onMouseEnter={(event) => handleMouseEnter(event, 4)}
        />
        <Tab
          label="Item Six"
          {...a11yProps(5)}
          onMouseEnter={(event) => handleMouseEnter(event, 5)}
        />
        <Tab
          label="Item Seven"
          {...a11yProps(6)}
          onMouseEnter={(event) => handleMouseEnter(event, 6)}
        />
      </Tabs>
      <TabPanel value={value} index={0} sx={{ 
        backgroundColor: "red"

      }}>
        <AppbarNavigation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
