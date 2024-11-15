"use client";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import hotelSlice from "./slice/hotel.slice";

export const store = configureStore({
  reducer: {
    hotels: hotelSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {cart: CartState, saved: SavedState}
export type AppDispatch = typeof store.dispatch;
