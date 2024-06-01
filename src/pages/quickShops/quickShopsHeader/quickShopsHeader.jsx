import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function QuickShopsHeader() {
  const navigate = useNavigate();
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#555"
      variant="caption"
      onClick={(event) => handleLinkClick(event, "/home")}
    >
      Home
    </Link>,
    <Typography key="3" color="#555" variant="caption">
      QUICK ORDER
    </Typography>,
  ];

  const handleLinkClick = (event, path) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
    navigate(path);
  };

  return (
    <div>
      <Stack spacing={2} p={1} pt={2} pb={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Box p={2}>
        <Typography
          sx={{
            fontSize: {
              xs: 14,
              sm: 18,
              md: 25,
              lg: 30,
            },
            fontWeight: 100,
            color: "#555",
            marginBottom: "2rem",
            // marginTop: ".5rem"
          }}
        >
          Quick Shops
        </Typography>
        <Typography
          variant="body1"
          pl={2}
          sx={{
            fontStyle: "italic",
            color: "#777"
          }}
        >
          Each shop presents a full range of choices in one location — a simple
          way to see how different qualities and sizes affect price.
        </Typography>
      </Box>
    </div>
  );
}
