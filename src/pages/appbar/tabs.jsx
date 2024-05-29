import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppbarNavigation from "./appbarNavigation";
import VerticalTabs from "./verticalTabs";
import { Button } from "@mui/material";
import jewelleryCategories from "../../../public/jewelleryCategories.json";
import customJewellery from "../../../public/customJewelleryData.json";
import eventsAndTraining from "../../../public/EventsAndTraing.json";
import weddingbandsCategories from "../../../public/weddingbands.json";
import chainAndCord from "../../../public/chainAndCord.json";
import { useNavigate } from "react-router-dom";

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
        position: "absolute",
        width: "100%"
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
  const [productCategory, setProductCategory] = useState([]);

  const boxRef = useRef(null);
  const navigate = useNavigate();

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

  let tabData = [
    {
      label: "Engagement Rings",
      content: (
        <AppbarNavigation
          categories={jewelleryCategories}
          enableShopByButton={true}
        />
      ),
    },
    {
      label: "Wedding Bands",
      content: (
        <AppbarNavigation
          categories={weddingbandsCategories}
          enableShopByButton={true}
        />
      ),
    },
    {
      label: "Chain & Cord",
      content: (
        <AppbarNavigation categories={chainAndCord} enableShopByButton={true} />
      ),
    },
    {
      label: "Jewelry",
      content: (
        <AppbarNavigation categories={chainAndCord} enableShopByButton={true} />
      ),
    },
    {
      label: "Mountings",
      content: (
        <AppbarNavigation categories={chainAndCord} enableShopByButton={true} />
      ),
    },
    {
      label: "Findings",
      content: (
        <AppbarNavigation categories={chainAndCord} enableShopByButton={true} />
      ),
    },
    {
      label: "Diamonds",
      content: (
        <AppbarNavigation categories={chainAndCord} enableShopByButton={true} />
      ),
    },
    {
      label: "Lab Grown Diamonds",
      content: (
        <AppbarNavigation categories={chainAndCord} enableShopByButton={true} />
      ),
    },
    {
      label: "Gemstone",
      content: (
        <AppbarNavigation categories={chainAndCord} enableShopByButton={true} />
      ),
    },
    {
      label: "Metals",
      content: (
        <AppbarNavigation categories={chainAndCord} enableShopByButton={true} />
      ),
    },
    {
      label: "Tools & Supplier",
      content: (
        <AppbarNavigation categories={chainAndCord} enableShopByButton={true} />
      ),
    },

    // Add more tab data as needed
  ];

  tabData = productCategory.map((item) => ({
    label: item.Category.Name,
    content:
      tabData.find((tab) => tab.label === item.Category.Name)?.content || null, // Retain content from original tabData if available
  }));

  console.log("tabData", tabData);

  const productlabel = productCategory.map((category, index) => {
    return {
      label: category.Category.Name,
    };
  });

  // console.log('productlabel', productlabel)

  const tabLabels = [
    "Products",
    "Services",
    "Customization",
    "Events & Training",
    "Educational Resources",
  ];

  const getProductCategories = async () => {
    try {
      const response = await fetch(`https://api.swagjewelers.com/api/category`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });

      console.log("API response: ??????????", response);
      setProductCategory(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProductCategories();
  }, []);

  // console.log('productCategory', productCategory)

  const handleQuickOrder = () => {
    navigate("/quickorder")
  }

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
            <>
              <Tab
                key={index}
                label={label}
                {...a11yProps(index)}
                onMouseEnter={(e) => handleMouseEnter(e, index)}
                sx={
                  (commanTabStyle)
                }
              />
              {label == "Educational Resources" && (
                <Typography
                  // component={"span"}
                  sx={{
                    backgroundColor: "#00997A",
                    padding: "0.1rem 0.5rem",
                    borderRadius: "50px",
                    textTransform: "uppercase",
                    color: "#fff",
                    // fontSize: "1.10rem",
                    border: "1px solid transparent",
                    mr: 1,
                    alignSelf: "center",
                    cursor: "pointer",
                  }}
                  variant="subtitle2"
                >
                  {/* <Typography
                    component="span"
                    fontWeight="bold"
                    variant="caption"
                    sx={{
                      fontSize: "0.6rem",
                      mr: "0.2rem",
                    }}
                  >
                    New
                  </Typography> */}
                  Mother's Day
                </Typography>
              )}
            </>
          ))}
          {/* {

          } */}
        </Tabs>
        <Box>
          <Button
            sx={{
              color: "#fff",
              ":hover": {
                color: "#75b0da",
              },
            }}
            onClick={handleQuickOrder}
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
            sx={
              {
                // height: "100vh",
              }
            }
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
