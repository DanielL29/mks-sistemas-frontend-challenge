import { productService } from "@/services/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

export const listProducts = createAsyncThunk(
  "products/all",
  async (_, thunkAPI) => {
    try {
      const response = await productService.getProducts();

      return response.data.products;
    } catch (err) {
      let error: AxiosError<ValidationErrors> = err;

      if (!error.response) {
        throw error;
      }

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  products: Array(8).fill(0) as Product[],
  loading: false,
  error: null as unknown,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listProducts.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(listProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(listProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
