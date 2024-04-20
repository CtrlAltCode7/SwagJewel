import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import ProductCardList from "./ProductCardList";
import { Grid } from "@mui/material";

function ProductCard({ product }) {
  console.log("first", product);
  const { id, imgSrc, imgSrcOnHover, buttonText, title, icons, sku } = product;

  console.log("first", imgSrc);

  return product.map((productDetails, index) => (
    <Grid xs={12} sm={12} md={3} lg={3} key={index}>
      <ProductCardList
        imgSrc={productDetails.imgSrc}
        imgSrcOnHover={productDetails.imgSrcOnHover}
        buttonText={productDetails.buttonText}
        title={productDetails.title}
        icons={productDetails.icons}
        sku={productDetails.sku}
      />
    </Grid>
  ));
}

export default ProductCard;
