import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./features/cartItems";
import listProductsReducer from "./features/listProducts";
import productCounterReducer from "./features/productCounter";

export const store = configureStore({
  reducer: {
    productCounter: productCounterReducer,
    listProducts: listProductsReducer,
    cartItems: cartItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
