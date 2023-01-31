import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import cartItemsReducer from "./features/cartItems";
import listProductsReducer from "./features/listProducts";
import productCounterReducer from "./features/productCounter";

const combinedReducers = combineReducers({
  productCounter: productCounterReducer,
  listProducts: listProductsReducer,
  cartItems: cartItemsReducer,
});

export const store = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: combinedReducers,
    preloadedState,
  });

export type RootState = ReturnType<typeof combinedReducers>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
