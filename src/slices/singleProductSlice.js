import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  singleProduct: [],
  stoneFamily: [],
  status: 'idle',
  stoneFamilyStatus: 'idle',
  searchStoneStatus: 'idle',
  searchStone: {},
  stoneSearchStatus: 'idle',
  stoneSearch: {},
  error: null
};

//singleProduct
export const fetchSingleProduct = createAsyncThunk('singleProduct/fetchSingleProduct', async (SKU) => {
  try {
    const response = await axios.post('https://api.swagjewelers.com/api/stuller', {
      PageSize: 10,
      Page: 1,
      Include: [1],
      SKU: [SKU] || ["72445:106:P"]
    });
    return response.data;
    // console.log("StoneCustimizationResponse,", response.data);
  } catch (error) {
    console.error('Error StoneCustimizationResponse:', error);
  }
});

//StoneFamily
export const fetchStoneFamily = createAsyncThunk('singleProduct/fetchStoneFamily', async ({ LocationNumber, Dimension1, Dimension2, Dimension3, Shape, SettingType, ConfigurationModelID }) => {
  try {
    console.log('Parameters received in fetchStoneFamily:', {
      LocationNumber, Dimension1, Dimension2, Dimension3, Shape, SettingType, ConfigurationModelID
    });
    const response = await axios.post('https://api.swagjewelers.com/api/stuller/stone-families', {
      // ConfigurationModelId: 972635,
      ConfigurationModelId: ConfigurationModelID,
      LocationNumbers: [
        1
      ],
      Locations: [
        {
          LocationNumber: LocationNumber,
          Dimension1: Dimension1,
          Dimension2: Dimension2,
          Dimension3: Dimension3,
          Shape: Shape,
          SettingType: SettingType
        }
      ]
    });
    return response.data;
    // console.log("StoneCustimizationResponse,", response.data);
  } catch (error) {
    console.error('Error StoneCustimizationResponse:', error);
  }
});

//fetchStoneSearchByGroup
export const fetchStoneSearchByGroup = createAsyncThunk('singleProduct/fetchStoneSearchByGroup', async () => {
  try {
    const response = await axios.post('https://api.swagjewelers.com/api/stuller/search-stones-by-stone-group', {
      ConfigurationModelId: 972635,
      StoneGroupName: "Accent",
      Locations: [
        {
          "LocationNumber": 1,
          "Dimension1": 1,
          "Dimension2": 0,
          "Dimension3": 0,
          "Shape": "Round",
          "SettingType": "Shared Prong"
        }
      ],
      StoneFamilyName: "Diamond",
      StoneCategories: [
        "Lab-Grown"
      ],
      IncludeBomActiveStones: true,
      IncludeSerializedProduct: true
    });
    return response.data;
    // console.log("StoneCustimizationResponse,", response.data);
  } catch (error) {
    console.error('Error StoneCustimizationResponse:', error);
  }
});

//SeachStone
export const fetchStoneSearch = createAsyncThunk('singleProduct/fetchStoneSearch', async ({ ConfigurationModelID, LocationNumber, StoneFamilyName, StoneCategories }) => {
  try {
    const response = await axios.post('https://api.swagjewelers.com/api/stuller/search-stones', {
      ConfigurationModelId: ConfigurationModelID,
      LocationNumbers: [
        LocationNumber
      ],
      StoneFamilyName: StoneFamilyName,
      StoneCategories: [
        StoneCategories
      ],
      IncludeBomActiveStones: true,
      IncludeSerializedProduct: true
    });
    return response.data;
    // console.log("StoneCustimizationResponse,", response.data);
  } catch (error) {
    console.error('Error StoneCustimizationResponse:', error);
  }
});

// Create the API slice
const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        console.log('state', state, action)
        state.status = 'succeeded';
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    builder
      .addCase(fetchStoneFamily.pending, (state) => {
        state.stoneFamilyStatus = 'loading';
      })
      .addCase(fetchStoneFamily.fulfilled, (state, action) => {
        console.log('state', state, action)
        state.stoneFamilyStatus = 'succeeded';
        state.stoneFamily = action.payload;
      })
      .addCase(fetchStoneFamily.rejected, (state, action) => {
        state.stoneFamilyStatus = 'failed';
        state.error = action.error.message;
      });

    builder
      .addCase(fetchStoneSearchByGroup.pending, (state) => {
        state.searchStoneStatus = 'loading';
      })
      .addCase(fetchStoneSearchByGroup.fulfilled, (state, action) => {
        console.log('state', state, action)
        state.searchStoneStatus = 'succeeded';
        state.searchStone = action.payload;
      })
      .addCase(fetchStoneSearchByGroup.rejected, (state, action) => {
        state.searchStoneStatus = 'failed';
        state.error = action.error.message;
      });

    builder
      .addCase(fetchStoneSearch.pending, (state) => {
        state.stoneSearchStatus = 'loading';
      })
      .addCase(fetchStoneSearch.fulfilled, (state, action) => {
        console.log('state', state, action)
        state.stoneSearchStatus = 'succeeded';
        state.stoneSearch = action.payload;
      })
      .addCase(fetchStoneSearch.rejected, (state, action) => {
        state.stoneSearchStatus = 'failed';
        state.error = action.error.message;
      });
  },
});


export const singleProductActions = singleProductSlice.actions;
// export const fetchStoneFamilyActions = singleProductSlice.actions;
export default singleProductSlice.reducer;
