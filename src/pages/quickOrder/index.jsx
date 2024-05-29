import { Container } from "@mui/material";
import React from "react";
import CustomSeparator from "../../components/breadcrumbs";
import QuickOrderContent from "./quickOrderContent/quickOrderContent";
import Layout from "../../components/layout";

export default function QuickOrder() {
  return (
    <>
      <Layout>
        <QuickOrderContent />
      </Layout>
    </>
  );
}
