import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  product: null,
  status: 'idle',
  error: null
};

export const configProduct = createAsyncThunk('product/configProduct', async ({UserId, product , productId,quantity,price}) => {
  try {
    const response = await axios.post('https://api.swagjewelers.com/api/cart/store', {
      UserId: UserId,
      product: product ,
      productId: productId,
      quantity: quantity,
      price: price
    });
    return response;
   } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const configProductSlice = createSlice({
  name: 'configProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(configProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(configProduct.fulfilled, (state, action) => {
        console.log('state', state,action)
        state.status = 'succeeded';
        state.cart = action.payload;
      })
      .addCase(configProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const apiActions = configProductSlice.actions;
export default configProductSlice.reducer;