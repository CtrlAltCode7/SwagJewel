import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function AppbarNavigation({categories}) {
  // Define navigation data
  // const categories = [
  //   {
  //     title: "Brand Name",
  //     links: [
  //       { label: "Home", url: "/home" },
  //       { label: "Catalog", url: "/home" },
  //       { label: "Search", url: "/home" },
  //       { label: "About", url: "/home" },
  //       { label: "Contact", url: "/home" },
  //     ],
  //   },
  //   {
  //     title: "Careers",
  //     links: [
  //       { label: "Apply Online", url: "/home" },
  //       { label: "Available Positions", url: "/home" },
  //     ],
  //   },
  //   {
  //     title: "About Us",
  //     links: [
  //       { label: "Meet Our Team", url: "/home" },
  //       { label: "Our Responsibilities", url: "/home" },
  //       { label: "Our Codes", url: "/home" },
  //       { label: "Our Values", url: "/home" },
  //     ],
  //   },
  //   {
  //     title: "About Us -1",
  //     links: [
  //       { label: "Meet Our Team", url: "/home" },
  //       { label: "Our Responsibilities", url: "/home" },
  //       { label: "Our Codes", url: "/home" },
  //       { label: "Our Values", url: "/home" },
  //     ],
  //   },
  //   {
  //     title: "About Us -1",
  //     links: [
  //       { label: "Meet Our Team", url: "/home" },
  //       { label: "Our Responsibilities", url: "/home" },
  //       { label: "Our Codes", url: "/home" },
  //       { label: "Our Values", url: "/home" },
  //     ],
  //   },
  //   {
  //     title: "About Us -1",
  //     links: [
  //       { label: "Meet Our Team", url: "/home" },
  //       { label: "Our Responsibilities", url: "/home" },
  //       { label: "Our Codes", url: "/home" },
  //       { label: "Our Values", url: "/home" },
  //     ],
  //   },
  // ];

  return (
    <div
      className="pages"
      style={{
        display: "flex",
        // justifyContent: { xs: "none", md: "none", lg: "space-between"},
        justifyContent: "flex-start",
        // gap: "8rem",
        columnGap: "7rem",
        padding: "2rem 5rem 2rem 2rem",
        flexWrap: "wrap",
        backgroundColor: "#4C5A63",
        // height: "100vh"
      }}
    >
      {categories?.map((section, index) => (
        <ul
          key={index}
          style={{ listStyleType: "none", padding: 0, color: "#fff" }}
        >
          <Typography
            sx={{
              color: "#fff",
            }}
            variant="h6"
          >{section.title}</Typography>
          {section.links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <a href={link.url}></a>
              <Link
                to={link.url}
                style={{ textDecoration: "none", ":hover": { color: "red" } }}
              >
                <Typography
                  sx={{
                    color: "#ddd",
                    ":hover": { color: "#fff", cursor: "pointer" },
                  }}
                  style={{ textDecoration: "none", ":hover": { color: "red" } }}
                  variant="subtitle2"
                >
                  {link.label}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default AppbarNavigation;
