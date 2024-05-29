import React from "react";
import { Typography, Box } from "@mui/material";

function ShopByContent({ enableShopByButton, shopByData, shopByType }) {
  return (
    <>
      {enableShopByButton && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "2rem 5rem 2rem 2rem",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography
            variant="subtitle2"
            color={"#fff"}
            sx={{
              fontWeight: "bold",
              textTransform: "capitalize"
            }}
          >
            Shop By {shopByType}
          </Typography>
          {shopByData?.map((shop, index) => (
            <>
              <Box
                sx={{
                  flexDirection: "column",
                  // alignItems: "center"
                  textAlign: "center",
                }}
                key={index}
              >
                <img src={shop.shapeImage} width={40} />
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: "uppercase",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                    color: "#bbb",
                  }}
                >
                  {shop.shapeName}
                </Typography>
              </Box>
            </>
          ))}
        </Box>
      )}
    </>
    
  );
}

export default ShopByContent;
