import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import { Book as book  } from "./dbCarousel";
//create type for props
// type BookProps = {
//   book: Book;
// };

// eslint-disable-next-line react/prop-types
export default function BookCard({ book }) {
  console.log("book 1234", book);
  return (
    <Card
      sx={{ width: "250px", height: "325px", border: "1px solid #eee" }}
      elevation={1}
    >
      <CardMedia
        component="img"
        height="200"
        image={book.image_url}
        title={book.title}
        style={{ objectFit: "scale-down" }}
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
              ":hover": {
                color: "#75b0da !important",
                cursor: "pointer",
                textDecorationColor: "#75b0da",
              },
            }}
          >
            {book.title}
          </Typography>
        </Link>

        {/* <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography> */}
      </CardContent>
    </Card>
  );
}
