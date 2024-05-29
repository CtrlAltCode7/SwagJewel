import React from "react";
import { Link } from "@mui/material";

export default function FindSerialized({linkText}) {
  return (
    <Link
      id="findDiamonds"
    //   href="/products/diamonds-with-grading-report/"
      target="_blank"
      sx={{
        color: "#555",
        textDecorationColor: "#555",
        "&:hover": {
          color: "#75b0da",
          textDecoration: "underline",
          textDecorationColor: "#75b0da",
        },
      }}
    >
        {linkText}
    </Link>
  );
}
