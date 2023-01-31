import {
  addToCart,
  CartItemPayload,
  decrementCartAmount,
  decrementProdQuantity,
  incrementCartAmount,
  incrementProdQuantity,
  removeItem,
} from "@/store/features/cartItems";
import {
  decrement,
  decrementByAmount,
  increment,
} from "@/store/features/productCounter";
import { useAppDispatch } from "./useRedux";

export function useCart() {
  const dispatch = useAppDispatch();

  function updateCart(id: number, name: string, photo: string, price: string) {
    dispatch(increment());
    dispatch(
      addToCart({
        id,
        name,
        photo,
        price,
      })
    );
    dispatch(incrementCartAmount(Number(price)));
  }

  function incrementCart(product: CartItemPayload) {
    dispatch(incrementProdQuantity(product.id));
    dispatch(increment());
    dispatch(incrementCartAmount(Number(product.price)));
  }

  function decrementCart(product: CartItemPayload, quantity: number) {
    if (quantity > 1) {
      dispatch(decrementProdQuantity(product.id));
      dispatch(decrement());
      dispatch(decrementCartAmount(Number(product.price)));
    }
  }

  function removeProductFromCart(product: CartItemPayload, quantity: number) {
    dispatch(removeItem(product.id));
    dispatch(decrementByAmount(quantity));
    dispatch(decrementCartAmount(quantity * Number(product.price)));
  }

  return {
    updateCart,
    incrementCart,
    decrementCart,
    removeProductFromCart,
  };
}
