import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function ActionAreaCard({ image, title, description }) {
  return (
    <Link to={"home"}>
      <Card
        sx={{
          maxWidth: title && description ? 380 : "455px",
          m: 1,
          width: "100%",
          objectFit: !title && !description ? "contain" : "fill",
          borderRadius: ".5rem"
        }}
        elevation={5}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height={!title && !description ? "100%" : 200}
            image={image}
            alt={title}
            sx={{ objectFit: "fill", maxHeight: "455px", height: "18rem" }}
          />
          {title && description && (
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          )}
        </CardActionArea>
      </Card>
    </Link>
  );
}
