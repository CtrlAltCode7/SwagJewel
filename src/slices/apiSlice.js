import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import axios from 'axios';

// Define the initial state
const initialState = {
  data: [],
  status: 'idle',
  error: null
};

// Define the thunk for fetching data from the API
export const fetchData = createAsyncThunk('api/fetchData', async () => {
  try {
    const response = await axios.get('https://api.swagjewelers.com/api/stuller?PageSize=20&Page=1&Include[]=1&Filter[]=5');
    return response.data;
  } catch (error) {
    throw Error(error.response.data.error);
  }
});

// Create the API slice
const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log('state', state,action)
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the action creators and reducer
export const apiActions = apiSlice.actions;
export default apiSlice.reducer;
