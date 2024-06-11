import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StoreDetails from "./storeDetails";
import GoogleApiService from "../googleApiService/googleApiService";
import SearchIcon from "@mui/icons-material/Search";
import JewelerDetails from "./jewelerDetails/jewelerDetails";
import JewelerList from "./jewelerList/jewelerList";

const LocateAJewelerContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#ecf9f6",
  // padding: theme.spacing(2),
  marginBottom: theme.spacing(1.5),
}));

const LocateAJeweler = () => {
  const [location, setLocation] = useState("");
  const [range, setRange] = useState(25);
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [filters, setFilters] = useState({
    appraisalOrGemIdentification: false,
    engraving: false,
    insuranceReplacements: false,
    jewelryDesignNotUsingAComputer: false,
    cadDesign: false,
    jewelryRepair: false,
    purchasingOldJewelry: false,
    clockRepair: false,
    watchRepair: false,
    manufactureOnSite: false,
  });

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.checked });
  };

  const findJewelers = (location) => {
    console.log(`Finding jewelers near ${location} within ${range} miles.`);
    // Implement the logic to find jewelers
  };

  // const [location, setLocation] = useState('');
  const [selectedOption, setSelectedOption] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Container maxWidth="lg">
      <LocateAJewelerContainer>
        {/* <Box>
          <img
            src="https://meteor.stullercloud.com/das/56391262?scl=1&$sharpen$"
            width={"100%"}
            height={"275px"}
          />
        </Box> */}
        <Box
          style={{
            backgroundImage:
              "url(https://meteor.stullercloud.com/das/56391262?scl=1&$sharpen$)",
            backgroundPosition: "70% 73%",
            // backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // position: "relative",
            width: "100%",
            minHeight: "275px",
            backgroundPositionX: "center",
          }}
        ></Box>
        <Grid
          container
          spacing={0}
          xs={12}
          md={12}
          sx={{
            backgroundColor: "",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "end",
              marginBlock: "1rem",
            }}
          >
            <Box
              component="img"
              src="https://meteor.stullercloud.com/das/56392816?scl=1&amp;$sharpenpng$"
              alt="Locate a Jeweler"
              sx={{
                // width: "100%",
                // margin: "0 auto",
                marginTop: -10,
                marginBottom: 2,
                // padding: "0rem 2rem",
                objectFit: "none",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // marginBlock: "1rem",
            }}
          >
            <Typography variant="body1">
              Use Locate a Jeweler to find jewelry stores in your area (and
              nationwide) that carry Stuller products. Dedicated retailers will
              have an assortment of our jewelry, and they can order any items
              you choose from this website.
            </Typography>
          </Grid>
        </Grid>
      </LocateAJewelerContainer>

      <Typography
        variant="body2"
        gutterBottom
        sx={{
          color: "#555",
        }}
      >
        Enter a location to find the closest Stuller retailers near you!
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ marginBottom: 4 }}
      >
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <TextField
                  id="searchTextField"
                  label="Enter a location"
                  variant="outlined"
                  fullWidth
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <SearchIcon
                        style={{
                          marginRight: "8px",
                          color: "rgba(0, 0, 0, 0.54)",
                        }}
                      />
                    ),
                  }}
                />
              </Grid>
              <Grid xs={2}>
                <FormControl sx={{ marginTop: 2 }}>
                  {/* <InputLabel id="range-label">Range</InputLabel> */}
                  <Select
                    labelId="range-label"
                    id="range"
                    value={range}
                    // label="Range"
                    onChange={(e) => setRange(e.target.value)}
                    MenuProps={{ disableScrollLock: true }}
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value={25}>25 miles</MenuItem>
                    <MenuItem value={50}>50 miles</MenuItem>
                    <MenuItem value={100}>100 miles</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ height: 56 }}
              onClick={() => findJewelers(location)}
            >
              Locate a Jeweler fff
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Grid container xs={12}>
        <Grid item xs={12} md={6}>
          <Box>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setAdvancedSearch(!advancedSearch)}
            >
              Filter by Services Offered
            </Button>
            <Collapse in={advancedSearch}>
              <Box
                sx={{
                  padding: 2,
                  marginTop: 2,
                  backgroundColor: "#f9f9f9",
                  borderRadius: 1,
                }}
              >
                <FormGroup>
                  {Object.keys(filters).map((filter) => (
                    <FormControlLabel
                      key={filter}
                      control={
                        <Checkbox
                          checked={filters[filter]}
                          onChange={handleFilterChange}
                          name={filter}
                        />
                      }
                      label={filter
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    />
                  ))}
                </FormGroup>
              </Box>
            </Collapse>
          </Box>
          {/* <StoreDetails /> */}
          {/* <JewelerList /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <GoogleApiService />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LocateAJeweler;
