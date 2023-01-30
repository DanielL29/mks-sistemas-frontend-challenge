import { createSlice } from "@reduxjs/toolkit";

export interface CartItemPayload {
  id: number;
  name: string;
  photo: string;
  price: string;
}

interface CartItemsState {
  cartItems: {
    product: CartItemPayload;
    quantity: number;
  }[];
  amount: number;
}

const initialState = {
  cartItems: [],
  amount: 0,
} as CartItemsState;

const cartItems = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, photo, price } = action.payload as CartItemPayload;

      const isAlreadyInCart = state.cartItems.findIndex(
        (item) => item.product.id === id
      );

      if (isAlreadyInCart >= 0) {
        state.cartItems[isAlreadyInCart].quantity += 1;
      } else {
        const product = { id, name, photo, price };

        state.cartItems.push({ product, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getCartItems: (state) => {
      const cartItems: {
        product: CartItemPayload;
        quantity: number;
      }[] = JSON.parse(localStorage.getItem("cartItems")!);

      cartItems?.forEach((item) => {
        const isAlreadyInCart = state.cartItems.find(
          (cartItem) => cartItem.product.id === item.product.id
        );

        if (!isAlreadyInCart) {
          state.cartItems.push(item);
        }
      });
    },
    incrementProdQuantity: (state, action) => {
      const findProduct = state.cartItems.findIndex(
        (item) => item.product.id === action.payload
      );

      state.cartItems[findProduct].quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decrementProdQuantity: (state, action) => {
      const findProduct = state.cartItems.findIndex(
        (item) => item.product.id === action.payload
      );

      state.cartItems[findProduct].quantity -= 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      const findItem = state.cartItems.findIndex(
        (item) => item.product.id === action.payload
      );

      state.cartItems.splice(findItem, 1);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    incrementCartAmount: (state, action) => {
      state.amount += action.payload;
      localStorage.setItem("amount", JSON.stringify(state.amount));
    },
    decrementCartAmount: (state, action) => {
      state.amount -= action.payload;
      localStorage.setItem("amount", JSON.stringify(state.amount));
    },
    getAmount: (state) => {
      state.amount = JSON.parse(localStorage.getItem("amount")!) || 0;
    },
  },
});

export const {
  addToCart,
  getCartItems,
  incrementProdQuantity,
  decrementProdQuantity,
  removeItem,
  incrementCartAmount,
  decrementCartAmount,
  getAmount,
} = cartItems.actions;

export default cartItems.reducer;
