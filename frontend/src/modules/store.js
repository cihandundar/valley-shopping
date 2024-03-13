import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/product/cartSlice";
import favoritesReducer from "../features/product/favoritesSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
