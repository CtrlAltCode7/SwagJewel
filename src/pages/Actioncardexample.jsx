import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function ActionAreaCard({ image, title, description }) {
  return (
    <Link to={"home"} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          maxWidth: title && description ? 390 : "100%",
          m: 1,
          width: "100%",
          objectFit: !title && !description ? "contain" : "contain",
          // backgroundColor: "red"
          boxShadow: "none",
          borderRadius: 0,
          '@media (max-width:  768px)': { // Media query for smaller screens
            // maxWidth: '100%', // Adjust width for smaller screens
            // backgroundColor: "red",
            // minWidth: "-webkit-fill-available"
            // display: "block"
            margin: "0 !important",
            width: "92%",
            padding: "1rem"

          }
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height={!title && !description ? 175 : 200}
            image={image}
            alt={title}
            sx={{ objectFit: "fill", textDecoration: "none",
            "@media (max-width: 1200px) and (min-width:  768px)": {
              width: "100%"

            },
          }}
          />
          {title && description && (
            <Box
              sx={{
                boxShadow: "none",
                textDecoration: "none",
                textAlign: "center",
                mt: "0.5rem",
              }}
            >
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "#555",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#555",
                }}
              >
                {description}
              </Typography>
            </Box>
          )}
        </CardActionArea>
      </Card>
    </Link>
  );
}
