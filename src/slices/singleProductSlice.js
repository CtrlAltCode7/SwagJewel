import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  singleProduct: [],
  status: 'idle',
  error: null
};


export const fetchSingleProduct = createAsyncThunk('singleProduct/fetchSingleProduct', async () => {
     try {
            const response = await axios.post('https://api.swagjewelers.com/api/stuller', {
                PageSize: 10,
                Page: 1,
                // CategoryIds: [catId],
                Include: [1],
                // Filter: [5],
                // AdvancedProductFilters: subcategories
                SKU:["72445:106:P"]
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
        console.log('state', state,action)
        state.status = 'succeeded';
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export const singleProductActions = singleProductSlice.actions;
export default singleProductSlice.reducer;
