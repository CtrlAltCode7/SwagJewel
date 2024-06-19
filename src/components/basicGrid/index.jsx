import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AccordionComponent from "../../pages/accordion/index";
import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  MenuItem,
  Pagination,
  Select,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import SelectComponent from "../selectComponent/index";
// import ProductCard from "./ProductCardDetails";
import ProductCard from "./productCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getImageUrlsWithGroupDescription } from "../../helpers/index";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [accordionApiData, setAccordionApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [length, setLength] = useState(null);
  const [filteredData, setfilterData] = useState(null)
  const apiData = useSelector((state) => state.api.data);

  // console.log("filteredData", filteredData?.data?.data?.Products);
  console.log("filteredData", filteredData);
  const { category } = useParams();
  const location = useLocation();
  const catId = location.state?.message;
  useEffect(() => {
    console.log("Selected category:", category, catId);
    // Fetch or filter products based on the category
  }, [category]);


  const handleFilteredData = (data) => {
    //  if(data?.data?.data?.Products.length > 0){setfilterData(data)}
    setfilterData(data)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        // Replace 'API_URL' with your actual API endpoint
        const response = await axios.get(
          `https://api.swagjewelers.com/api/stuller?PageSize=10&Page=${currentPage}&CategoryIds[]=${catId}&Include[]=1&Filter[]=5`
        );

        let tolalProducts = response?.data?.data?.TotalNumberOfProducts;
        // console.log("totalProducts", response?.data?.TotalNumberOfProducts);
        if (response && response?.data?.data?.Products.length > 0) {
          console.log("responss dfdsdsddsde", response?.data?.data?.TotalNumberOfProducts);
          setLength(response?.data?.data?.TotalNumberOfProducts);
          // const data = getImageUrlsWithGroupDescription(response);
          // setImageUrlsWithGroupDescription(data);
          // const filteredResponse = getImageUrlsWithGroupDescription(filteredData);
          // setImageUrlsWithGroupDescription(filteredResponse);

          // filteredData?.data?.data?.Products.length >0 ? getImageUrlsWithGroupDescription(filteredData) : getImageUrlsWithGroupDescription(response);

          // filteredData?.data?.data?.Products.length >0 ? setImageUrlsWithGroupDescription(getImageUrlsWithGroupDescription(filteredData)) : setImageUrlsWithGroupDescription(getImageUrlsWithGroupDescription(response));

          setTotalPages(Math.ceil(tolalProducts / productsPerPage));
        } else {
          console.log("response is empty");
        }
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, catId, currentPage]);


  useEffect(() => {
    if (filteredData) {
      const filteredResponse = getImageUrlsWithGroupDescription(filteredData);
      setImageUrlsWithGroupDescription(filteredResponse);
    }
  }, [filteredData]);

  const label = { inputProps: { "aria-label": "Size switch demo" } };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleProdutPerPageChange = (e, value) => {
    setProductsPerPage(e.target.value);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  useEffect(() => {
    const fetchAccordionData = async () => {
      try {
        const response = await axios.get(
          "https://api.swagjewelers.com/api/stuller/advanced-filters"
        );
        const filterData = response?.data?.data?.AdvancedProductFilter; // Assuming your API response structure is like the one you provided
        const updatedAccordionData = filterData.map((item) => ({
          id: item.Type,
          title: item.Type,
          contents: item.Values.map((value) => ({
            id: value.Value,
            text: value.DisplayValue,
          })),
        }));
        setAccordionApiData(updatedAccordionData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAccordionData();
    return () => { };
  }, []);

  // const remainingProducts =

  // imageUrlsWithGroupDescription.length > 0 && imageUrlsWithGroupDescription.length - (currentPage - 1) * productsPerPage;

  if (loading) {
    return (
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: "#fff" }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

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
            <AccordionComponent data={accordionApiData} currentPage={currentPage} catId={catId} getFilteredData={handleFilteredData} />
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
             // padding: "2rem 1.5rem 0",
            }}
          >
            <Grid container spacing={2}>
              <SelectComponent title="Finger Size" minWidthSize="180" />
              <SelectComponent title="Primary Stone Count" minWidthSize="180" />
              <SelectComponent title="Primary Stone Shape" minWidthSize="180" />
              <SelectComponent title="Metal Color" minWidthSize="180" />
            </Grid>
          </Item>
          <Item
            sx={{
              margin: "0 1rem",
              padding: 0,
              backgroundColor: "#eee",
              justifyContent: "space-evenly !important",
              "@media (max-width:  768px)": {
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
                  backgroundColor: "#fff",
                  color: "#555",
                  border: "1px solid #999",
                  fontSize: "12px",
                  margin: ".5rem 1rem 1rem",
                  "&:hover": {
                    backgroundColor: "#999",
                    color: "#ffffff",
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
                <Typography>{`Showing ${startIndex + 1} - ${endIndex} of ${length
                  }`}</Typography>
                |<Typography>Items per page</Typography>
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

                    {/* <MenuItem value={10} disabled={remainingProducts < 10}>
                      10
                    </MenuItem> */}

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
              // count='5'
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
              {/* {imageUrlsWithGroupDescription
                .slice(startIndex, endIndex)
                .map((imgWithTitle, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <ProductCard
                      productImg={imgWithTitle?.urls[0] || ""}
                      productImgOnHover={imgWithTitle?.urls[1] || ""}
                      productTitle={imgWithTitle?.groupDescription}
                    />
                  </Grid>
                ))} */}

              {imageUrlsWithGroupDescription ? imageUrlsWithGroupDescription
                .map((imgWithTitle, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <ProductCard
                      productImg={imgWithTitle?.urls[0] || ""}
                      productImgOnHover={imgWithTitle?.urls[1] || ""}
                      productTitle={imgWithTitle?.groupDescription}
                    />
                  </Grid>
                ))
                : <h1>No Data Found</h1>
              }

              {/* {
                  filteredData?.data?.data?.Products.length >0 ? imageUrlsWithGroupDescription
                  .map((imgWithTitle, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
                      <ProductCard
                        productImg={imgWithTitle?.urls[0] || ""}
                        productImgOnHover={imgWithTitle?.urls[1] || ""}
                        productTitle={imgWithTitle?.groupDescription}
                      />
                    </Grid>
                  )) : <h1>No Data Found</h1>
                } */}

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
