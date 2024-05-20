import React from "react";
import Layout from "../../components/layout";
import CatalogsHeader from "./catalogsHeader/catalogsHeader";
import "./index.css"
import CatalogSlider from "./catalogSlider/catalogSlider";

export default function Catalogs() {
  return (
    <Layout>
      <div className="catalogsContainer">
        <CatalogsHeader />
        <CatalogSlider />
      </div>
    </Layout>
  );
}
