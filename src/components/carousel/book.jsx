import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Card
      sx={{
        boxShadow: "none",
        // background: "blue",
        // width: 145
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={book.urls[0]}
        title={book.groupDescription}
        style={{ objectFit: "scale-down"}}
      />
      <CardContent>
        <Link to="https://www.google.com/search" target="_blank">
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{
              color: "#555 !important",
              textAlign: "center",
              textDecorationColor: "#555 !important",
              textDecorationLine: "underline",
              ":hover": {
                color: "#75b0da !important",
                cursor: "pointer",
                textDecorationColor: "#75b0da",
              },
            }}
          >
            {book.groupDescription}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
