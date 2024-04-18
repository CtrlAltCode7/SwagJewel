import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

export default function FooterGraphicText({
  boldTitle,
  title,
  description1,
  description2,
  variantStyle1,
  variantStyle2,
}) {
  //   const variantStyle1 = "h6";
  //   const variantStyle = "body2";
  return (
    <Card
      sx={{
        height: "fit-content",
        width: "23rem",
        flex: 1,
        "@media (max-width:  768px)": {
          // Media query for smaller screens
          // width: '50%', // Adjust width for smaller screens
          // flexDirection: "column",
          width: "100%",
        },
      }}
    >
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent
          sx={
            {
              // width: "-webkit-fill-available",
            }
          }
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <Box>
              <Typography
                variant={variantStyle1}
                component="div"
                letterSpacing={"0.1rem"}
                sx={{
                  textDecoration: "none",
                }}
              >
                {boldTitle}
              </Typography>
              <Typography
                variant={variantStyle1}
                letterSpacing={"0.1rem"}
                sx={{
                  textDecoration: "none",
                }}
              >
                {title}
              </Typography>
              {/* <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography> */}
            </Box>
            <Box
              sx={{
                textAlignLast: "end",
                display: { xs: "none", md: "flex", lg: "flex"},
                flexDirection: "column"
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {description1}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description2}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
