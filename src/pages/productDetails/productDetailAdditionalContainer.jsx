import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircleIcon from "@mui/icons-material/Circle";

export default function ProductDetailAdditionalContainer() {
  return (
    <>
      <div className="topMarginLarge">
        <h3
          style={{
            marginTop: "2rem",
          }}
        >
          Additional Details
        </h3>
        <div
          className="detailsSection"
          style={{
            border: "1px solid #e6e6e6",
            color: "#555",
            fontSize: "14px",
            paddingTop: "1rem"
          }}
        >
          <ul>
            <li>We do not normally stock this item.</li>
            <li>
              Out of Stock and Special Order items will ship when available.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
