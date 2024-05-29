import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 }


const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    initialState,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
    resetValue(state,action){
        state.value = 0
    }
  },
});

export const { setUser, clearUser,increment, decrement, incrementByAmount, resetValue} = userSlice.actions;
export default userSlice.reducer;
