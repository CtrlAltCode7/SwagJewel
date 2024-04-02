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
          maxWidth: title && description ? 345 : "none",
          m: 1,
          width: "100%",
          objectFit: !title && !description ? "contain" : "fill",
          // backgroundColor: "red"
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height={!title && !description ? 175 : 200}
            image={image}
            alt={title}
            sx={{ objectFit: "fill" }}
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
