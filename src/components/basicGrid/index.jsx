import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AccordionComponent from "../../pages/accordion/index";
import { Button, FormControl, MenuItem, Pagination, Select, Switch, Tooltip, Typography } from "@mui/material";
import SelectComponent from "../selectComponent/index";
// import ProductCard from "./ProductCardDetails";
import ProductCard from "./productCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getImageUrlsWithGroupDescription } from "../../helpers/index";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function BasicGrid() {
  const [imageUrlsWithGroupDescription, setImageUrlsWithGroupDescription] =
    useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [accordionApiData, setAccordionApiData] = useState([]);


  const apiData = useSelector((state) => state.api.data);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`/productsListing.json`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });

      // console.log("API response:", response);
      setImageUrlsWithGroupDescription(response);
      setTotalPages(Math.ceil(response.length / productsPerPage));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (apiData && apiData?.data?.Products.length > 0) {
      // console.log("apiData", apiData)
      const data = getImageUrlsWithGroupDescription(apiData);
      setImageUrlsWithGroupDescription(data);
      // if (apiData?.data?.PageSize > 10) {
      setTotalPages(Math.ceil(data.length / productsPerPage));
      // }
      // fetchBooks()
      // console.log("@@@@@@", data);
    } else {
      console.log("apiData is empty");
    }
  }, [apiData,productsPerPage]);

  const label = { inputProps: { "aria-label": "Size switch demo" } };
  const products = [
    {
      id: 1,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 1",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123531",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    {
      id: 2,
      imgSrc:
        "https://meteor.stullercloud.com/das/128648008?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      imgSrcOnHover:
        "https://meteor.stullercloud.com/das/128648010?obj=stones/diamonds/g_Accent1&obj=stones/diamonds/g_Accent2&obj=stones/diamonds/g_Accent3&obj=metals&obj.recipe=rose&$spotlight$",
      buttonText: "Add",
      title: "Anniversary Band 2",
      icons: [
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 1",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 2",
        },
        {
          src: "https://assets.stullercloud.com/das/84852017.svg",
          tooltip: "Tooltip 3",
        },
      ],
      sku: "123532",
    },
    // Add more product objects as needed
  ];
  const accordionData = [
    {
      id: 1,
      title: "Category",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 1",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 1",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 1",
        },
        {
          id: 1,
          text: "Content 1 for Accordion 1",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 1",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 1",
        },
        {
          id: 1,
          text: "Content 1 for Accordion 1",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 1",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 1",
        },
        {
          id: 1,
          text: "Content 1 for Accordion 1",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 1",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 1",
        },
        {
          id: 1,
          text: "Content 1 for Accordion 1",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 1",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 1",
        },
      ],
    },
    {
      id: 2,
      title: "Product State",
      contents: [
        {
          id: 1,
          text: "Semi-set",
        },
        {
          id: 2,
          text: "Set",
        },
        {
          id: 3,
          text: "unset",
        },
        {
          id: 4,
          text: "N/A",
        },
      ],
    },
    {
      id: 3,
      title: "Primary Stone Size",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 4,
      title: "Primary Stone Type",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 5,
      title: "Setting Method",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 6,
      title: "3C Designs",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 7,
      title: "Metal Type",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 8,
      title: "Metal Karat",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    {
      id: 9,
      title: "Discount",
      contents: [
        {
          id: 1,
          text: "Content 1 for Accordion 2",
        },
        {
          id: 2,
          text: "Content 2 for Accordion 2",
        },
        {
          id: 3,
          text: "Content 3 for Accordion 2",
        },
      ],
    },
    // Add more accordion items as needed
  ];

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleProdutPerPageChange = (e,value) => {
    setProductsPerPage(e.target.value);

  }

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  useEffect(() => {
    const fetchAccordionData = async () => {
      try {
        const response = await axios.get('https://api.swagjewelers.com/api/stuller/advanced-filters');
        const filterData = response?.data?.data?.AdvancedProductFilter; // Assuming your API response structure is like the one you provided
        const updatedAccordionData = filterData.map(item => ({
          id: item.Type,
          title: item.Type,
          contents: item.Values.map(value => ({
            id: value.Value,
            text: value.DisplayValue
          }))
        }));
        setAccordionApiData(updatedAccordionData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAccordionData();

    return () => {
    };
  }, []);

  const remainingProducts = imageUrlsWithGroupDescription.length - (currentPage - 1) * productsPerPage;


  console.log('accordionApiData', accordionApiData);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          "@media (max-width:  900px)": {
            // Media query for smaller screens
            flexDirection: "column-reverse",
          },
        }}
      >
        <Grid xs={12} sm={12} md={3} lg={3}>
          <Item>
            <AccordionComponent data={accordionApiData || accordionData} />
          </Item>
        </Grid>
        <Grid xs={12} sm={12} md={9} lg={9}>
          <Item
            sx={{
              margin: "0 1rem",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "sans-serif",
                textAlign: "justify",
              }}
            >
              Anniversary & Eternity Bands
            </Typography>
          </Item>
          <Item
            sx={{
              margin: "0 1rem",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <img
              src="https://meteor.stullercloud.com/das/130123378"
              style={{
                height: "19vh",
                objectFit: "fill",
                width: "-webkit-fill-available",
              }}
            />
          </Item>
          <Item
            sx={{
              margin: "0 1rem",
              backgroundColor: "#eee",
              padding: "2rem 1.5rem 0",
            }}
          >
            <Grid container spacing={2}>
              <SelectComponent title="Finger Size" minWidthSize="200" />
              <SelectComponent title="Primary Stone Count" minWidthSize="200" />
              <SelectComponent title="Primary Stone Shape" minWidthSize="200" />
              <SelectComponent title="Metal Color" minWidthSize="200" />
            </Grid>
          </Item>
          {/* <Item
            sx={{
              // paddingTop: "0 1rem",
              // overflow: "hidden !important",
              // display: "flex",
              // justifyContent: "space-evenly !important",
              // flexGrow: 1,
              // padding: "1rem 1rem 0",
              // backgroundColor: "red",
              // margin: "0 1rem",
              // flexGrow: 1,

              "@media (max-width:  768px)": {
                // flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                // backgroundColor: "#eee",
                // flexDirection: "row",
                // display: "flex",
                // gap: "1rem",
                // padding: "1rem",
                // // margin: "0 1rem",
                // paddingTop: "2rem",

                "@media (max-width:  1200px)": {
                  flexDirection: "column",
                  // margin: 0,
                },
              }}
            >
              <SelectComponent title="Finger Size" minWidthSize="200" />
              <SelectComponent title="Primary Stone Count" minWidthSize="200" />
              <SelectComponent title="Primary Stone Shape" minWidthSize="200" />
              <SelectComponent title="Metal Color" minWidthSize="200" />
            </Box>
          </Item> */}
          <Item
            sx={{
              // padding: "0 1.4rem ",
              // backgroundColor: "red",
              margin: "0 1rem",
              padding: 0,
              backgroundColor: "#eee",

              justifyContent: "space-evenly !important",
              "@media (max-width:  768px)": {
                // padding: "0 1rem ",
              },
            }}
          >
            <Box
              sx={{
                background: "#eee",
                textAlignLast: "end",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff", // Set background color
                  color: "#555", // Set text color
                  border: "1px solid #999",
                  fontSize: "12px",
                  margin: ".5rem 1rem 1rem",
                  "&:hover": {
                    backgroundColor: "#999", // Change background color on hover
                    color: "#ffffff", // Change text color on hover
                  },
                }}
              >
                Reset Selections
              </Button>
            </Box>
          </Item>
          <Item
            sx={{
              // padding: "0 1.4rem ",
              // backgroundColor: "ActiveBorder",
              margin: "0 1rem",
              padding: 0,
            }}
          >
            <Box
              component={"p"}
              sx={{
                padding: "1.5rem",
                backgroundColor: "#eee",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "flex !important",
                  justifyContent: "center",
                  wordWrap: "break-word",
                  fontWeight: "bold",
                }}
              >
                <Switch {...label} defaultChecked size="small" />
                Ready to Ship
                <Typography variant="body2">
                  - Only show products that have at least one in-stock option
                </Typography>
              </Typography>
            </Box>
          </Item>
          <Item
            sx={{
              // margin: "0 1rem",
              // backgroundColor: "red",
              margin: "0 1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // flexDirection: { md: "column", lg: "row"},
                // flexWrap: "wrap"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" mr={1}>
                  Sort by
                </Typography>
                <SelectComponent minWidthSize="150" placeholder="Newest" />
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex", lg: "flex" },
                  gap: "1rem",
                  alignItems: "center",
                  flex: "auto",
                  justifyContent: "flex-end",
                  // alignItems: "center",
                }}
              >
                <Typography>{`Showing ${startIndex + 1} - ${endIndex} of ${apiData?.data?.Products.length}`}</Typography>|
                <Typography>Items per page</Typography>
                {/* <SelectComponent minWidthSize="20" placeholder="26" /> */}
                <FormControl>
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={productsPerPage}
                    // label="Age"
                    displayEmpty
                    disableScrollLock={true}
                    MenuProps={{ disableScrollLock: true }}
                    slotProps={{
                      root: {
                        sx: {
                          backgroundColor: "#fff",
                          "& .MuiSelect-outlined": {
                            display: "flex",
                            padding: "10px 25px 10px 5px!important",
                          },
                          ".MuiNativeSelect-icon": {
                            color: "red",
                          },
                          // width: "90%"
                        },
                      },
                    }}
                    
                    onChange={handleProdutPerPageChange}
                  >
                    <MenuItem value={5} disabled={remainingProducts < 5}>5</MenuItem>
                    <MenuItem value={10} disabled={remainingProducts < 10}>10</MenuItem>
                    <MenuItem value={15} disabled={remainingProducts < 15}>15</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none", lg: "none" },
                  alignItems: "center",
                }}
                md="3"
              >
                <Typography
                  variant="body2"
                  sx={{
                    display: { xs: "flex", md: "none", lg: "none" },
                  }}
                >
                  Items:
                </Typography>

                <SelectComponent minWidthSize="60" placeholder="50" />

              </Box>
            </Box>
          </Item>
          <Item
            sx={{
              margin: "0 1rem",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
              sx={{
                "& .Mui-selected": {
                  backgroundColor: "blue", // Customize background color of selected button
                  color: "white", // Customize text color of selected button
                },
                "& button:not(.Mui-selected)": {
                  backgroundColor: "lightgray", // Customize background color of other buttons
                  color: "black", // Customize text color of other buttons
                },
              }}
            />
          </Item>
          <Item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              margin: "0 1rem",
            }}
          >
            <Grid container spacing={2}>
              {/* {Array.from({ length: 4 }).map((_, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
                  <ActualProductCard 
                   productImg={"https://meteor.stullercloud.com/das/35535773?$standard$"}
                   productImgOnHover={"https://meteor.stullercloud.com/das/14952862?$standard$"}
                   productTitle={"Cross Pendant "}
                  />
                </Grid>
              ))} */}
              {imageUrlsWithGroupDescription
                .slice(startIndex, endIndex)
                .map((imgWithTitle, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <ProductCard
                      productImg={imgWithTitle?.urls[0] || ""}
                      productImgOnHover={imgWithTitle?.urls[1] || ""}
                      productTitle={imgWithTitle?.groupDescription}
                    />
                  </Grid>
                ))}
            </Grid>
          </Item>
          <Item
            sx={{
              margin: "0 1rem",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
              sx={{
                "& .Mui-selected": {
                  backgroundColor: "blue", // Customize background color of selected button
                  color: "white", // Customize text color of selected button
                },
                "& button:not(.Mui-selected)": {
                  backgroundColor: "lightgray", // Customize background color of other buttons
                  color: "black", // Customize text color of other buttons
                },
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
