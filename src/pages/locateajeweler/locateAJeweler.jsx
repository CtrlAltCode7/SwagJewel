import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography, Select, MenuItem, FormControl, InputLabel, Checkbox, FormGroup, FormControlLabel, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
import StoreDetails from './storeDetails';
import GoogleApiService from '../googleApiService/googleApiService';

const LocateAJewelerContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ecf9f6',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const LocateAJeweler = () => {
  const [location, setLocation] = useState('');
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

  return (
    <Container>
      <LocateAJewelerContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
      
            <Box
              component="img"
              src="https://meteor.stullercloud.com/das/56392816?scl=1&amp;$sharpenpng$"
              alt="Locate a Jeweler"
              sx={{ width: '100%', margin: '0 auto', marginTop: -8, marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="body1" paragraph>
              Use Locate a Jeweler to find jewelry stores in your area (and nationwide) that carry Stuller products. Dedicated retailers will have an assortment of our jewelry, and they can order any items you choose from this website.
            </Typography>
          </Grid>
        </Grid>
      </LocateAJewelerContainer>

      <Typography variant="h6" gutterBottom>
        Enter a location to find the closest Stuller retailers near you!
      </Typography>

      <Box component="form" noValidate autoComplete="off" sx={{ marginBottom: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <TextField
              id="searchTextField"
              label="Enter a location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="range-label">Range</InputLabel>
              <Select
                labelId="range-label"
                id="range"
                value={range}
                label="Range"
                onChange={(e) => setRange(e.target.value)}
              >
                <MenuItem value={25}>25 miles</MenuItem>
                <MenuItem value={50}>50 miles</MenuItem>
                <MenuItem value={100}>100 miles</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ height: 56 }}
              onClick={() => findJewelers(location)}
            >
              Locate a Jeweler
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* <Box>
        <Button variant="outlined" fullWidth onClick={() => setAdvancedSearch(!advancedSearch)}>
          Filter by Services Offered
        </Button>
        <Collapse in={advancedSearch}>
          <Box sx={{ padding: 2, marginTop: 2, backgroundColor: '#f9f9f9', borderRadius: 1 }}>
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
                  label={filter.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                />
              ))}
            </FormGroup>
          </Box>
        </Collapse>
      </Box> */}

      {/* <Box id="mapContainer" sx={{ display: 'none', marginTop: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box id="jewelerList">
              <Box id="jewelerCount" sx={{ marginBottom: 2 }}>0 jewelers found</Box>
              <Box id="jewelerInnerList">No jewelers available</Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box id="map" sx={{ height: 400, backgroundColor: '#e0e0e0' }}></Box>
          </Grid>
        </Grid>
      </Box> */}

      <Grid container xs={12}>
        <Grid item xs={12} md={6}>
          <StoreDetails />
        </Grid>
        <Grid item xs={12} md={6}>
          <GoogleApiService />
        </Grid>

      </Grid>
    </Container>
  );
};

export default LocateAJeweler;
