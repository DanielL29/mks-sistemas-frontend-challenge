import Image from "next/image";
import closeIcon from "@/assets/images/close.svg";
import { CartProductWrapper, FloatClose, Quantity } from "./style";
import {
  CartItemPayload,
  decrementCartAmount,
  decrementProdQuantity,
  incrementCartAmount,
  incrementProdQuantity,
  removeItem,
} from "@/store/features/cartItems";
import { useAppDispatch } from "@/hooks/useRedux";
import {
  decrement,
  decrementByAmount,
  increment,
} from "@/store/features/productCounter";

interface CartProductProps {
  product: CartItemPayload;
  quantity: number;
}

export default function CartProduct({ product, quantity }: CartProductProps) {
  const dispatch = useAppDispatch();

  function incrementCart() {
    dispatch(incrementProdQuantity(product.id));
    dispatch(increment());
    dispatch(incrementCartAmount(Number(product.price)));
  }

  function decrementCart() {
    if (quantity > 1) {
      dispatch(decrementProdQuantity(product.id));
      dispatch(decrement());
      dispatch(decrementCartAmount(Number(product.price)));
    }
  }

  function removeProductFromCart() {
    dispatch(removeItem(product.id));
    dispatch(decrementByAmount(quantity));
    dispatch(decrementCartAmount(quantity * Number(product.price)));
  }

  return (
    <CartProductWrapper>
      <Image
        loader={() => product.photo}
        src={product.photo}
        alt="product"
        width={0}
        height={0}
      />
      <h1>{product.name}</h1>
      <Quantity>
        <h2>Qtd:</h2>
        <div>
          <span onClick={decrementCart}>-</span>
          <p>{quantity}</p>
          <span onClick={incrementCart}>+</span>
        </div>
      </Quantity>
      <strong>{Number(product.price)}</strong>
      <FloatClose onClick={removeProductFromCart}>
        <Image src={closeIcon} alt="close" width={0} height={0} />
      </FloatClose>
    </CartProductWrapper>
  );
}
