import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ProductDetailsCustomizeHeaderOption from "./productDetailsCustomizeHeaderOption";
import marquiseImg from "../../assets/marquise.svg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ProductDetailDropdown from "./productDetailDropdown";

export default function ProductDetailsDimondsCategory() {
  return (
    <>
      <Box>
        <Box
          sx={{
            marginTop: "2rem",
            p: 2,
          }}
        >
          <ProductDetailsCustomizeHeaderOption
            leftTitle="Primary Stone Type"
            rightTitle="Marquise"
            paddingValue="0"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#555",
              fontWeight: "bold",
              margin: ".5rem",
            }}
          >
            Marquise
          </Typography>
          <img src={marquiseImg} width={45} />
        </Box>
        <Box
          sx={{
            marginTop: "3rem",
            p: 2,
          }}
        >
          <ProductDetailsCustomizeHeaderOption
            leftTitle="Secondary Stone Type"
            rightTitle="Lab-Grown Diamond"
            paddingValue="0"
          />
        </Box>
        <Box
          sx={{
            marginTop: "3rem",
            p: 2,
          }}
        >
          <ProductDetailsCustomizeHeaderOption
            leftTitle="Finished State"
            rightTitle="Polished"
            paddingValue="0"
          />
        </Box>
        <Box
          sx={{
            marginTop: "3rem",
            p: 2,
          }}
        >
          <ProductDetailsCustomizeHeaderOption
            leftTitle="Description"
            rightTitle="1/2 CTW Lab-Grown Diamond Anniversary Band"
            paddingValue="0"
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#eee",
          p: 2,
          //   m:1
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 0.7,
          }}
        >
          <CalendarMonthIcon
            fontSize="small"
            sx={{ color: "#f2bb95!important" }}
          />
          <Typography variant="caption" sx={{ color: "#c26d2f !important" }}>
            SHIP DATE MAY CHANGE
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ color: "", fontSize: "1.69rem", fontWeight: "100" }}
          >
            Customization Options
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              margin: ".4rem 0",
              fontSize: "1rem",
            }}
            variant="body2"
          >
            Exact Ring Sizing
          </Typography>
          <ProductDetailDropdown />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem .5rem",
            backgroundColor: "#fff",
            mt:3,
            borderRadius: "5px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              component={"caption"}
              sx={{
                fontWeight: "bold",
              }}
            >
              Diamonds/Gemstones
            </Typography>
            <Typography
              component={"caption"}
              sx={{
                fontSize: "14px",
                textAlign: "left"
              }}
            >
            Select stones to be set
            </Typography>
          </Box>
          <Box>
            <Button
              variant={"contained"}
              sx={{
                borderRadius: 20,
                textTransform: "none",
                padding: ".5rem 1.5rem",
                background: "#6fa8d1",
                color: "#fff",
                borderColor: "#6fa8d1",
                "&:hover":{
                  backgroundColor: "#999",
                  
                }
              }}
              // onClick={() => handleChange(null, index)}
            >
              Set Stones
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
