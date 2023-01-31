import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface ProductCounterState {
  value: number;
}

const initialState = { value: 0 } as ProductCounterState;

export const productCounter = createSlice({
  name: "productCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("productAmount", JSON.stringify(state.value));
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("productAmount", JSON.stringify(state.value));
    },
    getLocalValue: (state) => {
      state.value = JSON.parse(localStorage.getItem("productAmount")!) || 0;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
      localStorage.setItem("productAmount", JSON.stringify(state.value));
    },
  },
});

export const { increment, decrement, getLocalValue, decrementByAmount } =
  productCounter.actions;

export const selectProductCounter = (state: RootState) =>
  state.productCounter.value;

export default productCounter.reducer;
