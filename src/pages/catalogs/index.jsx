import React from "react";
import Layout from "../../components/layout";
import CatalogsHeader from "./catalogsHeader/catalogsHeader";
import "./index.css";
import CatalogSlider from "./catalogSlider/catalogSlider";
import { Box } from "@mui/material";

export default function Catalogs() {
  const sectionTitles = [
    "New Arrivals",
    "Catalogs",
    "Brochures",
    "Product Guides",
    "From the Bench Publications",
    "Beyond the Glass Publication",
  ];
  return (
    <Layout>
      <div className="catalogsContainer">
        <CatalogsHeader />
        {sectionTitles.map((title, index) => (
          <CatalogSlider key={index} title={title} />
        ))}
      </div>
    </Layout>
  );
}
