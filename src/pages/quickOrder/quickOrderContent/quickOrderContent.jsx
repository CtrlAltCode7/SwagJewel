import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  Grid,
  Link,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomSeparator from "../../../components/breadcrumbs";
import QuickOrderSearch from "../quickOrderSearch/quickOrderSearch";
import FindSerialized from "../findSerialized/findSerialized";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

export default function QuickOrderContent() {
  const [selectedValue, setSelectedValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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

  const handleLocateJewel = () => {
    navigate("/locate-a-jeweler");
  };
  return (
    <Container
      sx={{
        marginBottom: 3,
      }}
    >
      {/* <CustomSeparator /> */}
      <Stack spacing={2} p={1} pt={2} pb={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>

      <Typography
        variant="body1"
        sx={{
          fontSize: {
            xs: 21,
            sm: 24,
            md: 30,
            lg: 35,
          },
          fontWeight: "100",
          color: "#555",
        }}
      >
        Quick Order
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <QuickOrderSearch />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 1,
              marginBlock: 1,
            }}
          >
            <FindSerialized linkText={"Find Serialized Diamonds"} />
            <FindSerialized linkText={"Find Serialized GemStones"} />
          </Box>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <Grid item xs={12} md={5}>
              <Typography
                variant="body1"
                textAlign={"end"}
                fontWeight={"bold"}
                color={"#555"}
                pr={4}
              >
                Description:
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <FormControl sx={{}} fullWidth>
                <Select
                  value={selectedValue}
                  onChange={handleChange}
                  displayEmpty
                  // sx={{ minWidth: "120px" }}
                >
                  <MenuItem value="" disabled>
                    Select an option
                  </MenuItem>
                  <MenuItem value={"option1"}>Option 1</MenuItem>
                  <MenuItem value={"option2"}>Option 2</MenuItem>
                  <MenuItem value={"option3"}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{}} mt={2}>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: 17,
                  sm: 20,
                  md: 23,
                  lg: 25,
                },
                fontWeight: "100",
              }}
            >
              Product Information
            </Typography>
            <Box
              mt={2}
              sx={{
                backgroundColor: "#f3f1ef",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "4rem",
                  p: 2,
                }}
              >
                <img src="https://meteor.stullercloud.com/das/99205010?$100$" />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                      color: "#555",
                    }}
                  >
                    Bestselling Gemstones Color Card
                  </Typography>
                  <Typography variant="body2">
                    GEMSTONECARD / Bestselling Gemstones Color Card
                  </Typography>
                  <Typography variant="body2">
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#555",
                      }}
                      component={"span"}
                    >
                      Item #:
                    </Typography>{" "}
                    GEMSTONECARD:102:G{" "}
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#555",
                      }}
                      component={"span"}
                    >
                      Sold by:
                    </Typography>{" "}
                    EA
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography variant="caption">Choose Change Create ®</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={
            {
              // background: "blue",
            }
          }
        >
          <Paper elevation={0} style={{ padding: 20 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: "#75b0da",
              }}
            >
              Log In For Pricing
            </Button>
            <Typography textAlign={"center"} m={1}>
              OR
            </Typography>
            <Box
              sx={{
                backgroundColor: "#4d4a49",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: ".7rem .5rem",
                "&:hover": {
                  backgroundColor: "#625e5d",
                },
              }}
              onClick={handleLocateJewel}
            >
              <Button>
                <img
                  src="https://meteor.stullercloud.com/das/56489807?hei=200&fmt=smart-alpha"
                  width={200}
                  className="locateAJewelImg"
                />
              </Button>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                Find a Retailer near you
              </Typography>
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                marginTop: "1rem",
                background: "#547f9e",
              }}
            >
              Made To Order
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
