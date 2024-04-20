import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";

function ActualProductCard() {
  return (
    <>
      <Box
        sx={{
          // margin: "0 2%",
          display: "flex",
          gap: "1rem",
        }}
        xs={12} sm={12} md={3} lg={3}

      >
        <Box
          sx={{
            borderRadius: "5px",
            padding: "4% 2%",
            border: "1px solid #dee2e6",
            height: "375px",
            // width: "150px",
            transition: "border-color 0.3s ease", // Add transition effect for smooth hover
            "#productImgOnHover": {
              display: "none",
            },
            "&:hover": {
              borderColor: "#999",
              ".anniversary-band": {
                textDecoration: "underline",
              },
              "#productImg": {
                display: "none",
              },
              "#productImgOnHover": {
                display: "block",
              },
            },
          }}
          className="custom-box"
        >
          <Box height={190}>
            <img
              id="productImg"
              src="https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$"
            />
            <img
              src="https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$"
              id="productImgOnHover"
            />
          </Box>
          <Box
            sx={{
              textAlign: "left",
            }}
          >
            <Tooltip title="Add" placement="top">
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
                  marginBottom: "15%",
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
              Anniversary Band
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

export default ActualProductCard;
