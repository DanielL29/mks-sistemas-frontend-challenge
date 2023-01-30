import { createSlice } from "@reduxjs/toolkit";

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
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = productCounter.actions;

export default productCounter.reducer;
