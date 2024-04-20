import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";

export default function ProductCardList({id, imgSrc, imgSrcOnHover, buttonText, title, icons, sku}) {
  return (
    <Box
      sx={{
        // margin: "0 1%",
        // display: "flex",
        // gap: "1rem",
      }}
    >
      <Box
        sx={{
          borderRadius: "5px",
          // padding: "4% 1%",
          // padding: "1.5rem",
          border: "1px solid #dee2e6",
          height: "375px",
          // width: "175px",
          transition: "border-color 0.3s ease",
          // "#productImgOnHover": {
          //   display: "none",
          // },
          "&:hover": {
            borderColor: "#999",
            ".anniversary-band": {
              textDecoration: "underline",
            },
            // "#productImg": {
            //   display: "none",
            // },
            // "#productImgOnHover": {
            //   display: "block",
            // },
          },
        }}
        className="custom-box"
      >
        <Box
          height={190}
          sx={{
            "#productImgOnHover": {
              display: "none",
            },
            "&:hover": {
              borderColor: "#999",
              "#productImg": {
                display: "none",
              },
              "#productImgOnHover": {
                display: "block",
              },
            },
          }}
        >
          <img id="productImg" src={imgSrc} />
          <img src={imgSrcOnHover} id="productImgOnHover" />
        </Box>
        <Box
          sx={{
            textAlign: "left",
          }}
        >
          <Tooltip title={buttonText} placement="top">
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
                    backgroundColor: "green",
                    color: "#fff",
                  },
                },
              }}
              disableRipple={true}
            >
              {buttonText}
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
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "2%",
            }}
          >
            {icons?.map((icon, index) => (
              <Tooltip title={icon.tooltip} placement="top" key={index}>
                <img src={icon.src} width={20} />
              </Tooltip>
            ))}
          </Box>
          <Typography
            variant="caption"
            sx={{
              fontWeight: "bold",
              textDecoration: "none !important",
              "&.anniversary-band": {
                textDecoration: "underline",
              },
            }}
          >
            {sku}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
