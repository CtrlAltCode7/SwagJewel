import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import localStorage from "redux-persist/es/storage";
import userReducer from "../slices/userSlice";
import apiReducer from "../slices/apiSlice"
import singleProductReducer from "../slices/singleProductSlice";
// import cartReducer from "./cartSlice";
// import navigationReducer from "./navigationSlice";

const reducers = combineReducers({
//   cart: cartReducer,
  user: userReducer,
  api: apiReducer,
  singleProduct: singleProductReducer,
//   navigation: navigationReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: localStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["user","api"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
