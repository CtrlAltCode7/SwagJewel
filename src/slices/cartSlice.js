import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: null,
  status: 'idle',
  error: null
};

export const addToCart = createAsyncThunk('cart/addToCart', async ({UserId, product , productId,quantity,price}) => {
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

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        console.log('state', state,action)
        state.status = 'succeeded';
        state.cart = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const apiActions = cartSlice.actions;
export default cartSlice.reducer;