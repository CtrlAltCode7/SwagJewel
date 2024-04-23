import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ActionAreaCard({ image, title, description }) {
  console.log("first", title, description);
  return (
    <Link to={"home"} style={{ textDecoration: "none", width: "100%" }}>
      <Card
        sx={{
          width: "100%",
          // height: { xs: 331, md: !title && !description ? 175 : 200 },
          boxShadow: "none",
          borderRadius: 0,
          "&:hover": {
            boxShadow: "none",
          },
          "@media (max-width: 768px)": {
            // height: 331,
          },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            objectFit: "cover",
            height: "100%",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100%",
          }}
        >
          {title && (
            <Typography variant="subtitle1" component="div" sx={{ fontWeight: "bold", color: "#555" }}>
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="body2" color="text.secondary" sx={{ color: "#555" }}>
              {description}
            </Typography>
          )}

        </CardContent>
      </Card>
    </Link>
  );
}
