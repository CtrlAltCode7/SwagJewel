import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ productImg, productImgOnHover, productTitle }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); 
  const handleProductICon = () => {
    // Redirect to another page
    navigate('/productdetails');
  };
  return (
    <>
      <Box
        sx={{
          // margin: "0 2%",
          display: "flex",
          gap: "1rem",
          justifyItems: "center",
        }}
        xs={12}
        sm={12}
        md={3}
        lg={3}
        onClick={handleProductICon}

      >
        <Box
          sx={{
            borderRadius: "5px",
            padding: "4% 2%",
            border: "1px solid #dee2e6",
            height: "375px",
            width: "100%", // Set width to 100% to adjust dynamically
            transition: "border-color 0.3s ease", // Add transition effect for smooth hover
     
            "&:hover": {
              borderColor: "#999",
              ".anniversary-band": {
                textDecoration: "underline",
              },
            },
          }}
          className="custom-box"
        >
          <Box
            height={190}
            sx={{
              display: "inline-block !important",
              padding: "7% 7% 0",
              "#productImgOnHover": {
                display: "none !important",
              },
              "&:hover": {
                "#productImg": {
                  display: "none !important",
                },
                "#productImgOnHover": {
                  display: "block !important",
                  textAlign: "center",
                },
              },
            }}
          >
            <img id="productImg" src={productImg} height={190} />
            <img src={productImgOnHover} id="productImgOnHover" height={190} />
          </Box>

          <Box
            sx={{
              textAlign: "left",
              padding: "8.13%",
              "@media (max-width:  768px)": {
                // Media query for smaller screens
                padding: "0 4.13%",
              },
            }}
          >
            <Tooltip
              title={
                <span
                  style={{
                    padding: "1rem",
                    color: "#555",
                    backgroundColor: "#fff",
                    border: "1px solid",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    New:
                  </span>
                  Newly released products
                </span>
              }
              placement="top"
              // sx={{ borderRadius: "5px", }}
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "common.black",
                    "& .MuiTooltip-arrow": {
                      color: "common.black",
                    },
                    "&.MuiTooltip-tooltip": {
                      backgroundColor: "#fff",
                    },
                  },
                },
              }}
            >
              <Button
                sx={{
                  fontSize: "12px",
                  backgroundColor: "green",
                  color: "#fff",
                  minWidth: "45px",
                  padding: 0,
                  borderRadius: "15px",
                  fontWeight: "bold",
                  marginTop: "5%",
                  marginBottom: "10%",
                  "&:hover": {
                    "&.MuiButtonBase-root.MuiButton-root": {
                      /* Add your custom styles here */
                      // backgroundColor: 'your-desired-color',
                      /* Add other styles as needed */
                      // backgroundColor: "rgba(25, 118, 210, 0)",
                      backgroundColor: "green",
                      color: "#fff",
                    },
                  },
                }}
                disableRipple={true}
              >
                new
              </Button>
            </Tooltip>
            <Typography
              sx={
                {
                  // "&:hover": {
                  //   textDecoration: 'underline'
                  // },
                }
              }
              className="anniversary-band"
            >
              {productTitle}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "2%",
              }}
            >
              <Tooltip title="Add" placement="top">
                {/* <Button
                        sx={{
                          fontSize: "12px",
                          backgroundColor: "green",
                          color: "#fff",
                          minWidth: "45px",
                          padding: 0,
                          borderRadius: "15px",
                          fontWeight: "bold",
                          marginBottom: "1rem",
                          "&:hover": {
                            "&.MuiButtonBase-root.MuiButton-root": {
                              backgroundColor: "green",
                              color: "#fff",
                            },
                          },
                        }}
                        disableRipple={true}
                      > */}
                <img
                  src="https://assets.stullercloud.com/das/84852017.svg"
                  width={20}
                />

                {/* </Button> */}
              </Tooltip>
              <Tooltip title="Add" placement="top">
                <img
                  src="https://assets.stullercloud.com/das/84852009.svg"
                  width={20}
                />
              </Tooltip>
              <Tooltip title="Add" placement="top">
                <img
                  src="https://assets.stullercloud.com/das/84852008.svg"
                  width={20}
                />
              </Tooltip>
            </Box>
            <Typography
              variant="caption"
              sx={{
                fontWeight: "bold",
                textDecoration: "none !important",
                "&.anniversary-band": {
                  // Target the Typography with the class .anniversary-band
                  textDecoration: "underline", // Underline text on hover
                },
              }}
            >
              123531
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductCard;
