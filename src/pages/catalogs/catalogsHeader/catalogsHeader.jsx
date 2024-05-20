import React from "react";
import CustomSeparator from "../../../components/breadcrumbs";
import { Button, Typography } from "@mui/material";

export default function CatalogsHeader() {
  return (
    <div>
      <CustomSeparator />
      <Typography
        sx={{
          fontSize: {
            xs: 30,
            sm: 32,
            md: 34,
            lg: 36,
            xl: 37,
          },
          color: "#555",
          fontWeight: "100",
        }}
      >
        Stuller Brochures and Catalogs
      </Typography>
      <Typography variant="body2">
        <p>
          Browse Stuller's catalogs, brochures, product guides,{" "}
          <em>From the Bench</em> publications,{" "}
          <em>Beyond the Glass publications</em>, and more educational material.
        </p>
      </Typography>
      <Typography variant="body2">
        <p>Log in for pricing and to view digital versions of our brochures.</p>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        // href="/login/?returnurl=/catalogs/"
        target="_blank"
        className=""
        sx={{
          textTransform: "capitalize",
          backgroundColor: "#6fa8d1",
          border: "1px solid #6fa8d1",
        }}
      >
        Apply For A Stuller Account Today
      </Button>
    </div>
  );
}
