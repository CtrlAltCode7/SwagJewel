import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/index";
import CustomSeparator from "../../components/breadcrumbs/index";
import { Box, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CopyToClipboardText from "./copyToClipboardText";
import ShareSocialMedia from "./shareSocialMedia";
import ProductDetailSection from "./productDetailSection";
import ProductSlider from "../../components/carousel";
import ProductDetailsTableContainer from "./productDetailsTableContainer";
import ProductDetailAdditionalContainer from "./productDetailAdditionalContainer";
import ProductDetailsSetSeparateStone from "./productDetailsSetSeparateStone";

export default function ProductDetails() {
  const [tableData, setTableData] = useState([]);
  const products = [
    {
      title: "Anniversary Band 1",
      image:
        "https://meteor.stullercloud.com/das/128696517?obj=stones/diamonds/g_Accent&obj=metals&obj.recipe=rose&$list$",
    },
    {
      title: "Anniversary Band 2",
      image:
        "https://meteor.stullercloud.com/das/114070043?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=metals&obj.recipe=yellow&$list$",
    },
    {
      title: "Anniversary Band 3",
      image:
        "https://meteor.stullercloud.com/das/73474267?obj=stones/diamonds/g_Accent&obj=metals&obj.recipe=white&$list$",
    },
    {
      title: "Anniversary Band 4",
      image:
        "https://meteor.stullercloud.com/das/73468133?obj=stones/diamonds/g_accent&obj=metals&obj.recipe=white&$list$",
    },
    {
      title: "Anniversary Band 5",
      image:
        "https://meteor.stullercloud.com/das/73655406?obj=stones/diamonds/g_accent1&obj=stones/diamonds/g_accent2&obj=metals&obj.recipe=white&$list$",
    },
    {
      title: "Anniversary Band 5",
      image:
        "https://meteor.stullercloud.com/das/130858418?obj=stones/diamonds/g_Center&obj=metals&obj.recipe=rose&$list$",
    },
    {
      title: "Anniversary Band 5",
      image:
        "https://meteor.stullercloud.com/das/101818867?obj=metals&obj.recipe=white&$list$",
    },
    {
      title: "Anniversary Band 5",
      image:
        "https://meteor.stullercloud.com/das/73371498?obj=metals&obj.recipe=yellow&obj=stones/diamonds&$list$",
    },
    {
      title: "Anniversary Band 5",
      image:
        "https://meteor.stullercloud.com/das/84508809?obj=metals&obj.recipe=yellow&obj=stones/diamonds/g_accent&obj=stones/diamonds/g_center%201&obj=stones/diamonds/g_center%202&obj=stones/diamonds/g_center%203&$list$",
    },
    // Add more products as needed
  ];

  const fetchBooks = async () => {
    try {
      const response = await fetch(`/tableData.json`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
      setTableData(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Layout>
      <CustomSeparator />
      <Box
        sx={{
          padding: "0 1.875rem",
          "@media (max-width:  768px)": {
            padding: "0 5%",
          },
        }}
      >
        <Typography
          sx={{
            color: "#555",
            wordSpacing: "0.06em",
            fontWeight: "100 !important",
            fontSize: ["1.4rem", "1.6rem", "1.8rem", "2.313rem", "2.813rem"],
          }}
        >
          14K Rose 1/2 CTW Natural Diamond Anniversary Band
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
            padding: "10px 0",
          }}
        >
          <CopyToClipboardText />
          <ShareSocialMedia />
        </Box>
        <ProductDetailSection />
        <Box
          sx={{
            margin: "1rem 0",
          }}
        >
          <Box
            sx={{
              padding: "3% 10% 0",
              "@media (max-width:  768px)": {
                padding: "3% 0 0",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                background: "",
                padding: 0,
                color: "#555",
              }}
            >
              Products to Consider
            </Typography>
            <Box
              sx={{
                borderBottom: "1px solid #c4c4c4",
                marginTop: ".4rem",
              }}
            ></Box>
          </Box>
          <ProductSlider products={products} />
        </Box>
        <Box
          sx={{
            padding: "3% 10% !important",
            "@media (max-width: 768px)": {
              padding: 0,
            },
          }}
        >
          <ProductDetailsTableContainer productDetailsTableData={tableData} />
          <ProductDetailAdditionalContainer />
          <Box
            sx={{
              margin: "1rem 0",
            }}
          >
            <Typography variant="h6" component={"span"} color={"#555"}>
              Can Be Set With
              <Typography
                variant="body2"
                component={"span"}
                sx={{
                  fontStyle: "italic",
                  color: "#919191",
                }}
              >
                (Stones Sold Separately)
              </Typography>
            </Typography>
          </Box>
          <ProductDetailsSetSeparateStone />
        </Box>
      </Box>
    </Layout>
  );
}
